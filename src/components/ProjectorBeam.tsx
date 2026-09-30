import React from 'react';

interface ProjectorBeamProps {
  active: boolean;
  color?: string;
}

export const ProjectorBeam: React.FC<ProjectorBeamProps> = ({
  active = true,
  color = 'rgba(0, 240, 255, 0.08)'
}) => {
  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-10 flex justify-center overflow-hidden h-[90vh]">
      {/* Projector Lens Source at the top */}
      <div className="absolute -top-3 w-40 h-8 rounded-full bg-cyan-400/80 blur-md shadow-[0_0_50px_rgba(0,240,255,0.9)] animate-pulse" />
      
      {/* Volumetric Light Cone */}
      <div
        className="w-full max-w-6xl h-full opacity-60 mix-blend-screen transition-all duration-700 pointer-events-none"
        style={{
          background: `conic-gradient(from 180deg at 50% 0%, transparent 68deg, ${color} 80deg, rgba(255,255,255,0.14) 90deg, ${color} 100deg, transparent 112deg)`,
          filter: 'blur(16px)',
          transformOrigin: 'top center',
          animation: 'beamFlicker 6s ease-in-out infinite alternate',
        }}
      />

      {/* Secondary Soft Amber Spill Light */}
      <div
        className="absolute top-0 w-3/4 h-3/4 opacity-25 mix-blend-screen pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(245, 158, 11, 0.25) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
    </div>
  );
};
