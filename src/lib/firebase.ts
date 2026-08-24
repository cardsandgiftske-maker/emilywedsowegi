import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  initializeFirestore, 
  collection, 
  addDoc, 
  serverTimestamp, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import defaultFirebaseConfig from '../../firebase-applet-config.json';

const metaEnv = (import.meta as any).env || {};

// Use VITE_ environment variables if provided, otherwise fallback to project config
const firebaseConfig = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || defaultFirebaseConfig.apiKey,
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || defaultFirebaseConfig.authDomain,
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || defaultFirebaseConfig.projectId,
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || defaultFirebaseConfig.storageBucket,
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || defaultFirebaseConfig.messagingSenderId,
  appId: metaEnv.VITE_FIREBASE_APP_ID || defaultFirebaseConfig.appId,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const databaseId = metaEnv.VITE_FIREBASE_DATABASE_ID || defaultFirebaseConfig.firestoreDatabaseId || '(default)';

let firestoreInstance;
try {
  firestoreInstance = initializeFirestore(app, {
    experimentalAutoDetectLongPolling: true,
  }, databaseId);
} catch {
  firestoreInstance = getFirestore(app, databaseId);
}

export const db = firestoreInstance;

export interface RsvpData {
  fullName: string;
  phone: string;
  email?: string | null;
  attending: 'yes' | 'no';
  guestCount: number;
  dietary?: string | null;
  message?: string | null;
  createdAt?: any;
}

const LOCAL_STORAGE_RSVPS_KEY = 'eo_wedding_cached_all_rsvps';

function getLocalCachedRsvps(): Array<RsvpData & { id: string }> {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_RSVPS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalCachedRsvps(list: Array<RsvpData & { id: string }>) {
  try {
    localStorage.setItem(LOCAL_STORAGE_RSVPS_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

/**
 * Sanitizes RSVP payload before sending to Firestore.
 * Explicitly maps empty/undefined strings to `null` so Firestore never receives `undefined`.
 */
export function sanitizeRsvpData(data: Partial<RsvpData>): Record<string, any> {
  const clean: Record<string, any> = {};

  if (data.fullName !== undefined && data.fullName !== null) {
    clean.fullName = String(data.fullName).trim();
  }
  if (data.phone !== undefined && data.phone !== null) {
    clean.phone = String(data.phone).trim();
  }
  if (data.attending !== undefined && data.attending !== null) {
    clean.attending = data.attending;
  }
  if (data.guestCount !== undefined && data.guestCount !== null) {
    clean.guestCount = data.attending === 'no' ? 0 : Number(data.guestCount) || 1;
  }

  // Optional fields: store trimmed string or null (never undefined)
  if (data.email !== undefined) {
    const trimmed = typeof data.email === 'string' ? data.email.trim() : '';
    clean.email = trimmed.length > 0 ? trimmed : null;
  }
  if (data.dietary !== undefined) {
    const trimmed = typeof data.dietary === 'string' ? data.dietary.trim() : '';
    clean.dietary = trimmed.length > 0 ? trimmed : null;
  }
  if (data.message !== undefined) {
    const trimmed = typeof data.message === 'string' ? data.message.trim() : '';
    clean.message = trimmed.length > 0 ? trimmed : null;
  }

  return clean;
}

export function normalizePhone(phone: string): string {
  if (!phone) return '';
  const digits = phone.replace(/\D/g, '');
  if (digits.startsWith('254') && digits.length === 12) {
    return '0' + digits.slice(3);
  }
  return digits;
}

export async function findRsvpByPhone(phone: string): Promise<(RsvpData & { id: string }) | null> {
  try {
    const targetNorm = normalizePhone(phone);
    if (!targetNorm) return null;
    const allRsvps = await getAllRsvpsFromFirestore();
    const found = allRsvps.find(r => normalizePhone(r.phone) === targetNorm);
    return found || null;
  } catch (error) {
    console.warn('findRsvpByPhone fallback to cache:', error);
    const cached = getLocalCachedRsvps();
    const targetNorm = normalizePhone(phone);
    return cached.find(r => normalizePhone(r.phone) === targetNorm) || null;
  }
}

export async function submitRsvpToFirestore(data: RsvpData): Promise<string> {
  const cleanData = sanitizeRsvpData(data);
  let generatedId = 'rsvp-' + Date.now();

  try {
    const rsvpsRef = collection(db, 'rsvps');
    const docRef = await addDoc(rsvpsRef, {
      ...cleanData,
      createdAt: serverTimestamp(),
    });
    generatedId = docRef.id;
  } catch (error) {
    console.warn('Firestore offline/unavailable on submit, saved to local cache:', error);
  }

  // Update local cache
  const currentCached = getLocalCachedRsvps();
  const newEntry: RsvpData & { id: string } = {
    ...(cleanData as RsvpData),
    id: generatedId,
    createdAt: new Date().toISOString(),
  };
  saveLocalCachedRsvps([newEntry, ...currentCached.filter(r => r.id !== generatedId)]);

  return generatedId;
}

export async function getAllRsvpsFromFirestore(): Promise<Array<RsvpData & { id: string }>> {
  try {
    const rsvpsRef = collection(db, 'rsvps');
    const q = query(rsvpsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map(docSnap => ({
      id: docSnap.id,
      ...(docSnap.data() as RsvpData)
    }));
    if (results.length > 0) {
      saveLocalCachedRsvps(results);
    }
    return results.length > 0 ? results : getLocalCachedRsvps();
  } catch (error) {
    console.warn('Could not fetch RSVPs from Firestore, using offline cache:', error);
    return getLocalCachedRsvps();
  }
}

export async function getRecentRsvpsFromFirestore(maxCount = 10): Promise<Array<RsvpData & { id: string }>> {
  const all = await getAllRsvpsFromFirestore();
  return all.slice(0, maxCount);
}

export async function updateRsvpInFirestore(id: string, updatedData: Partial<RsvpData>) {
  const cleanData = sanitizeRsvpData(updatedData);

  try {
    if (!id.startsWith('local-') && !id.startsWith('rsvp-')) {
      const docRef = doc(db, 'rsvps', id);
      await updateDoc(docRef, cleanData);
    }
  } catch (error) {
    console.warn('Firestore offline/unavailable on update, updated local cache:', error);
  }

  // Always update local cache
  const currentCached = getLocalCachedRsvps();
  const updatedList = currentCached.map(item => item.id === id ? { ...item, ...cleanData } : item);
  saveLocalCachedRsvps(updatedList);
}

export async function deleteRsvpFromFirestore(id: string) {
  try {
    if (!id.startsWith('local-') && !id.startsWith('rsvp-')) {
      const docRef = doc(db, 'rsvps', id);
      await deleteDoc(docRef);
    }
  } catch (error) {
    console.warn('Firestore offline/unavailable on delete, updated local cache:', error);
  }

  const currentCached = getLocalCachedRsvps();
  saveLocalCachedRsvps(currentCached.filter(item => item.id !== id));
}

export interface GuestbookData {
  id?: string;
  name: string;
  relationship: string;
  message: string;
  createdAt?: any;
}

const LOCAL_STORAGE_GUESTBOOK_KEY = 'eo_wedding_cached_guestbook';

function getLocalCachedGuestbook(): Array<GuestbookData & { id: string }> {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_GUESTBOOK_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveLocalCachedGuestbook(list: Array<GuestbookData & { id: string }>) {
  try {
    localStorage.setItem(LOCAL_STORAGE_GUESTBOOK_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export async function submitGuestbookToFirestore(data: { name: string; relationship: string; message: string }): Promise<string> {
  const cleanName = String(data.name || '').trim();
  const cleanRelationship = String(data.relationship || 'Friend').trim();
  const cleanMessage = String(data.message || '').trim();

  let generatedId = 'gb-' + Date.now();

  try {
    const guestbookRef = collection(db, 'guestbook');
    const docRef = await addDoc(guestbookRef, {
      name: cleanName,
      relationship: cleanRelationship,
      message: cleanMessage,
      createdAt: serverTimestamp(),
    });
    generatedId = docRef.id;
  } catch (error) {
    console.warn('Firestore offline/unavailable on guestbook submit, saved to local cache:', error);
  }

  const cached = getLocalCachedGuestbook();
  const newEntry: GuestbookData & { id: string } = {
    id: generatedId,
    name: cleanName,
    relationship: cleanRelationship,
    message: cleanMessage,
    createdAt: new Date().toISOString(),
  };

  saveLocalCachedGuestbook([newEntry, ...cached.filter(item => item.id !== generatedId)]);
  return generatedId;
}

export async function getAllGuestbookFromFirestore(): Promise<Array<GuestbookData & { id: string }>> {
  try {
    const guestbookRef = collection(db, 'guestbook');
    const q = query(guestbookRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const results = snapshot.docs.map(docSnap => {
      const data = docSnap.data();
      let createdAtStr = new Date().toISOString();
      if (data.createdAt && typeof data.createdAt.toDate === 'function') {
        createdAtStr = data.createdAt.toDate().toISOString();
      } else if (typeof data.createdAt === 'string') {
        createdAtStr = data.createdAt;
      }
      return {
        id: docSnap.id,
        name: data.name || '',
        relationship: data.relationship || 'Friend',
        message: data.message || '',
        createdAt: createdAtStr,
      };
    });

    if (results.length > 0) {
      saveLocalCachedGuestbook(results);
    }
    return results.length > 0 ? results : getLocalCachedGuestbook();
  } catch (error) {
    console.warn('Could not fetch guestbook from Firestore, using offline cache:', error);
    return getLocalCachedGuestbook();
  }
}

export async function deleteGuestbookFromFirestore(id: string) {
  try {
    if (!id.startsWith('local-') && !id.startsWith('gb-')) {
      const docRef = doc(db, 'guestbook', id);
      await deleteDoc(docRef);
    }
  } catch (error) {
    console.warn('Firestore offline/unavailable on guestbook delete:', error);
  }

  const currentCached = getLocalCachedGuestbook();
  saveLocalCachedGuestbook(currentCached.filter(item => item.id !== id));
}



