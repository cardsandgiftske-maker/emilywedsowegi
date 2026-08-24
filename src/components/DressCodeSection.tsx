import React from 'react';
import { Palette } from 'lucide-react';
import { COLOR_PALETTE, WEDDING_DETAILS } from '../data/weddingData';

export const DressCodeSection: React.FC = () => {
  return (
    <section id="dresscode" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold uppercase tracking-widest border border-[#C85A32]/30">
          <Palette className="w-3.5 h-3.5" />
          <span>Dress Code</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#2B1E1A] font-bold">
          {WEDDING_DETAILS.dressCodeTheme}
        </h2>

        <p className="text-sm sm:text-base text-[#C85A32] font-serif font-semibold tracking-wide">
          {WEDDING_DETAILS.dressCodeDescription}
        </p>
      </div>

      {/* 3 Main Theme Color Swatches */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto">
        {COLOR_PALETTE.map((color, index) => (
          <div
            key={index}
            className="bg-[#FAF6EE] border border-[#D8C7B5] rounded-2xl p-5 text-center shadow-xs hover:shadow-md transition-all group"
          >
            {/* Color Swatch Circle */}
            <div
              className="w-16 h-16 mx-auto rounded-full shadow-inner mb-3 transform group-hover:scale-105 transition-transform border border-black/10 flex items-center justify-center text-xs font-mono font-bold"
              style={{
                backgroundColor: color.hex,
                color: color.hex === '#F5EFE6' ? '#2B1E1A' : '#FFFFFF',
              }}
            />

            <h3 className="font-serif font-bold text-base text-[#2B1E1A]">
              {color.name}
            </h3>

            <p className="text-xs text-[#2B1E1A]/70 font-sans mt-1">
              {color.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

