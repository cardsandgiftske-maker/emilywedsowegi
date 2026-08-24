import React, { useState } from 'react';
import { Mail, Sparkles, Heart, Check, Music } from 'lucide-react';
import confetti from 'canvas-confetti';
import { WEDDING_DETAILS } from '../data/weddingData';
import { weddingAudio } from '../lib/weddingAudio';

interface VintageEnvelopeWrapperProps {
  children: React.ReactNode;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const VintageEnvelopeWrapper: React.FC<VintageEnvelopeWrapperProps> = ({
  children,
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    setIsOpen(true);

    // Fire celebratory burnt orange, gold & deep brown confetti burst
    try {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C85A32', '#2B1E1A', '#D4A359', '#F5EFE6'],
      });
    } catch {
      // Ignore if confetti unavailable
    }

    // Auto-start romantic background saxophone music on user interaction
    if (!isPlayingMusic) {
      onToggleMusic();
    }
  };

  return (
    <div className="relative min-h-screen">
      {!isOpen ? (
        /* VINTAGE ENVELOPE COVER SCREEN */
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-[#1A1210] via-[#2B1E1A] to-[#120C0A] overflow-y-auto transition-all duration-500"
        >
          {/* Ambient Gold & Terracotta Particle Glows */}
          <div className="absolute top-1/4 left-10 w-72 h-72 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-[#C85A32]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Vintage Envelope Container */}
          <div className="relative w-full max-w-lg mx-auto my-auto text-center">
            
            {/* Outer Envelope Texture Frame */}
            <div
              onClick={handleOpenEnvelope}
              className="group cursor-pointer relative bg-[#F5EFE6] rounded-3xl border-4 border-[#D4A359] p-6 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_30px_70px_-10px_rgba(212,163,89,0.3)] overflow-hidden"
            >
              {/* Traditional Geometric Edge Pattern */}
              <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#2B1E1A] via-[#C85A32] to-[#D4A359]" />
              <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-[#D4A359] via-[#C85A32] to-[#2B1E1A]" />

              {/* Corner Floral Flourish Accents */}
              <div className="absolute top-3 left-3 text-[#D4A359] opacity-70 text-lg">🌾</div>
              <div className="absolute top-3 right-3 text-[#D4A359] opacity-70 text-lg">🌾</div>
              <div className="absolute bottom-3 left-3 text-[#D4A359] opacity-70 text-lg">🌾</div>
              <div className="absolute bottom-3 right-3 text-[#D4A359] opacity-70 text-lg">🌾</div>

              {/* Envelope Front */}
              <div className="space-y-6 my-6 relative z-10">
                
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2B1E1A] text-[#D4A359] text-xs font-serif font-semibold tracking-[0.25em] uppercase border border-[#D4A359] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
                  <span>Special Invitation</span>
                </div>

                <div className="py-3 border-y border-[#D4A359]/40 my-2 max-w-xs mx-auto">
                  <h1 className="text-lg sm:text-xl font-serif tracking-widest text-[#2B1E1A] font-bold uppercase leading-relaxed">
                    NYOMBO CEREMONY
                  </h1>
                </div>

                {/* Terracotta Wax Seal Button */}
                <div className="pt-4 flex flex-col items-center justify-center">
                  <div
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#E0683B] via-[#C85A32] to-[#8C3415] border-4 border-[#D4A359] shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                  >
                    {/* Inner Wax Seal Rim */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-[#F5EFE6]/60 flex items-center justify-center bg-[#A63C20] shadow-inner">
                      <div className="text-center">
                        <span className="block font-serif text-base sm:text-lg font-bold text-[#F5EFE6] tracking-widest">
                          E &amp; O
                        </span>
                        <span className="block text-[9px] sm:text-[10px] text-[#F5EFE6]/90 uppercase tracking-widest font-semibold mt-0.5">
                          SEAL
                        </span>
                      </div>
                    </div>
                  </div>

                  <span className="mt-3 text-xs font-sans font-bold uppercase tracking-widest text-[#C85A32] animate-bounce flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5" />
                    <span>Tap Seal To Open Invitation</span>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      ) : (
        /* UNSEALED FULL INVITATION CONTENT */
        <div
          className="relative animate-fadeIn"
        >
          {/* Top Bar Indicator */}
          <div className="bg-[#2B1E1A] text-[#F5EFE6] py-2 px-4 border-b border-[#D4A359]/60 flex items-center justify-between text-xs z-40 relative shadow-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C85A32] animate-pulse" />
              <span className="font-serif font-bold tracking-wider text-[#D4A359] uppercase">
                Invitation Unsealed • Emilly &amp; Owegi
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="px-3 py-1 bg-[#D4A359]/20 hover:bg-[#D4A359]/30 text-[#D4A359] rounded-full text-[11px] font-sans font-bold uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Mail className="w-3 h-3" />
              <span>View Envelope</span>
            </button>
          </div>

          {/* Main Unfolded Content Flow */}
          {children}
        </div>
      )}
    </div>
  );
};


