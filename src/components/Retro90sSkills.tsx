import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Cpu, Terminal, Layers, Server, Database, Cloud, Star } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

export const Retro90sSkills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = skillCategories[activeCategoryIndex] || skillCategories[0];

  const getPercent = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 95;
      case 'advanced':
        return 85;
      default:
        return 75;
    }
  };

  const renderBlocks = (percent: number) => {
    const totalBlocks = 12;
    const filledBlocks = Math.round((percent / 100) * totalBlocks);
    const filled = '▓'.repeat(filledBlocks);
    const empty = '░'.repeat(totalBlocks - filledBlocks);
    return `[ ${filled}${empty} ]`;
  };

  const handleTabChange = (idx: number) => {
    cyberSound.play90sKeyClick();
    setActiveCategoryIndex(idx);
  };

  return (
    <section id="skills" className="relative z-10 py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <RetroWindow
        id="skills-window"
        title="C:\SYSTEM\CONTROL_PANEL\SKILLS_REGISTRY.CPL"
        icon="cpu"
        version="CONFIG v4.0"
        statusBarText={`LOADED: ${activeCategory.category} (${activeCategory.skills.length} MODULES OK)`}
      >
        {/* 1990s Folder / Property Sheet Tabs */}
        <div className="flex flex-wrap items-end gap-1 border-b border-[#444] mb-6 pt-1 select-none">
          {skillCategories.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`font-mono text-xs px-3.5 py-1.5 border-t-2 border-x-2 transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-[#1a1a1a] text-white font-bold border-[#666] -mb-[1px] border-b-0 shadow-[inset_1px_1px_0px_#fff]'
                    : 'bg-[#0f0f0f] text-[#888] border-[#2a2a2a] hover:text-[#ccc] hover:bg-[#151515]'
                }`}
                style={{
                  boxShadow: isActive ? 'inset 1px 1px 0px #fff, inset -1px 0px 0px #000' : 'none'
                }}
              >
                <span>{cat.category}</span>
                {isActive && <span className="w-1.5 h-1.5 bg-white" />}
              </button>
            );
          })}
        </div>

        {/* Tab Content: 90s Device Manager / Driver Properties */}
        <div className="bg-[#111111] border-2 border-[#444] p-5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]">
          {/* Department Description Header */}
          <div className="bg-[#080808] border border-[#2b2b2b] p-3 mb-6 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="text-[#666]">&gt;&gt; SUBSYSTEM:</span>
              <span className="text-white font-bold">{activeCategory.department}</span>
            </div>
            <span className="bg-white text-black font-extrabold px-1.5 py-0.2 text-[10px]">
              ALL DRIVERS SIGNED (WHQL)
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill, sIdx) => {
              const pct = getPercent(skill.level);
              return (
                <div
                  key={sIdx}
                  className="bg-[#151515] border border-[#333] p-3.5 flex flex-col justify-between shadow-[inset_1px_1px_0px_#222,inset_-1px_-1px_0px_#000] hover:border-white transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white" />
                      <span className="font-mono text-sm font-bold text-white tracking-wide">
                        {skill.name}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] font-bold bg-black text-white px-2 py-0.5 border border-[#555]">
                      {skill.level.toUpperCase()}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] text-[#999] leading-relaxed mb-3">
                    {skill.description}
                  </p>

                  {/* 1990s Segmented Block Meter */}
                  <div className="pt-2 border-t border-[#262626] flex items-center justify-between font-mono text-[11px]">
                    <span className="text-white font-bold tracking-widest text-[10px]">
                      {renderBlocks(pct)}
                    </span>
                    <span className="text-white font-extrabold text-[10px]">
                      {pct}% CAPACITY
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};
