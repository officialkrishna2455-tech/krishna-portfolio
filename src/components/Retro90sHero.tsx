import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Terminal, Download, ArrowDown, MapPin, Mail, Sparkles, CheckCircle2, Shield } from 'lucide-react';
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

  return (
    <section id="hero" className="relative z-10 pt-20 pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* 90s Window Frame with Clean, Real Data */}
      <RetroWindow
        id="about-window"
        title="About Me — Krishna (AI/ML Systems Architect)"
        icon="terminal"
        version="PORTFOLIO 2026"
        statusBarText="STATUS: AVAILABLE FOR FULL-TIME ROLES | LOCATION: BHOPAL, INDIA"
      >
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Real Profile, Clear Bio & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            {/* Status & Location Badge */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="flex items-center gap-1.5 bg-black text-white px-2.5 py-1 font-bold border-2 border-white">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                AVAILABLE FOR HIRE
              </span>
              <span className="flex items-center gap-1 bg-[#1a1a1a] text-[#f0f0f0] px-2.5 py-1 border border-[#555] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-white" />
                {director.location}
              </span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <h1 className="font-mono text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_12px_rgba(255,255,255,0.25)]">
                {director.name}
              </h1>
              <div className="mt-3 inline-block font-mono text-base sm:text-lg font-black text-white bg-black border-2 border-white px-3.5 py-1.5 shadow-[4px_4px_0px_#444]">
                {director.title}
              </div>
            </div>

            {/* Clear, Understandable Objective / Summary */}
            <div className="bg-[#141414] border-2 border-[#444] p-4 font-mono text-sm sm:text-base text-white leading-relaxed">
              <p className="font-medium text-[#f5f5f5]">
                {director.objective}
              </p>
            </div>

            {/* Key Engineering Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              {director.quickStats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-[#161616] border-2 border-[#444] p-3 flex flex-col justify-between shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000]"
                >
                  <span className="text-xs text-[#cfcfcf] font-bold uppercase">{stat.label}</span>
                  <span className="text-lg sm:text-xl font-black text-white mt-1.5">{stat.value}</span>
                  <span className="text-xs text-[#e5e5e5] font-medium mt-0.5">{stat.sub}</span>
                </div>
              ))}
            </div>

            {/* Clean, Understandable Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* View Projects */}
              <button
                onClick={() => {
                  cyberSound.play90sWindowOpen();
                  onOpenProjects();
                }}
                className="font-mono text-sm font-black px-5 py-3 bg-white text-black hover:bg-[#ddd] border-2 border-black active:translate-y-[2px] transition-all flex items-center gap-2 shadow-[3px_3px_0px_#000]"
              >
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                <span>[ View Projects ]</span>
              </button>

              {/* Download Resume */}
              <button
                onClick={() => {
                  cyberSound.play90sKeyClick();
                  onOpenResume();
                }}
                className="font-mono text-sm font-black px-5 py-3 bg-[#1e1e1e] text-white hover:bg-white hover:text-black border-2 border-white active:translate-y-[2px] transition-all flex items-center gap-2 shadow-[3px_3px_0px_#000]"
                style={{
                  boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #000, 3px 3px 0px #000'
                }}
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>[ Resume (PDF) ]</span>
              </button>

              {/* Contact Me */}
              <button
                onClick={() => {
                  cyberSound.play90sKeyClick();
                  onOpenContact();
                }}
                className="font-mono text-sm font-black px-5 py-3 bg-[#161616] text-[#e0e0e0] hover:bg-white hover:text-black border-2 border-[#666] active:translate-y-[2px] transition-all flex items-center gap-2 shadow-[3px_3px_0px_#000]"
                style={{
                  boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #000, 3px 3px 0px #000'
                }}
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
                <span>[ Contact Me ]</span>
              </button>
            </div>
          </div>

          {/* Right Column: 90s 3D Character Companion Visualizer */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              className="relative w-full max-w-[360px] bg-[#121212] border-2 border-[#666] p-3.5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000,6px_6px_24px_rgba(0,0,0,0.9)]"
            >
              {/* Window Header */}
              <div className="bg-[#222] text-white px-3 py-1.5 flex items-center justify-between text-xs font-mono font-bold border-b border-black mb-2.5">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-white" />
                  <span>3D Character Companion</span>
                </span>
                <span className="bg-black text-white px-2 py-0.5 border border-[#555] text-[10px]">
                  INTERACTIVE
                </span>
              </div>

              {/* 3D Character Render Image */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black border-2 border-[#444]">
                <img
                  src="/character_90s.jpg"
                  alt="3D Character Companion"
                  className="w-full h-full object-cover grayscale contrast-125"
                  loading="eager"
                />

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 font-mono text-[10px] font-bold bg-black/80 text-white px-2 py-0.5 border border-white/40">
                  AI ARCHITECT // KRISHNA
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-3 pt-2 border-t border-[#333] font-mono text-xs text-[#dedede] flex items-center justify-between">
                <span>Interactive Background:</span>
                <span className="bg-white text-black font-extrabold px-2 py-0.5 text-xs">
                  Active (Tracks Mouse)
                </span>
              </div>
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};
