import React from 'react';
import { Mail, MapPin, ArrowDown, FileText, Download, Bot, Cpu, Zap, Layers, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface CleanHeroProps {
  onOpenResume: () => void;
}

export const CleanHero: React.FC<CleanHeroProps> = ({ onOpenResume }) => {
  const { director } = PORTFOLIO_DATA;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Color configurations for the 4 key stat cards
  const statThemes = [
    {
      bgGradient: 'from-cyan-500/10 via-cyan-500/5 to-white/90',
      borderColor: 'border-cyan-300/80 hover:border-cyan-500',
      valueColor: 'text-cyan-700',
      shadowGlow: 'hover:shadow-[0_8px_30px_rgba(6,182,212,0.22)]',
      badgeBg: 'bg-cyan-100 text-cyan-800',
      icon: <BrainIcon className="w-4 h-4 text-cyan-600" />
    },
    {
      bgGradient: 'from-emerald-500/10 via-emerald-500/5 to-white/90',
      borderColor: 'border-emerald-300/80 hover:border-emerald-500',
      valueColor: 'text-emerald-700',
      shadowGlow: 'hover:shadow-[0_8px_30px_rgba(16,185,129,0.22)]',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      icon: <Zap className="w-4 h-4 text-emerald-600" />
    },
    {
      bgGradient: 'from-blue-500/10 via-indigo-500/5 to-white/90',
      borderColor: 'border-blue-300/80 hover:border-blue-500',
      valueColor: 'text-blue-700',
      shadowGlow: 'hover:shadow-[0_8px_30px_rgba(37,99,235,0.22)]',
      badgeBg: 'bg-blue-100 text-blue-800',
      icon: <Layers className="w-4 h-4 text-blue-600" />
    },
    {
      bgGradient: 'from-purple-500/10 via-fuchsia-500/5 to-white/90',
      borderColor: 'border-purple-300/80 hover:border-purple-500',
      valueColor: 'text-purple-700',
      shadowGlow: 'hover:shadow-[0_8px_30px_rgba(168,85,247,0.22)]',
      badgeBg: 'bg-purple-100 text-purple-800',
      icon: <Cpu className="w-4 h-4 text-purple-600" />
    }
  ];

  return (
    <section id="about" className="pt-14 pb-16 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col items-start gap-6">
        {/* Status Badge with Neon Indicator */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-emerald-100/90 via-teal-100/80 to-cyan-100/90 border border-emerald-300/90 text-emerald-800 text-xs font-mono shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <Bot className="w-3.5 h-3.5 text-emerald-700" />
          <span className="font-bold">Autonomous AI & Intelligent Systems Ready</span>
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
          <span className="text-[11px] font-semibold text-teal-800">SWE / AI-ML Open</span>
        </div>

        {/* Main Name & Title with Rich Multi-Stop Gradients */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 drop-shadow-xs">
              {director.name}
            </span>
            <span className="text-cyan-500 ml-1">.</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold leading-relaxed max-w-3xl text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-900 to-blue-900">
            {director.title}
          </p>
        </div>

        {/* Objective & Bio with highlighted technology tags */}
        <p className="text-slate-700 text-base leading-relaxed max-w-3xl font-medium bg-white/60 backdrop-blur-xs p-4 rounded-2xl border border-blue-100/80 shadow-xs">
          B.Tech CSE (AI/ML) engineer specializing in{' '}
          <span className="text-cyan-800 font-bold bg-cyan-100/60 px-1.5 py-0.5 rounded">Large Language Models</span>,{' '}
          <span className="text-blue-800 font-bold bg-blue-100/60 px-1.5 py-0.5 rounded">PyTorch Deep Learning</span>, and{' '}
          <span className="text-purple-800 font-bold bg-purple-100/60 px-1.5 py-0.5 rounded">Computer Vision</span>. 
          Actively building high-precision AI applications and scalable full-stack architectures.
        </p>

        {/* Key Quick Metrics Strip in Rich Colorful Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full max-w-3xl pt-1">
          {director.quickStats.map((st, i) => {
            const theme = statThemes[i % statThemes.length];
            return (
              <div
                key={i}
                className={`p-4 rounded-2xl border ${theme.borderColor} ${theme.shadowGlow} transition-all duration-300 group hover:-translate-y-1`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 25px rgba(0, 0, 0, 0.04)',
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`p-1.5 rounded-lg ${theme.badgeBg}`}>
                    {theme.icon}
                  </span>
                  <Sparkles className="w-3 h-3 text-slate-400 group-hover:text-amber-500 transition-colors" />
                </div>
                <div className={`text-2xl font-extrabold ${theme.valueColor} tracking-tight`}>
                  {st.value}
                </div>
                <div className="text-xs font-bold text-slate-800 mt-1">{st.label}</div>
                <div className="text-[11px] text-slate-600 font-mono mt-0.5 font-medium">{st.sub}</div>
              </div>
            );
          })}
        </div>

        {/* Action CTAs & Contact Pills */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <button
            onClick={scrollToProjects}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-bold text-sm transition-all transform hover:scale-[1.02] cursor-pointer shadow-lg shadow-cyan-600/30"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={scrollToContact}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/90 hover:bg-white text-slate-800 font-bold text-sm border border-cyan-200 hover:border-cyan-400 shadow-sm transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4 text-cyan-600" />
            <span>Contact Me</span>
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 text-blue-900 font-bold text-sm border border-blue-200/90 transition-all cursor-pointer shadow-xs"
          >
            <FileText className="w-4 h-4 text-blue-700" />
            <span>View Resume</span>
          </button>

          <a
            href="/krishna_resume.pdf"
            download="Krishna_Resume.pdf"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-cyan-50 hover:bg-cyan-100 text-cyan-800 font-bold text-sm border border-cyan-200 transition-all cursor-pointer shadow-xs"
            title="Download Original Resume PDF"
          >
            <Download className="w-4 h-4 text-cyan-700" />
            <span>Download PDF</span>
          </a>
        </div>

        {/* Location & University pill with colored icons */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-700 pt-3 border-t border-cyan-200/80 w-full font-medium">
          <span className="flex items-center gap-1.5 text-slate-800 bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-rose-500" />
            <span>{director.location}</span>
          </span>
          <span className="text-slate-400">•</span>
          <span className="bg-white/80 px-2.5 py-1 rounded-lg border border-slate-200 text-slate-800">
            {director.education.institution} ({director.education.duration})
          </span>
          <span className="text-slate-400">•</span>
          <a
            href={`mailto:${director.email}`}
            className="text-cyan-800 font-semibold hover:text-cyan-950 underline bg-cyan-50/80 px-2.5 py-1 rounded-lg border border-cyan-200"
          >
            {director.email}
          </a>
        </div>
      </div>
    </section>
  );
};

// Micro helper component for brain icon
const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
    <path d="M6.001 5.125A3 3 0 0 0 6.4 6.5" />
    <path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
    <path d="M19.938 10.5a4 4 0 0 1 .585.396" />
    <path d="M6 18a4 4 0 0 1-1.967-.516" />
    <path d="M19.967 17.484A4 4 0 0 1 18 18" />
  </svg>
);
