import React, { useState } from 'react';
import { Sparkles, Code2, BrainCircuit, Layout, Server, Database, Cloud, Star, Search, ShieldCheck, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA, type SkillCategory } from '../data/portfolioData';
import { SpotlightCard } from './reactbits/SpotlightCard';
import { cyberSound } from '../utils/soundEffects';

export const SkillsArsenal: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...skillCategories.map(c => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages": return <Code2 className="w-4 h-4 text-cyan-400" />;
      case "AI & Machine Learning": return <BrainCircuit className="w-4 h-4 text-emerald-400" />;
      case "Frontend Engineering": return <Layout className="w-4 h-4 text-cyan-400" />;
      case "Backend & Systems": return <Server className="w-4 h-4 text-amber-400" />;
      case "Databases & Storage": return <Database className="w-4 h-4 text-blue-400" />;
      case "DevOps & Cloud": return <Cloud className="w-4 h-4 text-purple-400" />;
      default: return <Cpu className="w-4 h-4 text-cyan-400" />;
    }
  };

  const filteredCategories: SkillCategory[] = skillCategories.map(cat => {
    if (activeCategory !== "All" && cat.category !== activeCategory) {
      return { ...cat, skills: [] };
    }
    const filteredSkills = cat.skills.filter(s =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return { ...cat, skills: filteredSkills };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills-arsenal" className="relative py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>MODULE 03 // ARCHITECTURAL STACK & SYSTEM CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-syne tracking-tight text-white uppercase">
          TECHNICAL STACK & MODULES
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-2xl mx-auto mt-2">
          Production-tested languages, deep learning frameworks, high-throughput APIs, and cloud deployments.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 bg-[#12131b] border border-white/10 rounded-2xl p-1.5">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  cyberSound.playDialTick();
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? 'btn-cinema-cyan font-bold shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Quick Skill Search */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search stack (e.g. PyTorch)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#12131c] border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 transition-colors"
          />
        </div>
      </div>

      {/* Departments Grid */}
      <div className="space-y-8">
        {filteredCategories.map((catGroup) => (
          <div key={catGroup.category} className="space-y-4">
            {/* Department Title */}
            <div className="flex items-center gap-2.5 pb-2 border-b border-white/10">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                {getCategoryIcon(catGroup.category)}
              </div>
              <div>
                <h3 className="text-base font-bold font-syne text-white tracking-wide">
                  {catGroup.category}
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  Subsystem: {catGroup.department}
                </span>
              </div>
            </div>

            {/* Skills Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {catGroup.skills.map((skill) => (
                <SpotlightCard
                  key={skill.name}
                  spotlightColor="rgba(0, 240, 255, 0.12)"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  className="p-5 bg-gradient-to-b from-[#13141f] to-[#0c0d14] hover:border-cyan-400/40 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm font-sans tracking-wide">
                          {skill.name}
                        </span>
                        {skill.popular && (
                          <span className="flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                            <Star className="w-2.5 h-2.5 fill-cyan-300" />
                            Core
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400">
                        {skill.level} Proficiency
                      </span>
                    </div>

                    <ShieldCheck className="w-4 h-4 text-emerald-400/80" />
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-sans mt-2">
                    {skill.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
