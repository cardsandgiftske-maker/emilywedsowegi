import React, { useState } from 'react';
import { Calendar, Heart, MapPin, Gift, MessageSquare, Volume2, VolumeX, Menu, X, Sparkles, Image as ImageIcon, Clock, Palette } from 'lucide-react';

interface NavbarProps {
  onOpenCardModal: () => void;
  isPlayingMusic: boolean;
  onToggleMusic: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCardModal,
  isPlayingMusic,
  onToggleMusic,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Invitation', href: '#invitation' },
    { name: 'Programme', href: '#programme' },
    { name: 'Dress Code', href: '#dresscode' },
    { name: 'Venue', href: '#venue' },
    { name: 'Gifting', href: '#gifting' },
    { name: 'RSVP', href: '#rsvp', highlight: true },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#D8C7B5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Monogram */}
          <a href="#invitation" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-[#2B1E1A] text-[#F5EFE6] flex items-center justify-center font-serif text-lg font-bold border-2 border-[#D4A359] group-hover:scale-105 transition-transform shadow-xs">
              E&amp;O
            </div>
            <div className="hidden sm:block text-left">
              <span className="block font-serif text-lg font-bold text-[#2B1E1A] leading-none">
                Emilly &amp; Owegi
              </span>
              <span className="block font-sans text-[10px] tracking-widest text-[#C85A32] uppercase font-bold mt-0.5">
                Nyombo Ceremony • Oct 10, 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                  link.highlight
                    ? 'bg-[#C85A32] text-white hover:bg-[#A8482A] shadow-xs hover:shadow-md'
                    : 'text-[#2B1E1A] hover:text-[#C85A32] hover:bg-[#F5EFE6]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons: Audio Toggle & View Digital Card */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleMusic}
              title={isPlayingMusic ? "Mute Background Music" : "Play Background Music"}
              className={`p-2 rounded-full border transition-colors flex items-center justify-center cursor-pointer ${
                isPlayingMusic
                  ? 'bg-[#2B1E1A] text-[#D4A359] border-[#D4A359]'
                  : 'bg-[#F5EFE6] text-[#2B1E1A] border-[#D8C7B5] hover:border-[#2B1E1A]'
              }`}
            >
              {isPlayingMusic ? <Volume2 className="w-4 h-4 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenCardModal}
              className="hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#2B1E1A] text-[#F5EFE6] text-xs font-medium border border-[#D4A359] hover:bg-[#3E2723] transition-colors cursor-pointer"
            >
              <ImageIcon className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Invitation Card</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#2B1E1A] hover:bg-[#F5EFE6] cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-b border-[#D8C7B5] px-4 pt-2 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-center text-sm font-medium ${
                  link.highlight
                    ? 'bg-[#C85A32] text-white font-semibold'
                    : 'bg-[#F5EFE6] text-[#2B1E1A] hover:bg-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCardModal();
            }}
            className="w-full mt-3 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#2B1E1A] text-white text-sm font-medium border border-[#D4A359] cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-[#D4A359]" />
            <span>View Full Digital Invitation Card</span>
          </button>
        </div>
      )}
    </nav>
  );
};

