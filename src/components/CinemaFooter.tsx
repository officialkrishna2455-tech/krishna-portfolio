import React from 'react';
import { ArrowUp, Sparkles, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundFX } from '../utils/soundEffects';

export const CinemaFooter: React.FC = () => {
  const { director } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    soundFX.playTick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black/80 backdrop-blur-2xl py-12 px-4 text-center overflow-hidden">
      {/* End Rolling Credits Strip */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-widest text-amber-400 uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>END CREDITS & ACKNOWLEDGMENTS</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono py-4 border-y border-white/10 text-slate-400">
          <div>
            <span className="block text-[10px] text-slate-500 uppercase">DIRECTOR & LEAD DEV</span>
            <span className="font-bold text-white">KRISHNA</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-500 uppercase">PRODUCED AT</span>
            <span className="font-bold text-white">JLU BHOPAL</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-500 uppercase">CORE STACK</span>
            <span className="font-bold text-cyan-400">NEXT.JS & PYTORCH</span>
          </div>
          <div>
            <span className="block text-[10px] text-slate-500 uppercase">PLACEMENT YEAR</span>
            <span className="font-bold text-amber-400">2026 - 2027</span>
          </div>
        </div>

        <p className="text-xs text-slate-500 font-mono italic max-w-lg mx-auto">
          "Engineered for performance, trained for precision, and designed for theatrical impact."
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <a
            href={director.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playTick()}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={director.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFX.playTick()}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${director.email}`}
            onClick={() => soundFX.playTick()}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-amber-400 border border-white/10 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href={`tel:${director.phone}`}
            onClick={() => soundFX.playTick()}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-emerald-400 border border-white/10 transition-colors"
            title="Phone"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>

        {/* Back to top & copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-[11px] font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} KRISHNA. All rights reserved. Directed & engineered with Next.js, PyTorch & Three.js.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            <span>Back to Top Curtain</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
