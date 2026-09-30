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
                      <div className="font-bold truncate">
                        {proj.title}
                      </div>
                      <div className={`text-[10px] truncate ${isSelected ? 'text-[#333]' : 'text-[#777]'}`}>
                        {proj.genre}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick System Telemetry Box on Left */}
            <div className="mt-4 bg-[#0a0a0a] border border-[#262626] p-3 font-mono text-[10px] text-[#777] hidden lg:block">
              <div className="text-white font-bold mb-1 border-b border-[#222] pb-1 flex items-center justify-between">
                <span>INSPECTOR STATUS</span>
                <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              </div>
              <div>SELECTED ARCHITECTURE: {activeProject.interactiveType.toUpperCase()}</div>
              <div>CLASSIFICATION SCORE: {activeProject.score}</div>
              <div>STATUS: PRODUCTION VERIFIED</div>
            </div>
          </div>

          {/* Right Pane: Selected Project Deep Inspection File */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div 
              className="bg-[#111111] border-2 border-[#555] p-5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]"
            >
              {/* Project File Header */}
              <div className="border-b border-[#2b2b2b] pb-4 mb-4 flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-[#888] mb-1">
                    <span className="bg-black text-white px-2 py-0.5 border border-[#333] font-bold">
                      YEAR: {activeProject.year}
                    </span>
                    <span className="bg-[#1c1c1c] text-[#ccc] px-2 py-0.5 border border-[#333]">
                      RUNTIME: {activeProject.runtime}
                    </span>
                  </div>
                  <h3 className="font-mono text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase">
                    {activeProject.title}
                  </h3>
                  <p className="font-mono text-xs text-[#aaa] mt-1 font-semibold">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* GitHub Source Button */}
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.play90sKeyClick()}
                  className="font-mono text-xs font-bold px-3.5 py-2 bg-black text-white hover:bg-white hover:text-black border-2 border-white flex items-center gap-2 active:translate-y-[1px] transition-all shadow-[2px_2px_0px_#444]"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>[ VIEW_SOURCE_CODE ]</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>

              {/* Project Summary */}
              <div className="font-mono text-xs text-[#ddd] leading-relaxed mb-5 bg-[#0a0a0a] border border-[#222] p-3.5">
                <span className="text-white font-bold">&gt;&gt; ABSTRACT: </span>
                {activeProject.summary}
              </div>

              {/* Bullet Points Architecture Highlights */}
              <div className="mb-5">
                <div className="font-mono text-xs font-bold text-white uppercase mb-2.5 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-white" />
                  <span>TECHNICAL ARCHITECTURE & HIGHLIGHTS</span>
                </div>
                <div className="space-y-2">
                  {activeProject.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 font-mono text-xs text-[#bbb] leading-relaxed">
                      <span className="text-white mt-0.5 font-bold shrink-0">[+]</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-5 font-mono">
                {activeProject.metrics.map((metric, i) => (
                  <div key={i} className="bg-[#181818] border border-[#333] p-2.5 flex flex-col justify-between">
                    <span className="text-[10px] text-[#777] uppercase">{metric.label}</span>
                    <span className="text-sm font-bold text-white mt-1">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips in 90s Pixel Border Style */}
              <div>
                <div className="font-mono text-[11px] font-bold text-[#888] uppercase mb-2">
                  TECHNOLOGY STACK & DEPENDENCIES
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="font-mono text-[11px] bg-black text-[#eaeaea] px-2.5 py-1 border border-[#444] shadow-[1px_1px_0px_#222]"
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
