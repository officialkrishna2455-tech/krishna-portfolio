import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { cyberSound } from '../utils/soundEffects';
import { Cpu, ScanFace, Video, ShoppingBag, RotateCw, Power } from 'lucide-react';

interface CyberneticCoreDialProps {
  activeProjectIndex: number;
  onSelectProject: (index: number) => void;
}

export const CyberneticCoreDial: React.FC<CyberneticCoreDialProps> = ({
  activeProjectIndex,
  onSelectProject,
}) => {
  const { projects } = PORTFOLIO_DATA;
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [scrubberPos, setScrubberPos] = useState(35);
  const isDraggingRef = useRef(false);
  const dialRef = useRef<HTMLDivElement>(null);

  // Sync angle when project changes from external controls
  useEffect(() => {
    const targetAngle = activeProjectIndex * 90;
    setRotationAngle(targetAngle);
    setScrubberPos(20 + activeProjectIndex * 20);
  }, [activeProjectIndex]);

  // Handle dial click / rotary step
  const handleDialClick = () => {
    cyberSound.playDialTick();
    const nextIdx = (activeProjectIndex + 1) % projects.length;
    onSelectProject(nextIdx);
  };

  const handleScrubberClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
    setScrubberPos(pct);
    const targetIdx = Math.min(projects.length - 1, Math.floor((pct / 100) * projects.length));
    if (targetIdx !== activeProjectIndex) {
      cyberSound.playDialTick();
      onSelectProject(targetIdx);
    }
  };

  const currentProject = projects[activeProjectIndex];

  return (
    <div className="relative flex flex-col items-center justify-center py-6 select-none">
      {/* HUD Telemetry Sub-header */}
      <div className="flex items-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-[#181a1f] border border-white/10 text-xs font-mono text-slate-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-slate-300 font-semibold tracking-wider">AI NEURAL CORE // ANIME.JS REACTOR</span>
        <span className="text-slate-500">|</span>
        <span className="text-cyan-400">ROTARY HUD v4.0</span>
      </div>

      {/* The Central Anime.js Inspired Robot Reactor Lens */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
        {/* Background Ambient Glow */}
        <div
          className="absolute inset-0 rounded-full blur-[80px] opacity-30 transition-colors duration-700 pointer-events-none"
          style={{ backgroundColor: currentProject.accentColor }}
        />

        {/* Rotary Dial Container */}
        <div
          ref={dialRef}
          onClick={handleDialClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full h-full rounded-full cursor-pointer flex items-center justify-center p-3 transition-transform hover:scale-[1.02] active:scale-[0.99]"
          title="Click to rotate core & cycle neural subsystems"
        >
          {/* SVG 1: Outer Multi-Color Segmented Ring (Inspired directly by Anime.js screenshot) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none -rotate-90" viewBox="0 0 400 400">
            {/* Top-Right: Coral Red */}
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#ff4b4b"
              strokeWidth="9"
              strokeDasharray="210 860"
              strokeDashoffset="0"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(255,75,75,0.8)]"
            />
            {/* Right: Amber Orange */}
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#ffb400"
              strokeWidth="9"
              strokeDasharray="180 890"
              strokeDashoffset="-230"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(255,180,0,0.8)]"
            />
            {/* Bottom-Right: Cyan */}
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#00f0ff"
              strokeWidth="9"
              strokeDasharray="180 890"
              strokeDashoffset="-430"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]"
            />
            {/* Bottom-Left: Royal Blue */}
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#4d8aff"
              strokeWidth="9"
              strokeDasharray="170 900"
              strokeDashoffset="-630"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(77,138,255,0.8)]"
            />
            {/* Top-Left: Lime Green */}
            <circle
              cx="200"
              cy="200"
              r="170"
              fill="none"
              stroke="#74dd3d"
              strokeWidth="9"
              strokeDasharray="200 870"
              strokeDashoffset="-820"
              strokeLinecap="round"
              className="drop-shadow-[0_0_12px_rgba(116,221,61,0.8)]"
            />
          </svg>

          {/* SVG 2: Inner Radial Calibrated Ticks Ring */}
          <motion.div
            animate={{ rotate: rotationAngle }}
            transition={{ type: 'spring', stiffness: 120, damping: 14 }}
            className="absolute inset-4 rounded-full flex items-center justify-center pointer-events-none"
          >
            <svg className="w-full h-full" viewBox="0 0 360 360">
              {/* Concentric Bezel Ring */}
              <circle cx="180" cy="180" r="145" fill="none" stroke="#2a2c34" strokeWidth="2.5" />
              <circle cx="180" cy="180" r="130" fill="none" stroke="#1d1f27" strokeWidth="16" />

              {/* Radial tick marks */}
              {[...Array(72)].map((_, i) => {
                const angle = (i * 360) / 72;
                const isMajor = i % 6 === 0;
                return (
                  <line
                    key={i}
                    x1="180"
                    y1={isMajor ? "40" : "44"}
                    x2="180"
                    y2="50"
                    stroke={isMajor ? "#ff5252" : "#4a4d5c"}
                    strokeWidth={isMajor ? "1.8" : "1"}
                    transform={`rotate(${angle} 180 180)`}
                  />
                );
              })}

              {/* Orange Dynamic Arc Traces (Matching bottom-right of Anime.js dial) */}
              <circle
                cx="180"
                cy="180"
                r="115"
                fill="none"
                stroke="#ffb400"
                strokeWidth="2"
                strokeDasharray="90 800"
                strokeDashoffset="120"
                strokeLinecap="round"
                className="opacity-70"
              />
              <circle
                cx="180"
                cy="180"
                r="105"
                fill="none"
                stroke="#ffd166"
                strokeWidth="1.5"
                strokeDasharray="60 800"
                strokeDashoffset="140"
                strokeLinecap="round"
                className="opacity-50"
              />
            </svg>
          </motion.div>

          {/* Center Matte Core & Dot Matrix Display */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-b from-[#181920] to-[#0f1015] border-2 border-white/10 shadow-[inset_0_4px_20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center justify-center">
            {/* Dot Matrix Pattern */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(#ff4b4b 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }}
            />

            {/* Glass Curved Specular Sheen (Iconic Anime.js glare) */}
            <div
              className="absolute -top-8 -left-8 w-44 h-44 rounded-full pointer-events-none opacity-25"
              style={{
                background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.1) 40%, transparent 65%)',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 50%)',
              }}
            />

            {/* Center Robot Eye Icon & Active System Label */}
            <div className="relative z-10 flex flex-col items-center text-center p-3">
              <div
                className="p-3 rounded-2xl mb-2 shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-colors duration-500"
                style={{
                  background: `${currentProject.accentColor}22`,
                  border: `1px solid ${currentProject.accentColor}66`,
                }}
              >
                {currentProject.interactiveType === 'interview' && (
                  <Cpu className="w-8 h-8 text-cyan-400" />
                )}
                {currentProject.interactiveType === 'facenet' && (
                  <ScanFace className="w-8 h-8 text-blue-400" />
                )}
                {currentProject.interactiveType === 'deepfake' && (
                  <Video className="w-8 h-8 text-red-400" />
                )}
                {currentProject.interactiveType === 'ecommerce' && (
                  <ShoppingBag className="w-8 h-8 text-emerald-400" />
                )}
              </div>

              <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                {currentProject.rating}
              </span>
              <h4 className="font-syne font-black text-sm text-white truncate max-w-[140px]">
                {currentProject.title}
              </h4>
              <span className="text-[9px] font-mono text-cyan-300 mt-0.5">
                CLICK TO ROTATE
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cybernetic Timeline Scrubber Bar (Matching bottom-right of Anime.js screenshot) */}
      <div className="w-full max-w-md mt-6 px-4">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1.5">
          <span className="flex items-center gap-1.5">
            <RotateCw className="w-3 h-3 text-cyan-400" />
            <span>CORE SUBSYSTEM INDEX</span>
          </span>
          <span className="text-white font-bold">
            0{activeProjectIndex + 1} / 0{projects.length}
          </span>
        </div>

        {/* The Audio/Data Scrubber with Red Playhead */}
        <div
          onClick={handleScrubberClick}
          className="relative h-9 rounded-xl bg-[#14151b] border border-white/10 px-3 flex items-center justify-between cursor-pointer hover:border-white/20 transition-colors overflow-hidden"
          title="Click to scrub through system architectures"
        >
          {/* Fine vertical tick lines */}
          <div className="w-full flex items-center justify-between gap-1 opacity-40 pointer-events-none">
            {[...Array(44)].map((_, i) => (
              <div
                key={i}
                className={`w-[1px] bg-white transition-all ${
                  i % 4 === 0 ? 'h-4 bg-slate-300' : 'h-2 bg-slate-600'
                }`}
              />
            ))}
          </div>

          {/* Glowing Red Cursor / Playhead from the screenshot */}
          <div
            className="absolute top-1 bottom-1 w-1 bg-red-500 rounded-full shadow-[0_0_10px_#ff4b4b] transition-all duration-300 pointer-events-none"
            style={{ left: `${scrubberPos}%` }}
          />
        </div>
      </div>

      {/* Quick Select Project Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4 max-w-lg">
        {projects.map((proj, idx) => {
          const isSelected = idx === activeProjectIndex;
          return (
            <button
              key={proj.id}
              onClick={() => {
                cyberSound.playDialTick();
                onSelectProject(idx);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                  : 'bg-[#14151c] text-slate-400 border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: proj.accentColor }}
              />
              <span>{proj.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
