import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Cpu, Terminal, Layers, Server, Database, Cloud } from 'lucide-react';
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
    <section id="skills" className="relative z-10 py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <RetroWindow
        id="skills-window"
        title="Technical Skills & Technologies"
        icon="cpu"
        statusBarText={`Category: ${activeCategory.category} (${activeCategory.skills.length} Technologies)`}
      >
        {/* Category Tabs */}
        <div className="flex flex-wrap items-end gap-1.5 border-b border-[#444] mb-6 pt-1 select-none">
          {skillCategories.map((cat, idx) => {
            const isActive = idx === activeCategoryIndex;
            return (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`font-mono text-xs sm:text-sm px-4 py-2 border-t-2 border-x-2 transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#222] text-white font-black border-white -mb-[1px] border-b-0 shadow-[inset_1.5px_1.5px_0px_#fff]'
                    : 'bg-[#0f0f0f] text-[#d4d4d4] border-[#333] hover:text-white hover:bg-[#1c1c1c] font-bold'
                }`}
                style={{
                  boxShadow: isActive ? 'inset 1.5px 1.5px 0px #fff, inset -1.5px 0px 0px #000' : 'none'
                }}
              >
                <span>{cat.category}</span>
                {isActive && <span className="w-2 h-2 bg-white" />}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-[#141414] border-2 border-[#666] p-6 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]">
          {/* Department Description Header */}
          <div className="bg-[#080808] border-2 border-[#333] p-3.5 mb-6 flex flex-wrap items-center justify-between gap-2 font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#aaa] font-bold">Focus Area:</span>
              <span className="text-white font-black">{activeCategory.department}</span>
            </div>
            <span className="bg-white text-black font-black px-2.5 py-0.5 text-xs border border-black">
              {activeCategory.skills.length} Core Tools
            </span>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCategory.skills.map((skill, sIdx) => {
              const pct = getPercent(skill.level);
              return (
                <div
                  key={sIdx}
                  className="bg-[#1a1a1a] border-2 border-[#444] p-4 flex flex-col justify-between shadow-[inset_1px_1px_0px_#333,inset_-1px_-1px_0px_#000] hover:border-white transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-white" />
                      <span className="font-mono text-base font-extrabold text-white tracking-wide">
                        {skill.name}
                      </span>
                    </div>

                    <span className="font-mono text-xs font-black bg-white text-black px-2 py-0.5 border border-black shadow-[1px_1px_0px_#000]">
                      {skill.level.toUpperCase()}
                    </span>
                  </div>

                  <p className="font-mono text-xs sm:text-sm text-[#f0f0f0] font-medium leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* 1990s Segmented Block Meter */}
                  <div className="pt-2.5 border-t border-[#333] flex items-center justify-between font-mono text-xs sm:text-sm">
                    <span className="text-white font-black tracking-widest">
                      {renderBlocks(pct)}
                    </span>
                    <span className="text-white font-black bg-black px-2 py-0.5 border border-[#555]">
                      {pct}% PROFICIENCY
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
