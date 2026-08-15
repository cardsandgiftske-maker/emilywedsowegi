import React from 'react';
import { ShieldCheck, BookOpen, Heart } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#2B1E1A] text-[#F5EFE6] border-t-2 border-[#D4A359] py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 text-center">
        
        {/* E&O Monogram Crest */}
        <div className="w-16 h-16 rounded-full border-2 border-[#D4A359] bg-[#3D2C27] shadow-md flex flex-col items-center justify-center relative">
          <div className="flex items-center gap-1 font-serif text-lg font-bold text-[#F5EFE6] tracking-widest">
            <span>E</span>
            <span className="text-[#C85A32] font-normal text-sm">&amp;</span>
            <span>O</span>
          </div>
          <span className="text-[#D4A359] text-[10px] -mt-0.5">🌾</span>
        </div>

        {/* Tagline / Footer Message from Card */}
        <div className="space-y-1">
          <p className="font-serif text-lg sm:text-xl font-bold text-[#D4A359]">
            {WEDDING_DETAILS.tagline}
          </p>
          <p className="text-xs text-[#F5EFE6]/80 font-sans">
            Emilly &amp; Owegi&apos;s Nyombo Ceremony • Saturday, October 10, 2026
          </p>
        </div>

        {/* Bible Verse Scripture Note */}
        <div className="max-w-md px-5 py-4 bg-[#3D2C27] rounded-2xl border border-[#D4A359]/30 text-center space-y-1.5 shadow-sm">
          <div className="flex items-center justify-center gap-2 text-[#D4A359]">
            <BookOpen className="w-3.5 h-3.5 text-[#D4A359]" />
            <span className="text-[10px] font-sans tracking-widest uppercase font-semibold text-[#D4A359]">Scripture Blessing</span>
          </div>
          <p className="font-serif italic text-xs sm:text-sm text-[#F5EFE6]">
            &ldquo;{WEDDING_DETAILS.bibleVerse.text}&rdquo;
          </p>
          <p className="text-[10px] font-serif tracking-widest text-[#D4A359] font-bold uppercase">
            — {WEDDING_DETAILS.bibleVerse.reference} —
          </p>
        </div>

        {/* Copyright Note & Admin Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#F5EFE6]/70 pt-2 border-t border-[#D4A359]/20 w-full">
          <p>© 2026 Emilly &amp; Owegi Nyombo Ceremony • Gombe Komollo, Siaya County</p>

          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="flex items-center gap-1.5 text-[#D4A359] hover:text-white transition-colors bg-[#D4A359]/10 hover:bg-[#D4A359]/20 px-3 py-1 rounded-full border border-[#D4A359]/40 text-[11px] cursor-pointer"
              title="Admin RSVP Dashboard"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Admin Panel</span>
            </button>
          )}
        </div>

      </div>
    </footer>
  );
};



