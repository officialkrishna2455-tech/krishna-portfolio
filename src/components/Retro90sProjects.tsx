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
    <section id="projects" className="relative z-10 py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <RetroWindow
        id="projects-window"
        title="Featured Projects — AI, Deep Learning & Web Systems"
        icon="folder"
        statusBarText={`Active Project: ${activeProject.title} | Status: Production Deployed`}
      >
        {/* Top Explorer Banner */}
        <div className="bg-[#141414] border-2 border-[#444] p-3 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-mono text-[#dcdcdc]">
          <div className="flex items-center gap-2">
            <span className="text-[#aaa] font-bold">Category:</span>
            <span className="bg-black text-white px-2.5 py-0.5 border border-white/60 font-bold">
              Autonomous Systems & Neural Architectures
            </span>
          </div>

          <div className="flex items-center gap-2 font-bold">
            <span>Total Projects:</span>
            <span className="bg-white text-black font-black px-2 py-0.5 text-xs">
              {projects.length} Completed
            </span>
          </div>
        </div>

        {/* Two-Pane Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Pane: Project Selector List */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <div className="bg-[#1a1a1a] border-2 border-[#444] p-2.5 text-xs font-mono text-white font-extrabold uppercase flex items-center gap-2">
              <Folder className="w-4 h-4 text-white" />
              <span>Select Project</span>
            </div>

            <div className="flex flex-col gap-2">
              {projects.map((proj) => {
                const isSelected = proj.id === activeProjectId;
                return (
                  <button
                    key={proj.id}
                    onClick={() => handleSelectProject(proj.id)}
                    className={`text-left p-3.5 font-mono border-2 transition-all flex items-start gap-3 ${
                      isSelected
                        ? 'bg-white text-black font-black border-white shadow-[3px_3px_0px_#000]'
                        : 'bg-[#141414] text-white border-[#333] hover:border-white'
                    }`}
                    style={
                      isSelected
                        ? { boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #888' }
                        : { boxShadow: 'inset 1px 1px 0px #222, inset -1px -1px 0px #000' }
                    }
                  >
                    <div className="mt-0.5 shrink-0">
                      <FileCode className={`w-4 h-4 ${isSelected ? 'text-black' : 'text-white'}`} />
                    </div>
                    <div className="overflow-hidden">
                      <div className="font-black text-sm truncate">
                        {proj.title}
                      </div>
                      <div className={`text-xs truncate font-bold mt-0.5 ${isSelected ? 'text-[#222]' : 'text-[#bbb]'}`}>
                        {proj.genre}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Pane: Selected Project Details */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-[#141414] border-2 border-[#666] p-6 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]">
              {/* Project Header */}
              <div className="border-b border-[#333] pb-4 mb-5 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-white mb-2">
                    <span className="bg-black text-white px-2.5 py-0.5 border border-white/60 font-bold">
                      Year: {activeProject.year}
                    </span>
                    <span className="bg-[#242424] text-white px-2.5 py-0.5 border border-[#555] font-semibold">
                      Role: {activeProject.role}
                    </span>
                    <span className="bg-[#242424] text-white px-2.5 py-0.5 border border-[#555] font-semibold">
                      {activeProject.runtime}
                    </span>
                  </div>
                  <h3 className="font-mono text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                    {activeProject.title}
                  </h3>
                  <p className="font-mono text-sm sm:text-base text-[#f0f0f0] font-bold mt-1.5">
                    {activeProject.subtitle}
                  </p>
                </div>

                {/* View Code Button */}
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.play90sKeyClick()}
                  className="font-mono text-xs sm:text-sm font-black px-4 py-2.5 bg-white text-black hover:bg-[#ddd] border-2 border-black flex items-center gap-2 active:translate-y-[1px] transition-all shadow-[2px_2px_0px_#000]"
                >
                  <GithubIcon className="w-4 h-4 stroke-[2.5]" />
                  <span>[ View Code on GitHub ]</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              </div>

              {/* Project Summary */}
              <div className="font-mono text-sm sm:text-base text-white leading-relaxed mb-6 bg-[#0a0a0a] border-2 border-[#333] p-4">
                <span className="text-white font-extrabold block mb-1">Project Overview:</span>
                <p className="text-[#f5f5f5] font-medium">{activeProject.summary}</p>
              </div>

              {/* Bullet Points Architecture Highlights */}
              <div className="mb-6">
                <div className="font-mono text-xs sm:text-sm font-extrabold text-white uppercase mb-3 flex items-center gap-2 border-b border-[#333] pb-1.5">
                  <Terminal className="w-4 h-4 text-white" />
                  <span>Key Features & Engineering Achievements</span>
                </div>
                <div className="space-y-3">
                  {activeProject.bulletPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 font-mono text-sm text-[#f0f0f0] leading-relaxed">
                      <span className="text-white mt-0.5 font-black text-base shrink-0">✓</span>
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

              {/* Tech Stack */}
              <div>
                <div className="font-mono text-xs font-extrabold text-white uppercase mb-2.5">
                  Technologies Used
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
