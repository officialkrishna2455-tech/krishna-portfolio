import React, { useState } from 'react';
import { Minus, Square, X, Terminal, Disc, Cpu, Folder } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface RetroWindowProps {
  id?: string;
  title: string;
  icon?: 'terminal' | 'disc' | 'cpu' | 'folder' | 'default';
  version?: string;
  children: React.ReactNode;
  className?: string;
  defaultMinimized?: boolean;
  statusBarText?: string;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  id,
  title,
  icon = 'terminal',
  version,
  children,
  className = '',
  defaultMinimized = false,
  statusBarText = 'Status: Active | 2026 Portfolio'
}) => {
  const [isMinimized, setIsMinimized] = useState(defaultMinimized);
  const [isMaximized, setIsMaximized] = useState(false);

  const getIcon = () => {
    switch (icon) {
      case 'disc':
        return <Disc className="w-3.5 h-3.5 text-white" />;
      case 'cpu':
        return <Cpu className="w-3.5 h-3.5 text-white" />;
      case 'folder':
        return <Folder className="w-3.5 h-3.5 text-white" />;
      default:
        return <Terminal className="w-3.5 h-3.5 text-white" />;
    }
  };

  const handleMinimize = (e: React.MouseEvent) => {
    e.stopPropagation();
    cyberSound.play90sKeyClick();
    setIsMinimized(!isMinimized);
  };

  const handleMaximize = (e: React.MouseEvent) => {
    e.stopPropagation();
    cyberSound.play90sWindowOpen();
    setIsMaximized(!isMaximized);
  };

  return (
    <div
      id={id}
      className={`relative retro-window transition-all duration-200 select-text ${className} ${
        isMaximized ? 'fixed inset-4 z-50 overflow-y-auto' : ''
      }`}
      style={{
        backgroundColor: '#121212',
        border: '2px solid #555555',
        boxShadow: 'inset 1.5px 1.5px 0px #ffffff, inset -1.5px -1.5px 0px #000000, 0 10px 30px rgba(0, 0, 0, 0.85)'
      }}
    >
      {/* 1. Classic 1990s Title Bar */}
      <div 
        className="retro-title-bar px-2.5 py-1.5 flex items-center justify-between cursor-default border-b border-[#333] select-none"
        style={{
          background: 'linear-gradient(90deg, #1f1f1f 0%, #2e2e2e 50%, #151515 100%)',
          borderBottom: '1px solid #000000'
        }}
      >
        {/* Title & Icon */}
        <div className="flex items-center gap-2.5 overflow-hidden">
          <div className="p-1 bg-black border border-white/60 rounded-[1px] flex items-center justify-center">
            {getIcon()}
          </div>
          <span className="font-mono text-sm font-extrabold tracking-wider text-white truncate drop-shadow-[0_1px_2px_rgba(0,0,0,1)]">
            {title}
          </span>
          {version && (
            <span className="hidden sm:inline-block text-xs font-mono font-bold text-white bg-[#000] px-2 py-0.5 border border-[#555]">
              {version}
            </span>
          )}
        </div>

        {/* 90s Window Control Buttons: [ - ] [ □ ] [ X ] */}
        <div className="flex items-center gap-1.5 shrink-0 ml-2">
          {/* Minimize */}
          <button
            onClick={handleMinimize}
            title="Minimize"
            aria-label="Minimize Window"
            className="w-6 h-6 flex items-center justify-center bg-[#333] text-white hover:bg-white hover:text-black border border-[#777] active:translate-y-[1px] transition-colors font-bold"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000'
            }}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>

          {/* Maximize */}
          <button
            onClick={handleMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
            aria-label="Maximize Window"
            className="w-6 h-6 flex items-center justify-center bg-[#333] text-white hover:bg-white hover:text-black border border-[#777] active:translate-y-[1px] transition-colors font-bold"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000'
            }}
          >
            <Square className="w-3 h-3" />
          </button>

          {/* Close / Action */}
          <button
            onClick={handleMinimize}
            title="Toggle View"
            aria-label="Toggle Window"
            className="w-6 h-6 flex items-center justify-center bg-[#333] text-white hover:bg-white hover:text-black border border-[#777] active:translate-y-[1px] transition-colors font-bold"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000'
            }}
          >
            <X className="w-3.5 h-3.5 font-bold" />
          </button>
        </div>
      </div>

      {/* 2. 90s Menu Bar */}
      <div className="bg-[#1a1a1a] border-b border-[#333] px-3.5 py-1.5 text-xs font-mono text-[#e5e5e5] font-semibold flex items-center gap-5 select-none">
        <span 
          className="hover:text-white hover:underline cursor-pointer" 
          onClick={() => {
            cyberSound.play90sKeyClick();
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          About
        </span>
        <span 
          className="hover:text-white hover:underline cursor-pointer" 
          onClick={() => {
            cyberSound.play90sKeyClick();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Projects
        </span>
        <span 
          className="hover:text-white hover:underline cursor-pointer" 
          onClick={() => {
            cyberSound.play90sKeyClick();
            document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Skills
        </span>
        <span 
          className="hover:text-white hover:underline cursor-pointer" 
          onClick={() => {
            cyberSound.play90sKeyClick();
            document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Certifications
        </span>
        <span 
          className="hover:text-white hover:underline cursor-pointer" 
          onClick={() => {
            cyberSound.play90sKeyClick();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact
        </span>
        <div className="ml-auto text-xs text-[#bbb] font-bold hidden md:block">
          KRISHNA // PORTFOLIO
        </div>
      </div>

      {/* 3. Window Body */}
      {!isMinimized && (
        <div className="p-4 sm:p-7 text-[#ffffff] bg-[#0c0c0c] border border-black">
          {children}
        </div>
      )}

      {/* 4. 1990s Status Bar */}
      <div 
        className="bg-[#181818] border-t border-[#333] px-3.5 py-1.5 flex items-center justify-between text-xs font-mono text-[#dcdcdc] select-none"
        style={{
          boxShadow: 'inset 1px 1px 0px #000'
        }}
      >
        <span className="truncate font-semibold">{statusBarText}</span>
        <span className="hidden sm:inline-block shrink-0 text-black font-extrabold bg-white px-2 py-0.5 border border-[#333]">
          ACTIVE
        </span>
      </div>
    </div>
  );
};
