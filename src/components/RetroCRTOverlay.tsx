import React from 'react';

interface RetroCRTOverlayProps {
  enabled: boolean;
}

export const RetroCRTOverlay: React.FC<RetroCRTOverlayProps> = ({ enabled }) => {
  if (!enabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {/* 1. Fine CRT Horizontal Scanline Grid */}
      <div
        className="absolute inset-0 w-full h-full opacity-35"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)',
          backgroundSize: '100% 3px'
        }}
      />

      {/* 2. CRT Glass Curvature Vignette */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 65%, rgba(0, 0, 0, 0.65) 100%)',
          boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.85)'
        }}
      />

      {/* 3. Subtle Phosphor Glare Beam across top */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-60"
      />
    </div>
  );
};
