import React, { useState, useEffect } from 'react';
import { FileText, Download, Sun, Moon, Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { cyberSound } from '../utils/soundEffects';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenResume }) => {
  const { director } = PORTFOLIO_DATA;
  const isLight = theme === 'light';
  const [isMuted, setIsMuted] = useState<boolean>(cyberSound.getMuted());

  useEffect(() => {
    setIsMuted(cyberSound.getMuted());
  }, []);

  const handleToggleSound = () => {
    const muted = cyberSound.toggleMute();
    setIsMuted(muted);
  };

  const handleThemeChange = () => {
    cyberSound.playThemeSwitch(!isLight);
    onToggleTheme();
  };

  const scrollTo = (section: 'about' | 'projects' | 'skills' | 'credentials' | 'contact') => {
    cyberSound.playChirp();
    const idMap: Record<typeof section, string> = {
      about: isLight ? 'about' : 'system-hero',
      projects: isLight ? 'projects' : 'neural-projects',
      skills: isLight ? 'skills' : 'skills-arsenal',
      credentials: isLight ? 'credentials' : 'certifications-awards',
      contact: isLight ? 'contact' : 'transmission-box',
    };

    const targetId = idMap[section];
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-md transition-all duration-300 ${
        isLight
          ? 'bg-white/90 border-b border-cyan-200/90 shadow-[0_4px_25px_rgba(6,182,212,0.10)]'
          : 'bg-[#090b14]/85 border-b border-white/10 shadow-lg shadow-black/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Logo / Name */}
        <button
          onClick={() => {
            cyberSound.playChirp();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
        >
          <div
            className={`w-8 h-8 rounded-xl p-[1.5px] transition-all duration-300 shadow-sm ${
              isLight
                ? 'bg-gradient-to-tr from-cyan-600 to-blue-600'
                : 'bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500'
            }`}
          >
            <div
              className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold text-xs transition-colors ${
                isLight
                  ? 'bg-white text-cyan-600 group-hover:bg-cyan-50'
                  : 'bg-[#0d0f17] text-cyan-400 group-hover:bg-[#131622]'
              }`}
            >
              K
            </div>
          </div>
          <div>
            <span
              className={`font-bold tracking-wide text-sm transition-colors ${
                isLight
                  ? 'text-slate-900 group-hover:text-cyan-700'
                  : 'text-white group-hover:text-cyan-400'
              }`}
            >
              Krishna
            </span>
            <span
              className={`block text-[10px] font-mono transition-colors ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              AI/ML Engineer
            </span>
          </div>
        </button>

        {/* Navigation Links with explicit spacing */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-semibold">
          <button
            onClick={() => scrollTo('about')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              isLight ? 'text-slate-700 hover:text-cyan-800 hover:bg-cyan-100/70' : 'text-slate-300 hover:text-cyan-400 hover:bg-white/[0.08]'
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              isLight ? 'text-slate-700 hover:text-cyan-800 hover:bg-cyan-100/70' : 'text-slate-300 hover:text-cyan-400 hover:bg-white/[0.08]'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('skills')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              isLight ? 'text-slate-700 hover:text-cyan-800 hover:bg-cyan-100/70' : 'text-slate-300 hover:text-cyan-400 hover:bg-white/[0.08]'
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo('credentials')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              isLight ? 'text-slate-700 hover:text-cyan-800 hover:bg-cyan-100/70' : 'text-slate-300 hover:text-cyan-400 hover:bg-white/[0.08]'
            }`}
          >
            Certifications
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
              isLight ? 'text-slate-700 hover:text-cyan-800 hover:bg-cyan-100/70' : 'text-slate-300 hover:text-cyan-400 hover:bg-white/[0.08]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Action Controls: Theme Switcher, Audio Mute, Socials & Resume */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* 1. FUTURISTIC THEME TOGGLE BUTTON */}
          <button
            onClick={handleThemeChange}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-all cursor-pointer shadow-xs ${
              isLight
                ? 'bg-gradient-to-r from-amber-100/90 via-cyan-100/90 to-blue-100/90 hover:from-amber-200 hover:to-blue-200 text-slate-900 border-cyan-400/80 shadow-sm'
                : 'bg-white/[0.08] hover:bg-white/[0.14] text-cyan-300 border-cyan-500/30 hover:border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
            }`}
            title={isLight ? 'Switch to Cinematic Cyber Dark Mode' : 'Switch to Robotic Light Mode'}
            aria-label="Toggle Light/Dark Theme"
          >
            {isLight ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
                <span className="hidden sm:inline text-[11px] font-extrabold text-cyan-950">Robotic Light</span>
                <span className="sm:hidden text-[10px] font-extrabold">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline text-[11px]">Cyber Dark</span>
                <span className="sm:hidden text-[10px]">Dark</span>
              </>
            )}
          </button>

          {/* 2. Audio SFX Mute/Unmute */}
          <button
            onClick={handleToggleSound}
            className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
              isLight
                ? 'border-slate-200 text-slate-500 hover:text-slate-800 hover:bg-slate-100'
                : 'border-white/10 text-slate-400 hover:text-white hover:bg-white/[0.06]'
            }`}
            title={isMuted ? 'Unmute cybernetic audio synthesis' : 'Mute cybernetic audio synthesis'}
            aria-label="Toggle Audio"
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-cyan-500" />
            )}
          </button>

          {/* 3. GitHub Profile Link */}
          <a
            href={director.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 rounded-xl transition-colors ${
              isLight
                ? 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                : 'text-slate-400 hover:text-white hover:bg-white/[0.08]'
            }`}
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* 4. LinkedIn Link */}
          <a
            href={director.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden sm:flex p-1.5 rounded-xl transition-colors ${
              isLight
                ? 'text-slate-500 hover:text-blue-600 hover:bg-slate-100'
                : 'text-slate-400 hover:text-cyan-400 hover:bg-white/[0.08]'
            }`}
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          {/* 5. Resume Modal Button */}
          <button
            onClick={() => {
              cyberSound.playChirp();
              onOpenResume();
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs transition-all cursor-pointer ${
              isLight
                ? 'bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white shadow-md shadow-cyan-600/25'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
            }`}
            title="View Resume Document"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          {/* 6. Direct PDF Download */}
          <a
            href="/krishna_resume.pdf"
            download="Krishna_Resume.pdf"
            className={`hidden lg:flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer shadow-xs ${
              isLight
                ? 'bg-cyan-100/80 hover:bg-cyan-200 text-cyan-900 border-cyan-300'
                : 'bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border-white/10'
            }`}
            title="Download Official Resume PDF"
          >
            <Download className="w-3 h-3" />
            <span className="text-[11px]">PDF</span>
          </a>
        </div>
      </div>
    </header>
  );
};
