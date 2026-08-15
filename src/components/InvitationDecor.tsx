import React from 'react';

// Top Left Floral Arrangement with Cream Roses, Terracotta Daisies & Eucalyptus
export const TopLeftFloralSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    <g id="eucalyptus-foliage">
      {/* Background Leaves */}
      <path d="M40 180 Q10 140 15 90 Q30 110 50 140 Z" fill="#3B5745" opacity="0.85" />
      <path d="M20 150 Q-10 110 5 60 Q20 80 35 115 Z" fill="#4B6E58" opacity="0.75" />
      <path d="M70 210 Q40 180 30 130 Q55 150 75 180 Z" fill="#2D4737" opacity="0.9" />
      <path d="M15 110 Q-15 80 5 30 Q20 50 28 80 Z" fill="#5B8067" opacity="0.7" />
      
      {/* Stems */}
      <path d="M60 210 Q30 140 20 60" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M110 130 Q80 70 50 10" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M150 80 Q100 40 40 5" stroke="#253C2E" strokeWidth="2" strokeLinecap="round" />

      {/* Eucalyptus oval leaves along stems */}
      <ellipse cx="35" cy="110" rx="14" ry="9" transform="rotate(-30 35 110)" fill="#688F76" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="25" cy="80" rx="12" ry="8" transform="rotate(-40 25 80)" fill="#789F86" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="20" cy="50" rx="10" ry="6" transform="rotate(-20 20 50)" fill="#88AF96" stroke="#2D4737" strokeWidth="1" />

      <ellipse cx="85" cy="75" rx="15" ry="10" transform="rotate(-15 85 75)" fill="#5B8067" stroke="#253C2E" strokeWidth="1" />
      <ellipse cx="65" cy="45" rx="13" ry="8" transform="rotate(-35 65 45)" fill="#688F76" stroke="#253C2E" strokeWidth="1" />
      <ellipse cx="45" cy="20" rx="10" ry="6" transform="rotate(-50 45 20)" fill="#789F86" stroke="#253C2E" strokeWidth="1" />

      {/* Terracotta/Orange Berries */}
      <g fill="#C15C3D">
        <circle cx="80" cy="120" r="4.5" />
        <circle cx="90" cy="115" r="4" />
        <circle cx="85" cy="128" r="5" />
        <circle cx="95" cy="125" r="4" />
        <circle cx="72" cy="130" r="3.5" />
        <circle cx="68" cy="140" r="4" />

        <circle cx="120" cy="65" r="4" />
        <circle cx="130" cy="60" r="4.5" />
        <circle cx="125" cy="72" r="5" />
        <circle cx="138" cy="68" r="3.5" />
      </g>
    </g>

    {/* Large Cream Rose (Top Left) */}
    <g id="cream-rose-1" transform="translate(60, 40)">
      {/* Outer Petals */}
      <path d="M-10 10 C-35 -15 -10 -45 20 -40 C50 -45 70 -15 50 15 C30 40 -10 35 -10 10 Z" fill="#FBF3E6" stroke="#E6D3B8" strokeWidth="1.5" />
      <path d="M-25 0 C-40 30 0 55 30 50 C60 45 65 10 40 -15" fill="#FAF0DF" stroke="#E2CDB0" strokeWidth="1.5" />
      <path d="M-30 -20 C-10 -50 40 -50 55 -25 C70 5 45 35 15 35" fill="#F8EAD6" stroke="#DFC7A8" strokeWidth="1.5" />

      {/* Middle Petals */}
      <circle cx="15" cy="0" r="28" fill="#FDF7EE" stroke="#EAD8C1" strokeWidth="1.5" />
      <path d="M0 -15 C0 -30 30 -30 30 -15 C30 0 0 0 0 -15" fill="#F7E4CC" opacity="0.9" />
      <path d="M-10 -5 C-20 -20 10 -25 20 -10 C25 5 -5 10 -10 -5" fill="#F3DCBE" opacity="0.85" />
      
      {/* Inner Rose Spiral */}
      <path d="M5 -8 C2 -16 22 -18 20 -6 C18 4 6 2 5 -8" fill="#E8CBA3" />
      <path d="M10 -10 C8 -14 16 -15 15 -9" fill="#D9B78A" />
    </g>

    {/* Second Cream Rose (Below Main Rose) */}
    <g id="cream-rose-2" transform="translate(110, 85) scale(0.85)">
      <circle cx="0" cy="0" r="32" fill="#FAF0DF" stroke="#E2CDB0" strokeWidth="1.5" />
      <path d="M-20 -10 C-30 15 5 30 25 15 C35 -10 10 -30 -15 -20" fill="#FDF7EE" stroke="#EAD8C1" strokeWidth="1" />
      <circle cx="2" cy="-2" r="18" fill="#F3DCBE" opacity="0.85" />
      <path d="M-5 -5 Q5 -15 12 -3 Q15 8 -2 5 Z" fill="#E2C29A" />
    </g>

    {/* Terracotta/Orange Daisy/Sunflower */}
    <g id="terracotta-flower" transform="translate(45, 125)">
      {/* Petals radiating */}
      <g fill="#D86B47" stroke="#B04E2D" strokeWidth="1">
        <ellipse cx="0" cy="-28" rx="7" ry="18" />
        <ellipse cx="20" cy="-20" rx="7" ry="18" transform="rotate(35 20 -20)" />
        <ellipse cx="28" cy="0" rx="7" ry="18" transform="rotate(70 28 0)" />
        <ellipse cx="20" cy="20" rx="7" ry="18" transform="rotate(110 20 20)" />
        <ellipse cx="0" cy="28" rx="7" ry="18" transform="rotate(145 0 28)" />
        <ellipse cx="-20" cy="20" rx="7" ry="18" transform="rotate(180 -20 20)" />
        <ellipse cx="-28" cy="0" rx="7" ry="18" transform="rotate(215 -28 0)" />
        <ellipse cx="-20" cy="-20" rx="7" ry="18" transform="rotate(250 -20 -20)" />
      </g>
      {/* Inner Petal Ring */}
      <g fill="#E47E5C">
        <ellipse cx="0" cy="-20" rx="5" ry="12" />
        <ellipse cx="14" cy="-14" rx="5" ry="12" transform="rotate(35 14 -14)" />
        <ellipse cx="20" cy="0" rx="5" ry="12" transform="rotate(70 20 0)" />
        <ellipse cx="14" cy="14" rx="5" ry="12" transform="rotate(110 14 14)" />
        <ellipse cx="0" cy="20" rx="5" ry="12" transform="rotate(145 0 20)" />
        <ellipse cx="-14" cy="14" rx="5" ry="12" transform="rotate(180 -14 14)" />
        <ellipse cx="-20" cy="0" rx="5" ry="12" transform="rotate(215 -20 0)" />
        <ellipse cx="-14" cy="-14" rx="5" ry="12" transform="rotate(250 -14 -14)" />
      </g>
      {/* Center Seed Pod */}
      <circle cx="0" cy="0" r="11" fill="#6B2E1C" stroke="#D4A359" strokeWidth="2" />
      <circle cx="0" cy="0" r="7" fill="#421A0F" />
    </g>

    {/* Baby's Breath / Small White Floral Sprays */}
    <g fill="#FFFFFF" stroke="#D4A359" strokeWidth="0.5">
      <circle cx="160" cy="35" r="3.5" />
      <circle cx="170" cy="28" r="3" />
      <circle cx="152" cy="25" r="3.5" />
      <circle cx="178" cy="40" r="2.5" />
      
      <circle cx="145" cy="115" r="3.5" />
      <circle cx="155" cy="125" r="3" />
      <circle cx="160" cy="110" r="2.5" />
    </g>
  </svg>
);

// Top Right Woven Kiondo/Lilio Basket & Sage Fabric Swag
export const TopRightBasketAndFabricSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    {/* Draped Sage Green Traditional Cloth */}
    <g id="sage-fabric">
      <path
        d="M80 0 C120 40 160 30 240 10 L240 160 C180 180 140 130 90 80 C60 50 20 30 0 0 Z"
        fill="#3D5A47"
        opacity="0.9"
      />
      <path
        d="M110 0 C145 35 180 25 240 20 L240 120 C190 140 150 90 110 50 Z"
        fill="#4F715B"
        opacity="0.85"
      />
      <path
        d="M150 0 C175 25 200 15 240 25 L240 80 C200 95 170 60 140 30 Z"
        fill="#668B73"
        opacity="0.8"
      />
      {/* Fabric Fold Lines */}
      <path d="M80 0 Q140 70 240 120" stroke="#253C2E" strokeWidth="2" opacity="0.6" />
      <path d="M120 0 Q170 60 240 80" stroke="#253C2E" strokeWidth="1.5" opacity="0.5" />
      <path d="M160 0 Q200 50 240 50" stroke="#1A2D22" strokeWidth="1.5" opacity="0.5" />
    </g>

    {/* Traditional Woven Winnowing Basket / Kiondo Motif */}
    <g id="woven-basket" transform="translate(155, 75)">
      {/* Outer Rim */}
      <circle cx="0" cy="0" r="58" fill="#F7EDDC" stroke="#B8853D" strokeWidth="4" />
      <circle cx="0" cy="0" r="54" stroke="#1E3A2B" strokeWidth="2" strokeDasharray="6 3" />
      
      {/* Terracotta Diamond Tribal Ring */}
      <circle cx="0" cy="0" r="45" fill="#E6C8A0" stroke="#C15C3D" strokeWidth="3" />
      
      {/* Geometric Sawtooth Pattern */}
      <path
        d="M0 -45 L8 -35 L16 -45 L24 -35 L32 -45 L40 -25 L45 0 L35 8 L45 16 L35 24 L45 32 L25 40 L0 45 L-8 35 L-16 45 L-24 35 L-32 45 L-40 25 L-45 0 L-35 -8 L-45 -16 L-35 -24 L-45 -32 L-25 -40 Z"
        fill="#C15C3D"
        opacity="0.85"
      />

      {/* Forest Green Inner Circle */}
      <circle cx="0" cy="0" r="32" fill="#1E3A2B" />
      <circle cx="0" cy="0" r="26" stroke="#D4A359" strokeWidth="2.5" strokeDasharray="4 2" />

      {/* Ochre Center Star Burst */}
      <path
        d="M0 -26 L5 -8 L26 0 L5 8 L0 26 L-5 8 L-26 0 L-5 -8 Z"
        fill="#D4A359"
      />
      <circle cx="0" cy="0" r="7" fill="#C15C3D" />
      <circle cx="0" cy="0" r="3" fill="#FDF8F2" />
    </g>
  </svg>
);

// Bottom Left Clay Water Pot (Jug with Handle), Woven Lid Basket, Small Bowl & Terracotta Draped Cloth
export const BottomLeftClayPotAndDrapeSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 280 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    {/* Draped Sage Green & Terracotta Fabric Base */}
    <g id="draped-fabric-base">
      {/* Sage Green Fabric Underlayer */}
      <path
        d="M0 120 C50 120 100 160 160 210 C210 250 240 280 280 320 L0 320 Z"
        fill="#3B5745"
        opacity="0.95"
      />
      <path d="M0 120 Q90 190 260 320" stroke="#253C2E" strokeWidth="2.5" opacity="0.6" />

      {/* Terracotta Fabric Top Swag */}
      <path
        d="M0 210 C40 210 80 240 140 270 C180 290 220 305 270 320 L0 320 Z"
        fill="#A8482A"
        opacity="0.95"
      />
      <path
        d="M0 245 C30 245 60 265 110 288 C150 305 190 315 240 320 L0 320 Z"
        fill="#8A341A"
        opacity="0.9"
      />
      {/* Fabric Fold Highlights */}
      <path d="M0 210 Q80 260 250 320" stroke="#D86B47" strokeWidth="2" opacity="0.6" />
      <path d="M0 245 Q70 280 210 320" stroke="#5C1F0E" strokeWidth="2.5" opacity="0.7" />
    </g>

    {/* Traditional African Earthenware Clay Jug/Pot with Handle & Stamped Tribal Patterns */}
    <g id="clay-pot-jug" transform="translate(15, 95)">
      {/* Drop Shadow */}
      <ellipse cx="65" cy="182" rx="52" ry="14" fill="#25120B" opacity="0.45" />

      {/* Handle on Right Side */}
      <path
        d="M80 35 C115 35 125 75 88 100"
        stroke="#7A2E16"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M80 35 C112 35 120 75 88 100"
        stroke="#A8482A"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Main Jug Body */}
      <path
        d="M40 0 C40 -12 70 -12 70 0 L66 22 C98 42 110 88 92 125 C75 158 35 158 12 125 C-6 88 6 42 38 22 Z"
        fill="#A8482A"
        stroke="#5C2415"
        strokeWidth="3"
      />

      {/* Pot Mouth Rim */}
      <ellipse cx="55" cy="-2" rx="20" ry="7" fill="#5C2415" />
      <ellipse cx="55" cy="-3" rx="17" ry="5" fill="#C15C3D" />
      <ellipse cx="55" cy="-4" rx="13" ry="3" fill="#3B150A" />

      {/* Neck Tribal Pattern Band */}
      <path d="M42 12 Q55 17 68 12 L67 18 Q55 23 43 18 Z" fill="#3B150A" />
      <path d="M44 14 L48 18 L52 14 L56 18 L60 14 L64 18" stroke="#D4A359" strokeWidth="1.2" fill="none" />

      {/* Main Belly Tribal Diamond & Chevron Band */}
      <path
        d="M10 58 Q55 75 100 58 L103 82 Q55 98 7 82 Z"
        fill="#2D4737"
        stroke="#D4A359"
        strokeWidth="1.5"
      />
      
      {/* Zigzag Chevrons & Diamonds inside main band */}
      <path
        d="M12 66 L22 76 L32 66 L42 76 L52 66 L62 76 L72 66 L82 76 L92 66 L98 72"
        stroke="#FDF8F2"
        strokeWidth="2"
        fill="none"
      />
      <g fill="#A8482A" stroke="#D4A359" strokeWidth="1">
        <polygon points="22,60 26,64 22,68 18,64" />
        <polygon points="42,60 46,64 42,68 38,64" />
        <polygon points="62,60 66,64 62,68 58,64" />
        <polygon points="82,60 86,64 82,68 78,64" />
      </g>

      {/* Lower Triangles / Sawtooth Pattern on Pot */}
      <path
        d="M18 105 L26 120 L34 105 L42 120 L50 105 L58 120 L66 105 L74 120 L82 105"
        stroke="#5C2415"
        strokeWidth="2"
        fill="#7A2E16"
      />

      {/* Pot Highlights & Shadow Curve */}
      <path
        d="M15 35 C3 65 12 110 32 138 C18 110 8 70 24 35 Z"
        fill="#D86B47"
        opacity="0.7"
      />
      <path
        d="M78 35 C98 70 92 115 75 142 C88 115 90 70 70 35 Z"
        fill="#3B150A"
        opacity="0.6"
      />
    </g>

    {/* Woven Basket Pot with Round Lid (Kiondo Lid Basket) */}
    <g id="woven-lid-basket" transform="translate(10, 215)">
      {/* Shadow */}
      <ellipse cx="50" cy="65" rx="52" ry="12" fill="#25120B" opacity="0.4" />

      {/* Basket Base */}
      <ellipse cx="50" cy="35" rx="52" ry="26" fill="#D4A359" stroke="#8A5A1B" strokeWidth="2.5" />
      <path d="M-2 35 C0 55 20 62 50 62 C80 62 100 55 102 35 Z" fill="#B8853D" stroke="#704712" strokeWidth="2" />
      
      {/* Horizontal Woven Coils on Basket */}
      <path d="M2 40 Q50 50 98 40" stroke="#704712" strokeWidth="1.8" fill="none" />
      <path d="M6 46 Q50 56 94 46" stroke="#704712" strokeWidth="1.8" fill="none" />
      <path d="M12 52 Q50 60 88 52" stroke="#704712" strokeWidth="1.8" fill="none" />

      {/* Rounded Lid */}
      <ellipse cx="50" cy="22" rx="50" ry="20" fill="#E8D1B5" stroke="#704712" strokeWidth="2.5" />
      <ellipse cx="50" cy="18" rx="42" ry="15" fill="#C15C3D" opacity="0.85" />
      <ellipse cx="50" cy="15" rx="32" ry="11" fill="#2D4737" />
      <ellipse cx="50" cy="12" rx="20" ry="7" fill="#D4A359" />

      {/* Top Knob Handle on Lid */}
      <circle cx="50" cy="6" r="8" fill="#25120B" stroke="#D4A359" strokeWidth="1.5" />
      <circle cx="50" cy="4" r="4" fill="#704712" />
    </g>

    {/* Small Clay Cup / Bowl in Front with Dot Rim */}
    <g id="small-clay-cup" transform="translate(100, 245)">
      {/* Shadow */}
      <ellipse cx="36" cy="42" rx="36" ry="9" fill="#25120B" opacity="0.4" />

      {/* Cup Body */}
      <path
        d="M6 0 C-4 12 2 35 36 38 C70 35 76 12 66 0 Z"
        fill="#A8482A"
        stroke="#5C2415"
        strokeWidth="2"
      />
      {/* Cup Mouth / Liquid Interior */}
      <ellipse cx="36" cy="0" rx="30" ry="8" fill="#3B150A" stroke="#5C2415" strokeWidth="1.5" />
      <ellipse cx="36" cy="1" rx="26" ry="5" fill="#1C0904" />

      {/* White Dots around Top Rim */}
      <g fill="#FDF8F2">
        <circle cx="12" cy="7" r="1.5" />
        <circle cx="18" cy="10" r="1.5" />
        <circle cx="25" cy="12" r="1.5" />
        <circle cx="33" cy="13" r="1.5" />
        <circle cx="41" cy="12" r="1.5" />
        <circle cx="48" cy="10" r="1.5" />
        <circle cx="54" cy="7" r="1.5" />
      </g>

      {/* Stamped Diamond Row on Small Cup */}
      <path
        d="M12 18 Q36 25 60 18 L62 28 Q36 35 10 28 Z"
        fill="#2D4737"
        stroke="#D4A359"
        strokeWidth="1"
      />
      <path
        d="M14 23 L20 28 L26 23 L32 28 L38 23 L44 28 L50 23 L56 28"
        stroke="#FDF8F2"
        strokeWidth="1.5"
        fill="none"
      />
    </g>
  </svg>
);

// Bottom Right Floral Bouquet SVG
export const BottomRightFloralSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 240 260"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none ${className}`}
  >
    <g transform="translate(240, 260) scale(-1, -1)">
      {/* Reusing rich flora arrangement with inverted coords */}
      {/* Background Leaves */}
      <path d="M40 180 Q10 140 15 90 Q30 110 50 140 Z" fill="#3B5745" opacity="0.85" />
      <path d="M20 150 Q-10 110 5 60 Q20 80 35 115 Z" fill="#4B6E58" opacity="0.75" />
      <path d="M70 210 Q40 180 30 130 Q55 150 75 180 Z" fill="#2D4737" opacity="0.9" />

      {/* Stems */}
      <path d="M60 210 Q30 140 20 60" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M110 130 Q80 70 50 10" stroke="#253C2E" strokeWidth="2.5" strokeLinecap="round" />

      {/* Eucalyptus Leaves */}
      <ellipse cx="35" cy="110" rx="14" ry="9" transform="rotate(-30 35 110)" fill="#688F76" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="25" cy="80" rx="12" ry="8" transform="rotate(-40 25 80)" fill="#789F86" stroke="#2D4737" strokeWidth="1" />
      <ellipse cx="85" cy="75" rx="15" ry="10" transform="rotate(-15 85 75)" fill="#5B8067" stroke="#253C2E" strokeWidth="1" />

      {/* Berries */}
      <g fill="#C15C3D">
        <circle cx="80" cy="120" r="4.5" />
        <circle cx="90" cy="115" r="4" />
        <circle cx="85" cy="128" r="5" />
        <circle cx="120" cy="65" r="4" />
        <circle cx="130" cy="60" r="4.5" />
      </g>

      {/* Large Cream Rose */}
      <g id="cream-rose-br1" transform="translate(60, 40)">
        <path d="M-10 10 C-35 -15 -10 -45 20 -40 C50 -45 70 -15 50 15 C30 40 -10 35 -10 10 Z" fill="#FBF3E6" stroke="#E6D3B8" strokeWidth="1.5" />
        <path d="M-25 0 C-40 30 0 55 30 50 C60 45 65 10 40 -15" fill="#FAF0DF" stroke="#E2CDB0" strokeWidth="1.5" />
        <circle cx="15" cy="0" r="28" fill="#FDF7EE" stroke="#EAD8C1" strokeWidth="1.5" />
        <path d="M0 -15 C0 -30 30 -30 30 -15 C30 0 0 0 0 -15" fill="#F7E4CC" opacity="0.9" />
        <path d="M5 -8 C2 -16 22 -18 20 -6 C18 4 6 2 5 -8" fill="#E8CBA3" />
      </g>

      {/* Terracotta Daisy */}
      <g id="terracotta-flower-br" transform="translate(45, 125)">
        <g fill="#D86B47" stroke="#B04E2D" strokeWidth="1">
          <ellipse cx="0" cy="-28" rx="7" ry="18" />
          <ellipse cx="20" cy="-20" rx="7" ry="18" transform="rotate(35 20 -20)" />
          <ellipse cx="28" cy="0" rx="7" ry="18" transform="rotate(70 28 0)" />
          <ellipse cx="20" cy="20" rx="7" ry="18" transform="rotate(110 20 20)" />
          <ellipse cx="0" cy="28" rx="7" ry="18" transform="rotate(145 0 28)" />
          <ellipse cx="-20" cy="20" rx="7" ry="18" transform="rotate(180 -20 20)" />
          <ellipse cx="-28" cy="0" rx="7" ry="18" transform="rotate(215 -28 0)" />
          <ellipse cx="-20" cy="-20" rx="7" ry="18" transform="rotate(250 -20 -20)" />
        </g>
        <circle cx="0" cy="0" r="11" fill="#6B2E1C" stroke="#D4A359" strokeWidth="2" />
        <circle cx="0" cy="0" r="7" fill="#421A0F" />
      </g>

      {/* Baby's Breath */}
      <g fill="#FFFFFF" stroke="#D4A359" strokeWidth="0.5">
        <circle cx="160" cy="35" r="3.5" />
        <circle cx="170" cy="28" r="3" />
        <circle cx="145" cy="115" r="3.5" />
      </g>
    </g>
  </svg>
);

// Top Tribal Diamond Emblem SVG - Matches traditional boho geometric symbol
export const TopEmblemSVG: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`flex items-center justify-center my-3 ${className}`}>
    <svg
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm sm:max-w-md h-auto drop-shadow-2xs select-none"
    >
      {/* Colors: Terracotta/Rust = #A8482A, Earthy Sage Green = #405847, Line = #8C6F5E */}
      
      {/* Horizontal Divider Lines */}
      <line x1="22" y1="60" x2="110" y2="60" stroke="#8C6F5E" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="60" r="2" fill="#8C6F5E" />

      <line x1="210" y1="60" x2="298" y2="60" stroke="#8C6F5E" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="300" cy="60" r="2" fill="#8C6F5E" />

      {/* Left Terracotta Rays & Dots */}
      <path d="M 108 53 L 84 46 C 94 51 98 54 108 55 Z" fill="#A8482A" />
      <circle cx="72" cy="43" r="2.5" fill="#A8482A" />
      
      <path d="M 108 67 L 84 74 C 94 69 98 66 108 65 Z" fill="#A8482A" />
      <circle cx="72" cy="77" r="2.5" fill="#A8482A" />

      {/* Right Terracotta Rays & Dots */}
      <path d="M 212 53 L 236 46 C 226 51 222 54 212 55 Z" fill="#A8482A" />
      <circle cx="248" cy="43" r="2.5" fill="#A8482A" />

      <path d="M 212 67 L 236 74 C 226 69 222 66 212 65 Z" fill="#A8482A" />
      <circle cx="248" cy="77" r="2.5" fill="#A8482A" />

      {/* Outer Terracotta Main Diamond */}
      <polygon points="160,26 204,60 160,94 116,60" fill="none" stroke="#A8482A" strokeWidth="2.5" strokeLinejoin="miter" />

      {/* Top Cap Diamond & Connection */}
      <line x1="160" y1="26" x2="160" y2="18" stroke="#A8482A" strokeWidth="2" />
      <polygon points="160,6 168,14 160,22 152,14" fill="#FDF8F2" stroke="#A8482A" strokeWidth="2" strokeLinejoin="miter" />
      <polygon points="160,11 163,14 160,17 157,14" fill="#A8482A" />

      {/* Bottom Cap Diamond & Connection */}
      <line x1="160" y1="94" x2="160" y2="102" stroke="#A8482A" strokeWidth="2" />
      <polygon points="160,98 168,106 160,114 152,106" fill="#FDF8F2" stroke="#A8482A" strokeWidth="2" strokeLinejoin="miter" />
      <polygon points="160,103 163,106 160,109 157,106" fill="#A8482A" />

      {/* Bottom Diagonal Hash Strokes */}
      <line x1="149" y1="96" x2="140" y2="105" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="171" y1="96" x2="180" y2="105" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Flanking External Diamonds & Accents */}
      {/* Upper Left */}
      <polygon points="126,33 130,37 126,41 122,37" fill="#A8482A" />
      <line x1="135" y1="28" x2="139" y2="24" stroke="#405847" strokeWidth="2" strokeLinecap="round" />
      <line x1="139" y1="33" x2="143" y2="29" stroke="#405847" strokeWidth="2" strokeLinecap="round" />

      {/* Upper Right */}
      <polygon points="194,33 198,37 194,41 190,37" fill="#A8482A" />
      <line x1="185" y1="28" x2="181" y2="24" stroke="#405847" strokeWidth="2" strokeLinecap="round" />
      <line x1="181" y1="33" x2="177" y2="29" stroke="#405847" strokeWidth="2" strokeLinecap="round" />

      {/* Lower Left */}
      <polygon points="126,81 130,85 126,89 122,85" fill="#405847" />
      <line x1="134" y1="93" x2="141" y2="86" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Lower Right */}
      <polygon points="194,81 198,85 194,89 190,85" fill="#405847" />
      <line x1="186" y1="93" x2="179" y2="86" stroke="#A8482A" strokeWidth="2.5" strokeLinecap="round" />

      {/* INNER GREEN MOTIF */}
      <g stroke="#405847" fill="none">
        {/* Inner Diamond */}
        <polygon points="160,48 172,60 160,72 148,60" strokeWidth="2.5" strokeLinejoin="miter" />
        <polygon points="160,57 163,60 160,63 157,60" fill="#405847" stroke="none" />

        {/* Top Green Chevron & Trunk */}
        <line x1="160" y1="48" x2="160" y2="34" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 152 42 L 160 48 L 168 42" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="152" cy="44" r="1.5" fill="#405847" stroke="none" />
        <circle cx="168" cy="44" r="1.5" fill="#405847" stroke="none" />

        {/* Bottom Green Chevron & Trunk */}
        <line x1="160" y1="72" x2="160" y2="86" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 152 78 L 160 72 L 168 78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="152" cy="76" r="1.5" fill="#405847" stroke="none" />
        <circle cx="168" cy="76" r="1.5" fill="#405847" stroke="none" />

        {/* Left & Right Inner Extensions */}
        <path d="M 148 60 L 138 60 M 138 56 L 138 64" strokeWidth="2" strokeLinecap="round" />
        <path d="M 172 60 L 182 60 M 182 56 L 182 64" strokeWidth="2" strokeLinecap="round" />
        <circle cx="144" cy="54" r="1.5" fill="#405847" stroke="none" />
        <circle cx="144" cy="66" r="1.5" fill="#405847" stroke="none" />
        <circle cx="176" cy="54" r="1.5" fill="#405847" stroke="none" />
        <circle cx="176" cy="66" r="1.5" fill="#405847" stroke="none" />
      </g>
    </svg>
  </div>
);

// Vertical Side Geometric Tribal Border Pattern Component matching the Ankara Wax photo
export const SideTribalBorderSVG: React.FC<{ side: 'left' | 'right'; className?: string }> = ({ side, className = '' }) => (
  <svg
    viewBox="0 0 32 600"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`h-full w-6 sm:w-8 pointer-events-none ${className}`}
  >
    <defs>
      <pattern id="ankara-side-pattern" width="32" height="60" patternUnits="userSpaceOnUse">
        {/* Ebony Black Background */}
        <rect width="32" height="60" fill="#111827" />

        {/* White Stippled Dots Texture */}
        <g fill="#FAF6EE" opacity="0.45">
          <circle cx="4" cy="8" r="0.8" />
          <circle cx="28" cy="8" r="0.8" />
          <circle cx="4" cy="22" r="0.8" />
          <circle cx="28" cy="22" r="0.8" />
          <circle cx="4" cy="38" r="0.8" />
          <circle cx="28" cy="38" r="0.8" />
          <circle cx="4" cy="52" r="0.8" />
          <circle cx="28" cy="52" r="0.8" />
        </g>

        {/* Inner Gold Foil Framing Lines */}
        <line x1="2" y1="0" x2="2" y2="60" stroke="#EAB308" strokeWidth="1.2" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#EAB308" strokeWidth="1.2" />

        {/* Sun Gold Yellow Outer Chevron */}
        <path d="M 6 30 L 16 10 L 26 30 L 16 50 Z" fill="#EAB308" stroke="#111827" strokeWidth="0.8" />

        {/* Vivid Emerald Green Inner Chevron */}
        <path d="M 6 30 L 16 16 L 26 30 L 16 44 Z" fill="#16A34A" />

        {/* Terracotta Orange Core Diamond */}
        <polygon points="16,22 22,30 16,38 10,30" fill="#EA580C" />
        <polygon points="16,25 19,30 16,35 13,30" fill="#FAF6EE" />

        {/* Small Connector Beads */}
        <circle cx="16" cy="4" r="2" fill="#EAB308" />
        <circle cx="16" cy="56" r="2" fill="#EAB308" />
      </pattern>
    </defs>
    <rect width="32" height="100%" fill="url(#ankara-side-pattern)" />
  </svg>
);

/* Rich African Kente & Mudcloth Geometric Pattern Banner */
export const AfricanPatternBanner: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <svg 
      viewBox="0 0 1200 40" 
      preserveAspectRatio="none" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-8 sm:h-10"
    >
      <defs>
        <pattern id="african-banner-pattern" width="80" height="40" patternUnits="userSpaceOnUse">
          {/* Deep Forest Green Base */}
          <rect width="80" height="40" fill="#1E3A2B" />
          
          {/* Gold & Terracotta Top/Bottom Borders */}
          <rect y="0" width="80" height="3" fill="#D4A359" />
          <rect y="3" width="80" height="2" fill="#C15C3D" />
          <rect y="35" width="80" height="2" fill="#C15C3D" />
          <rect y="37" width="80" height="3" fill="#D4A359" />

          {/* Kente & Mudcloth Geometric Diamonds */}
          <path d="M 0 20 L 20 6 L 40 20 L 20 34 Z" fill="#C15C3D" />
          <path d="M 0 20 L 20 10 L 40 20 L 20 30 Z" fill="#D4A359" />
          <polygon points="20,15 25,20 20,25 15,20" fill="#FDF8F2" />

          <path d="M 40 20 L 60 6 L 80 20 L 60 34 Z" fill="#D4A359" />
          <path d="M 40 20 L 60 10 L 80 20 L 60 30 Z" fill="#C15C3D" />
          <polygon points="60,15 65,20 60,25 55,20" fill="#FDF8F2" />

          {/* Sawtooth Chevron Teeth */}
          <polygon points="0,5 10,11 20,5 30,11 40,5 50,11 60,5 70,11 80,5" fill="#D4A359" />
          <polygon points="0,35 10,29 20,35 30,29 40,35 50,29 60,35 70,29 80,35" fill="#D4A359" />
        </pattern>
      </defs>
      <rect width="1200" height="40" fill="url(#african-banner-pattern)" />
    </svg>
  </div>
);

/* Traditional Kenyan Kikoi Woven Stripe Border */
export const KikoiBorder: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full overflow-hidden ${className}`}>
    <div className="h-2 w-full flex">
      <div className="h-full w-1/8 bg-[#C15C3D]" />
      <div className="h-full w-1/8 bg-[#D4A359]" />
      <div className="h-full w-1/8 bg-[#1E3A2B]" />
      <div className="h-full w-1/8 bg-[#FDF8F2]" />
      <div className="h-full w-1/8 bg-[#C15C3D]" />
      <div className="h-full w-1/8 bg-[#D4A359]" />
      <div className="h-full w-1/8 bg-[#1E3A2B]" />
      <div className="h-full w-1/8 bg-[#FDF8F2]" />
    </div>
  </div>
);

/* Authentic Cowrie Shell SVG (Symbol of African Royalty, Prosperity & Dowry) */
export const CowrieShellIcon: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <ellipse cx="12" cy="12" rx="8" ry="10.5" fill="#FBF7F0" stroke="#D4A359" strokeWidth="1.2" />
    <path d="M12 3.5C10.2 5.8 9.5 9 9.5 12C9.5 15 10.2 18.2 12 20.5C13.8 18.2 14.5 15 14.5 12C14.5 9 13.8 5.8 12 3.5Z" fill="#C15C3D" opacity="0.85" />
    <path d="M10 7.5H14M9.5 9.8H14.5M9.3 12H14.7M9.5 14.2H14.5M10 16.5H14" stroke="#FBF7F0" strokeWidth="0.9" strokeLinecap="round" />
    <ellipse cx="12" cy="12" rx="1.2" ry="8.5" fill="#1E3A2B" opacity="0.25" />
  </svg>
);

/* Intricate African Beaded Marriage Collar Arch (Mathaa / Ngasya Traditional Beading) */
export const AfricanBeadedCollar: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 320 85" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-full max-w-sm mx-auto ${className}`}
  >
    {/* Outer Golden Beaded Arc */}
    <path d="M15 10 C 95 75, 225 75, 305 10" stroke="#D4A359" strokeWidth="2.5" strokeDasharray="4 3" />
    
    {/* Terracotta Chevron Ring */}
    <path d="M 30 18 L 40 34 L 50 18 L 60 36 L 70 20 L 80 40 L 90 22 L 100 42 L 110 24 L 120 44 L 130 24 L 140 45 L 150 25 L 160 46 L 170 25 L 180 45 L 190 24 L 200 44 L 210 24 L 220 42 L 230 22 L 240 40 L 250 20 L 260 36 L 270 18 L 280 34 L 290 18" 
      stroke="#C15C3D" strokeWidth="2" fill="none" strokeLinejoin="round" />
      
    {/* Forest Green Arc */}
    <path d="M 35 25 C 105 80, 215 80, 285 25" stroke="#1E3A2B" strokeWidth="3" />
    
    {/* Beaded Ring Dots (Terracotta, Ochre Gold, Forest Green, Ivory) */}
    {[
      { cx: 50, cy: 30, color: "#D4A359" },
      { cx: 70, cy: 39, color: "#C15C3D" },
      { cx: 90, cy: 47, color: "#1E3A2B" },
      { cx: 110, cy: 53, color: "#FDF8F2" },
      { cx: 130, cy: 57, color: "#D4A359" },
      { cx: 150, cy: 59, color: "#C15C3D" },
      { cx: 160, cy: 60, color: "#D4A359" },
      { cx: 170, cy: 59, color: "#C15C3D" },
      { cx: 190, cy: 57, color: "#D4A359" },
      { cx: 210, cy: 53, color: "#FDF8F2" },
      { cx: 230, cy: 47, color: "#1E3A2B" },
      { cx: 250, cy: 39, color: "#C15C3D" },
      { cx: 270, cy: 30, color: "#D4A359" },
    ].map((bead, i) => (
      <circle key={i} cx={bead.cx} cy={bead.cy} r="3.5" fill={bead.color} stroke="#1E3A2B" strokeWidth="0.5" />
    ))}

    {/* Center Hanging Cowrie Shell Pendant */}
    <g transform="translate(151, 56)">
      <ellipse cx="9" cy="11" rx="6.5" ry="9" fill="#FDF8F2" stroke="#D4A359" strokeWidth="1.2" />
      <path d="M 9 4 C 7.5 6.5, 7 9.5, 7 11 C 7 12.5, 7.5 15.5, 9 18 C 10.5 15.5, 11 12.5, 11 11 C 11 9.5, 10.5 6.5, 9 4 Z" fill="#C15C3D" opacity="0.85" />
    </g>
  </svg>
);

/* Floral Rosette Bow Emblem (Directly inspired by top neckline rosette in uploaded menu photo) */
export const FloralRosetteBowSVG: React.FC<{ className?: string; size?: number }> = ({ className = "", size = 48 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-md ${className}`}
  >
    {/* Tied Ankara Wax Fabric Bow Ribbons (Sun Yellow & Emerald Green) */}
    <g id="ribbon-bow">
      {/* Left Loop */}
      <path d="M 28 32 C 10 24, 2 34, 12 42 C 22 48, 28 36, 28 32 Z" fill="#EAB308" stroke="#111827" strokeWidth="1" />
      <path d="M 26 33 C 14 28, 8 35, 15 41 C 22 45, 26 36, 26 33 Z" fill="#16A34A" />
      {/* Right Loop */}
      <path d="M 32 32 C 50 24, 58 34, 48 42 C 38 48, 32 36, 32 32 Z" fill="#EAB308" stroke="#111827" strokeWidth="1" />
      <path d="M 34 33 C 46 28, 52 35, 45 41 C 38 45, 34 36, 34 33 Z" fill="#16A34A" />
      
      {/* Hanging Ribbon Tails */}
      <path d="M 26 35 L 16 56 L 24 52 L 29 38 Z" fill="#EA580C" stroke="#111827" strokeWidth="0.8" />
      <path d="M 34 35 L 44 56 L 36 52 L 31 38 Z" fill="#EA580C" stroke="#111827" strokeWidth="0.8" />
    </g>

    {/* Ivory Rosette Flower */}
    <g id="ivory-rosette" transform="translate(30, 26)">
      {/* 8 Outer Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <path 
          key={i} 
          d="M 0 0 C -6 -12, 6 -12, 0 0" 
          fill="#FAF6EE" 
          stroke="#E5A91A" 
          strokeWidth="1" 
          transform={`rotate(${angle})`} 
        />
      ))}
      {/* Inner Petal Ring */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
        <path 
          key={i} 
          d="M 0 0 C -4 -8, 4 -8, 0 0" 
          fill="#FDFBF7" 
          stroke="#D97706" 
          strokeWidth="0.8" 
          transform={`rotate(${angle})`} 
        />
      ))}
      {/* Golden Bead Center */}
      <circle cx="0" cy="0" r="4.5" fill="#EAB308" stroke="#111827" strokeWidth="1" />
      <circle cx="0" cy="0" r="2.5" fill="#FEF08A" />
      <circle cx="0" cy="0" r="1" fill="#78350F" />
    </g>
  </svg>
);

/* 8-Pointed Gold Star Divider (Directly from uploaded menu text dividers) */
export const EightPointStarDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-3 my-2.5 ${className}`}>
    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#EAB308] to-[#D97706]" />
    
    {/* Gold 8-Point Star Emblem */}
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#EAB308" stroke="#B45309" strokeWidth="1" />
      <path d="M12 6L13.5 10.5L18 12L13.5 13.5L12 18L10.5 13.5L6 12L10.5 10.5L12 6Z" fill="#FEF08A" />
      <circle cx="12" cy="12" r="2" fill="#78350F" />
    </svg>

    <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#EAB308] to-[#D97706]" />
  </div>
);

/* Rich African Ankara Wax Pattern Banner (Sun Yellow, Emerald Green, Terracotta, Ebony & White Dots) */
export const AnkaraWaxPatternBanner: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <svg 
      viewBox="0 0 1200 44" 
      preserveAspectRatio="none" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-9 sm:h-11"
    >
      <defs>
        <pattern id="ankara-menu-pattern" width="100" height="44" patternUnits="userSpaceOnUse">
          {/* Ebony Black Base with Textured White Dots */}
          <rect width="100" height="44" fill="#111827" />
          
          {/* Stippled White Dot Texture */}
          <g fill="#FAF6EE" opacity="0.4">
            <circle cx="5" cy="5" r="0.8" />
            <circle cx="15" cy="12" r="0.8" />
            <circle cx="25" cy="5" r="0.8" />
            <circle cx="35" cy="12" r="0.8" />
            <circle cx="45" cy="5" r="0.8" />
            <circle cx="55" cy="12" r="0.8" />
            <circle cx="65" cy="5" r="0.8" />
            <circle cx="75" cy="12" r="0.8" />
            <circle cx="85" cy="5" r="0.8" />
            <circle cx="95" cy="12" r="0.8" />

            <circle cx="5" cy="39" r="0.8" />
            <circle cx="15" cy="32" r="0.8" />
            <circle cx="25" cy="39" r="0.8" />
            <circle cx="35" cy="32" r="0.8" />
            <circle cx="45" cy="39" r="0.8" />
            <circle cx="55" cy="32" r="0.8" />
            <circle cx="65" cy="39" r="0.8" />
            <circle cx="75" cy="32" r="0.8" />
            <circle cx="85" cy="39" r="0.8" />
            <circle cx="95" cy="32" r="0.8" />
          </g>

          {/* Top and Bottom Gold Rails */}
          <rect y="0" width="100" height="3" fill="#EAB308" />
          <rect y="41" width="100" height="3" fill="#EAB308" />

          {/* Large Sun Gold Yellow Outer Chevron */}
          <path d="M 0 22 L 25 4 L 50 22 L 25 40 Z" fill="#EAB308" stroke="#111827" strokeWidth="1" />
          {/* Nested Vivid Emerald Green Inner Chevron */}
          <path d="M 0 22 L 25 9 L 50 22 L 25 35 Z" fill="#16A34A" />
          {/* Inner Terracotta Orange Diamond Core */}
          <polygon points="25,14 33,22 25,30 17,22" fill="#EA580C" />
          <polygon points="25,17 29,22 25,27 21,22" fill="#FAF6EE" />

          {/* Second Repeated Chevron Pair */}
          <path d="M 50 22 L 75 4 L 100 22 L 75 40 Z" fill="#EAB308" stroke="#111827" strokeWidth="1" />
          <path d="M 50 22 L 75 9 L 100 22 L 75 35 Z" fill="#16A34A" />
          <polygon points="75,14 83,22 75,30 67,22" fill="#EA580C" />
          <polygon points="75,17 79,22 75,27 71,22" fill="#FAF6EE" />
        </pattern>
      </defs>
      <rect width="1200" height="44" fill="url(#ankara-menu-pattern)" />
    </svg>
  </div>
);

/* African Geometric Watermark Pattern Background (Mudcloth/Kente Mesh) */
export const AfricanGeometricWatermark: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    className={`absolute inset-0 w-full h-full pointer-events-none opacity-[0.06] ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="african-watermark-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
        {/* Chevron Grid */}
        <path d="M0 30 L15 15 L30 30 L45 15 L60 30" stroke="#1E3A2B" strokeWidth="1.5" fill="none" />
        <path d="M0 45 L15 30 L30 45 L45 30 L60 45" stroke="#C15C3D" strokeWidth="1.5" fill="none" />
        {/* Diamond Accents */}
        <polygon points="30,5 35,10 30,15 25,10" fill="#D4A359" />
        <polygon points="30,35 35,40 30,45 25,40" fill="#C15C3D" />
        {/* Cross hatch lines */}
        <line x1="10" y1="50" x2="20" y2="60" stroke="#1E3A2B" strokeWidth="1" />
        <line x1="40" y1="50" x2="50" y2="60" stroke="#1E3A2B" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#african-watermark-pattern)" />
  </svg>
);

/* Authentic Tribal Corner Brackets with Chevron Motifs */
export const TribalCornerBracket: React.FC<{ position: 'tl' | 'tr' | 'bl' | 'br'; className?: string }> = ({ position, className = "" }) => {
  const transforms = {
    tl: "",
    tr: "rotate-90",
    br: "rotate-180",
    bl: "-rotate-90",
  };

  return (
    <svg 
      width="40" 
      height="40" 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`absolute ${transforms[position]} ${className}`}
    >
      {/* Outer L-Frame */}
      <path d="M 2 38 V 9 C 2 5.1 5.1 2 9 2 H 38" stroke="#D4A359" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M 6 34 V 12 C 6 8.7 8.7 6 12 6 H 34" stroke="#C15C3D" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
      {/* Inner African Chevron Motif */}
      <path d="M 8 26 L 16 18 L 8 10" stroke="#C15C3D" strokeWidth="2" fill="none" />
      <path d="M 10 8 L 18 16 L 26 8" stroke="#1E3A2B" strokeWidth="2" fill="none" />
      <circle cx="7" cy="7" r="3" fill="#D4A359" />
      <polygon points="18,18 22,14 26,18 22,22" fill="#C15C3D" />
    </svg>
  );
};

/* End-to-End Tribal Geometric Pattern Border Line */
export const TribalPatternLine: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <svg 
      viewBox="0 0 1200 24" 
      preserveAspectRatio="none" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="w-full h-5 sm:h-6 md:h-7 block"
    >
      <defs>
        <pattern id="tribal-end-to-end-line" width="60" height="24" patternUnits="userSpaceOnUse">
          {/* Ebony Black Base Line */}
          <rect width="60" height="24" fill="#111827" />
          
          {/* Top & Bottom Sun Gold Rails */}
          <rect y="0" width="60" height="2" fill="#EAB308" />
          <rect y="22" width="60" height="2" fill="#EAB308" />
          
          {/* Sawtooth Chevron & Diamond Geometric Tribal Motifs */}
          <polygon points="0,12 10,2 20,12 10,22" fill="#EAB308" />
          <polygon points="10,12 15,7 20,12 15,17" fill="#16A34A" />
          <polygon points="15,12 17.5,9.5 20,12 17.5,14.5" fill="#EA580C" />

          <polygon points="20,12 30,2 40,12 30,22" fill="#EA580C" />
          <polygon points="30,12 35,7 40,12 35,17" fill="#EAB308" />
          <polygon points="35,12 37.5,9.5 40,12 37.5,14.5" fill="#FAF6EE" />

          <polygon points="40,12 50,2 60,12 50,22" fill="#16A34A" />
          <polygon points="50,12 55,7 60,12 55,17" fill="#EA580C" />
          <polygon points="55,12 57.5,9.5 60,12 57.5,14.5" fill="#EAB308" />

          {/* Stippled White Dot Texture */}
          <circle cx="5" cy="12" r="1" fill="#FAF6EE" opacity="0.8" />
          <circle cx="25" cy="12" r="1" fill="#FAF6EE" opacity="0.8" />
          <circle cx="45" cy="12" r="1" fill="#FAF6EE" opacity="0.8" />
        </pattern>
      </defs>
      <rect width="1200" height="24" fill="url(#tribal-end-to-end-line)" />
    </svg>
  </div>
);

/* Overlapping African Woven Baskets Motif (Matching User Uploaded Image) */
export const UploadedBasketMotifsSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 280 220" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`pointer-events-none drop-shadow-md ${className}`}
  >
    {/* Secondary Top-Right Woven Basket (Blue, Gold, Red) */}
    <g id="secondary-basket" transform="translate(160, 60)">
      <circle cx="0" cy="0" r="58" fill="#D99B26" stroke="#9A2222" strokeWidth="3" />
      <circle cx="0" cy="0" r="52" fill="#1E5AA8" />
      <g fill="#D99B26">
        <polygon points="0,-52 8,-35 -8,-35" />
        <polygon points="0,52 8,35 -8,35" />
        <polygon points="-52,0 -35,8 -35,-8" />
        <polygon points="52,0 35,8 35,-8" />
        <polygon points="-36,-36 -20,-28 -28,-20" fill="#B82A2A" />
        <polygon points="36,-36 20,-28 28,-20" fill="#B82A2A" />
        <polygon points="-36,36 -20,28 -28,20" fill="#B82A2A" />
        <polygon points="36,36 20,28 28,20" fill="#B82A2A" />
      </g>
      <circle cx="0" cy="0" r="32" fill="#B82A2A" stroke="#D99B26" strokeWidth="2" />
      <circle cx="0" cy="0" r="20" fill="#E5B22B" stroke="#1E5AA8" strokeWidth="2" />
      <circle cx="0" cy="0" r="10" fill="#8B1E1E" />
      <circle cx="0" cy="0" r="4" fill="#FBF3E6" />
    </g>

    {/* Primary Foreground Woven Basket (Maroon, Gold, Straw) */}
    <g id="primary-basket" transform="translate(85, 85)">
      <circle cx="0" cy="0" r="82" fill="#7A1919" stroke="#3D0C0C" strokeWidth="4" />
      <circle cx="0" cy="0" r="76" fill="#8B1E1E" />
      <path 
        d="M 0 -76 L 12 -54 L 28 -70 L 32 -46 L 52 -58 L 48 -34 L 68 -38 L 56 -18 L 74 -12 L 58 0 L 74 12 L 56 18 L 68 38 L 48 34 L 52 58 L 32 46 L 28 70 L 12 54 L 0 76 L -12 54 L -28 70 L -32 46 L -52 58 L -48 34 L -68 38 L -56 18 L -74 12 L -58 0 L -74 -12 L -56 -18 L -68 -38 L -48 -34 L -52 -58 L -32 -46 L -28 -70 L -12 -54 Z" 
        fill="#D99B26" 
        stroke="#5C1313" 
        strokeWidth="1.5"
      />
      <circle cx="0" cy="0" r="46" fill="#8B1E1E" stroke="#D99B26" strokeWidth="2" />
      <circle cx="0" cy="0" r="34" fill="#E8D9B5" stroke="#7A1919" strokeWidth="2" />
      <circle cx="0" cy="0" r="24" stroke="#C2B28B" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="0" cy="0" r="16" stroke="#C2B28B" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="0" cy="0" r="8" stroke="#7A1919" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="3" fill="#3D0C0C" />
    </g>
  </svg>
);

/* Vertical Geometric Ribbon Pattern (Matching User Uploaded Image) */
export const UploadedVerticalRibbonSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 36 600" 
    preserveAspectRatio="none" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-full h-full block ${className}`}
  >
    <defs>
      <pattern id="vertical-tribal-ribbon-pattern" width="36" height="120" patternUnits="userSpaceOnUse">
        <rect width="36" height="120" fill="#FAF6EE" />
        <g fill="#B82A2A">
          <polygon points="0,0 5,6 0,12" />
          <polygon points="0,12 5,18 0,24" />
          <polygon points="0,24 5,30 0,36" />
          <polygon points="0,36 5,42 0,48" />
          <polygon points="0,48 5,54 0,60" />
          <polygon points="0,60 5,66 0,72" />
          <polygon points="0,72 5,78 0,84" />
          <polygon points="0,84 5,90 0,96" />
          <polygon points="0,96 5,102 0,108" />
          <polygon points="0,108 5,114 0,120" />

          <polygon points="36,0 31,6 36,12" />
          <polygon points="36,12 31,18 36,24" />
          <polygon points="36,24 31,30 36,36" />
          <polygon points="36,36 31,42 36,48" />
          <polygon points="36,48 31,54 36,60" />
          <polygon points="36,60 31,66 36,72" />
          <polygon points="36,72 31,78 36,84" />
          <polygon points="36,84 31,90 36,96" />
          <polygon points="36,96 31,102 36,108" />
          <polygon points="36,108 31,114 36,120" />

          <rect x="5" y="0" width="2" height="120" />
          <rect x="29" y="0" width="2" height="120" />
        </g>
        <g fill="#111827" stroke="#111827">
          <polygon points="8,10 28,10 18,22" />
          <polygon points="8,34 28,34 18,22" />
          <line x1="12" y1="14" x2="24" y2="14" stroke="#FAF6EE" strokeWidth="1" />
          <line x1="14" y1="18" x2="22" y2="18" stroke="#FAF6EE" strokeWidth="1" />
          <line x1="12" y1="30" x2="24" y2="30" stroke="#FAF6EE" strokeWidth="1" />
          <line x1="14" y1="26" x2="22" y2="26" stroke="#FAF6EE" strokeWidth="1" />

          <line x1="7" y1="38" x2="29" y2="38" stroke="#111827" strokeWidth="1.5" />

          <line x1="10" y1="42" x2="10" y2="52" stroke="#111827" strokeWidth="1.5" />
          <line x1="14" y1="42" x2="14" y2="52" stroke="#111827" strokeWidth="1.5" />
          <line x1="18" y1="42" x2="18" y2="52" stroke="#111827" strokeWidth="1.5" />
          <line x1="22" y1="42" x2="22" y2="52" stroke="#111827" strokeWidth="1.5" />
          <line x1="26" y1="42" x2="26" y2="52" stroke="#111827" strokeWidth="1.5" />

          <line x1="7" y1="56" x2="29" y2="56" stroke="#111827" strokeWidth="1.5" />

          <text x="18" y="68" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" fill="#111827" stroke="none">
            X • X
          </text>
          <text x="18" y="77" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" fill="#111827" stroke="none">
            • X •
          </text>

          <line x1="7" y1="82" x2="29" y2="82" stroke="#111827" strokeWidth="1.5" />

          <polygon points="8,86 28,86 18,98" />
          <line x1="12" y1="90" x2="24" y2="90" stroke="#FAF6EE" strokeWidth="1" />
          <polygon points="11,102 25,102 18,112" />
          
          <line x1="7" y1="116" x2="29" y2="116" stroke="#111827" strokeWidth="1.5" />
        </g>
      </pattern>
    </defs>
    <rect width="36" height="600" fill="url(#vertical-tribal-ribbon-pattern)" />
  </svg>
);

/* Horizontal Geometric Ribbon Pattern (Matching User Uploaded Image) */
export const UploadedHorizontalRibbonSVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 600 36" 
    preserveAspectRatio="none" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`w-full h-full block ${className}`}
  >
    <defs>
      <pattern id="horizontal-tribal-ribbon-pattern" width="120" height="36" patternUnits="userSpaceOnUse">
        <rect width="120" height="36" fill="#FAF6EE" />
        <g fill="#B82A2A">
          <polygon points="0,0 6,5 12,0" />
          <polygon points="12,0 18,5 24,0" />
          <polygon points="24,0 30,5 36,0" />
          <polygon points="36,0 42,5 48,0" />
          <polygon points="48,0 54,5 60,0" />
          <polygon points="60,0 66,5 72,0" />
          <polygon points="72,0 78,5 84,0" />
          <polygon points="84,0 90,5 96,0" />
          <polygon points="96,0 102,5 108,0" />
          <polygon points="108,0 114,5 120,0" />

          <polygon points="0,36 6,31 12,36" />
          <polygon points="12,36 18,31 24,36" />
          <polygon points="24,36 30,31 36,36" />
          <polygon points="36,36 42,31 48,36" />
          <polygon points="48,36 54,31 60,36" />
          <polygon points="60,36 66,31 72,36" />
          <polygon points="72,36 78,31 84,36" />
          <polygon points="84,36 90,31 96,36" />
          <polygon points="96,36 102,31 108,36" />
          <polygon points="108,36 114,31 120,36" />

          <rect x="0" y="5" width="120" height="2" />
          <rect x="0" y="29" width="120" height="2" />
        </g>
        <g fill="#111827" stroke="#111827">
          <polygon points="10,8 10,28 22,18" />
          <polygon points="34,8 34,28 22,18" />
          <line x1="38" y1="7" x2="38" y2="29" stroke="#111827" strokeWidth="1.5" />

          <line x1="42" y1="10" x2="52" y2="10" stroke="#111827" strokeWidth="1.5" />
          <line x1="42" y1="14" x2="52" y2="14" stroke="#111827" strokeWidth="1.5" />
          <line x1="42" y1="18" x2="52" y2="18" stroke="#111827" strokeWidth="1.5" />
          <line x1="42" y1="22" x2="52" y2="22" stroke="#111827" strokeWidth="1.5" />
          <line x1="42" y1="26" x2="52" y2="26" stroke="#111827" strokeWidth="1.5" />

          <line x1="56" y1="7" x2="56" y2="29" stroke="#111827" strokeWidth="1.5" />

          <text x="70" y="22" fontSize="10" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold" fill="#111827" stroke="none">
            X • X
          </text>

          <line x1="82" y1="7" x2="82" y2="29" stroke="#111827" strokeWidth="1.5" />

          <polygon points="86,8 86,28 98,18" />
          <polygon points="102,11 102,25 112,18" />

          <line x1="116" y1="7" x2="116" y2="29" stroke="#111827" strokeWidth="1.5" />
        </g>
      </pattern>
    </defs>
    <rect width="600" height="36" fill="url(#horizontal-tribal-ribbon-pattern)" />
  </svg>
);

/* Tribal Diamond Geometric Symbol (Matching User Uploaded Image) */
export const UploadedTribalDiamondSymbolSVG: React.FC<{ className?: string; size?: number }> = ({ 
  className = "", 
  size = 140 
}) => {
  const width = size;
  const height = Math.round(size * 0.65);

  return (
    <svg 
      viewBox="0 0 240 150" 
      width={width} 
      height={height} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={`mx-auto block ${className}`}
    >
      {/* Horizontal Divider Lines & Terminal Dots */}
      <g stroke="#6A5C52" strokeWidth="1">
        <line x1="12" y1="75" x2="72" y2="75" />
        <line x1="168" y1="75" x2="228" y2="75" />
      </g>
      <circle cx="12" cy="75" r="1.5" fill="#6A5C52" />
      <circle cx="228" cy="75" r="1.5" fill="#6A5C52" />

      {/* Main Terracotta Center Diamond Frame */}
      <polygon 
        points="120,32 168,75 120,118 72,75" 
        fill="none" 
        stroke="#A44023" 
        strokeWidth="3.5" 
        strokeLinejoin="miter" 
      />

      {/* Top Cap Diamond */}
      <polygon 
        points="120,12 131,23 120,34 109,23" 
        fill="#FAF6EE" 
        stroke="#A44023" 
        strokeWidth="2.5" 
      />
      <polygon 
        points="120,19 125,23 120,27 115,23" 
        fill="#A44023" 
      />

      {/* Bottom Cap Diamond */}
      <polygon 
        points="120,116 131,127 120,138 109,127" 
        fill="#FAF6EE" 
        stroke="#A44023" 
        strokeWidth="2.5" 
      />
      <polygon 
        points="120,123 125,127 120,131 115,127" 
        fill="#A44023" 
      />

      {/* Inner Green Geometric Pattern */}
      <g fill="#4F6052" stroke="#4F6052">
        {/* Central Inner Green Diamond */}
        <polygon 
          points="120,54 138,75 120,96 102,75" 
          fill="none" 
          strokeWidth="3.5" 
        />
        <polygon 
          points="120,67 127,75 120,83 113,75" 
          fill="#4F6052" 
        />

        {/* Inner Green Accents / Spikes */}
        <path d="M 120 42 L 120 50" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 120 100 L 120 108" strokeWidth="2.5" strokeLinecap="round" />
        
        {/* Left/Right Inner Green Dots & Dashes */}
        <circle cx="106" cy="62" r="1.5" />
        <circle cx="134" cy="62" r="1.5" />
        <circle cx="106" cy="88" r="1.5" />
        <circle cx="134" cy="88" r="1.5" />

        <line x1="90" y1="75" x2="98" y2="75" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="142" y1="75" x2="150" y2="75" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Flanking Terracotta Petals / Teardrops & Dots */}
      <g fill="#A44023">
        {/* Left Side Petals */}
        <path d="M 52 66 Q 64 68 72 69 Q 64 70 52 66 Z" />
        <path d="M 52 84 Q 64 82 72 81 Q 64 80 52 84 Z" />
        <circle cx="48" cy="66" r="2.5" />
        <circle cx="48" cy="84" r="2.5" />

        {/* Right Side Petals */}
        <path d="M 188 66 Q 176 68 168 69 Q 176 70 188 66 Z" />
        <path d="M 188 84 Q 176 82 168 81 Q 176 80 188 84 Z" />
        <circle cx="192" cy="66" r="2.5" />
        <circle cx="192" cy="84" r="2.5" />

        {/* Outer Flanking Terracotta Diamonds */}
        <polygon points="82,46 88,52 82,58 76,52" />
        <polygon points="158,46 164,52 158,58 152,52" />

        {/* Outer Diagonal Dashes */}
        <line x1="98" y1="36" x2="102" y2="42" stroke="#A44023" strokeWidth="2" strokeLinecap="round" />
        <line x1="142" y1="36" x2="138" y2="42" stroke="#A44023" strokeWidth="2" strokeLinecap="round" />
        <line x1="98" y1="114" x2="102" y2="108" stroke="#A44023" strokeWidth="2" strokeLinecap="round" />
        <line x1="142" y1="114" x2="138" y2="108" stroke="#A44023" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
};

/* Bottom Left Realistic Vector Earthenware Pottery & Woven Basket (No Background) */
export const UploadedBottomLeftPotterySVG: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 340 380" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`pointer-events-none filter drop-shadow-md ${className}`}
  >
    <defs>
      {/* Pitcher 3D Clay Gradient */}
      <linearGradient id="jug-body-3d" x1="0%" y1="20%" x2="100%" y2="80%">
        <stop offset="0%" stopColor="#D97A53" />
        <stop offset="35%" stopColor="#B34F2C" />
        <stop offset="75%" stopColor="#7A2D13" />
        <stop offset="100%" stopColor="#451406" />
      </linearGradient>

      {/* Pitcher Inner Mouth Dark Depth */}
      <linearGradient id="jug-mouth-depth" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#210802" />
        <stop offset="100%" stopColor="#6E230B" />
      </linearGradient>

      {/* Woven Basket 3D Fiber Gradient */}
      <linearGradient id="basket-3d-grad" x1="10%" y1="10%" x2="90%" y2="90%">
        <stop offset="0%" stopColor="#F2D19D" />
        <stop offset="40%" stopColor="#C99852" />
        <stop offset="80%" stopColor="#8C5C23" />
        <stop offset="100%" stopColor="#52320E" />
      </linearGradient>

      {/* Small Front Pot 3D Sphere Gradient */}
      <radialGradient id="small-pot-3d" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#E2815B" />
        <stop offset="50%" stopColor="#A84321" />
        <stop offset="85%" stopColor="#69220A" />
        <stop offset="100%" stopColor="#3B0F03" />
      </radialGradient>

      {/* Ground Soft Radial Shadows */}
      <radialGradient id="pot-ground-shadow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#2E180E" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#2E180E" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#2E180E" stopOpacity="0" />
      </radialGradient>

      {/* Specular Highlight Gradient */}
      <linearGradient id="clay-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Ground Anchoring Soft Shadows (No Solid Fabric Background) */}
    <ellipse cx="140" cy="355" rx="130" ry="22" fill="url(#pot-ground-shadow)" />
    <ellipse cx="85" cy="360" rx="75" ry="18" fill="url(#pot-ground-shadow)" />
    <ellipse cx="210" cy="365" rx="60" ry="14" fill="url(#pot-ground-shadow)" />

    {/* ======================================================== */}
    {/* 1. LARGE TALL TERRACOTTA EARTHENWARE PITCHER / JUG       */}
    {/* ======================================================== */}
    <g id="realistic-terracotta-pitcher" transform="translate(45, 40)">
      {/* Jug Handle Shadow & Body Attachment */}
      <path 
        d="M 122 65 C 165 65, 172 155, 122 180 C 148 155, 145 80, 116 72 Z" 
        fill="#4A1608" 
        opacity="0.8"
      />
      {/* Jug Handle */}
      <path 
        d="M 118 62 C 160 62, 168 150, 118 175 C 142 150, 140 75, 112 70 Z" 
        fill="url(#jug-body-3d)" 
        stroke="#330C03" 
        strokeWidth="1.5"
      />
      <path 
        d="M 122 72 C 148 85, 148 140, 124 165" 
        stroke="#F7A887" 
        strokeWidth="1.5" 
        fill="none" 
        opacity="0.6"
      />

      {/* Main Pitcher Body & Neck */}
      <path 
        d="M 50 15 
           Q 85 4 120 15 
           Q 108 45 88 52 
           Q 172 120 158 200 
           Q 142 270 85 275 
           Q 28 270 12 200 
           Q -2 120 82 52 
           Q 62 45 50 15 Z" 
        fill="url(#jug-body-3d)" 
        stroke="#2E0A02" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />

      {/* 3D Curved Light Reflection Specular Rim */}
      <path 
        d="M 28 170 Q 20 120 52 80 Q 32 130 38 190" 
        fill="url(#clay-highlight)" 
        opacity="0.6"
      />

      {/* Jug Mouth Opening & Inner Depth Rim */}
      <ellipse cx="85" cy="15" rx="35" ry="10" fill="url(#jug-mouth-depth)" stroke="#230701" strokeWidth="2" />
      <ellipse cx="85" cy="15" rx="31" ry="7" fill="none" stroke="#D97A53" strokeWidth="1" opacity="0.7" />

      {/* Hand-Carved White & Terracotta Tribal Etchings */}
      <g stroke="#FCEFE3" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
        {/* Neck Band 1 */}
        <path d="M 62 32 Q 85 26 108 32" strokeWidth="2" fill="none" strokeDasharray="3 3" />
        <path d="M 58 42 Q 85 36 112 42" strokeWidth="2.5" fill="none" />

        {/* Shoulder Tribal Zigzag Chevron Band */}
        <path d="M 32 82 Q 85 68 138 82" strokeWidth="2" fill="none" />
        <path 
          d="M 22 125 L 36 100 L 50 125 L 64 100 L 78 125 L 92 100 L 106 125 L 120 100 L 134 125 L 148 100" 
          strokeWidth="3" 
          fill="none" 
        />
        <path d="M 18 138 Q 85 120 152 138" strokeWidth="2" fill="none" />

        {/* Belly Diamond Lattice Band */}
        <path d="M 15 170 Q 85 150 155 170" strokeWidth="2.5" fill="none" />
        <path 
          d="M 20 185 
             L 30 172 L 40 185 L 50 172 L 60 185 L 70 172 L 80 185 L 90 172 L 100 185 L 110 172 L 120 185 L 130 172 L 140 185" 
          strokeWidth="2" 
          fill="none" 
        />
        <path d="M 22 200 Q 85 180 148 200" strokeWidth="2" fill="none" strokeDasharray="5 3" />

        {/* Base Accent Dots */}
        <circle cx="50" cy="225" r="2" fill="#FCEFE3" />
        <circle cx="70" cy="230" r="2" fill="#FCEFE3" />
        <circle cx="90" cy="230" r="2" fill="#FCEFE3" />
        <circle cx="110" cy="228" r="2" fill="#FCEFE3" />
        <circle cx="130" cy="222" r="2" fill="#FCEFE3" />
      </g>
    </g>

    {/* ======================================================== */}
    {/* 2. TRADITIONAL WOVEN GRASS / REED BASKET WITH KNOB LID   */}
    {/* ======================================================== */}
    <g id="realistic-woven-basket" transform="translate(10, 195)">
      {/* Basket Main Body */}
      <path 
        d="M 10 70 Q 75 45 140 70 Q 148 115 130 150 Q 75 175 20 150 Q 2 115 10 70 Z" 
        fill="url(#basket-3d-grad)" 
        stroke="#3B2107" 
        strokeWidth="2.5"
      />

      {/* Basket Lid Body */}
      <ellipse cx="75" cy="65" rx="68" ry="32" fill="url(#basket-3d-grad)" stroke="#3B2107" strokeWidth="2" />
      <ellipse cx="75" cy="55" rx="64" ry="26" fill="url(#basket-3d-grad)" stroke="#3B2107" strokeWidth="1.5" />

      {/* Dark Carved Wooden Lid Handle / Knob */}
      <ellipse cx="75" cy="28" rx="14" ry="7" fill="#291503" stroke="#8C5C23" strokeWidth="1.5" />
      <circle cx="75" cy="22" r="9" fill="#3D2006" stroke="#1A0D02" strokeWidth="1.5" />
      <ellipse cx="73" cy="20" rx="3" ry="1.5" fill="#E6C898" opacity="0.6" />

      {/* Concentric Woven Fiber Texture Ribs & Coils */}
      <g fill="none" stroke="#52320E" strokeWidth="2" opacity="0.8">
        <ellipse cx="75" cy="38" rx="28" ry="11" strokeDasharray="4 2" />
        <ellipse cx="75" cy="48" rx="46" ry="18" strokeDasharray="5 3" />
        <ellipse cx="75" cy="58" rx="58" ry="22" strokeDasharray="6 3" stroke="#2B1703" />
        
        {/* Lower Body Coils */}
        <path d="M 12 88 Q 75 62 138 88" strokeDasharray="5 2" />
        <path d="M 16 112 Q 75 88 134 112" strokeDasharray="6 3" />
        <path d="M 22 132 Q 75 108 128 132" strokeDasharray="5 3" stroke="#2B1703" />
      </g>

      {/* Woven Highlights */}
      <path d="M 30 75 Q 75 52 120 75" stroke="#FCE0B6" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="3 4" />
    </g>

    {/* ======================================================== */}
    {/* 3. SMALL FRONT EARTHENWARE POT WITH TRIBAL PATTERN       */}
    {/* ======================================================== */}
    <g id="realistic-small-pot" transform="translate(135, 240)">
      {/* Pot Main Bulbous Body */}
      <path 
        d="M 22 20 
           Q 60 10 98 20 
           Q 112 35 105 52 
           Q 122 88 98 115 
           Q 60 128 22 115 
           Q -2 88 15 52 
           Q 8 35 22 20 Z" 
        fill="url(#small-pot-3d)" 
        stroke="#290B02" 
        strokeWidth="2.5" 
        strokeLinejoin="round"
      />

      {/* Pot Mouth Opening & Dark Interior */}
      <ellipse cx="60" cy="20" rx="38" ry="12" fill="url(#jug-mouth-depth)" stroke="#290B02" strokeWidth="2" />
      <ellipse cx="60" cy="20" rx="34" ry="9" fill="none" stroke="#E2815B" strokeWidth="1" opacity="0.6" />

      {/* White Painted Tribal Geometric Pattern */}
      <g stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
        {/* Rim Dotted Line */}
        <path d="M 26 32 Q 60 22 94 32" strokeWidth="2" strokeDasharray="2 3" fill="none" />
        
        {/* Chevron Diamond Band */}
        <path d="M 18 60 Q 60 48 102 60" strokeWidth="2" fill="none" />
        <path 
          d="M 12 76 
             L 24 62 L 36 76 L 48 62 L 60 76 L 72 62 L 84 76 L 96 62 L 108 76" 
          strokeWidth="3" 
          fill="none" 
        />
        <path d="M 14 90 Q 60 76 106 90" strokeWidth="2" fill="none" />

        {/* Lower Dots Ring */}
        <circle cx="35" cy="100" r="2" fill="#FFFFFF" />
        <circle cx="50" cy="104" r="2" fill="#FFFFFF" />
        <circle cx="65" cy="104" r="2" fill="#FFFFFF" />
        <circle cx="80" cy="102" r="2" fill="#FFFFFF" />
      </g>
    </g>
  </svg>
);


/* Tribal Central Divider with Cowrie Shells & Geometric Spears */
export const TribalDividerWithShells: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-2 sm:gap-3 my-2.5 ${className}`}>
    {/* Left Spear Line */}
    <div className="flex-1 flex items-center justify-end h-[2px]">
      <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#D4A359] to-[#C15C3D]" />
      <div className="w-2 h-2 rotate-45 bg-[#C15C3D]" />
    </div>

    {/* Left Cowrie Shell */}
    <CowrieShellIcon size={18} />

    {/* Center Tribal Diamond */}
    <div className="flex items-center gap-1.5 px-1">
      <div className="w-2.5 h-2.5 rotate-45 bg-[#D4A359] border border-[#1E3A2B]" />
      <div className="w-4 h-4 rotate-45 bg-[#1E3A2B] border border-[#D4A359] flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-[#C15C3D]" />
      </div>
      <div className="w-2.5 h-2.5 rotate-45 bg-[#D4A359] border border-[#1E3A2B]" />
    </div>

    {/* Right Cowrie Shell */}
    <CowrieShellIcon size={18} />

    {/* Right Spear Line */}
    <div className="flex-1 flex items-center justify-start h-[2px]">
      <div className="w-2 h-2 rotate-45 bg-[#C15C3D]" />
      <div className="w-full h-[1.5px] bg-gradient-to-l from-transparent via-[#D4A359] to-[#C15C3D]" />
    </div>
  </div>
);
