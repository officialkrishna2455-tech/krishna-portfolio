import React from 'react';
import { Volume2, VolumeX, Cpu, Terminal, FileText, Send, Radio } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface CyberHUDProps {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  onOpenTransmission: () => void;
  onOpenResumeModal: () => void;
}

export const CyberHUD: React.FC<CyberHUDProps> = ({
  isMuted,
  setIsMuted,
  onOpenTransmission,
  onOpenResumeModal
}) => {
  const handleToggleSound = () => {
    const next = cyberSound.toggleMute();
    setIsMuted(next);
  };

  const scrollToSection = (id: string) => {
    cyberSound.playChirp();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 py-3 backdrop-blur-xl bg-[#0f1016]/80 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand Terminal Logo */}
        <button
          onClick={() => scrollToSection('system-hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.4)] group-hover:scale-105 transition-transform">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-syne font-black tracking-widest text-sm text-white group-hover:text-cyan-400 transition-colors">
                KRISHNA
              </span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono border border-cyan-500/30">
                AI/ML
              </span>
            </div>
            <span className="block text-[10px] text-slate-400 font-mono">
              SYSTEM ARCHITECT
            </span>
          </div>
        </button>

        {/* Section Navigation Chapters */}
        <nav className="hidden md:flex items-center gap-1 bg-[#14151e] border border-white/10 rounded-full px-3 py-1 font-mono text-xs">
          <button
            onClick={() => scrollToSection('system-hero')}
            className="px-3 py-1 text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            01 // Reactor
          </button>
          <button
            onClick={() => scrollToSection('neural-projects')}
            className="px-3 py-1 text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            02 // Deployments
          </button>
          <button
            onClick={() => scrollToSection('skills-arsenal')}
            className="px-3 py-1 text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            03 // Tech Modules
          </button>
          <button
            onClick={() => scrollToSection('certifications-awards')}
            className="px-3 py-1 text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            04 // Protocols
          </button>
          <button
            onClick={() => scrollToSection('transmission-box')}
            className="px-3 py-1 text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/5 transition-colors cursor-pointer"
          >
            05 // Transmission
          </button>
        </nav>

        {/* Action Controls Suite */}
        <div className="flex items-center gap-2">
          {/* Audio FX Toggle */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? "Unmute Cybernetic Sound FX" : "Mute Sound FX"}
            className={`p-2 rounded-lg border text-xs transition-colors cursor-pointer ${
              isMuted
                ? 'bg-red-500/20 text-red-400 border-red-500/30'
                : 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/20'
            }`}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Spec Sheet (Resume) Modal Trigger */}
          <button
            onClick={() => {
              cyberSound.playChirp();
              onOpenResumeModal();
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-mono border border-white/10 transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-slate-400" />
            <span>Resume Spec</span>
          </button>

          {/* Direct Transmission / Contact Button */}
          <button
            onClick={onOpenTransmission}
            className="btn-cinema-cyan flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-black font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-105 cursor-pointer"
          >
            <Radio className="w-3.5 h-3.5 fill-black" />
            <span>Transmit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
