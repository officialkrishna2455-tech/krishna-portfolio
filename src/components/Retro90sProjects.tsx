import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Folder, FileCode, ExternalLink, Terminal, CheckCircle2, Cpu, Sparkles, Activity } from 'lucide-react';
import { GithubIcon } from './Icons';
import { cyberSound } from '../utils/soundEffects';

export const Retro90sProjects: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeProjectId, setActiveProjectId] = useState<string>(projects[0].id);

  const activeProject = projects.find((p) => p.id === activeProjectId) || projects[0];

  const handleSelectProject = (id: string) => {
    cyberSound.play90sKeyClick();
    setActiveProjectId(id);
  };

  return (
    <section id="projects" className="relative z-10 py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <RetroWindow
        id="projects-window"
        title="C:\PROJECTS\PROJECT_EXPLORER.EXE"
        icon="folder"
        version="v3.11"
        statusBarText={`VIEWING: ${activeProject.title} | COMPILER: TYPESCRIPT + PYTORCH | REPO: GITHUB`}
      >
        {/* Top File Explorer Toolbar */}
        <div className="bg-[#141414] border border-[#333] p-2.5 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#aaa]">
          <div className="flex items-center gap-2">
            <span className="text-[#666]">CURRENT DIRECTORY:</span>
            <span className="bg-black text-white px-2 py-0.5 border border-[#444] font-bold">
              C:\PROJECTS\NEURAL_PIPELINES\
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[#888]">TOTAL EXECUTABLES:</span>
            <span className="bg-white text-black font-extrabold px-1.5 py-0.2">
              {projects.length} BINARIES
            </span>
          </div>
        </div>

        {/* Two-Pane File Manager Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Pane: Project File Directory List */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            <div className="bg-[#181818] border border-[#333] p-2 text-[11px] font-mono text-[#888] font-bold uppercase tracking-wider flex items-center gap-2">
              <Folder className="w-3.5 h-3.5 text-white" />
              <span>EXECUTABLE LIST (SELECT TO LOAD)</span>
            </div>

            <div className="flex flex-col gap-1.5">
              {projects.map((proj, idx) => {
                const isSelected = proj.id === activeProjectId;
                return (
                  <button
                    key={proj.id}
                    onClick={() => handleSelectProject(proj.id)}
                    className={`text-left p-3 font-mono text-xs border transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-white text-black font-bold border-white shadow-[2px_2px_0px_#000]'
                        : 'bg-[#121212] text-[#ccc] border-[#333] hover:border-white hover:text-white'
                    }`}
                    style={
                      isSelected
                        ? { boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #888' }
                        : { boxShadow: 'inset 1px 1px 0px #222, inset -1px -1px 0px #000' }
                    }
                  >
                    <div className="mt-0.5 shrink-0">
                      <FileCode className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-[#888]'}`} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-extrabold text-sm truncate">
                        {proj.title}
                      </div>
                      <div className={`text-xs truncate font-semibold ${isSelected ? 'text-[#111]' : 'text-[#d4d4d4]'}`}>
                        {proj.genre}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick System Telemetry Box on Left */}
            <div className="mt-4 bg-[#141414] border-2 border-[#444] p-3.5 font-mono text-xs text-[#dcdcdc] hidden lg:block">
              <div className="text-white font-extrabold mb-1.5 border-b border-[#333] pb-1.5 flex items-center justify-between">
                <span>INSPECTOR STATUS</span>
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
              </div>
              <div className="space-y-1">
                <div>SELECTED ARCHITECTURE: <span className="text-white font-bold">{activeProject.interactiveType.toUpperCase()}</span></div>
                <div>CLASSIFICATION SCORE: <span className="text-white font-bold">{activeProject.score}</span></div>
                <div>STATUS: <span className="text-white font-bold">PRODUCTION VERIFIED</span></div>
              </div>
            </div>
          </div>

          {/* Right Pane: Selected Project Deep Inspection File */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div 
              className="bg-[#141414] border-2 border-[#666] p-6 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]"
            >
              {/* Project File Header */}
              <div className="border-b border-[#333] pb-4 mb-5 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-white mb-2">
                    <span className="bg-black text-white px-2.5 py-0.5 border border-white/60 font-bold">
                      YEAR: {activeProject.year}
                    </span>
                    <span className="bg-[#242424] text-white px-2.5 py-0.5 border border-[#555] font-semibold">
                      RUNTIME: {activeProject.runtime}
                    </span>
                  </div>
                  <h3 className="font-mono text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
                    {activeProject.title}
                  </h3>
                  <p className="font-mono text-sm sm:text-base text-white font-bold mt-1.5">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* GitHub Source Button */}
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.play90sKeyClick()}
                  className="font-mono text-xs sm:text-sm font-black px-4 py-2.5 bg-black text-white hover:bg-white hover:text-black border-2 border-white flex items-center gap-2 active:translate-y-[1px] transition-all shadow-[2px_2px_0px_#444]"
                >
                  <GithubIcon className="w-4 h-4 stroke-[2.5]" />
                  <span>[ VIEW_SOURCE_CODE ]</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>

              {/* Project Summary */}
              <div className="font-mono text-sm sm:text-base text-white leading-relaxed mb-6 bg-[#0a0a0a] border-2 border-[#333] p-4">
                <span className="text-white font-extrabold">&gt;&gt; ABSTRACT: </span>
                {activeProject.summary}
              </div>

              {/* Bullet Points Architecture Highlights */}
              <div className="mb-6">
                <div className="font-mono text-xs sm:text-sm font-extrabold text-white uppercase mb-3 flex items-center gap-2 border-b border-[#333] pb-1.5">
                  <Terminal className="w-4 h-4 text-white" />
                  <span>TECHNICAL ARCHITECTURE & HIGHLIGHTS</span>
                </div>
                <div className="space-y-3">
                  {activeProject.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 font-mono text-sm text-[#f0f0f0] leading-relaxed">
                      <span className="text-white mt-0.5 font-black text-base shrink-0">[+]</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 font-mono">
                {activeProject.metrics.map((metric, i) => (
                  <div key={i} className="bg-[#1c1c1c] border-2 border-[#444] p-3 flex flex-col justify-between">
                    <span className="text-xs text-[#d1d5db] font-bold uppercase">{metric.label}</span>
                    <span className="text-base sm:text-lg font-black text-white mt-1">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips in 90s Pixel Border Style */}
              <div>
                <div className="font-mono text-xs font-extrabold text-white uppercase mb-2.5">
                  TECHNOLOGY STACK & DEPENDENCIES
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {activeProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs font-bold bg-black text-white px-3 py-1.5 border-2 border-white/60 shadow-[1px_1px_0px_#333]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};
