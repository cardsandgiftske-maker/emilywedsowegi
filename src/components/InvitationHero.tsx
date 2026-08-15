import React, { useState, useEffect } from 'react';
import { MapPin, Share2, ChevronDown, Check, Volume2, VolumeX, Image as ImageIcon, Calendar, Heart } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';
import { weddingAudio } from '../lib/weddingAudio';
import { UploadedTribalDiamondSymbolSVG } from './InvitationDecor';
import africanPatternBg from '../assets/images/african_pattern_bg_1786615704409.jpg';

interface InvitationHeroProps {
  onOpenCardModal: () => void;
}

interface PetalItem {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  type: 'petal' | 'gold' | 'rose' | 'leaf';
}

export const InvitationHero: React.FC<InvitationHeroProps> = ({ onOpenCardModal }) => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [shared, setShared] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [petals, setPetals] = useState<PetalItem[]>([]);
  const [showCalendarMenu, setShowCalendarMenu] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(WEDDING_DETAILS.rsvpPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleToggleAudio = () => {
    const isPlaying = weddingAudio.toggle();
    setIsPlayingAudio(isPlaying);
  };

  const triggerShowerBlessings = () => {
    const newPetals: PetalItem[] = Array.from({ length: 35 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 92 + 4, // %
      size: Math.floor(Math.random() * 16) + 12, // px
      duration: Math.random() * 2 + 3.5, // seconds
      delay: Math.random() * 1.5, // seconds
      type: ['petal', 'gold', 'rose', 'leaf'][Math.floor(Math.random() * 4)] as PetalItem['type'],
    }));

    setPetals((prev) => [...prev, ...newPetals]);

    setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !newPetals.includes(p)));
    }, 6000);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Emilly & Owegi's Nyombo Ceremony",
          text: "You are cordially invited to celebrate Emilly & Owegi's Nyombo Ceremony on Saturday, October 10, 2026 at Gombe Komollo, Siaya County.",
          url: window.location.href,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2500);
      } catch (err) {
        navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2500);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2500);
    }
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    "Emilly & Owegi's Nyombo Ceremony"
  )}&dates=20261010T060000Z/20261010T160000Z&details=${encodeURIComponent(
    "Together with our families, we joyfully invite you to our Nyombo Ceremony. Venue: Gombe Komollo, along Siaya-Rang'ala Road, Siaya County. RSVP Contact: " +
      WEDDING_DETAILS.rsvpContactName + " (" + WEDDING_DETAILS.rsvpPhone + ")"
  )}&location=${encodeURIComponent(WEDDING_DETAILS.fullLocation)}`;

  const downloadIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Emilly and Owegi Nyombo Ceremony//EN
BEGIN:VEVENT
UID:wedding-eo-20261010@nyombo.ke
DTSTAMP:20261010T060000Z
DTSTART:20261010T060000Z
DTEND:20261010T160000Z
SUMMARY:Emilly & Owegi's Nyombo Ceremony
DESCRIPTION:Together with our families\\, we joyfully invite you to our Nyombo ceremony at Gombe Komollo. RSVP: ${WEDDING_DETAILS.rsvpPhone}
LOCATION:${WEDDING_DETAILS.fullLocation}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Emilly_and_Owegi_Nyombo_Ceremony.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowCalendarMenu(false);
  };

  return (
    <section id="invitation" className="relative pt-0 pb-12 md:pb-16 w-full px-0">
      
      {/* Falling Flowers & Golden Blessings Petals Container */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {petals.map((p) => (
          <div
            key={p.id}
            className="absolute animate-drop-petal"
            style={{
              left: `${p.left}%`,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          >
            {p.type === 'petal' && (
              <span className="inline-block text-[#C85A32]" style={{ fontSize: `${p.size}px` }}>
                🌸
              </span>
            )}
            {p.type === 'rose' && (
              <span className="inline-block text-[#C85A32]" style={{ fontSize: `${p.size}px` }}>
                🌹
              </span>
            )}
            {p.type === 'gold' && (
              <span className="inline-block text-[#D4A359]" style={{ fontSize: `${p.size}px` }}>
                ✨
              </span>
            )}
            {p.type === 'leaf' && (
              <span className="inline-block text-[#2B1E1A]" style={{ fontSize: `${p.size}px` }}>
                🌿
              </span>
            )}
          </div>
        ))}
      </div>

      {/* African Pattern Background Layer with Soft Blend */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-3 mix-blend-multiply" 
        style={{ backgroundImage: `url(${africanPatternBg})` }}
      />
      {/* Warm Beige/Ivory Soft Tint Overlay for enhanced legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5EFE6]/90 via-[#F5EFE6]/70 to-[#F5EFE6] pointer-events-none" />

      {/* Hero Invitation Contents */}
      <div className="relative z-10 px-4 sm:px-12 md:px-16 pt-8 sm:pt-12 pb-14 sm:pb-20 max-w-2xl mx-auto text-center">
        
        {/* Inner Content Container */}
        <div className="space-y-4 sm:space-y-6 relative z-10 max-w-xl mx-auto">

          {/* E&O Elegant Crest & Tribal Diamond Geometric Emblem */}
          <div className="flex flex-col items-center justify-center mb-1 sm:mb-2 space-y-3">
            {/* E&O Monogram Badge */}
            <div className="relative flex items-center justify-center">
              <div className="w-18 h-18 sm:w-22 sm:h-22 rounded-full bg-[#2B1E1A] border-2 border-[#D4A359] shadow-md flex flex-col items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-1 rounded-full border border-dashed border-[#D4A359]/60 pointer-events-none" />
                <div className="flex items-center justify-center gap-1 font-serif text-xl sm:text-2xl font-bold text-[#F5EFE6] tracking-widest pt-1">
                  <span>E</span>
                  <span className="text-[#C85A32] text-base sm:text-lg font-light">&amp;</span>
                  <span>O</span>
                </div>
                <div className="text-[9px] font-sans tracking-[0.25em] text-[#D4A359] uppercase -mt-0.5 font-semibold">
                  CEREMONY
                </div>
              </div>
            </div>

            <UploadedTribalDiamondSymbolSVG size={160} className="drop-shadow-2xs" />
          </div>

          {/* 1. Ceremony Header */}
          <div className="space-y-1">
            <h2 className="text-xs sm:text-base md:text-lg font-serif tracking-[0.22em] sm:tracking-[0.28em] font-bold text-[#C85A32] uppercase leading-snug">
              EMILLY &amp; OWEGI&apos;S NYOMBO CEREMONY
            </h2>
            <p className="text-[11px] sm:text-sm font-serif tracking-[0.3em] text-[#2B1E1A] font-bold uppercase">
              CORDIAL INVITATION
            </p>
          </div>

          <div className="w-16 sm:w-24 h-[1px] bg-[#D4A359]/50 mx-auto" />

          {/* 2. Subheading Eyebrow */}
          <p className="text-[10px] sm:text-xs font-serif tracking-[0.25em] uppercase text-[#C85A32] font-bold">
            TOGETHER WITH THEIR FAMILIES,
          </p>

          {/* 3. Couple's Names Calligraphy - DOMINANT CENTERPIECE */}
          <div className="py-1 sm:py-3 space-y-1 sm:space-y-2">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2B1E1A] font-bold leading-tight tracking-wide px-1">
              Emilly
            </h1>
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#D4A359] my-1 sm:my-2">
              <span className="w-10 sm:w-20 h-[1.5px] bg-[#D4A359]/60" />
              <span className="font-script text-3xl sm:text-5xl text-[#C85A32] font-bold">&amp;</span>
              <span className="w-10 sm:w-20 h-[1.5px] bg-[#D4A359]/60" />
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2B1E1A] font-bold leading-tight tracking-wide px-1">
              Owegi
            </h1>
          </div>

          <p className="text-[10px] sm:text-xs font-serif tracking-[0.2em] uppercase text-[#2B1E1A] font-semibold leading-relaxed max-w-md mx-auto px-1">
            CORDIALLY INVITE YOU TO CELEBRATE THEIR NYOMBO CEREMONY
          </p>

          <div className="w-16 sm:w-24 h-[1px] bg-[#D4A359]/50 mx-auto" />

          {/* 4. Featured Scripture Blessing Card */}
          <div className="my-3 sm:my-4 px-4 sm:px-6 py-3.5 bg-[#FAF6EE] rounded-xl border border-[#D8C7B5] max-w-md mx-auto text-center space-y-1.5 shadow-2xs">
            <p className="text-[9px] sm:text-[10px] font-sans tracking-widest font-bold text-[#C85A32] uppercase">
              SCRIPTURE BLESSING
            </p>
            <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#2B1E1A] font-medium leading-relaxed">
              “{WEDDING_DETAILS.bibleVerse.text}”
            </p>
            <p className="text-[10px] sm:text-[11px] font-serif tracking-[0.2em] font-bold text-[#C85A32] uppercase pt-0.5">
              — {WEDDING_DETAILS.bibleVerse.reference} —
            </p>
          </div>

          {/* 5. Date & Location Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 max-w-md mx-auto text-center">
            <div className="p-3.5 rounded-xl bg-[#FAF6EE] border border-[#D8C7B5] flex flex-col justify-center items-center">
              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-[#C85A32] mb-1">
                WHEN
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#2B1E1A]">
                Saturday, October 10, 2026
              </span>
              <span className="font-sans text-[11px] text-[#2B1E1A]/80 font-medium mt-0.5">
                09:00 a.m. to 7:00 p.m.
              </span>
            </div>
            <div className="p-3.5 rounded-xl bg-[#FAF6EE] border border-[#D8C7B5] flex flex-col justify-center items-center">
              <span className="text-[9px] sm:text-[10px] font-sans tracking-[0.2em] uppercase font-bold text-[#C85A32] mb-1">
                WHERE
              </span>
              <span className="font-serif text-sm sm:text-base font-bold text-[#2B1E1A] flex items-center justify-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                Gombe Komollo
              </span>
              <span className="font-sans text-[11px] text-[#2B1E1A]/80 font-medium mt-0.5">
                Siaya-Rang&apos;ala Road, Siaya County
              </span>
            </div>
          </div>

          {/* 6. Celebration Details Scroll Indicator */}
          <div className="pt-4 pb-1 flex flex-col items-center gap-1.5 text-[#C85A32]">
            <a href="#programme" className="group flex flex-col items-center gap-1.5">
              <span className="text-[10px] font-serif tracking-[0.22em] uppercase font-semibold text-[#2B1E1A]/80 group-hover:text-[#C85A32] transition-colors">
                VIEW PROGRAMME &amp; DETAILS
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-[#C85A32]" />
            </a>
          </div>

          {/* 7. Bottom Action Buttons Bar */}
          <div className="pt-4 border-t border-[#D8C7B5] flex flex-wrap items-center justify-between gap-3 relative z-30">
            {/* Confirm Attendance Pill Button */}
            <a
              href="#rsvp"
              className="px-6 py-2.5 rounded-full bg-[#2B1E1A] hover:bg-[#3E2723] text-[#F5EFE6] font-sans text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95 uppercase tracking-wider border border-[#D4A359]"
            >
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <Check className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>CONFIRM ATTENDANCE</span>
            </a>

            {/* Quick Action Controls: Calendar, Music, View Card & Share */}
            <div className="flex items-center gap-2">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#FAF6EE] hover:bg-[#F0E8DC] text-[#2B1E1A] border border-[#D8C7B5] transition-all active:scale-95 flex items-center gap-1"
                title="Add to Google Calendar"
              >
                <Calendar className="w-4 h-4 text-[#C85A32]" />
              </a>

              <button
                onClick={handleToggleAudio}
                className="p-2.5 rounded-full bg-[#FAF6EE] hover:bg-[#F0E8DC] text-[#2B1E1A] border border-[#D8C7B5] transition-all active:scale-95 flex items-center gap-1.5"
                title={isPlayingAudio ? "Mute Background Music" : "Play Background Music"}
              >
                {isPlayingAudio ? (
                  <Volume2 className="w-4 h-4 text-[#C85A32] animate-pulse" />
                ) : (
                  <VolumeX className="w-4 h-4 text-[#2B1E1A]" />
                )}
              </button>

              <button
                onClick={onOpenCardModal}
                className="p-2.5 rounded-full bg-[#FAF6EE] hover:bg-[#F0E8DC] text-[#2B1E1A] border border-[#D8C7B5] transition-all active:scale-95"
                title="View Full Card Image"
              >
                <ImageIcon className="w-4 h-4 text-[#2B1E1A]" />
              </button>

              <button
                onClick={handleShare}
                className="p-2.5 rounded-full bg-[#FAF6EE] hover:bg-[#F0E8DC] text-[#2B1E1A] border border-[#D8C7B5] transition-all active:scale-95"
                title="Share Invitation"
              >
                <Share2 className="w-4 h-4 text-[#2B1E1A]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

