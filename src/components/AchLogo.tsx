import React from 'react';

interface AchLogoProps {
  /**
   * 'stacked' = Icon on top, 'ACH' underneath (EXACT replica of the user's uploaded image)
   * 'horizontal' = Icon on left, 'Group ACH' or 'ACH' on right
   * 'icon-only' = Just the 6-tier architectural pillar icon
   */
  variant?: 'stacked' | 'horizontal' | 'icon-only';
  className?: string;
  iconClassName?: string;
  color?: string; // Default: #2F483E (from the Turbologo image)
  textColor?: string;
  showSubtitle?: boolean;
  subtitleText?: string;
  brandName?: string; // e.g. "ACH" or "Group ACH"
}

/**
 * The 6-tier architectural pillar icon matching the exact cuts from the uploaded logo:
 * - Straight vertical outer alignment
 * - Smooth rhythmic wavy horizontal slices
 * - Arched pedestal crescent foundation
 */
export const AchIconMark: React.FC<{ className?: string; color?: string }> = ({
  className = 'w-10 h-14',
  color = '#2F483E',
}) => {
  return (
    <svg
      viewBox="0 0 100 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ACH Architectural Pillar Emblem"
    >
      {/* Tier 1 (Top: flat top edge, downwards curved bottom) */}
      <path
        d="M 12 4 L 88 4 L 88 19 C 64 28, 36 28, 12 19 Z"
        fill={color}
      />

      {/* Tier 2 (Upper-mid: wavy slab) */}
      <path
        d="M 12 25 C 36 34, 64 34, 88 25 L 88 41 C 64 47, 36 47, 12 39 Z"
        fill={color}
      />

      {/* Tier 3 (Middle: rhythmic organic wave) */}
      <path
        d="M 12 45 C 36 53, 64 52, 88 47 L 88 63 C 64 67, 36 69, 12 62 Z"
        fill={color}
      />

      {/* Tier 4 (Lower-mid: slanted wave) */}
      <path
        d="M 12 68 C 36 75, 64 73, 88 69 L 88 87 C 64 89, 36 91, 12 85 Z"
        fill={color}
      />

      {/* Tier 5 (Foundation: upward-arching bottom) */}
      <path
        d="M 12 91 C 36 97, 64 95, 88 93 L 88 109 C 64 107, 36 105, 12 109 Z"
        fill={color}
      />

      {/* Tier 6 (Base arch: upward curved crescent pedestal) */}
      <path
        d="M 12 115 C 36 111, 64 111, 88 115 L 88 123 C 64 118, 36 118, 12 123 Z"
        fill={color}
      />
    </svg>
  );
};

/**
 * Universal AchLogo component:
 * Exact replica of the logo image provided by the user.
 */
export const AchLogo: React.FC<AchLogoProps> = ({
  variant = 'horizontal',
  className = '',
  iconClassName = 'w-9 h-12',
  color = '#2F483E',
  textColor,
  showSubtitle = true,
  subtitleText = 'www.achlinks.in',
  brandName,
}) => {
  const finalTextColor = textColor || color;

  // 1. Stacked Layout: EXACT match to the user's uploaded Turbologo image
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <AchIconMark className={iconClassName} color={color} />
        <span
          className="font-serif tracking-[0.25em] font-semibold text-lg sm:text-xl uppercase mt-2.5"
          style={{ color: finalTextColor }}
        >
          {brandName || 'ACH'}
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 mt-0.5">
            {subtitleText}
          </span>
        )}
      </div>
    );
  }

  // 2. Icon Only
  if (variant === 'icon-only') {
    return <AchIconMark className={iconClassName} color={color} />;
  }

  // 3. Horizontal Layout (for Navbar, Footer, Cards)
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <AchIconMark className={iconClassName} color={color} />
      <div className="flex flex-col leading-tight">
        <span
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight"
          style={{ color: finalTextColor }}
        >
          {brandName || (
            <>
              <span className="text-slate-900">Group </span>
              <span style={{ color }}>ACH</span>
            </>
          )}
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-mono text-slate-500 tracking-wider">
            {subtitleText}
          </span>
        )}
      </div>
    </div>
  );
};
