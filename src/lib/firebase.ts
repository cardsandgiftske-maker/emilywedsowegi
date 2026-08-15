import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
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

export const db = getFirestore(app, databaseId);

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
  const targetNorm = normalizePhone(phone);
  if (!targetNorm) return null;
  const allRsvps = await getAllRsvpsFromFirestore();
  const found = allRsvps.find(r => normalizePhone(r.phone) === targetNorm);
  return found || null;
}

export async function submitRsvpToFirestore(data: RsvpData) {
  const rsvpsRef = collection(db, 'rsvps');
  const cleanData = sanitizeRsvpData(data);
  const docRef = await addDoc(rsvpsRef, {
    ...cleanData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getAllRsvpsFromFirestore(): Promise<Array<RsvpData & { id: string }>> {
  try {
    const rsvpsRef = collection(db, 'rsvps');
    const q = query(rsvpsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as RsvpData)
    }));
  } catch (error) {
    console.warn('Could not fetch RSVPs:', error);
    return [];
  }
}

export async function getRecentRsvpsFromFirestore(maxCount = 10): Promise<Array<RsvpData & { id: string }>> {
  const all = await getAllRsvpsFromFirestore();
  return all.slice(0, maxCount);
}

export async function updateRsvpInFirestore(id: string, updatedData: Partial<RsvpData>) {
  const docRef = doc(db, 'rsvps', id);
  const cleanData = sanitizeRsvpData(updatedData);
  await updateDoc(docRef, cleanData);
}

export async function deleteRsvpFromFirestore(id: string) {
  const docRef = doc(db, 'rsvps', id);
  await deleteDoc(docRef);
}

