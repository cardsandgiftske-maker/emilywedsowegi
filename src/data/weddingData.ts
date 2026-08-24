import { EventTimelineItem, GuestbookEntry } from '../types';

export const WEDDING_DETAILS = {
  bride: "Emilly",
  groom: "Owegi",
  coupleNames: "Emilly & Owegi",
  monogram: "E&O",
  fullTitle: "Emilly & Owegi's Nyombo Ceremony",
  date: "2026-10-10T09:00:00",
  formattedDate: "10 / 10 / 2026",
  readableDate: "Saturday, October 10, 2026",
  time: "09:00 a.m. to 7:00 p.m.",
  startTime: "09:00 AM",
  endTime: "07:00 PM",
  venue: "Gombe Komollo",
  location: "Along Siaya-Rang'ala Road, Siaya County",
  fullLocation: "Gombe Komollo, along Siaya-Rang'ala Road, Siaya County",
  rsvpContactName: "RSVP Contact",
  rsvpPhone: "0782924775",
  rsvpPhoneInternational: "+254782924775",
  formattedRsvpPhone: "+254 782 924 775",
  rsvpDeadline: "1st October 2026",
  paybill: "522522",
  paybillNumber: "522522",
  accountNumber: "8123768#J-WEDS-M",
  mpesaName: "Lipa na M-PESA (Paybill)",
  giftingNote: "Your presence and blessings are our greatest joy. For loved ones wishing to bless us through M-PESA, please find our official Paybill details below.",
  tagline: "We can't wait to celebrate this beautiful day with you! ♡",
  closingQuote: "We can't wait to celebrate this beautiful day with you! ♡",
  dressCodeTheme: "Traditional Elegance",
  dressCodeDescription: "Color Palette: Shades of Brown, Orange, Beige/Ivory",
  bibleVerse: {
    text: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.",
    reference: "Matthew 19:6"
  }
};

export const COLOR_PALETTE = [
  { 
    name: "Shades of Brown", 
    hex: "#2B1E1A", 
    borderHex: "#4E362F",
    bgClass: "bg-[#2B1E1A]", 
    textClass: "text-[#F5EFE6]",
    description: "Deep espresso and rich earthen brown tones" 
  },
  { 
    name: "Orange", 
    hex: "#C85A32", 
    borderHex: "#A84420",
    bgClass: "bg-[#C85A32]", 
    textClass: "text-[#FFFFFF]",
    description: "Warm terracotta and vibrant sunset orange accents" 
  },
  { 
    name: "Beige / Ivory", 
    hex: "#F5EFE6", 
    borderHex: "#D8C7B5",
    bgClass: "bg-[#F5EFE6]", 
    textClass: "text-[#2B1E1A]",
    description: "Luminous soft cream and warm ivory tones" 
  },
];

export const TIMELINE: EventTimelineItem[] = [
  {
    time: "09:00 - 10:00",
    title: "Arrival of Guests and Gate Negotiations",
    description: "Welcoming arriving family and guests, ceremonial gate reception, and traditional negotiations.",
    iconName: "Users"
  },
  {
    time: "10:00 - 10:30",
    title: "Arrival & Welcome of the Groom and Guests",
    description: "Joyous reception and ceremonial welcome of the groom's delegation and arriving guests.",
    iconName: "Users"
  },
  {
    time: "10:30 - 11:30",
    title: "Morning Refreshments",
    description: "Traditional tea, wholesome morning refreshments, and warm mingling among families.",
    iconName: "Coffee"
  },
  {
    time: "11:30 - 12:30",
    title: "Wellness & Photoshoot (Session I)",
    description: "Capturing memorable moments with family, friends, and elders in traditional attire.",
    iconName: "Camera"
  },
  {
    time: "12:30 - 14:00",
    title: "Reception & Cultural Luncheon",
    description: "Sumptuous celebratory traditional feast featuring regional delicacies and celebratory dining.",
    iconName: "Utensils"
  },
  {
    time: "14:00 - 15:00",
    title: "Wellness & Photoshoot (Session II)",
    description: "Garden photos, group portraits, and vibrant moments with the couple.",
    iconName: "Camera"
  },
  {
    time: "15:00 - 16:30",
    title: "Introduction & Presentation of Gifts",
    description: "Family introductions, wisdom blessings from elders, heartfelt speeches, and the presentation of gifts.",
    iconName: "Gift"
  },
  {
    time: "16:30 - 17:00",
    title: "Cake Cutting Ceremony",
    description: "The ceremonial cutting and sharing of the Nyombo cake with celebratory cheers.",
    iconName: "Sparkles"
  },
  {
    time: "17:00 onwards",
    title: "Entertainment & Light Refreshments",
    description: "Lively celebratory music, dancing, joy, and fellowship into the evening.",
    iconName: "Heart"
  }
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [];


