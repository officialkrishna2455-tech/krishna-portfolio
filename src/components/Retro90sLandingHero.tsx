import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Download, Mail, ExternalLink, Sparkles, MapPin, Terminal, Cpu, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { cyberSound } from '../utils/soundEffects';

interface Retro90sLandingHeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Retro90sLandingHero: React.FC<Retro90sLandingHeroProps> = ({
  onExploreProjects,
  onOpenContact,
  onOpenResume
}) => {
  const { director } = PORTFOLIO_DATA;

  return (
    <section 
      id="landing" 
      className="relative z-10 min-h-[94vh] flex flex-col justify-between pt-20 pb-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Top Welcome Telemetry Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <span className="flex items-center gap-1.5 bg-black text-white px-3 py-1 font-bold border-2 border-white shadow-[2px_2px_0px_#444]">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
            WORKSTATION ONLINE // 2026
          </span>
          <span className="bg-[#181818] text-[#e0e0e0] px-3 py-1 border border-[#555] font-semibold flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-white" />
            {director.location}
          </span>
          <span className="hidden sm:inline-block bg-[#181818] text-[#aaa] px-3 py-1 border border-[#444] font-semibold">
            B.Tech CSE (AI/ML) · 2023 - 2027
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={director.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cyberSound.play90sKeyClick()}
            className="font-mono text-xs font-bold px-3 py-1 bg-[#1a1a1a] text-white hover:bg-white hover:text-black border border-[#555] flex items-center gap-1.5 transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={director.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cyberSound.play90sKeyClick()}
            className="font-mono text-xs font-bold px-3 py-1 bg-[#1a1a1a] text-white hover:bg-white hover:text-black border border-[#555] flex items-center gap-1.5 transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Main Center Stage: Huge Bold Introduction */}
      <div className="my-auto py-8 max-w-4xl">
        <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-extrabold text-white bg-black border border-white/60 px-3 py-1 mb-4">
          <Terminal className="w-4 h-4 text-white" />
          <span>PORTFOLIO_SYSTEM // PRESENTING CANDIDATE</span>
        </div>

        <h1 className="font-mono text-6xl sm:text-8xl lg:text-9xl font-black text-white tracking-tight uppercase drop-shadow-[0_4px_16px_rgba(255,255,255,0.25)] leading-none">
          {director.name}
        </h1>

        <div className="mt-4 font-mono text-lg sm:text-2xl lg:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-[#888]">&gt;</span>
          <span>{director.title}</span>
        </div>

        <p className="mt-5 font-mono text-sm sm:text-base lg:text-lg text-[#dedede] leading-relaxed max-w-3xl bg-black/60 p-4 border border-[#444] shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000]">
          {director.objective}
        </p>

        {/* 4 Quick Stat Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 font-mono">
          {director.quickStats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#141414] border-2 border-[#555] p-3 flex flex-col justify-between shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,2px_2px_0px_#000]"
            >
              <span className="text-[11px] text-[#aaa] font-bold uppercase">{stat.label}</span>
              <span className="text-xl sm:text-2xl font-black text-white mt-1">{stat.value}</span>
              <span className="text-[11px] text-[#ccc] font-medium mt-0.5">{stat.sub}</span>
            </div>
          ))}
        </div>

        {/* High-Impact Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          {/* Explore Projects Button */}
          <button
            onClick={() => {
              cyberSound.play90sWindowOpen();
              onExploreProjects();
            }}
            className="font-mono text-sm sm:text-base font-black px-6 py-3.5 bg-white text-black hover:bg-[#e0e0e0] border-2 border-black flex items-center gap-2.5 shadow-[4px_4px_0px_#555] active:translate-y-[2px] transition-all cursor-pointer"
          >
            <ArrowDown className="w-5 h-5 stroke-[2.5]" />
            <span>[ Explore Workstation / Projects ]</span>
          </button>

          {/* View Official Resume Button */}
          <button
            onClick={() => {
              cyberSound.play90sKeyClick();
              onOpenResume();
            }}
            className="font-mono text-sm sm:text-base font-black px-6 py-3.5 bg-[#181818] text-white hover:bg-white hover:text-black border-2 border-white flex items-center gap-2.5 shadow-[4px_4px_0px_#000] active:translate-y-[2px] transition-all cursor-pointer"
            style={{
              boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #000, 4px 4px 0px #000'
            }}
          >
            <Download className="w-5 h-5 stroke-[2.5]" />
            <span>[ Official Resume (PDF) ]</span>
          </button>

          {/* Contact Me Button */}
          <button
            onClick={() => {
              cyberSound.play90sKeyClick();
              onOpenContact();
            }}
            className="font-mono text-sm sm:text-base font-black px-5 py-3.5 bg-[#141414] text-[#ddd] hover:bg-white hover:text-black border-2 border-[#666] flex items-center gap-2 active:translate-y-[2px] transition-all cursor-pointer"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000, 3px 3px 0px #000'
            }}
          >
            <Mail className="w-5 h-5 stroke-[2.5]" />
            <span>[ Get In Touch ]</span>
          </button>
        </div>
      </div>

      {/* Bottom Scroll Prompt Bar */}
      <div className="pt-4 border-t border-[#333] flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#888]">
        <div className="flex items-center gap-2 text-white font-bold">
          <span className="w-2 h-2 bg-white animate-pulse" />
          <span>Interactive 3D Character tracks mouse movement in real time</span>
        </div>

        <button
          onClick={() => {
            cyberSound.play90sKeyClick();
            onExploreProjects();
          }}
          className="flex items-center gap-2 text-[#ccc] hover:text-white font-bold transition-colors cursor-pointer group"
        >
          <span className="group-hover:underline">SCROLL TO EXPLORE ALL OS MODULES</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
