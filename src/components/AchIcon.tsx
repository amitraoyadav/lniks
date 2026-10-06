import React from 'react';

interface AchIconProps {
  className?: string;
  color?: string; // default to #2B473E
  size?: number | string;
}

/**
 * Exact replica of the Group ACH 6-tier architectural pillar icon.
 * Features 6 horizontal wavy stacked slabs with straight vertical outer alignment
 * and the iconic arched pedestal base.
 */
export const AchIcon: React.FC<AchIconProps> = ({
  className = 'w-8 h-8',
  color = '#2B473E',
  size,
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 100 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-label="Group ACH Emblem"
    >
      {/* 
        The 6 stacked architectural slabs from the official logo:
        Straight outer vertical bounds: X=12 to X=88.
      */}
      
      {/* Tier 1 (Top slab: flat top, downward curve at bottom) */}
      <path
        d="M 12 6 L 88 6 L 88 20 C 65 29, 35 29, 12 20 Z"
        fill={color}
      />

      {/* Tier 2 (Upper-mid slab: arched wave) */}
      <path
        d="M 12 25 C 35 34, 65 34, 88 25 L 88 41 C 65 47, 35 47, 12 39 Z"
        fill={color}
      />

      {/* Tier 3 (Middle slab: rhythmic wave) */}
      <path
        d="M 12 45 C 35 53, 65 52, 88 47 L 88 63 C 65 67, 35 69, 12 62 Z"
        fill={color}
      />

      {/* Tier 4 (Lower-mid slab: subtle wave) */}
      <path
        d="M 12 68 C 35 75, 65 73, 88 69 L 88 87 C 65 89, 35 91, 12 85 Z"
        fill={color}
      />

      {/* Tier 5 (Foundation slab: upward-arching bottom) */}
      <path
        d="M 12 91 C 35 97, 65 95, 88 93 L 88 109 C 65 107, 35 105, 12 109 Z"
        fill={color}
      />

      {/* Tier 6 (Pedestal arch: upward curved crescent base) */}
      <path
        d="M 12 114 C 35 110, 65 110, 88 114 L 88 123 C 65 118, 35 118, 12 123 Z"
        fill={color}
      />
    </svg>
  );
};

interface AchBrandLockupProps {
  className?: string;
  iconClassName?: string;
  iconColor?: string;
  textColor?: string;
  showSubtitle?: boolean;
}

/**
 * Full Brand Lockup with the 6-tier pillar icon and the serif typography.
 */
export const AchBrandLockup: React.FC<AchBrandLockupProps> = ({
  className = 'flex items-center gap-3',
  iconClassName = 'w-9 h-11',
  iconColor = '#2B473E',
  textColor = '#1C1917',
  showSubtitle = true,
}) => {
  return (
    <div className={className}>
      <AchIcon className={iconClassName} color={iconColor} />
      <div className="flex flex-col">
        <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none" style={{ color: textColor }}>
          Group ACH
        </span>
        {showSubtitle && (
          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 mt-1">
            www.achlinks.in
          </span>
        )}
      </div>
    </div>
  );
};
