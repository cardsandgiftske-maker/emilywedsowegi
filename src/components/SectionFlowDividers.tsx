import React from 'react';

/**
 * Organic Botanical Wave Transition (Top to Bottom)
 * Smoothly transitions from top Color to bottom Color with floral SVG accents.
 */
export const BotanicalWaveDivider: React.FC<{
  topColor: string;
  bottomColor: string;
  flip?: boolean;
}> = ({ topColor, bottomColor, flip = false }) => {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none z-10 -my-1 ${
        flip ? 'rotate-180' : ''
      }`}
      style={{ backgroundColor: topColor }}
    >
      <svg
        className="relative block w-full h-12 sm:h-20 md:h-28"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {/* Soft Shadow Wave Layer */}
        <path
          d="M0,0 C150,90 350,-40 500,55 C650,150 900,20 1200,60 L1200,120 L0,120 Z"
          fill={bottomColor}
          opacity="0.3"
        />
        {/* Main Wave Path */}
        <path
          d="M0,25 C200,110 450,10 700,85 C950,160 1100,35 1200,50 L1200,120 L0,120 Z"
          fill={bottomColor}
        />
      </svg>

      {/* Floating Center Floral Medallion Accent along the seam */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20">
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#FAF6EE] border-2 border-[#D4A359] shadow-md flex items-center justify-center">
          <span className="text-xs sm:text-base text-[#C85A32]">🌾</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Vertical Vine Flow Connector line with golden diamonds and leaves
 * Placed between sections to show a unified flowing story down the page.
 */
export const FlowingVineConnector: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div className="relative flex flex-col items-center justify-center my-6 z-20 pointer-events-none">
      {/* Upper Line */}
      <div className="w-0.5 h-10 sm:h-14 bg-gradient-to-b from-[#D4A359]/10 via-[#D4A359] to-[#C85A32]" />
      
      {/* Center Floral/Diamond Knot */}
      <div className="relative flex items-center justify-center my-1">
        <div className="w-10 h-10 rounded-full bg-[#FAF6EE] border-2 border-[#D4A359] shadow-md flex items-center justify-center relative">
          <div className="w-4 h-4 rotate-45 border border-[#C85A32] flex items-center justify-center bg-[#F5EFE6]">
            <div className="w-1.5 h-1.5 bg-[#2B1E1A] rounded-full" />
          </div>
        </div>
        
        {/* Side Leaf Branches */}
        <svg className="absolute -left-10 w-8 h-6 text-[#2B1E1A]" viewBox="0 0 30 20" fill="currentColor">
          <path d="M30,10 C20,10 10,0 0,5 C10,12 20,15 30,10 Z" opacity="0.8" />
          <path d="M30,10 C10,20 0,15 C10,8 20,5 30,10 Z" opacity="0.8" />
        </svg>
        <svg className="absolute -right-10 w-8 h-6 text-[#2B1E1A] scale-x-[-1]" viewBox="0 0 30 20" fill="currentColor">
          <path d="M30,10 C20,10 10,0 0,5 C10,12 20,15 30,10 Z" opacity="0.8" />
          <path d="M30,10 C10,20 0,15 C10,8 20,5 30,10 Z" opacity="0.8" />
        </svg>
      </div>

      {label && (
        <span className="font-serif italic text-xs sm:text-sm text-[#C85A32] tracking-widest my-1 font-semibold uppercase">
          {label}
        </span>
      )}

      {/* Lower Line */}
      <div className="w-0.5 h-10 sm:h-14 bg-gradient-to-b from-[#C85A32] via-[#D4A359] to-[#2B1E1A]/10" />
    </div>
  );
};

