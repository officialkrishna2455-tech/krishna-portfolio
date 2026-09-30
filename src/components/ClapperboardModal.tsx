import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

interface ClapperboardModalProps {
  onEnter: () => void;
}

export const ClapperboardModal: React.FC<ClapperboardModalProps> = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isClapping, setIsClapping] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.getMuted());

  const handleAction = () => {
    setIsClapping(true);
    soundFX.playClapperboard();

    setTimeout(() => {
      setIsOpen(false);
      onEnter();
    }, 650);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        e.preventDefault();
        handleAction();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 select-none"
        >
          {/* Cinema Spotlights in Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-lg w-full flex flex-col items-center">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              className="absolute -top-14 right-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white/80 border border-white/15 transition-colors"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
              <span>{isMuted ? "Sound Off" : "Sound On"}</span>
            </button>

            {/* Production Header */}
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-amber-400 mb-2 uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Krishna Studios & Productions</span>
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-black font-cinzel tracking-wider text-white">
                THE PREMIERE
              </h1>
              <p className="text-xs text-slate-400 font-mono mt-1">
                CAMPUS PLACEMENT SCREENING · FEATURE LENGTH PORTFOLIO
              </p>
            </div>

            {/* The Clapperboard */}
            <div className="w-full bg-[#12131a] border-2 border-white/20 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden">
              {/* Clapper Top Bars (Striped) */}
              <div className="relative h-16 bg-[#1a1b24] border-b-2 border-white/20 overflow-hidden flex items-center">
                {/* Clapper Hinge Arm */}
                <motion.div
                  animate={isClapping ? { rotate: [0, -35, 0] } : { rotate: -18 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  style={{ transformOrigin: "bottom left" }}
                  className="absolute inset-0 bg-neutral-900 border-b-4 border-amber-400/80 flex"
                >
                  {/* Chevron Striping */}
                  <div className="w-full h-full flex">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-full transform -skew-x-12 ${
                          i % 2 === 0 ? 'bg-white' : 'bg-neutral-900'
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Slate Content Fields */}
              <div className="p-6 font-mono text-xs sm:text-sm">
                <div className="grid grid-cols-3 gap-2 border-b border-white/10 pb-4 mb-4 text-center">
                  <div className="bg-white/5 p-2 rounded border border-white/10">
                    <span className="block text-[10px] text-slate-400">PROD</span>
                    <span className="font-bold text-white tracking-wider">CAREER '27</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded border border-white/10">
                    <span className="block text-[10px] text-slate-400">SCENE</span>
                    <span className="font-bold text-cyan-400">PLACEMENT</span>
                  </div>
                  <div className="bg-white/5 p-2 rounded border border-white/10">
                    <span className="block text-[10px] text-slate-400">TAKE</span>
                    <span className="font-bold text-amber-400">01 (SWE)</span>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">DIRECTOR / CANDIDATE:</span>
                    <span className="font-semibold text-white tracking-wide">KRISHNA</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">TARGET ROLES:</span>
                    <span className="text-cyan-300 font-medium">Software Engineer / AI-ML Engineer</span>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-1.5">
                    <span className="text-slate-400">CAMERA & SPECIALIZATION:</span>
                    <span className="text-white">B.Tech CSE (AI/ML) · JLU Bhopal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">AUDIO FORMAT:</span>
                    <span className="text-amber-400">Dolby Atmos / Full-Stack Stereo</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 bg-white/5 border-t border-white/10 flex flex-col items-center gap-3">
                <button
                  onClick={handleAction}
                  disabled={isClapping}
                  className="btn-cinema-gold group relative inline-flex items-center justify-center gap-3 px-10 py-4 rounded-xl text-black font-extrabold font-syne text-base tracking-wider uppercase shadow-[0_0_35px_rgba(245,158,11,0.6)] hover:shadow-[0_0_55px_rgba(245,158,11,0.9)] transition-all transform hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 fill-black text-black group-hover:scale-110 transition-transform" />
                  <span>ACTION! ROLL FILM</span>
                </button>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onEnter();
                  }}
                  className="text-xs font-mono text-slate-400 hover:text-amber-300 transition-colors underline cursor-pointer"
                >
                  Skip Intro & Enter Cinema Directly →
                </button>
              </div>
            </div>

            <p className="text-center text-xs text-amber-400/90 font-mono mt-4">
              👉 Click <span className="font-bold text-amber-300">"ACTION! ROLL FILM"</span> to open the movie screen experience!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
