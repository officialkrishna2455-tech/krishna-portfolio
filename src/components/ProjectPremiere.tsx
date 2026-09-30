import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Sparkles, CheckCircle2, ChevronRight, ChevronLeft, ShieldCheck, Cpu, X, ScanFace, Video, ShoppingBag } from 'lucide-react';
import { PORTFOLIO_DATA, type Project } from '../data/portfolioData';
import { GithubIcon } from './Icons';
import { soundFX } from '../utils/soundEffects';

export const ProjectPremiere: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [activeSimulator, setActiveSimulator] = useState<Project | null>(null);

  const currentProject = projects[selectedIdx];

  const handleNext = () => {
    soundFX.playTick();
    setSelectedIdx((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    soundFX.playTick();
    setSelectedIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (idx: number) => {
    soundFX.playTick();
    setSelectedIdx(idx);
  };

  const handleOpenSimulator = (proj: Project) => {
    soundFX.playProjectorBeam();
    setActiveSimulator(proj);
  };

  return (
    <section id="projects-premiere" className="relative py-16 px-4 max-w-7xl mx-auto">
      {/* Section Marquee Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ACT II: FEATURE FILMS & PRODUCTIONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-white">
          THE FEATURE SCREENINGS
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-2xl mx-auto mt-2">
          High-impact full-stack and deep-learning productions built with real-world precision.
        </p>
      </div>

      {/* Movie Filmstrip Carousel Selector */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {projects.map((proj, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <button
              key={proj.id}
              onClick={() => handleSelect(idx)}
              className={`flex-1 min-w-[200px] p-3 rounded-xl border text-left transition-all ${
                isSelected
                  ? 'bg-gradient-to-r from-white/15 to-white/5 border-amber-400/80 shadow-[0_0_20px_rgba(245,158,11,0.25)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:border-white/20 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className={isSelected ? 'text-amber-400 font-bold' : 'text-slate-400'}>
                  FEATURE #{idx + 1}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-white text-[9px]">
                  {proj.year}
                </span>
              </div>
              <div className="font-syne font-bold text-sm text-white truncate">
                {proj.title}
              </div>
              <div className="text-[11px] text-slate-400 truncate">
                {proj.score}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Theatrical Project Screen */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#13141f] to-[#0a0b10] border-2 border-white/15 p-6 sm:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden">
        {/* Film Sprocket Perforations along Top & Bottom */}
        <div className="absolute top-2 inset-x-0 flex justify-between px-4 opacity-20 pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2.5 h-1.5 rounded-sm bg-white" />
          ))}
        </div>
        <div className="absolute bottom-2 inset-x-0 flex justify-between px-4 opacity-20 pointer-events-none">
          {[...Array(24)].map((_, i) => (
            <div key={i} className="w-2.5 h-1.5 rounded-sm bg-white" />
          ))}
        </div>

        {/* Ambient Backlight Glow syncing with project color */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-64 blur-[130px] opacity-25 pointer-events-none transition-colors duration-700"
          style={{ backgroundColor: currentProject.accentColor }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-3 pb-3">
          {/* Left Column: Movie Poster & Interactive Stage */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black shadow-2xl group">
              {/* Project Visual Art Demonstration */}
              <div className="absolute inset-0 flex flex-col justify-between p-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-transparent to-black">
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between">
                  <span
                    className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase border"
                    style={{
                      borderColor: `${currentProject.accentColor}55`,
                      backgroundColor: `${currentProject.accentColor}20`,
                      color: currentProject.accentColor
                    }}
                  >
                    {currentProject.rating}
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono border border-white/15">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{currentProject.score}</span>
                  </span>
                </div>

                {/* Center Visual Art / Tech Symbol */}
                <div className="flex flex-col items-center justify-center text-center my-auto py-4">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-3 shadow-[0_0_40px_rgba(0,240,255,0.3)] transition-transform group-hover:scale-110 duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${currentProject.accentColor}33, #0a0b12)`,
                      border: `1px solid ${currentProject.accentColor}88`
                    }}
                  >
                    {currentProject.interactiveType === 'interview' && (
                      <Cpu className="w-10 h-10 text-cyan-400" />
                    )}
                    {currentProject.interactiveType === 'facenet' && (
                      <ScanFace className="w-10 h-10 text-blue-400" />
                    )}
                    {currentProject.interactiveType === 'deepfake' && (
                      <Video className="w-10 h-10 text-red-400" />
                    )}
                    {currentProject.interactiveType === 'ecommerce' && (
                      <ShoppingBag className="w-10 h-10 text-emerald-400" />
                    )}
                  </div>
                  <h3 className="font-syne font-black text-xl text-white tracking-wide">
                    {currentProject.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    {currentProject.genre}
                  </p>
                </div>

                {/* Bottom Overlay Action */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] font-mono text-slate-300">
                  <span>Runtime: {currentProject.runtime}</span>
                  <span className="text-amber-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Interactive Simulator
                  </span>
                </div>
              </div>

              {/* Hover Overlay to Trigger Screening Room */}
              <div
                onClick={() => handleOpenSimulator(currentProject)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,255,255,0.4)] transform group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
                <span className="font-syne font-bold text-xs uppercase tracking-wider text-white">
                  Enter Screening Simulator
                </span>
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-4 w-full">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
                title="Previous Feature"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs font-mono text-slate-400">
                {selectedIdx + 1} OF {projects.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/15"
                title="Next Feature"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column: Cinema Screenplay & Engineering Highlights */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
                <span>DIRECTED & ENGINEERED BY KRISHNA</span>
                <span>·</span>
                <span>{currentProject.role}</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black font-cinzel text-white">
                {currentProject.title}
              </h3>
              <p className="text-sm font-medium text-cyan-300/90 mt-1 font-sans">
                {currentProject.subtitle}
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {currentProject.summary}
            </p>

            {/* Key Achievements Bullet Points */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Key Production Highlights
              </h4>
              {currentProject.bulletPoints.map((bp, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{bp}</span>
                </div>
              ))}
            </div>

            {/* Key Engineering Telemetry Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {currentProject.metrics.map((m, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[10px] text-slate-400 font-mono uppercase">{m.label}</div>
                  <div className="text-sm sm:text-base font-bold font-syne text-white mt-0.5 truncate">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Cast Tech Stack Laureates */}
            <div>
              <div className="text-[11px] font-mono text-slate-400 mb-2">
                PRODUCTION TECH ARSENAL:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/15 text-xs text-slate-200 font-mono hover:border-cyan-400/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleOpenSimulator(currentProject)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.7)] transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>Launch Interactive Demo</span>
              </button>

              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playTick()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium text-xs border border-white/20 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Source</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Screening Room Modal */}
      <AnimatePresence>
        {activeSimulator && (
          <InteractiveSimulatorModal
            project={activeSimulator}
            onClose={() => setActiveSimulator(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Interactive Simulator Modal for Project Telemetry Demo
interface SimulatorModalProps {
  project: Project;
  onClose: () => void;
}

const InteractiveSimulatorModal: React.FC<SimulatorModalProps> = ({ project, onClose }) => {
  const [interviewRole, setInterviewRole] = useState("Software Engineer (AI/ML)");
  const [interviewOutput, setInterviewOutput] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{ id: string; confidence: string; status: string } | null>(null);

  const [threshold, setThreshold] = useState(0.575);
  const [simulatedProb, setSimulatedProb] = useState(0.18);

  const triggerInterviewSim = () => {
    soundFX.playTick();
    setIsGenerating(true);
    setInterviewOutput(null);

    setTimeout(() => {
      setIsGenerating(false);
      setInterviewOutput(
        `[Groq Llama-3.3-70b Response for ${interviewRole}]:
"Excellent approach to handling the 4:1 class imbalance using WeightedRandomSampler. When architecting your ResNet-50 + BiLSTM pipeline, how did you balance temporal frame consistency against spatial feature extraction latency?"
Score: 94/100 | Latency: 420ms | ATS Match: 98%`
      );
    }, 700);
  };

  const triggerFaceNetScan = () => {
    soundFX.playTick();
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        id: "STUDENT_ID: JLU-2023-CS-041",
        confidence: "98.7% FaceNet Match",
        status: "Marked PRESENT in Session 104 (Exported to Excel)"
      });
    }, 900);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4"
    >
      <div className="relative max-w-2xl w-full bg-[#11121a] border-2 border-white/20 rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-syne font-bold text-sm text-white">
              SCREENING ROOM: {project.title} SIMULATOR
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Interactive Body */}
        <div className="p-6 font-mono text-xs space-y-4">
          {project.interactiveType === 'interview' && (
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-amber-400 block mb-1">[ CareerLaunch AI Interview Engine ]</span>
                <p className="text-slate-300 text-[11px]">
                  Simulating Groq LLM API (Llama-3.3-70b) sub-second placement interview generation.
                </p>
              </div>

              <div>
                <label className="block text-slate-400 mb-1">Select Placement Candidate Role:</label>
                <select
                  value={interviewRole}
                  onChange={(e) => setInterviewRole(e.target.value)}
                  className="w-full bg-[#1b1d28] border border-white/15 rounded-lg px-3 py-2 text-white text-xs outline-none"
                >
                  <option value="Software Engineer (AI/ML)">Software Engineer (AI/ML)</option>
                  <option value="Computer Vision Specialist">Computer Vision Specialist</option>
                  <option value="Full-Stack Next.js Developer">Full-Stack Next.js Developer</option>
                </select>
              </div>

              <button
                onClick={triggerInterviewSim}
                disabled={isGenerating}
                className="w-full py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase transition-colors"
              >
                {isGenerating ? "Querying Groq Llama-3.3-70b..." : "Generate AI Interview Feedback"}
              </button>

              {interviewOutput && (
                <div className="p-4 bg-black/60 rounded-xl border border-cyan-500/40 text-cyan-300 text-xs whitespace-pre-line">
                  {interviewOutput}
                </div>
              )}
            </div>
          )}

          {project.interactiveType === 'facenet' && (
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-blue-400 block mb-1">[ MTCNN + FaceNet Telemetry Simulator ]</span>
                <p className="text-slate-300 text-[11px]">
                  Real-time facial vector embedding generation with JWT Teacher/Admin verification.
                </p>
              </div>

              {/* Simulated Camera Viewport */}
              <div className="relative aspect-video rounded-xl bg-neutral-900 border border-blue-500/30 overflow-hidden flex flex-col items-center justify-center">
                <ScanFace className="w-16 h-16 text-blue-400/60 animate-pulse" />
                <span className="text-[11px] text-slate-400 mt-2">
                  {isScanning ? "Detecting multi-face landmarks via MTCNN..." : "Camera Stream Ready (30 FPS)"}
                </span>

                {/* Bounding box animation */}
                {isScanning && (
                  <div className="absolute inset-8 border-2 border-dashed border-cyan-400 rounded-lg animate-ping pointer-events-none" />
                )}
              </div>

              <button
                onClick={triggerFaceNetScan}
                disabled={isScanning}
                className="w-full py-2.5 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-bold uppercase transition-colors"
              >
                {isScanning ? "Processing Embeddings..." : "Capture & Verify Face"}
              </button>

              {scanResult && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/40 rounded-xl text-emerald-300 space-y-1">
                  <div className="font-bold">{scanResult.id}</div>
                  <div>Confidence: {scanResult.confidence}</div>
                  <div>Status: {scanResult.status}</div>
                </div>
              )}
            </div>
          )}

          {project.interactiveType === 'deepfake' && (
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-red-400 block mb-1">[ ResNet-50 + BiLSTM Forensic Classifier ]</span>
                <p className="text-slate-300 text-[11px]">
                  Trained on 4:1 imbalanced dataset via WeightedRandomSampler with calibrated 0.575 threshold.
                </p>
              </div>

              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Decision Threshold: {threshold.toFixed(3)}</span>
                  <span className="text-amber-400 font-bold">Optimal: 0.575</span>
                </div>
                <input
                  type="range"
                  min="0.2"
                  max="0.8"
                  step="0.025"
                  value={threshold}
                  onChange={(e) => setThreshold(parseFloat(e.target.value))}
                  className="w-full accent-red-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="p-3 bg-black/40 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 block">SIMULATED SYNTHETIC SCORE</span>
                  <span className="text-lg font-bold text-white">{(simulatedProb * 100).toFixed(1)}%</span>
                </div>
                <div className="p-3 bg-black/40 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 block">VERDICT</span>
                  <span className={`text-lg font-bold ${simulatedProb > threshold ? 'text-red-400' : 'text-emerald-400'}`}>
                    {simulatedProb > threshold ? "SYNTHETIC / DEEPFAKE" : "AUTHENTIC / REAL"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  soundFX.playTick();
                  setSimulatedProb(Math.random() < 0.5 ? 0.12 + Math.random() * 0.2 : 0.65 + Math.random() * 0.3);
                }}
                className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold uppercase transition-colors"
              >
                Sample Random Forensic Video Clip
              </button>
            </div>
          )}

          {project.interactiveType === 'ecommerce' && (
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                <span className="text-emerald-400 block mb-1">[ Next.js Storefront Benchmark ]</span>
                <p className="text-slate-300 text-[11px]">
                  Testing client hydration and server-rendered micro-interaction latency.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2.5 bg-black/40 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 block">TIME TO FIRST BYTE</span>
                  <span className="font-bold text-emerald-400 text-sm">48 ms</span>
                </div>
                <div className="p-2.5 bg-black/40 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 block">LIGHTHOUSE SCORE</span>
                  <span className="font-bold text-emerald-400 text-sm">99 / 100</span>
                </div>
                <div className="p-2.5 bg-black/40 rounded-xl border border-white/10">
                  <span className="text-[10px] text-slate-400 block">CART HYDRATION</span>
                  <span className="font-bold text-emerald-400 text-sm">&lt; 12 ms</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-white/5 border-t border-white/10 flex justify-between items-center text-xs">
          <span className="text-slate-400">Krishna Production Engineering Lab</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close Screening
          </button>
        </div>
      </div>
    </motion.div>
  );
};
