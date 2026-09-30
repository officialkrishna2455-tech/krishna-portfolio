import React from 'react';
import { Code2, BrainCircuit, Layout, Server, Database, Cloud, Sparkles, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CleanSkills: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const categoryThemes: Record<string, {
    border: string;
    iconBg: string;
    icon: React.ReactNode;
    titleColor: string;
    tagBg: string;
    tagText: string;
    tagBorder: string;
    popularBg: string;
    popularText: string;
    popularBorder: string;
  }> = {
    Languages: {
      border: 'border-cyan-300 hover:border-cyan-500',
      iconBg: 'bg-cyan-100 text-cyan-800',
      icon: <Code2 className="w-4 h-4 text-cyan-700" />,
      titleColor: 'text-slate-900',
      tagBg: 'bg-slate-100',
      tagText: 'text-slate-900',
      tagBorder: 'border-slate-300',
      popularBg: 'bg-cyan-100',
      popularText: 'text-cyan-900',
      popularBorder: 'border-cyan-400'
    },
    'AI & Machine Learning': {
      border: 'border-emerald-300 hover:border-emerald-500',
      iconBg: 'bg-emerald-100 text-emerald-800',
      icon: <BrainCircuit className="w-4 h-4 text-emerald-700" />,
      titleColor: 'text-slate-900',
      tagBg: 'bg-slate-100',
      tagText: 'text-slate-900',
      tagBorder: 'border-slate-300',
      popularBg: 'bg-emerald-100',
      popularText: 'text-emerald-900',
      popularBorder: 'border-emerald-400'
    },
    'Frontend Engineering': {
      border: 'border-blue-300 hover:border-blue-500',
      iconBg: 'bg-blue-100 text-blue-800',
      icon: <Layout className="w-4 h-4 text-blue-700" />,
      titleColor: 'text-slate-900',
      tagBg: 'bg-slate-100',
      tagText: 'text-slate-900',
      tagBorder: 'border-slate-300',
      popularBg: 'bg-blue-100',
      popularText: 'text-blue-900',
      popularBorder: 'border-blue-400'
    },
    'Backend & Systems': {
      border: 'border-amber-300 hover:border-amber-500',
      iconBg: 'bg-amber-100 text-amber-800',
      icon: <Server className="w-4 h-4 text-amber-700" />,
      titleColor: 'text-slate-900',
      tagBg: 'bg-slate-100',
      tagText: 'text-slate-900',
      tagBorder: 'border-slate-300',
      popularBg: 'bg-amber-100',
      popularText: 'text-amber-900',
      popularBorder: 'border-amber-400'
    },
    'Databases & Storage': {
      border: 'border-purple-300 hover:border-purple-500',
      iconBg: 'bg-purple-100 text-purple-800',
      icon: <Database className="w-4 h-4 text-purple-700" />,
      titleColor: 'text-slate-900',
      tagBg: 'bg-slate-100',
      tagText: 'text-slate-900',
      tagBorder: 'border-slate-300',
      popularBg: 'bg-purple-100',
      popularText: 'text-purple-900',
      popularBorder: 'border-purple-400'
    },
    'DevOps & Cloud': {
      border: 'border-rose-300 hover:border-rose-500',
      iconBg: 'bg-rose-100 text-rose-800',
      icon: <Cloud className="w-4 h-4 text-rose-700" />,
      titleColor: 'text-slate-900',
      tagBg: 'bg-slate-100',
      tagText: 'text-slate-900',
      tagBorder: 'border-slate-300',
      popularBg: 'bg-rose-100',
      popularText: 'text-rose-900',
      popularBorder: 'border-rose-400'
    },
  };

  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto border-t border-cyan-200/80">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 border border-cyan-300 text-cyan-800 text-xs font-mono font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
          <span>Technical Competencies & AI Arsenal</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Technical Skills & AI Stack
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Specialized frameworks, neural architectures, backend microservices, and modern frontend tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => {
          const theme = categoryThemes[cat.category] || categoryThemes['Languages'];

          return (
            <div
              key={cat.category}
              className={`p-6 rounded-2xl border ${theme.border} transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.94)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
              }}
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className={`p-2 rounded-xl ${theme.iconBg} shadow-2xs`}>
                    {theme.icon}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-cyan-800 transition-colors">
                    {cat.category}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 font-mono font-semibold mb-4">
                  {cat.department}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-all ${
                        skill.popular
                          ? `${theme.popularBg} ${theme.popularText} ${theme.popularBorder} shadow-2xs`
                          : `${theme.tagBg} ${theme.tagText} ${theme.tagBorder}`
                      }`}
                      style={{
                        color: skill.popular ? undefined : '#0f172a',
                        backgroundColor: skill.popular ? undefined : '#f8fafc',
                      }}
                      title={skill.description}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
