import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Terminal, Download, ArrowUpRight, Cpu, Radio, Shield, HardDrive, Sparkles, Binary } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface Retro90sHeroProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Retro90sHero: React.FC<Retro90sHeroProps> = ({
  onOpenProjects,
  onOpenContact,
  onOpenResume
}) => {
  const { director } = PORTFOLIO_DATA;
  const [bootTextIndex, setBootTextIndex] = useState(0);

  const bootLines = [
    'NOIR BIOS (C)1998 MATRIX SYSTEMS CORP.',
    'CHECKING NVRAM... 131072KB OK',
    'INIT PRIMARY MASTER: QUANTUM FIREBALL 8.4GB',
    'DETECTING NEURAL COPROCESSOR: PYTORCH TENSOR-400 OK',
    'READY FOR OPERATOR COMMAND.'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setBootTextIndex((prev) => (prev < bootLines.length - 1 ? prev + 1 : prev));
    }, 450);
    return () => clearInterval(timer);
  }, [bootLines.length]);

  return (
    <section id="hero" className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* 90s Main System Window */}
      <RetroWindow
        id="system-root-window"
        title="C:\KRISHNA\SYSTEM_BOOT.EXE"
        icon="terminal"
        version="BUILD 1998.4"
        statusBarText="MEMORY: 128MB EDO OK | VIDEO: SGI 24-BIT MONOCHROME | INTERRUPT: IRQ 07"
      >
        {/* Vintage BIOS Boot Sequence Header */}
        <div className="bg-[#050505] border border-[#2b2b2b] p-3 mb-6 font-mono text-[11px] text-[#aaa] shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
          <div className="flex flex-wrap items-center justify-between border-b border-[#222] pb-1.5 mb-2 text-[#777]">
            <span className="text-white font-bold tracking-widest flex items-center gap-1.5">
              <Binary className="w-3.5 h-3.5 text-white" />
              <span>AWARD MODULAR BIOS v4.51PG, AN ENERGY STAR ALLY</span>
            </span>
            <span>SEPTEMBER 1998</span>
          </div>

          <div className="space-y-0.5">
            {bootLines.slice(0, bootTextIndex + 1).map((line, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-[#666]">&gt;&gt;</span>
                <span className={idx === bootTextIndex ? 'text-white font-semibold' : 'text-[#888]'}>
                  {line}
                </span>
                {idx === bootTextIndex && <span className="inline-block w-2 h-3 bg-white animate-pulse" />}
              </div>
            ))}
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Headline, Bio & 90s Command Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* System Identification Badge */}
            <div className="flex items-center gap-2 font-mono text-xs text-[#999]">
              <span className="w-2.5 h-2.5 bg-white rounded-none border border-black shadow-[0_0_8px_#fff]" />
              <span className="bg-[#1f1f1f] text-white px-2 py-0.5 font-bold border border-[#444]">
                OPERATING_SYSTEM // NOIR-98
              </span>
              <span className="text-[#666] hidden sm:inline">PID: 0x09F2A</span>
            </div>

            {/* Giant Monospaced Name */}
            <div>
              <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
                {director.name}
              </h1>
              <div className="mt-2 inline-block font-mono text-sm sm:text-base font-bold text-white bg-black border-2 border-white px-3 py-1 shadow-[3px_3px_0px_#555]">
                {director.title}
              </div>
            </div>

            {/* Subtitle / Objective Statement */}
            <p className="font-mono text-xs sm:text-sm text-[#bbb] leading-relaxed border-l-2 border-white pl-3.5 bg-[#0a0a0a]/60 py-2">
              {director.objective}
            </p>

            {/* 1990s Hardware Specification Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-[11px] my-1">
              {director.quickStats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-[#141414] border border-[#333] p-2.5 flex flex-col justify-between shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000]"
                >
                  <span className="text-[10px] text-[#777] uppercase">{stat.label}</span>
                  <span className="text-sm font-bold text-white mt-1">{stat.value}</span>
                  <span className="text-[9px] text-[#999] truncate">{stat.sub}</span>
                </div>
              ))}
            </div>

            {/* 90s Authentic Beveled Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Run Projects Button */}
              <button
                onClick={() => {
                  cyberSound.play90sWindowOpen();
                  onOpenProjects();
                }}
                className="font-mono text-xs font-bold px-4 py-2.5 bg-[#252525] text-white hover:bg-white hover:text-black border-2 border-[#666] active:translate-y-[2px] transition-all flex items-center gap-2"
                style={{
                  boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #000, 2px 2px 0px #000'
                }}
              >
                <Terminal className="w-4 h-4" />
                <span>[ EXECUTE_PROJECTS.BAT ]</span>
              </button>

              {/* Download Resume Button */}
              <button
                onClick={() => {
                  cyberSound.play90sKeyClick();
                  onOpenResume();
                }}
                className="font-mono text-xs font-bold px-4 py-2.5 bg-[#1b1b1b] text-[#dedede] hover:bg-white hover:text-black border-2 border-[#555] active:translate-y-[2px] transition-all flex items-center gap-2"
                style={{
                  boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #000, 2px 2px 0px #000'
                }}
              >
                <Download className="w-4 h-4" />
                <span>[ RESUME_DOCUMENT.PDF ]</span>
              </button>

              {/* Transmit Modem Button */}
              <button
                onClick={() => {
                  cyberSound.play90sModem();
                  onOpenContact();
                }}
                className="font-mono text-xs font-bold px-4 py-2.5 bg-[#141414] text-[#aaa] hover:bg-white hover:text-black border-2 border-[#444] active:translate-y-[2px] transition-all flex items-center gap-2"
                style={{
                  boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #000, 2px 2px 0px #000'
                }}
              >
                <Radio className="w-4 h-4" />
                <span>[ DIAL_MODEM.COM ]</span>
              </button>
            </div>
          </div>

          {/* Right Column: 90s CGI Character Portrait Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              className="relative w-full max-w-[340px] bg-[#0c0c0c] border-2 border-[#666] p-3 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000,4px_4px_16px_rgba(0,0,0,0.9)]"
            >
              {/* Card Window Header */}
              <div className="bg-[#1f1f1f] text-white px-2 py-1 flex items-center justify-between text-[10px] font-mono border-b border-black mb-2">
                <span className="font-bold flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-white" />
                  <span>3D_CYBERNETIC_CHARACTER.BMP</span>
                </span>
                <span className="text-[#888]">1998 CGI</span>
              </div>

              {/* 3D Character Render Image with Retro CRT Scanline Shader Overlay */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black border border-[#333]">
                <img
                  src="/character_90s.jpg"
                  alt="1990s Computer 3D Cybernetic Character"
                  className="w-full h-full object-cover grayscale contrast-125 filter"
                  loading="eager"
                />

                {/* 90s CRT Scanline Layer */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-40"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.75) 50%)',
                    backgroundSize: '100% 4px'
                  }}
                />

                {/* Retro CRT Crosshair HUD Overlay */}
                <div className="absolute inset-4 border border-white/20 pointer-events-none flex flex-col justify-between p-2">
                  <div className="flex justify-between font-mono text-[9px] text-white">
                    <span>SYS//CORE</span>
                    <span>TENSOR_OK</span>
                  </div>
                  <div className="flex justify-between font-mono text-[9px] text-[#aaa]">
                    <span>TRACKING: 3D_HEAD</span>
                    <span>60 FPS</span>
                  </div>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-2.5 pt-2 border-t border-[#222] font-mono text-[10px] text-[#999] flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-white" />
                  <span>SGI_WORKSTATION</span>
                </span>
                <span className="bg-white text-black font-extrabold px-1.5 py-0.2">
                  ACTIVE_IN_3D_BACKGROUND
                </span>
              </div>
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};
