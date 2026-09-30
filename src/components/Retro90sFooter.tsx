import React from 'react';
import { ArrowUp, Terminal, HardDrive, Cpu, ShieldCheck } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface Retro90sFooterProps {
  onScrollToTop: () => void;
}

export const Retro90sFooter: React.FC<Retro90sFooterProps> = ({ onScrollToTop }) => {
  const handleTop = () => {
    cyberSound.play90sKeyClick();
    onScrollToTop();
  };

  return (
    <footer className="relative z-10 pb-16 pt-8 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto select-none font-mono text-xs text-[#888]">
      <div 
        className="bg-[#121212] border-2 border-[#555] p-5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#262626] pb-4 mb-4">
          <div className="flex items-center gap-2 text-white font-bold">
            <div className="w-4 h-4 bg-white text-black font-extrabold flex items-center justify-center text-[10px]">
              ■
            </div>
            <span className="tracking-widest">KRISHNA // 1990s COMPUTER ERA PORTFOLIO</span>
          </div>

          <button
            onClick={handleTop}
            className="font-mono text-xs font-bold px-3 py-1.5 bg-[#202020] text-white hover:bg-white hover:text-black border border-[#666] flex items-center gap-1.5 active:translate-y-[1px] transition-all"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000'
            }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>[ RETURN_TO_ROOT (TOP) ]</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-[#aaa]">
          <div>
            <span className="text-[#666] block uppercase">SYSTEM_ARCHITECT:</span>
            <span className="text-white font-semibold">Krishna (AI/ML & Systems)</span>
          </div>
          <div>
            <span className="text-[#666] block uppercase">RENDER_PIPELINE:</span>
            <span className="text-white font-semibold">Three.js 3D Interactive Character</span>
          </div>
          <div>
            <span className="text-[#666] block uppercase">AESTHETIC_PROFILE:</span>
            <span className="text-white font-semibold">1990s Monochrome Computer World</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#222] flex flex-wrap items-center justify-between gap-2 text-[10px] text-[#666]">
          <span>(C) 1998 - 2026 KRISHNA. ALL NEURAL RIGHTS RESERVED.</span>
          <span className="text-[#888]">NOIR-OS // 3D_CGI_WORKSTATION_BUILD</span>
        </div>
      </div>
    </footer>
  );
};
