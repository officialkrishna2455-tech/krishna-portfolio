import React from 'react';
import { Volume2, VolumeX, Lightbulb, Clapperboard, Sparkles, Film, Ticket, Award, BrainCircuit, MonitorPlay } from 'lucide-react';
import { soundFX } from '../utils/soundEffects';

export type AspectRatioMode = 'cinemascope' | 'imax' | 'fullscreen';

interface CinemaHUDProps {
  aspectRatio: AspectRatioMode;
  setAspectRatio: (mode: AspectRatioMode) => void;
  cinemaLightsOn: boolean;
  setCinemaLightsOn: (lights: boolean) => void;
  projectorOn: boolean;
  setProjectorOn: (on: boolean) => void;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  onReplayClapper: () => void;
  onOpenTicket: () => void;
}

export const CinemaHUD: React.FC<CinemaHUDProps> = ({
  aspectRatio,
  setAspectRatio,
  cinemaLightsOn,
  setCinemaLightsOn,
  projectorOn,
  setProjectorOn,
  isMuted,
  setIsMuted,
  onReplayClapper,
  onOpenTicket
}) => {
  const handleToggleSound = () => {
    const next = soundFX.toggleMute();
    setIsMuted(next);
  };

  const handleRatioChange = (mode: AspectRatioMode) => {
    soundFX.playTick();
    setAspectRatio(mode);
  };

  const handleLightsToggle = () => {
    soundFX.playTick();
    setCinemaLightsOn(!cinemaLightsOn);
  };

  const handleProjectorToggle = () => {
    soundFX.playProjectorBeam();
    setProjectorOn(!projectorOn);
  };

  const scrollToSection = (id: string) => {
    soundFX.playTick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full px-3 py-3 backdrop-blur-xl bg-black/60 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Cinema Logo & Branding */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollToSection('hero-screen')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)] group-hover:scale-105 transition-transform">
              <Film className="w-4 h-4 text-black" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-cinzel font-black tracking-widest text-sm text-white group-hover:text-amber-400 transition-colors">
                  KRISHNA
                </span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono border border-amber-500/30">
                  IMAX
                </span>
              </div>
              <span className="block text-[10px] text-slate-400 font-mono">
                AI/ML · FULL-STACK SUITE
              </span>
            </div>
          </button>
        </div>

        {/* Navigation Chapters */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-3 py-1">
          <button
            onClick={() => scrollToSection('hero-screen')}
            className="px-3 py-1 text-xs text-slate-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            Screenplay
          </button>
          <button
            onClick={() => scrollToSection('projects-premiere')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-300 hover:text-cyan-400 rounded-full hover:bg-white/10 transition-colors"
          >
            <MonitorPlay className="w-3 h-3" />
            <span>Feature Films</span>
          </button>
          <button
            onClick={() => scrollToSection('skills-arsenal')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-300 hover:text-amber-400 rounded-full hover:bg-white/10 transition-colors"
          >
            <BrainCircuit className="w-3 h-3" />
            <span>Star Cast & Skills</span>
          </button>
          <button
            onClick={() => scrollToSection('certifications-awards')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-300 hover:text-emerald-400 rounded-full hover:bg-white/10 transition-colors"
          >
            <Award className="w-3 h-3" />
            <span>Laureates</span>
          </button>
          <button
            onClick={() => scrollToSection('box-office')}
            className="flex items-center gap-1.5 px-3 py-1 text-xs text-slate-300 hover:text-rose-400 rounded-full hover:bg-white/10 transition-colors"
          >
            <Ticket className="w-3 h-3" />
            <span>Box Office</span>
          </button>
        </nav>

        {/* Cinema Control Suite (HUD Toggles) */}
        <div className="flex items-center gap-2">
          {/* Aspect Ratio Selector */}
          <div className="hidden sm:flex items-center bg-white/5 border border-white/10 rounded-lg p-0.5 text-[11px] font-mono">
            <button
              onClick={() => handleRatioChange('cinemascope')}
              title="21:9 CinemaScope Ultra-Wide"
              className={`px-2 py-1 rounded transition-colors ${
                aspectRatio === 'cinemascope'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              21:9
            </button>
            <button
              onClick={() => handleRatioChange('imax')}
              title="16:9 IMAX Theatrical"
              className={`px-2 py-1 rounded transition-colors ${
                aspectRatio === 'imax'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              16:9
            </button>
            <button
              onClick={() => handleRatioChange('fullscreen')}
              title="Full Screen Canvas"
              className={`px-2 py-1 rounded transition-colors ${
                aspectRatio === 'fullscreen'
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              FULL
            </button>
          </div>

          {/* Projector Beam Toggle */}
          <button
            onClick={handleProjectorToggle}
            title={projectorOn ? "Turn off projector beam" : "Turn on projector beam"}
            className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
              projectorOn
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden xl:inline text-[11px]">Beam</span>
          </button>

          {/* House Lights Dimmer */}
          <button
            onClick={handleLightsToggle}
            title={cinemaLightsOn ? "Dim Theatre Lights" : "Turn On Ambient Lights"}
            className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1 ${
              cinemaLightsOn
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
          >
            <Lightbulb className="w-3.5 h-3.5" />
            <span className="hidden xl:inline text-[11px]">Lights</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={handleToggleSound}
            title={isMuted ? "Unmute Theatre SFX" : "Mute Theatre SFX"}
            className={`p-2 rounded-lg border text-xs transition-colors ${
              isMuted
                ? 'bg-red-500/20 text-red-400 border-red-500/30'
                : 'bg-white/5 text-cyan-400 border-white/10 hover:bg-white/10'
            }`}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          {/* Clapperboard Replay */}
          <button
            onClick={onReplayClapper}
            title="Replay Clapperboard Slate"
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-amber-400 hover:bg-white/10 transition-colors"
          >
            <Clapperboard className="w-3.5 h-3.5" />
          </button>

          {/* Recruiter VIP Ticket CTA */}
          <button
            onClick={onOpenTicket}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold text-xs tracking-wide shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] transition-all transform hover:scale-105"
          >
            <Ticket className="w-3.5 h-3.5 fill-black" />
            <span className="hidden sm:inline">Recruiter Pass</span>
            <span className="sm:hidden">Hire</span>
          </button>
        </div>
      </div>
    </header>
  );
};
