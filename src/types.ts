export interface RsvpResponse {
  id: string;
  name: string;
  phone: string;
  email?: string | null;
  attending: 'yes' | 'no';
  guestCount: number;
  dietary?: string | null;
  message?: string | null;
  submittedAt: string;
}

export interface GuestbookEntry {
  id: string;
  name: string;
  relationship: string;
  message: string;
  createdAt: string;
}

export interface EventTimelineItem {
  time: string;
  title: string;
  description: string;
  iconName: string;
}
