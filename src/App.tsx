import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CleanHero } from './components/CleanHero';
import { CleanProjects } from './components/CleanProjects';
import { CleanSkills } from './components/CleanSkills';
import { CleanCertifications } from './components/CleanCertifications';
import { CleanContact } from './components/CleanContact';
import { CleanFooter } from './components/CleanFooter';
import { ResumeModal } from './components/ResumeModal';
import { RoboticBackground } from './components/RoboticBackground';

// Dark Mode Cyber Components
import { CyberGridCanvas } from './components/CyberGridCanvas';
import { CyberHero } from './components/CyberHero';
import { CyberProjects } from './components/CyberProjects';
import { SkillsArsenal } from './components/SkillsArsenal';
import { CertificationsRoll } from './components/CertificationsRoll';
import { CyberTransmissionBox } from './components/CyberTransmissionBox';
import { CyberFooter } from './components/CyberFooter';
import { cyberSound } from './utils/soundEffects';
import { Sun, Moon, Cpu } from 'lucide-react';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light'; // Default to the Robotic Light Theme
  });

  const [showResumeModal, setShowResumeModal] = useState<boolean>(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number>(0);

  const isLight = theme === 'light';

  useEffect(() => {
    // Set class and color-scheme on document element for seamless scrolling and scrollbars
    document.documentElement.classList.toggle('dark', !isLight);
    document.documentElement.style.colorScheme = isLight ? 'light' : 'dark';
    localStorage.setItem('portfolio_theme', theme);
  }, [theme, isLight]);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    cyberSound.playThemeSwitch(nextTheme === 'dark');
    setTheme(nextTheme);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById(isLight ? 'projects' : 'neural-projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenTransmission = () => {
    const el = document.getElementById(isLight ? 'contact' : 'transmission-box');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-500 ${
        isLight
          ? 'bg-[#edf4fb] text-slate-900 selection:bg-cyan-500 selection:text-white'
          : 'bg-[#05060b] text-white selection:bg-cyan-500 selection:text-black'
      }`}
    >
      {/* 1. Dynamic Interactive Background Canvas */}
      {isLight ? (
        <RoboticBackground />
      ) : (
        <CyberGridCanvas />
      )}

      {/* 2. Main Content Flow with Relative Layering */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Universal Adaptive Navbar */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenResume={() => setShowResumeModal(true)}
        />

        <main className="flex-1">
          {isLight ? (
            /* ========================================================
               ROBOTIC LIGHT THEME
               Clean high-contrast cards, circuit canvas, and GitHub sync
               ======================================================== */
            <>
              {/* About & Hero */}
              <CleanHero onOpenResume={() => setShowResumeModal(true)} />

              {/* Projects with live GitHub fetching */}
              <CleanProjects />

              {/* Skills */}
              <CleanSkills />

              {/* Education & Certifications */}
              <CleanCertifications />

              {/* Contact */}
              <CleanContact />
            </>
          ) : (
            /* ========================================================
               CINEMATIC CYBER DARK THEME
               Anime.js reactor core, spotlight glow, telemetry HUD
               ======================================================== */
            <>
              {/* Cyber Hero with Anime.js Reactor Dial */}
              <CyberHero
                activeProjectIndex={selectedProjectIndex}
                onSelectProject={setSelectedProjectIndex}
                onExploreProjects={handleExploreProjects}
                onOpenTransmission={handleOpenTransmission}
                onOpenResumeModal={() => setShowResumeModal(true)}
              />

              {/* Neural Projects Showcase with interactive simulators */}
              <CyberProjects
                selectedIndex={selectedProjectIndex}
                onSelectProject={setSelectedProjectIndex}
              />

              {/* Skills Arsenal with live search & category filters */}
              <SkillsArsenal />

              {/* Certifications & Degree */}
              <CertificationsRoll />

              {/* Cyber Transmission Box */}
              <CyberTransmissionBox
                onOpenResumeModal={() => setShowResumeModal(true)}
              />
            </>
          )}
        </main>

        {/* Footer */}
        {isLight ? <CleanFooter /> : <CyberFooter />}
      </div>

      {/* 3. Floating Quick Theme Switcher (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-xl backdrop-blur-md text-xs font-mono font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
            isLight
              ? 'bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white border-cyan-400 shadow-[0_4px_25px_rgba(6,182,212,0.35)] hover:border-cyan-300'
              : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white border-white/60 shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:brightness-110'
          }`}
          title={isLight ? 'Switch to Cyber Dark Mode' : 'Switch to Robotic Light Mode'}
        >
          {isLight ? (
            <>
              <Moon className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Cyber Dark Mode</span>
            </>
          ) : (
            <>
              <Sun className="w-4 h-4 text-amber-300 animate-spin-slow" />
              <span>Robotic Light Mode</span>
            </>
          )}
        </button>
      </div>

      {/* 4. Official Resume Modal with Native PDF Viewer & Web Format */}
      {showResumeModal && (
        <ResumeModal onClose={() => setShowResumeModal(false)} />
      )}
    </div>
  );
}

export default App;
