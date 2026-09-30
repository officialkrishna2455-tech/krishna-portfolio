import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, ShieldCheck, Mail, Phone, MapPin, Sparkles, FileText, ArrowRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { DecryptedText } from './reactbits/DecryptedText';
import { ShinyText } from './reactbits/ShinyText';
import { MagnetButton } from './reactbits/MagnetButton';
import { GithubIcon, LinkedinIcon } from './Icons';
import { CyberneticCoreDial } from './CyberneticCoreDial';
import { cyberSound } from '../utils/soundEffects';

interface CyberHeroProps {
  activeProjectIndex: number;
  onSelectProject: (index: number) => void;
  onExploreProjects: () => void;
  onOpenTransmission: () => void;
  onOpenResumeModal: () => void;
}

export const CyberHero: React.FC<CyberHeroProps> = ({
  activeProjectIndex,
  onSelectProject,
  onExploreProjects,
  onOpenTransmission,
  onOpenResumeModal,
}) => {
  const { director } = PORTFOLIO_DATA;

  return (
    <section id="system-hero" className="relative pt-6 pb-12 px-4 max-w-7xl mx-auto">
      {/* Top Cybernetic Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-white/10 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-white font-bold tracking-wider">NEURAL SYSTEM: ACTIVE</span>
          <span className="text-slate-600">//</span>
          <span className="text-cyan-400">FIRMWARE v4.8</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>CPU: OPTIMIZED</span>
          <span className="text-slate-600">//</span>
          <span className="text-amber-400">RESNET-50 + BiLSTM</span>
          <span className="text-slate-600">//</span>
          <span className="text-emerald-400">LATENCY &lt; 15s</span>
        </div>
      </div>

      {/* Main Hero Grid: Title & Spec on Left, Anime.js Core Reactor Dial on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 pb-4">
        {/* Left Column: Identity & Architecture (7 Cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>ROBOTICS & INTELLIGENT SYSTEMS ARCHITECTURE</span>
          </div>

          <div>
            <h1 className="text-5xl sm:text-7xl font-black font-syne tracking-tight text-white uppercase">
              <ShinyText text={director.name} speed={3.5} shineColor="rgba(0, 240, 255, 0.9)" />
            </h1>
            <div className="flex items-center gap-2 text-lg sm:text-xl font-mono text-cyan-300 font-bold mt-2">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <DecryptedText
                text="AI/ML ENGINEER & FULL-STACK ARCHITECT"
                speed={35}
                maxIterations={12}
              />
            </div>
          </div>

          {/* Education & Location HUD Badges */}
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-300">
            <div className="px-3 py-1 rounded-lg bg-[#181a24] border border-white/10 flex items-center gap-1.5 text-amber-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>{director.education.institution} ({director.education.duration})</span>
            </div>
            <div className="px-3 py-1 rounded-lg bg-[#181a24] border border-white/10 flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>{director.location}</span>
            </div>
          </div>

          {/* Objective Statement Panel */}
          <div className="p-5 rounded-2xl bg-[#14161f] border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-2 right-4 text-[10px] font-mono text-slate-500">
              SPECIFICATION // OBJECTIVE
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans pt-1">
              {director.objective}
            </p>

            {/* Comm Links */}
            <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:${director.email}`}
                  onClick={() => cyberSound.playChirp()}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{director.email}</span>
                </a>
                <a
                  href={`tel:${director.phone}`}
                  onClick={() => cyberSound.playChirp()}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{director.phone}</span>
                </a>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={director.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.playChirp()}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={director.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.playChirp()}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400 border border-white/10 transition-colors"
                  title="LinkedIn Link"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Telemetry Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
            {director.quickStats.map((st, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-[#13151d] border border-white/10 text-center"
              >
                <div className="text-lg font-black font-syne text-cyan-400">{st.value}</div>
                <div className="text-[11px] font-semibold text-white mt-0.5">{st.label}</div>
                <div className="text-[9px] text-slate-400 font-mono mt-0.5">{st.sub}</div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <MagnetButton
              onClick={() => {
                cyberSound.playReactorPower();
                onExploreProjects();
              }}
              className="btn-cinema-cyan flex items-center gap-2 px-6 py-3 rounded-xl font-bold font-syne text-xs uppercase tracking-wider cursor-pointer"
            >
              <span>Inspect Neural Projects</span>
              <ArrowRight className="w-4 h-4" />
            </MagnetButton>

            <MagnetButton
              onClick={() => {
                cyberSound.playTransmission();
                onOpenTransmission();
              }}
              className="btn-cinema-gold flex items-center gap-2 px-6 py-3 rounded-xl font-bold font-syne text-xs uppercase tracking-wider cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Contact & Transmit</span>
            </MagnetButton>

            <MagnetButton
              onClick={() => {
                cyberSound.playChirp();
                onOpenResumeModal();
              }}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-mono text-xs border border-white/20 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-slate-300" />
              <span>Spec Sheet (Resume)</span>
            </MagnetButton>
          </div>
        </div>

        {/* Right Column: Interactive Anime.js Reactor Core Dial (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <CyberneticCoreDial
            activeProjectIndex={activeProjectIndex}
            onSelectProject={onSelectProject}
          />
        </div>
      </div>
    </section>
  );
};
