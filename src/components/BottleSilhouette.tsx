import React from 'react';

interface BottleSilhouetteProps {
  silhouette?: 'column' | 'oval' | 'apothecary' | 'cube' | 'arch' | 'flask' | 'cylinder' | 'bell';
  gradient?: string;
  accentColor?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BottleSilhouette: React.FC<BottleSilhouetteProps> = ({
  silhouette = 'oval',
  gradient = 'from-[#EFECE6] to-[#D5CABE]',
  accentColor = '#8C7355',
  className = '',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'w-16 h-24',
    md: 'w-24 h-36',
    lg: 'w-36 h-52',
    xl: 'w-48 h-64'
  };

  return (
    <div className={`relative flex items-center justify-center p-3 transition-transform duration-500 group-hover:scale-105 ${sizeClasses[size]} ${className}`}>
      {/* Soft atmospheric glow */}
      <div 
        className="absolute inset-2 rounded-full opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ backgroundColor: accentColor }}
      />

      <svg
        viewBox="0 0 100 150"
        className="relative z-10 w-full h-full drop-shadow-md transition-all duration-300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glass reflections & liquid gradient */}
          <linearGradient id={`liquidGrad-${accentColor.replace('#', '')}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="35%" stopColor={accentColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.6" />
          </linearGradient>

          <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A2D30" />
            <stop offset="50%" stopColor="#4A4E53" />
            <stop offset="100%" stopColor="#1E2022" />
          </linearGradient>

          <linearGradient id="glassSheen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Silhouette 1: OVAL (Diptyque style) */}
        {silhouette === 'oval' && (
          <>
            {/* Cap */}
            <rect x="42" y="10" width="16" height="18" rx="2" fill="url(#capGrad)" />
            <rect x="44" y="28" width="12" height="4" fill="#BDB8AD" />
            {/* Bottle Body */}
            <rect x="22" y="32" width="56" height="98" rx="26" fill={`url(#liquidGrad-${accentColor.replace('#', '')})`} stroke="#E2DDD5" strokeWidth="1.5" />
            {/* Minimalist Label */}
            <rect x="30" y="55" width="40" height="52" rx="14" fill="#FCFAF7" fillOpacity="0.92" stroke="#DCD5C9" strokeWidth="1" />
            <line x1="38" y1="74" x2="62" y2="74" stroke="#8E887E" strokeWidth="0.75" />
            <line x1="42" y1="84" x2="58" y2="84" stroke="#B8B2A6" strokeWidth="0.5" />
            {/* Glass Sheen */}
            <path d="M26 48 Q28 85 26 112" stroke="url(#glassSheen)" strokeWidth="2" strokeLinecap="round" />
          </>
        )}

        {/* Silhouette 2: APOTHECARY (Le Labo / Margiela / Aesop style) */}
        {silhouette === 'apothecary' && (
          <>
            {/* Screw Cap */}
            <rect x="43" y="12" width="14" height="16" rx="2" fill="#5C5E62" />
            <rect x="40" y="28" width="20" height="5" rx="1" fill="#8E9094" />
            {/* Bottle Shoulder & Body */}
            <path
              d="M38 33 L24 45 L24 130 Q24 134 28 134 L72 134 Q76 134 76 130 L76 45 L62 33 Z"
              fill={`url(#liquidGrad-${accentColor.replace('#', '')})`}
              stroke="#D6D0C4"
              strokeWidth="1.5"
            />
            {/* Typographic Label */}
            <rect x="28" y="58" width="44" height="56" rx="2" fill="#FAF8F5" fillOpacity="0.95" stroke="#CFC8BC" strokeWidth="0.75" />
            <line x1="34" y1="70" x2="66" y2="70" stroke="#3D4044" strokeWidth="1.2" />
            <line x1="34" y1="78" x2="58" y2="78" stroke="#7A7E84" strokeWidth="0.7" />
            <line x1="34" y1="86" x2="62" y2="86" stroke="#9FA3A8" strokeWidth="0.5" />
            {/* Sheen */}
            <line x1="28" y1="48" x2="28" y2="124" stroke="url(#glassSheen)" strokeWidth="2" strokeLinecap="round" />
          </>
        )}

        {/* Silhouette 3: COLUMN (Jo Malone / Hermès / Celine style) */}
        {silhouette === 'column' && (
          <>
            {/* Tall Cap */}
            <rect x="41" y="8" width="18" height="24" rx="2" fill="#E8E5DD" stroke="#C5C0B3" strokeWidth="1" />
            {/* Slender Rectangular Body */}
            <rect x="28" y="32" width="44" height="106" rx="4" fill={`url(#liquidGrad-${accentColor.replace('#', '')})`} stroke="#DFDAD0" strokeWidth="1.5" />
            {/* Classic Label */}
            <rect x="33" y="54" width="34" height="60" rx="1" fill="#FFFFFF" fillOpacity="0.9" stroke="#E5E0D5" strokeWidth="0.75" />
            <line x1="38" y1="72" x2="62" y2="72" stroke="#333639" strokeWidth="1" />
            <line x1="42" y1="82" x2="58" y2="82" stroke="#8E8B83" strokeWidth="0.6" />
            {/* Edge highlights */}
            <line x1="32" y1="38" x2="32" y2="130" stroke="url(#glassSheen)" strokeWidth="1.5" />
            <line x1="68" y1="38" x2="68" y2="130" stroke="url(#glassSheen)" strokeWidth="1" />
          </>
        )}

        {/* Silhouette 4: CUBE / SQUARE (Chanel / MFK / Tom Ford style) */}
        {silhouette === 'cube' && (
          <>
            {/* Sculpted Cap */}
            <rect x="38" y="10" width="24" height="20" rx="3" fill="url(#capGrad)" />
            {/* Thick-bottomed Solid Cube */}
            <rect x="20" y="30" width="60" height="104" rx="6" fill={`url(#liquidGrad-${accentColor.replace('#', '')})`} stroke="#DDD6CA" strokeWidth="1.5" />
            {/* Heavy Base Glass Bar */}
            <rect x="22" y="120" width="56" height="12" fill="#FFFFFF" fillOpacity="0.4" />
            {/* Gold/Silver Accent Plaque */}
            <rect x="28" y="54" width="44" height="48" rx="2" fill="#FCFAF7" stroke="#D1C9BC" strokeWidth="1" />
            <line x1="34" y1="70" x2="66" y2="70" stroke="#2D3033" strokeWidth="1.2" />
            <line x1="38" y1="80" x2="62" y2="80" stroke="#7A7770" strokeWidth="0.8" />
            {/* Corner Refraction */}
            <line x1="24" y1="36" x2="24" y2="124" stroke="url(#glassSheen)" strokeWidth="2.5" />
          </>
        )}

        {/* Silhouette 5: ARCH / FLASK (Penhaligon's / Acqua di Parma / Serge Lutens style) */}
        {(silhouette === 'arch' || silhouette === 'flask' || silhouette === 'cylinder' || silhouette === 'bell') && (
          <>
            {/* Spherical or Fluted Cap */}
            <circle cx="50" cy="18" r="11" fill="url(#capGrad)" />
            <rect x="44" y="26" width="12" height="6" fill="#C5BDB0" />
            {/* Elegant Arched Body */}
            <path
              d="M36 32 C36 32 20 50 20 85 C20 120 28 134 50 134 C72 134 80 120 80 85 C80 50 64 32 64 32 Z"
              fill={`url(#liquidGrad-${accentColor.replace('#', '')})`}
              stroke="#D8D2C6"
              strokeWidth="1.5"
            />
            {/* Oval Center Badge */}
            <ellipse cx="50" cy="84" rx="18" ry="24" fill="#FFFFFF" fillOpacity="0.9" stroke="#CDC5B6" strokeWidth="0.8" />
            <line x1="38" y1="80" x2="62" y2="80" stroke="#3A3C3E" strokeWidth="1" />
            <line x1="42" y1="90" x2="58" y2="90" stroke="#8A857A" strokeWidth="0.6" />
            {/* Sheen */}
            <path d="M26 65 Q24 85 30 115" stroke="url(#glassSheen)" strokeWidth="2" strokeLinecap="round" />
          </>
        )}
      </svg>
    </div>
  );
};
