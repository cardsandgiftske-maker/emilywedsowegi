import React, { useState } from 'react';
import { Clock, Users, Music, Award, Heart, Utensils, Gift, Sparkles, ChevronRight, Camera, Cake, Coffee, Sparkle } from 'lucide-react';
import { TIMELINE, WEDDING_DETAILS } from '../data/weddingData';

export const EventDetails: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Music': return <Music className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Coffee': return <Coffee className="w-4 h-4" />;
      case 'Camera': return <Camera className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      case 'Heart': return <Heart className="w-4 h-4 fill-current" />;
      case 'Gift': return <Gift className="w-4 h-4" />;
      case 'Cake': return <Cake className="w-4 h-4" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="programme" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C85A32]/10 text-[#C85A32] text-xs font-semibold uppercase tracking-widest border border-[#C85A32]/30">
          <Clock className="w-3.5 h-3.5" />
          <span>Programme &amp; Schedule</span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-serif text-[#2B1E1A] font-bold">
          Celebration Programme
        </h2>
        
        <p className="max-w-xl mx-auto text-xs sm:text-sm text-[#2B1E1A]/80 font-sans">
          Saturday, October 10, 2026 • Gombe Komollo, Siaya County
        </p>
      </div>

      {/* Programme Timeline Vertical Card List */}
      <div className="relative border-l-2 border-[#D4A359]/50 ml-4 sm:ml-36 pl-6 sm:pl-10 space-y-6">
        
        {TIMELINE.map((item, index) => {
          const isActive = activeItem === index;

          return (
            <div
              key={index}
              onClick={() => setActiveItem(isActive ? null : index)}
              className="relative cursor-pointer group"
            >
              {/* Left Time Badge (Desktop) */}
              <div className="hidden sm:block absolute -left-40 top-2 w-32 text-right font-mono text-xs font-bold text-[#2B1E1A] group-hover:text-[#C85A32] transition-colors">
                <span className="bg-[#FAF6EE] px-2.5 py-1 rounded-lg border border-[#D8C7B5] inline-block shadow-2xs">
                  {item.time}
                </span>
              </div>

              {/* Node Circle */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-[#C85A32] border-[#2B1E1A] text-white shadow-md scale-110'
                    : 'bg-[#FAF6EE] border-[#C85A32] text-[#2B1E1A] group-hover:bg-[#C85A32] group-hover:text-white'
                }`}
              >
                {getIcon(item.iconName)}
              </div>

              {/* Event Content Card */}
              <div
                className={`rounded-2xl p-4 sm:p-5 border transition-all ${
                  isActive
                    ? 'bg-[#FAF6EE] border-[#C85A32] shadow-md'
                    : 'bg-[#FAF6EE] border-[#D8C7B5] hover:border-[#C85A32]/60 shadow-2xs'
                }`}
              >
                {/* Mobile Time Tag */}
                <span className="sm:hidden inline-block mb-1.5 text-[11px] font-mono font-bold text-[#C85A32] bg-[#C85A32]/10 px-2.5 py-0.5 rounded-full border border-[#C85A32]/30">
                  {item.time}
                </span>

                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#2B1E1A]">
                    {item.title}
                  </h3>
                  <ChevronRight className={`w-4 h-4 text-[#C85A32] transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </div>

                <p className="mt-1 text-xs sm:text-sm text-[#2B1E1A]/80 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
};

