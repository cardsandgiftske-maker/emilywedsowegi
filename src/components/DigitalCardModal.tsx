import React from 'react';
import { X, Download, Clock, MapPin, Gift, Palette, Phone } from 'lucide-react';
import { WEDDING_DETAILS, TIMELINE } from '../data/weddingData';
import {
  TopLeftFloralSVG,
  TopRightBasketAndFabricSVG,
  BottomLeftClayPotAndDrapeSVG,
  BottomRightFloralSVG,
  TopEmblemSVG,
  SideTribalBorderSVG,
} from './InvitationDecor';

interface DigitalCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DigitalCardModal: React.FC<DigitalCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#F5EFE6] border-2 border-[#D4A359] rounded-3xl p-4 sm:p-6 shadow-2xl overflow-y-auto max-h-[92vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-[#2B1E1A] text-white hover:bg-[#C85A32] transition-colors shadow-md cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Digital Invitation Card High-Fidelity Decorated Rendering */}
        <div className="text-center space-y-4 border-2 border-[#D4A359]/70 p-4 sm:p-6 rounded-2xl bg-[#FAF6EE] relative overflow-hidden my-2">
          
          {/* Side Tribal Borders */}
          <div className="absolute top-0 bottom-0 left-0.5 z-10 opacity-70">
            <SideTribalBorderSVG side="left" />
          </div>
          <div className="absolute top-0 bottom-0 right-0.5 z-10 opacity-70">
            <SideTribalBorderSVG side="right" />
          </div>

          {/* 4 Corners Artworks */}
          <div className="absolute -top-3 -left-3 w-24 sm:w-32 h-auto z-20 pointer-events-none">
            <TopLeftFloralSVG className="w-full h-auto" />
          </div>
          <div className="absolute -top-2 -right-2 w-24 sm:w-32 h-auto z-20 pointer-events-none">
            <TopRightBasketAndFabricSVG className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-24 sm:w-32 h-auto z-20 pointer-events-none">
            <BottomLeftClayPotAndDrapeSVG className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-3 -right-3 w-24 sm:w-32 h-auto z-20 pointer-events-none">
            <BottomRightFloralSVG className="w-full h-auto" />
          </div>

          <div className="relative z-10 space-y-3 px-2 sm:px-4 py-2">
            <TopEmblemSVG />

            <div className="text-[10px] sm:text-xs font-serif tracking-[0.25em] uppercase text-[#2B1E1A] font-bold">
              Cordially Invites You To Celebrate
            </div>

            {/* Names & Event Title */}
            <div className="py-1">
              <h1 className="font-serif text-2xl sm:text-3xl text-[#2B1E1A] font-bold tracking-tight uppercase">
                EMILLY &amp; OWEGI&apos;S
              </h1>
              <div className="font-serif text-xl sm:text-2xl text-[#C85A32] font-bold tracking-widest uppercase mt-0.5">
                NYOMBO CEREMONY
              </div>
            </div>

            {/* When & Where Banner */}
            <div className="p-3 bg-[#F5EFE6] rounded-xl border border-[#D8C7B5] text-xs font-sans text-[#2B1E1A] space-y-1">
              <div className="font-serif font-bold text-sm text-[#2B1E1A]">
                Saturday, October 10, 2026 • 09:00 a.m. to 7:00 p.m.
              </div>
              <div className="text-[11px] text-[#2B1E1A]/80 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
                <span>Gombe Komollo, along Siaya-Rang&apos;ala Road, Siaya County</span>
              </div>
            </div>

            {/* Programme Summary */}
            <div className="text-left bg-white/70 p-3 rounded-xl border border-[#D8C7B5] space-y-1.5 text-[11px]">
              <div className="font-serif font-bold text-center text-[#C85A32] uppercase tracking-wider text-xs pb-1 border-b border-[#D8C7B5]">
                Programme
              </div>
              <div className="space-y-1 max-h-44 overflow-y-auto pr-1 font-sans">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="font-mono font-bold text-[#2B1E1A] shrink-0 text-[10px] w-20">{item.time}</span>
                    <span className="text-[#2B1E1A]/90">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom 3 Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-left">
              
              {/* Dress Code Card */}
              <div className="bg-[#F5EFE6] p-2.5 rounded-xl border border-[#D8C7B5] space-y-1">
                <div className="flex items-center gap-1 text-[#C85A32] font-bold uppercase">
                  <Palette className="w-3 h-3" />
                  <span>Dress Code</span>
                </div>
                <p className="text-[#2B1E1A]/80 leading-tight">
                  Elegant attire: Dark brown, Beige/Ivory, Burnt orange.
                </p>
              </div>

              {/* Gifting Card */}
              <div className="bg-[#F5EFE6] p-2.5 rounded-xl border border-[#D8C7B5] space-y-1">
                <div className="flex items-center gap-1 text-[#C85A32] font-bold uppercase">
                  <Gift className="w-3 h-3" />
                  <span>Lipa na M-PESA</span>
                </div>
                <p className="text-[#2B1E1A] font-mono leading-tight">
                  Paybill: <strong>522522</strong><br />
                  Acc: <strong>1354997166#E-WEDS-J</strong>
                </p>
              </div>

              {/* RSVP Card */}
              <div className="bg-[#F5EFE6] p-2.5 rounded-xl border border-[#D8C7B5] space-y-1">
                <div className="flex items-center gap-1 text-[#C85A32] font-bold uppercase">
                  <Phone className="w-3 h-3" />
                  <span>RSVP &amp; Contact</span>
                </div>
                <p className="text-[#2B1E1A]/90 leading-tight">
                  Deadline: <strong>Sep 25, 2026</strong><br />
                  Owegi: <strong>0782924775</strong>
                </p>
              </div>

            </div>

            {/* Tagline */}
            <p className="font-serif text-sm text-[#C85A32] font-bold pt-1 italic">
              {WEDDING_DETAILS.tagline}
            </p>

          </div>

        </div>

        {/* Action Controls */}
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-[#C85A32] text-white text-xs font-bold flex items-center gap-2 hover:bg-[#A8482A] transition-colors shadow-md cursor-pointer active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Print / Save Invitation</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#2B1E1A] text-white text-xs font-bold hover:bg-[#3E2723] transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};


