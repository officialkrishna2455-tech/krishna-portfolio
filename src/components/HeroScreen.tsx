import React from 'react';
import { motion } from 'framer-motion';
import { Film, Play, FileText, Sparkles, MapPin, Mail, Phone, Award, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { DecryptedText } from './reactbits/DecryptedText';
import { ShinyText } from './reactbits/ShinyText';
import { MagnetButton } from './reactbits/MagnetButton';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundFX } from '../utils/soundEffects';

interface HeroScreenProps {
  onExploreProjects: () => void;
  onOpenTicket: () => void;
  onOpenResumeModal: () => void;
}

export const HeroScreen: React.FC<HeroScreenProps> = ({
  onExploreProjects,
  onOpenTicket,
  onOpenResumeModal
}) => {
  const { director } = PORTFOLIO_DATA;

  return (
    <section id="hero-screen" className="relative pt-6 pb-16 px-4 flex flex-col items-center">
      {/* Studio Opening Title Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
          A Cinematic Engineering Production
        </span>
      </motion.div>

      {/* Main Movie Title & Hero Title */}
      <div className="text-center max-w-5xl mx-auto space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.3em] text-slate-400 uppercase mb-2">
            Presenting The Candidate
          </p>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black font-cinzel tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_10px_30px_rgba(255,255,255,0.25)]">
            <ShinyText text={director.name} speed={3.5} shineColor="rgba(245, 158, 11, 0.9)" />
          </h1>
        </motion.div>

        {/* Dynamic Decrypted Role Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 text-base sm:text-xl font-syne font-bold text-cyan-300"
        >
          <Terminal className="w-5 h-5 text-cyan-400" />
          <DecryptedText
            text="AI/ML ENGINEER & FULL-STACK DEVELOPER"
            speed={35}
            maxIterations={15}
            className="tracking-wider"
          />
        </motion.div>

        {/* Education & Location Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-400 pt-1"
        >
          <div className="flex items-center gap-1.5 text-amber-300/90 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
            <Award className="w-3.5 h-3.5" />
            <span>{director.education.institution} ({director.education.duration})</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            <span>{director.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Target: Software Engineer & AI-ML Roles</span>
          </div>
        </motion.div>

        {/* Objective & Synopsis */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-3xl mx-auto pt-2"
        >
          <div className="relative p-5 sm:p-6 rounded-2xl bg-[#0d0e15]/80 border border-white/10 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
            <div className="absolute top-2 left-4 text-[10px] font-mono uppercase tracking-widest text-slate-500">
              [ SCREENPLAY SYNOPSIS ]
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mt-2">
              {director.objective}
            </p>

            {/* Quick Contact Icons */}
            <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <a
                  href={`mailto:${director.email}`}
                  onClick={() => soundFX.playTick()}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{director.email}</span>
                </a>
                <a
                  href={`tel:${director.phone}`}
                  onClick={() => soundFX.playTick()}
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
                  onClick={() => soundFX.playTick()}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={director.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFX.playTick()}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-cyan-400/80 hover:text-cyan-300 border border-white/10 transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Film Telemetry & Key Placement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-2"
        >
          {director.quickStats.map((st, i) => (
            <div
              key={i}
              className="p-3.5 rounded-xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 text-center backdrop-blur-md group hover:border-amber-400/40 transition-all"
            >
              <div className="text-xl sm:text-2xl font-black font-syne text-amber-400 group-hover:scale-105 transition-transform">
                {st.value}
              </div>
              <div className="text-xs font-semibold text-white mt-0.5">{st.label}</div>
              <div className="text-[10px] text-slate-400 font-mono mt-0.5">{st.sub}</div>
            </div>
          ))}
        </motion.div>

        {/* Action Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <MagnetButton
            onClick={() => {
              soundFX.playProjectorBeam();
              onExploreProjects();
            }}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-500 text-black font-bold font-syne text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(0,240,255,0.7)] transition-all cursor-pointer"
          >
            <Play className="w-4 h-4 fill-black" />
            <span>Watch Projects Premiere</span>
          </MagnetButton>

          <MagnetButton
            onClick={() => {
              soundFX.playCelebration();
              onOpenTicket();
            }}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-bold font-syne text-sm uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all cursor-pointer"
          >
            <Film className="w-4 h-4" />
            <span>Recruiter VIP Pass</span>
          </MagnetButton>

          <MagnetButton
            onClick={() => {
              soundFX.playTick();
              onOpenResumeModal();
            }}
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium font-sans text-sm border border-white/20 backdrop-blur-md transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-300" />
            <span>Director's Cut (Resume)</span>
          </MagnetButton>
        </motion.div>
      </div>
    </section>
  );
};
