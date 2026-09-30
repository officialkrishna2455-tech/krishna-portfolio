import React, { useState } from 'react';
import { Terminal, Folder, Cpu, Award, Mail, FileText, Monitor, Volume2, VolumeX, Sparkles, HardDrive } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface Retro90sNavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  crtEnabled: boolean;
  onToggleCrt: () => void;
}

export const Retro90sNavbar: React.FC<Retro90sNavbarProps> = ({
  onNavigate,
  onOpenResume,
  crtEnabled,
  onToggleCrt
}) => {
  const [isMuted, setIsMuted] = useState(cyberSound.getMuted());

  const handleToggleSound = () => {
    const next = cyberSound.toggleMute();
    setIsMuted(next);
  };

  const navLinks = [
    { label: 'SYSTEM_BOOT', id: 'hero' },
    { label: 'PROJECTS.EXE', id: 'projects' },
    { label: 'SKILLS.CPL', id: 'skills' },
    { label: 'CREDENTIALS', id: 'certifications' },
    { label: 'MODEM_CONTACT', id: 'contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#161616] border-b-2 border-[#555] px-3 py-1.5 select-none shadow-[inset_0px_1.5px_0px_#fff,0_2px_8px_rgba(0,0,0,0.85)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        {/* Left: OS Logo & Brand */}
        <div 
          onClick={() => {
            cyberSound.play90sKeyClick();
            onNavigate('hero');
          }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-5 h-5 bg-white text-black font-extrabold text-xs flex items-center justify-center font-mono border border-black shadow-[1px_1px_0px_#000]">
            98
          </div>
          <span className="font-mono text-xs font-bold text-white tracking-wider group-hover:underline">
            KRISHNA // NOIR-OS
          </span>
          <span className="hidden sm:inline-block text-[9px] font-mono text-[#888] bg-black px-1.5 py-0.2 border border-[#333]">
            3D_CYBER_CGI
          </span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs">
          {navLinks.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                cyberSound.play90sKeyClick();
                onNavigate(item.id);
              }}
              className="px-2.5 py-1 text-[#ccc] hover:text-black hover:bg-white border border-transparent hover:border-black active:translate-y-[1px] transition-all font-semibold"
            >
              [{item.label}]
            </button>
          ))}
        </nav>

        {/* Right: Quick Controls (CRT, Audio, Resume) */}
        <div className="flex items-center gap-2 font-mono text-xs">
          {/* CRT Monitor Scanline Toggle */}
          <button
            onClick={onToggleCrt}
            className={`hidden sm:flex items-center gap-1.5 px-2 py-1 border text-[11px] font-bold active:translate-y-[1px] transition-all ${
              crtEnabled
                ? 'bg-white text-black border-white shadow-[inset_1px_1px_0px_#fff]'
                : 'bg-[#222] text-[#aaa] border-[#444] hover:text-white'
            }`}
            title={`Toggle 90s CRT Monitor Scanlines (${crtEnabled ? 'ON' : 'OFF'})`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>CRT: {crtEnabled ? 'ON' : 'OFF'}</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            className="p-1.5 bg-[#222] text-[#ccc] hover:text-white hover:bg-[#333] border border-[#444] active:translate-y-[1px] transition-all"
            title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#666]" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
          </button>

          {/* Resume PDF Quick Launcher */}
          <button
            onClick={() => {
              cyberSound.play90sKeyClick();
              onOpenResume();
            }}
            className="font-mono text-xs font-bold px-3 py-1 bg-white text-black hover:bg-[#ddd] border border-black flex items-center gap-1.5 shadow-[1.5px_1.5px_0px_#000] active:translate-y-[1px]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>[RESUME.PDF]</span>
          </button>
        </div>
      </div>
    </header>
  );
};
