import React from 'react';
import { GraduationCap, Award, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const CleanCertifications: React.FC = () => {
  const { director, certifications } = PORTFOLIO_DATA;

  const certColors = [
    {
      border: 'border-amber-300 hover:border-amber-500',
      bgGradient: 'from-amber-50/80 to-white/90',
      badgeBg: 'bg-amber-100 text-amber-800 border-amber-300',
      tagBg: 'bg-amber-50 text-amber-900 border-amber-200',
      iconColor: 'text-amber-600'
    },
    {
      border: 'border-cyan-300 hover:border-cyan-500',
      bgGradient: 'from-cyan-50/80 to-white/90',
      badgeBg: 'bg-cyan-100 text-cyan-800 border-cyan-300',
      tagBg: 'bg-cyan-50 text-cyan-900 border-cyan-200',
      iconColor: 'text-cyan-600'
    },
    {
      border: 'border-purple-300 hover:border-purple-500',
      bgGradient: 'from-purple-50/80 to-white/90',
      badgeBg: 'bg-purple-100 text-purple-800 border-purple-300',
      tagBg: 'bg-purple-50 text-purple-900 border-purple-200',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section id="credentials" className="py-16 px-4 max-w-5xl mx-auto border-t border-cyan-200/80">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-mono font-bold mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>Academic Foundation & Verified Industry Credentials</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Education & Certifications
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Specialized B.Tech engineering curriculum and verified professional certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Education Card: Cyan/Blue Rich Gradient */}
        <div
          className="p-6 rounded-2xl border border-cyan-300 hover:border-cyan-500 shadow-md hover:shadow-lg transition-all flex flex-col justify-between"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-cyan-800 uppercase tracking-wide">
                  Degree Program
                </span>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {director.education.degree}
                </h3>
              </div>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-white/80 border border-cyan-200 flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Institution:</span>
                <span className="text-slate-900 font-bold">{director.education.institution}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-cyan-200 flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Duration:</span>
                <span className="text-blue-800 font-bold bg-blue-100 px-2 py-0.5 rounded">
                  {director.education.duration}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-white/80 border border-cyan-200 flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Specialization:</span>
                <span className="text-cyan-800 font-extrabold bg-cyan-100 px-2 py-0.5 rounded">
                  {director.education.specialization}
                </span>
              </div>
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex justify-between items-center">
                <span className="text-emerald-800 font-semibold">Current Status:</span>
                <span className="text-emerald-900 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  {director.education.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Card: Multi-credential showcase */}
        <div
          className="p-6 rounded-2xl border border-amber-300 hover:border-amber-500 shadow-md hover:shadow-lg transition-all"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/25">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-800 uppercase tracking-wide">
                Verified Credentials
              </span>
              <h3 className="text-lg font-extrabold text-slate-900">
                Industry Certifications
              </h3>
            </div>
          </div>

          <div className="space-y-3">
            {certifications.map((cert, idx) => {
              const pal = certColors[idx % certColors.length];
              return (
                <div
                  key={cert.id}
                  className={`p-4 rounded-xl bg-gradient-to-r ${pal.bgGradient} border ${pal.border} shadow-2xs hover:shadow-sm transition-all`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-extrabold text-slate-900 text-sm">{cert.title}</span>
                    <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded border ${pal.badgeBg}`}>
                      {cert.year}
                    </span>
                  </div>
                  <div className="text-xs font-mono font-bold text-slate-700 mb-2">
                    Issuer: <span className="underline">{cert.issuer}</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {cert.skillsLearned.map((s) => (
                      <span
                        key={s}
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${pal.tagBg}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
