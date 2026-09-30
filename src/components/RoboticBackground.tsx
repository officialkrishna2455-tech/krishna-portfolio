import React, { useState, useEffect } from 'react';
import { Bot, Cpu, ShieldCheck, Zap, Radio, Sparkles } from 'lucide-react';

export const RoboticBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#edf4fb]">
      {/* 1. Ambient Cybernetic Aurora Wash (Clean, rich gradients, NO dots) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 75% 35%, rgba(6, 182, 212, 0.22) 0%, transparent 55%),
            radial-gradient(circle at 20% 25%, rgba(59, 130, 246, 0.18) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.16) 0%, transparent 50%),
            radial-gradient(circle at 15% 75%, rgba(16, 185, 129, 0.14) 0%, transparent 45%),
            linear-gradient(180deg, #ecf4fc 0%, #edf6fd 35%, #eef3fb 70%, #edf2f9 100%)
          `
        }}
      />

      {/* 2. Sleek Geometric Cyber Lines (Clean structural architecture, NO dot-matrix) */}
      <svg className="absolute inset-0 w-full h-full opacity-35" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="cyberLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="0%" x2="10%" y2="100%" stroke="url(#cyberLineGrad)" strokeWidth="0.8" strokeDasharray="8 8" />
        <line x1="90%" y1="0%" x2="90%" y2="100%" stroke="url(#cyberLineGrad)" strokeWidth="0.8" strokeDasharray="8 8" />
        <line x1="0%" y1="20%" x2="100%" y2="20%" stroke="url(#cyberLineGrad)" strokeWidth="0.6" />
        <line x1="0%" y1="80%" x2="100%" y2="80%" stroke="url(#cyberLineGrad)" strokeWidth="0.6" />
      </svg>

      {/* 3. THE AUTONOMOUS ROBOT COMPANION (Replaces all the 'dot dot' background!) */}
      <div 
        className="absolute right-[2%] sm:right-[6%] lg:right-[10%] top-[8%] sm:top-[12%] w-[320px] sm:w-[440px] lg:w-[540px] h-[640px] sm:h-[780px] flex items-center justify-center transition-transform duration-300 ease-out select-none"
        style={{
          transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 8}deg) translateZ(0)`,
        }}
      >
        {/* Holographic Glowing Aura behind Robot */}
        <div 
          className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full animate-pulse-slow"
          style={{
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, rgba(59, 130, 246, 0.20) 45%, transparent 70%)',
            filter: 'blur(30px)'
          }}
        />

        {/* Outer Rotating Holographic Radar Ring */}
        <div 
          className="absolute w-[340px] sm:w-[460px] h-[340px] sm:h-[460px] rounded-full border-2 border-dashed border-cyan-400/50 animate-spin-slow pointer-events-none"
        />

        {/* Inner Counter-Rotating Telemetry Ring with Degree Ticks */}
        <div 
          className="absolute w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full border border-blue-400/40 pointer-events-none"
          style={{
            animation: 'spin 22s linear infinite reverse',
            borderTopColor: 'rgba(6, 182, 212, 0.9)',
            borderRightColor: 'rgba(139, 92, 246, 0.7)',
          }}
        />

        {/* Vertical Scanning Laser Beam sweeping across robot */}
        <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4] opacity-75 animate-scanner pointer-events-none" />

        {/* High-Resolution Futuristic AI Robot Image with Floating Float Animation */}
        <div className="relative w-full h-full flex items-center justify-center animate-float">
          <img
            src="/robot.png"
            alt="Futuristic AI Autonomous Robot"
            className="w-full h-full object-contain drop-shadow-[0_20px_45px_rgba(6,182,212,0.30)] opacity-95 transition-opacity"
            loading="eager"
          />

          {/* Floating High-Tech Telemetry Cards attached to Robot */}
          <div className="absolute top-[18%] -left-6 sm:-left-12 bg-white/90 backdrop-blur-md border border-cyan-300 px-3 py-1.5 rounded-xl shadow-lg shadow-cyan-500/15 hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
            <div className="text-[10px] font-mono leading-tight">
              <span className="text-cyan-800 font-bold block">NEURAL CORE // ACTIVE</span>
              <span className="text-slate-500 font-semibold">SYNAPSE: 99.8% READY</span>
            </div>
          </div>

          <div className="absolute bottom-[28%] -right-4 sm:-right-8 bg-white/90 backdrop-blur-md border border-blue-300 px-3 py-1.5 rounded-xl shadow-lg shadow-blue-500/15 hidden md:flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <div className="text-[10px] font-mono leading-tight">
              <span className="text-blue-800 font-bold block">VISION TELEMETRY</span>
              <span className="text-slate-500 font-semibold">FACENET + MTCNN PIPELINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. High-Tech Corner Telemetry HUD Labels */}
      <div className="absolute top-4 left-6 hidden lg:flex items-center gap-2.5 font-mono text-[11px] text-cyan-900 bg-white/85 border border-cyan-300 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs select-none">
        <Bot className="w-4 h-4 text-cyan-600 animate-bounce" />
        <span className="font-bold">AUTONOMOUS ROBOTIC CORE // ONLINE</span>
      </div>

      <div className="absolute top-4 right-6 hidden lg:flex items-center gap-3 font-mono text-[11px] text-blue-900 bg-white/85 border border-blue-300 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs select-none">
        <span className="font-semibold">COGNITIVE KERNEL: CALIBRATED</span>
        <span className="text-emerald-700 font-bold">[ACTIVE]</span>
      </div>

      <div className="absolute bottom-4 left-6 hidden lg:flex items-center gap-2 font-mono text-[11px] text-emerald-900 bg-white/85 border border-emerald-300 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-xs select-none">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span>SYS.TELEMETRY: AUTONOMOUS ROBOT COMPANION ACTIVE</span>
      </div>
    </div>
  );
};
