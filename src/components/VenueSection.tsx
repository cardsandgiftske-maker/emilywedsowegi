import React from 'react';
import { MapPin, Navigation, ExternalLink, Clock, Calendar } from 'lucide-react';
import { WEDDING_DETAILS } from '../data/weddingData';

export const VenueSection: React.FC = () => {
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Gombe Komollo Siaya County Kenya"
  )}`;

  return (
    <div className="bg-[#FAF6EE] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-[#D8C7B5]">
      <section id="venue" className="max-w-4xl mx-auto text-center space-y-6">
        
        {/* Section Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold uppercase tracking-widest border border-[#C85A32]/30">
            <MapPin className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>The Location &amp; Venue</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2B1E1A] font-bold">
            Gombe Komollo
          </h2>

          <p className="text-xs sm:text-sm text-[#2B1E1A]/80 font-sans max-w-lg mx-auto">
            Along Siaya-Rang&apos;ala Road, Siaya County
          </p>
        </div>

        {/* Quick Venue Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto text-xs sm:text-sm">
          <div className="bg-[#F5EFE6] border border-[#D8C7B5] p-3.5 rounded-xl flex items-center justify-center gap-2 text-[#2B1E1A]">
            <Calendar className="w-4 h-4 text-[#C85A32] shrink-0" />
            <span className="font-bold">Saturday, October 10, 2026</span>
          </div>
          <div className="bg-[#F5EFE6] border border-[#D8C7B5] p-3.5 rounded-xl flex items-center justify-center gap-2 text-[#2B1E1A]">
            <Clock className="w-4 h-4 text-[#C85A32] shrink-0" />
            <span className="font-bold">09:00 a.m. to 7:00 p.m.</span>
          </div>
        </div>

        {/* Google Map Container */}
        <div className="bg-[#2B1E1A] rounded-2xl p-2 border-2 border-[#D4A359] shadow-lg relative overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-xl overflow-hidden bg-gray-100">
            <iframe
              title="Gombe Komollo Siaya Location Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Siaya%20Kenya&t=&z=12&ie=UTF8&iwloc=&output=embed"
            />

            <div className="absolute bottom-3 left-3 right-3 bg-[#2B1E1A]/90 backdrop-blur-md text-[#F5EFE6] p-3 rounded-xl border border-[#D4A359] flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-left">
                <MapPin className="w-4 h-4 text-[#C85A32] shrink-0" />
                <div>
                  <span className="font-serif font-bold block">Gombe Komollo</span>
                  <span className="text-[11px] text-[#F5EFE6]/80 block">Siaya-Rang&apos;ala Road, Siaya County</span>
                </div>
              </div>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#D4A359] font-bold hover:text-white transition-colors shrink-0 ml-2"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open Directions</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};


