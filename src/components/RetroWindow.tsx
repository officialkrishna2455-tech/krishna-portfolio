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
  version = 'v98.1',
  children,
  className = '',
  defaultMinimized = false,
  statusBarText = 'STATUS: 100% READY | MEMORY: 64MB OK | DISK: MOUNTED'
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
        <div className="flex items-center gap-2 overflow-hidden">
          <div className="p-0.5 bg-black border border-[#777] rounded-[1px] flex items-center justify-center">
            {getIcon()}
          </div>
          <span className="font-mono text-xs font-bold tracking-wider text-white truncate drop-shadow-[0_1px_1px_rgba(0,0,0,1)]">
            {title}
          </span>
          <span className="hidden sm:inline-block text-[10px] font-mono text-[#888] bg-[#0a0a0a] px-1.5 py-0.5 border border-[#333]">
            {version}
          </span>
        </div>

        {/* 90s Window Control Buttons: [ - ] [ □ ] [ X ] */}
        <div className="flex items-center gap-1 shrink-0 ml-2">
          {/* Minimize */}
          <button
            onClick={handleMinimize}
            title="Minimize"
            aria-label="Minimize Window"
            className="w-5 h-5 flex items-center justify-center bg-[#2a2a2a] text-white hover:bg-white hover:text-black border border-[#666] active:translate-y-[1px] transition-colors"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000'
            }}
          >
            <Minus className="w-3 h-3" />
          </button>

          {/* Maximize */}
          <button
            onClick={handleMaximize}
            title={isMaximized ? "Restore" : "Maximize"}
            aria-label="Maximize Window"
            className="w-5 h-5 flex items-center justify-center bg-[#2a2a2a] text-white hover:bg-white hover:text-black border border-[#666] active:translate-y-[1px] transition-colors"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000'
            }}
          >
            <Square className="w-2.5 h-2.5" />
          </button>

          {/* Close / Action */}
          <button
            onClick={handleMinimize}
            title="Toggle View"
            aria-label="Toggle Window"
            className="w-5 h-5 flex items-center justify-center bg-[#2a2a2a] text-white hover:bg-white hover:text-black border border-[#666] active:translate-y-[1px] transition-colors"
            style={{
              boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #000'
            }}
          >
            <X className="w-3 h-3 font-bold" />
          </button>
        </div>
      </div>

      {/* 2. Classic 90s Menu Bar (File, Edit, View, Help) */}
      <div className="bg-[#181818] border-b border-[#2d2d2d] px-3 py-1 text-[11px] font-mono text-[#aaa] flex items-center gap-4 select-none">
        <span className="hover:text-white cursor-pointer hover:underline" onClick={() => cyberSound.play90sKeyClick()}>File</span>
        <span className="hover:text-white cursor-pointer hover:underline" onClick={() => cyberSound.play90sKeyClick()}>Edit</span>
        <span className="hover:text-white cursor-pointer hover:underline" onClick={() => cyberSound.play90sKeyClick()}>View</span>
        <span className="hover:text-white cursor-pointer hover:underline" onClick={() => cyberSound.play90sKeyClick()}>Network</span>
        <span className="hover:text-white cursor-pointer hover:underline" onClick={() => cyberSound.play90sKeyClick()}>Help</span>
        <div className="ml-auto text-[10px] text-[#666] hidden md:block">
          C:\KRISHNA\PORTFOLIO\
        </div>
      </div>

      {/* 3. Window Body */}
      {!isMinimized && (
        <div className="p-4 sm:p-6 text-[#dedede] bg-[#0d0d0d]/95 backdrop-blur-md">
          {children}
        </div>
      )}

      {/* 4. 1990s Status Bar */}
      <div 
        className="bg-[#151515] border-t border-[#262626] px-3 py-1 flex items-center justify-between text-[10px] font-mono text-[#888] select-none"
        style={{
          boxShadow: 'inset 1px 1px 0px #000'
        }}
      >
        <span className="truncate">{statusBarText}</span>
        <span className="hidden sm:inline-block shrink-0 text-white font-bold bg-[#222] px-2 py-0.5 border border-[#444]">
          56.6K BAUD
        </span>
      </div>
    </div>
  );
};
