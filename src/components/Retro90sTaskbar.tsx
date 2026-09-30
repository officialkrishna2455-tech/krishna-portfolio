import React, { useState, useEffect } from 'react';
import { Terminal, Folder, Cpu, Award, Mail, Volume2, VolumeX, Monitor, FileText, Power, Sparkles, HardDrive } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface Retro90sTaskbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  crtEnabled: boolean;
  onToggleCrt: () => void;
}

export const Retro90sTaskbar: React.FC<Retro90sTaskbarProps> = ({
  onNavigate,
  onOpenResume,
  crtEnabled,
  onToggleCrt
}) => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(cyberSound.getMuted());
  const [timeStr, setTimeStr] = useState('');
  const [diskBlink, setDiskBlink] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    // Random disk drive read seek LED blink
    const diskInterval = setInterval(() => {
      setDiskBlink(true);
      setTimeout(() => setDiskBlink(false), 180);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(diskInterval);
    };
  }, []);

  const handleToggleSound = () => {
    const next = cyberSound.toggleMute();
    setIsMuted(next);
  };

  const handleItemClick = (action: () => void) => {
    cyberSound.play90sKeyClick();
    action();
    setStartMenuOpen(false);
  };

  return (
    <>
      {/* 1990s Start Menu Popup */}
      {startMenuOpen && (
        <div
          className="fixed bottom-11 left-2 z-50 w-72 bg-[#181818] border-2 border-[#666] select-none shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000,4px_4px_24px_rgba(0,0,0,0.95)]"
        >
          {/* Start Menu Sidebar Banner */}
          <div className="flex">
            <div 
              className="w-8 bg-black border-r border-[#333] flex items-end justify-center pb-3 text-white font-mono font-extrabold text-xs tracking-widest uppercase"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              KRISHNA // 2026
            </div>

            {/* Menu Items */}
            <div className="flex-1 py-1 text-xs font-mono text-[#dedede]">
              <div
                onClick={() => handleItemClick(() => onNavigate('hero'))}
                className="px-3 py-2 flex items-center gap-2.5 hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <Terminal className="w-4 h-4 shrink-0" />
                <span className="font-bold">About Krishna (Bio)</span>
              </div>

              <div
                onClick={() => handleItemClick(() => onNavigate('projects'))}
                className="px-3 py-2 flex items-center gap-2.5 hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <Folder className="w-4 h-4 shrink-0" />
                <span className="font-bold">Projects & Applications</span>
              </div>

              <div
                onClick={() => handleItemClick(() => onNavigate('skills'))}
                className="px-3 py-2 flex items-center gap-2.5 hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <Cpu className="w-4 h-4 shrink-0" />
                <span className="font-bold">Technical Skills</span>
              </div>

              <div
                onClick={() => handleItemClick(() => onNavigate('certifications'))}
                className="px-3 py-2 flex items-center gap-2.5 hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <Award className="w-4 h-4 shrink-0" />
                <span className="font-bold">Education & Certifications</span>
              </div>

              <div
                onClick={() => handleItemClick(() => onNavigate('contact'))}
                className="px-3 py-2 flex items-center gap-2.5 hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                <span className="font-bold">Contact Information</span>
              </div>

              <div className="my-1 border-t border-[#333]" />

              <div
                onClick={() => handleItemClick(onOpenResume)}
                className="px-3 py-2 flex items-center gap-2.5 hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span className="font-bold">View Official Resume (PDF)</span>
              </div>

              <div
                onClick={() => handleItemClick(onToggleCrt)}
                className="px-3 py-2 flex items-center justify-between hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <Monitor className="w-4 h-4 shrink-0" />
                  <span className="font-bold">CRT Monitor Scanlines</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 bg-black text-white font-extrabold border border-[#444]">
                  {crtEnabled ? 'ON' : 'OFF'}
                </span>
              </div>

              <div
                onClick={() => handleItemClick(handleToggleSound)}
                className="px-3 py-2 flex items-center justify-between hover:bg-white hover:text-black cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {isMuted ? <VolumeX className="w-4 h-4 shrink-0" /> : <Volume2 className="w-4 h-4 shrink-0" />}
                  <span className="font-bold">Computer Sound Effects</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 bg-black text-white font-extrabold border border-[#444]">
                  {isMuted ? 'MUTED' : 'ACTIVE'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1990s Bottom Fixed Taskbar */}
      <footer
        className="fixed bottom-0 left-0 right-0 z-40 h-10 bg-[#1c1c1c] border-t-2 border-[#555] px-2 flex items-center justify-between select-none shadow-[0_-2px_10px_rgba(0,0,0,0.8)]"
        style={{
          boxShadow: 'inset 0px 1.5px 0px #ffffff, 0 -4px 16px rgba(0, 0, 0, 0.9)'
        }}
      >
        {/* Left: START Button & Quick Tasks */}
        <div className="flex items-center gap-1.5 overflow-hidden">
          {/* Authentic 90s START Button */}
          <button
            onClick={() => {
              cyberSound.play90sWindowOpen();
              setStartMenuOpen(!startMenuOpen);
            }}
            className={`font-mono text-xs font-black px-3 py-1 flex items-center gap-2 border transition-all active:translate-y-[1px] ${
              startMenuOpen
                ? 'bg-black text-white border-white shadow-[inset_1.5px_1.5px_0px_#000]'
                : 'bg-[#2b2b2b] text-white hover:bg-white hover:text-black border-[#666]'
            }`}
            style={{
              boxShadow: startMenuOpen
                ? 'inset 1px 1px 0px #000'
                : 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #000'
            }}
          >
            {/* 90s Flag Icon */}
            <div className="w-3.5 h-3.5 bg-black border border-white flex items-center justify-center font-extrabold text-[9px] text-white">
              ■
            </div>
            <span className="tracking-wider">START</span>
          </button>

          {/* Quick Taskbar Apps */}
          <div className="hidden md:flex items-center gap-1.5 ml-1">
            <button
              onClick={() => {
                cyberSound.play90sKeyClick();
                onNavigate('hero');
              }}
              className="font-mono text-[11px] font-bold px-2.5 py-1 bg-[#151515] text-[#ccc] hover:text-white hover:bg-[#252525] border border-[#444] truncate max-w-[130px] flex items-center gap-1.5"
              style={{ boxShadow: 'inset 1px 1px 0px #333, inset -1px -1px 0px #000' }}
            >
              <Terminal className="w-3 h-3 text-white" />
              <span>About</span>
            </button>

            <button
              onClick={() => {
                cyberSound.play90sKeyClick();
                onNavigate('projects');
              }}
              className="font-mono text-[11px] font-bold px-2.5 py-1 bg-[#151515] text-[#ccc] hover:text-white hover:bg-[#252525] border border-[#444] truncate max-w-[130px] flex items-center gap-1.5"
              style={{ boxShadow: 'inset 1px 1px 0px #333, inset -1px -1px 0px #000' }}
            >
              <Folder className="w-3 h-3 text-white" />
              <span>Projects</span>
            </button>

            <button
              onClick={() => {
                cyberSound.play90sKeyClick();
                onNavigate('skills');
              }}
              className="font-mono text-[11px] font-bold px-2.5 py-1 bg-[#151515] text-[#ccc] hover:text-white hover:bg-[#252525] border border-[#444] truncate max-w-[130px] flex items-center gap-1.5"
              style={{ boxShadow: 'inset 1px 1px 0px #333, inset -1px -1px 0px #000' }}
            >
              <Cpu className="w-3 h-3 text-white" />
              <span>Skills</span>
            </button>

            <button
              onClick={() => {
                cyberSound.play90sKeyClick();
                onNavigate('contact');
              }}
              className="font-mono text-[11px] font-bold px-2.5 py-1 bg-[#151515] text-[#ccc] hover:text-white hover:bg-[#252525] border border-[#444] truncate max-w-[130px] flex items-center gap-1.5"
              style={{ boxShadow: 'inset 1px 1px 0px #333, inset -1px -1px 0px #000' }}
            >
              <Mail className="w-3 h-3 text-white" />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Right: System Tray (Floppy Disk LED, Sound, CRT, Clock) */}
        <div 
          className="flex items-center gap-3 bg-[#111111] border border-[#333] px-2.5 py-0.5"
          style={{
            boxShadow: 'inset 1px 1px 0px #000, inset -1px -1px 0px #222'
          }}
        >
          {/* Floppy Disk Read Seek Indicator */}
          <div className="flex items-center gap-1 text-[10px] font-mono text-[#777]" title="Floppy Disk I/O Activity">
            <HardDrive className="w-3.5 h-3.5 text-[#888]" />
            <span className={`w-2 h-2 rounded-full ${diskBlink ? 'bg-white shadow-[0_0_6px_#fff]' : 'bg-[#333]'}`} />
          </div>

          {/* CRT Scanline Toggle */}
          <button
            onClick={onToggleCrt}
            title={`CRT Scanlines: ${crtEnabled ? 'ON' : 'OFF'}`}
            className="text-[#aaa] hover:text-white"
          >
            <Monitor className={`w-3.5 h-3.5 ${crtEnabled ? 'text-white' : 'text-[#666]'}`} />
          </button>

          {/* Audio Mute/Unmute */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
            className="text-[#aaa] hover:text-white"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-[#666]" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
          </button>

          {/* Live Digital Clock */}
          <div className="font-mono text-[11px] font-bold text-white tracking-wider border-l border-[#333] pl-2.5">
            {timeStr || '12:00:00 AM'}
          </div>
        </div>
      </footer>
    </>
  );
};
