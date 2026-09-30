import React, { useState, useEffect } from 'react';
import { Retro3DCharacterBackground } from './components/Retro3DCharacterBackground';
import { Retro90sNavbar } from './components/Retro90sNavbar';
import { Retro90sHero } from './components/Retro90sHero';
import { Retro90sProjects } from './components/Retro90sProjects';
import { Retro90sSkills } from './components/Retro90sSkills';
import { Retro90sCertifications } from './components/Retro90sCertifications';
import { Retro90sContact } from './components/Retro90sContact';
import { Retro90sFooter } from './components/Retro90sFooter';
import { Retro90sTaskbar } from './components/Retro90sTaskbar';
import { RetroDesktopIcons } from './components/RetroDesktopIcons';
import { RetroCRTOverlay } from './components/RetroCRTOverlay';
import { ResumeModal } from './components/ResumeModal';
import { cyberSound } from './utils/soundEffects';

export function App() {
  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [crtEnabled, setCrtEnabled] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('retro_crt_enabled');
      return saved === 'true';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('retro_crt_enabled', String(crtEnabled));
  }, [crtEnabled]);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCrt = () => {
    cyberSound.play90sKeyClick();
    setCrtEnabled(!crtEnabled);
  };

  return (
    <div className="relative min-h-screen bg-[#070707] text-[#dedede] font-mono overflow-x-hidden selection:bg-white selection:text-black">
      {/* 1. INTERACTIVE 3D BACKGROUND CHARACTER IN THREE.JS */}
      <Retro3DCharacterBackground />

      {/* 2. 1990s CRT MONITOR SCANLINE OVERLAY (TOGGLEABLE) */}
      <RetroCRTOverlay enabled={crtEnabled} />

      {/* 3. 1990s DESKTOP SHORTCUT ICONS */}
      <RetroDesktopIcons
        onNavigate={handleNavigate}
        onOpenResume={() => setShowResumeModal(true)}
      />

      {/* 4. 1990s TOP SYSTEM NAVIGATION */}
      <Retro90sNavbar
        onNavigate={handleNavigate}
        onOpenResume={() => setShowResumeModal(true)}
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
      />

      {/* 5. MAIN CONTENT WINDOWS (90S COMPUTER WORLD MONOCHROME) */}
      <main className="relative z-10 space-y-4 pb-16">
        {/* System Boot Hero Window */}
        <Retro90sHero
          onOpenProjects={() => handleNavigate('projects')}
          onOpenContact={() => handleNavigate('contact')}
          onOpenResume={() => setShowResumeModal(true)}
        />

        {/* Project Manager Window */}
        <Retro90sProjects />

        {/* Skills Registry Window */}
        <Retro90sSkills />

        {/* Credentials & Degrees Window */}
        <Retro90sCertifications />

        {/* Modem Dispatch & Contact Window */}
        <Retro90sContact onOpenResume={() => setShowResumeModal(true)} />

        {/* System Footer Window */}
        <Retro90sFooter onScrollToTop={handleScrollToTop} />
      </main>

      {/* 6. AUTHENTIC 1990S FIXED BOTTOM TASKBAR & START MENU */}
      <Retro90sTaskbar
        onNavigate={handleNavigate}
        onOpenResume={() => setShowResumeModal(true)}
        crtEnabled={crtEnabled}
        onToggleCrt={handleToggleCrt}
      />

      {/* 7. OFFICIAL RESUME MODAL */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}

export default App;
