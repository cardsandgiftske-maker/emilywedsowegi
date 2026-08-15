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
  rsvpContactName: "Owegi",
  rsvpPhone: "0782924775",
  rsvpPhoneInternational: "+254782924775",
  formattedRsvpPhone: "+254 782 924 775",
  rsvpDeadline: "September 25, 2026",
  paybill: "522522",
  paybillNumber: "522522",
  accountNumber: "1354997166#E-WEDS-J",
  mpesaName: "Lipa na M-PESA (Paybill)",
  giftingNote: "Your presence and blessings are our greatest joy. For loved ones wishing to bless us through M-PESA, please find our official Paybill details below.",
  tagline: "We can't wait to celebrate this beautiful day with you! ♡",
  closingQuote: "We can't wait to celebrate this beautiful day with you! ♡",
  dressCodeTheme: "Earthy Boho Traditional Elegance",
  dressCodeDescription: "We kindly invite you to celebrate with us in elegant attire befitting this joyous occasion.",
  bibleVerse: {
    text: "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.",
    reference: "Matthew 19:6"
  }
};

export const COLOR_PALETTE = [
  { 
    name: "Dark Brown", 
    hex: "#2B1E1A", 
    borderHex: "#4E362F",
    bgClass: "bg-[#2B1E1A]", 
    textClass: "text-[#F5EFE6]",
    description: "Deep espresso chocolate tone reflecting grounded earth and cultural heritage" 
  },
  { 
    name: "Beige / Ivory", 
    hex: "#F5EFE6", 
    borderHex: "#D8C7B5",
    bgClass: "bg-[#F5EFE6]", 
    textClass: "text-[#2B1E1A]",
    description: "Luminous silk cream and woven straw canvas for warmth and celebration" 
  },
  { 
    name: "Burnt Orange", 
    hex: "#C85A32", 
    borderHex: "#A84420",
    bgClass: "bg-[#C85A32]", 
    textClass: "text-[#FFFFFF]",
    description: "Warm terracotta clay, vibrant joy, and sun-drenched sunset highlights" 
  },
];

export const TIMELINE: EventTimelineItem[] = [
  {
    time: "09:00 - 10:00",
    title: "Light Entertainment for Residential Guests & Hosts",
    description: "Gentle cultural melodies, welcoming ambient music, and refreshments for hosting family members and residential guests.",
    iconName: "Music"
  },
  {
    time: "10:00 - 10:30",
    title: "Arrival & Welcome of the Groom and Guests",
    description: "Joyous reception and ceremonial welcome of the groom's delegation and arriving guests.",
    iconName: "Users"
  },
  {
    time: "10:30 - 11:30",
    title: "Breakfast & Morning Refreshments",
    description: "Traditional tea, wholesome breakfast delicacies, and mingling among families.",
    iconName: "Utensils"
  },
  {
    time: "11:30 - 12:30",
    title: "Wellness & Photoshoot (Session I)",
    description: "Capturing memorable moments with family, friends, and elders in traditional attire.",
    iconName: "Camera"
  },
  {
    time: "12:30 - 14:00",
    title: "Lunch & Light Refreshments",
    description: "Sumptuous celebratory traditional feast featuring regional delicacies and cool refreshments.",
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
    title: "Introductions, Speeches & Presentation of Gifts",
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

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: "gb-1",
    name: "Uncle Odhiambo & Family",
    relationship: "Family",
    message: "Warmest congratulations Emilly and Owegi on this blessed Nyombo ceremony! May your home be filled with endless joy, peace, and abundance.",
    createdAt: "2026-08-01T09:30:00Z"
  },
  {
    id: "gb-2",
    name: "Brian & Achieng",
    relationship: "Friends",
    message: "Owegi my brother, so thrilled for you and Emilly! Counting down the days to celebrate at Gombe Komollo in Siaya!",
    createdAt: "2026-08-03T14:15:00Z"
  },
  {
    id: "gb-3",
    name: "Auntie Hellen",
    relationship: "Bride's Family",
    message: "Emilly my dear girl, you will be the most radiant bride! May God bless this union abundantly.",
    createdAt: "2026-08-05T18:45:00Z"
  }
];

