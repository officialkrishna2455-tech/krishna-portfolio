import React from 'react';
import { Award, GraduationCap, Check, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SpotlightCard } from './reactbits/SpotlightCard';

export const CertificationsRoll: React.FC = () => {
  const { certifications, director } = PORTFOLIO_DATA;

  return (
    <section id="certifications-awards" className="relative py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>MODULE 04 // VERIFIED CREDENTIALS & ACADEMIC FOUNDATION</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-syne tracking-tight text-white uppercase">
          CERTIFICATIONS & DEGREE
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-2xl mx-auto mt-2">
          Recognized credentials in agentic AI development, cloud infrastructure, and core computer science.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Education Degree Card (Left 5 Cols) */}
        <div className="lg:col-span-5">
          <SpotlightCard
            spotlightColor="rgba(0, 240, 255, 0.15)"
            borderColor="rgba(0, 240, 255, 0.3)"
            className="p-8 bg-gradient-to-b from-[#151722] to-[#0e1017] h-full"
          >
            {/* Degree Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-cyan-400/20 text-cyan-300 border border-cyan-400/40">
                Official Degree Program
              </span>
              <div className="p-2 rounded-xl bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                <GraduationCap className="w-6 h-6" />
              </div>
            </div>

            <h3 className="font-syne font-black text-2xl text-white mb-1">
              {director.education.degree}
            </h3>

            <p className="text-cyan-400 font-medium text-sm mb-4 font-mono">
              {director.education.institution}
            </p>

            <div className="space-y-3 font-mono text-xs text-slate-300 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Duration:</span>
                <span className="text-white font-semibold">{director.education.duration}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Specialization:</span>
                <span className="text-cyan-300 font-semibold">{director.education.specialization}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-emerald-400 font-semibold">{director.education.status}</span>
              </div>
            </div>

            {/* Academic Highlights */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                Core Coursework & Foundations:
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Deep Neural Networks, Computer Vision & MTCNN architectures, Machine Learning Theory, Data Structures & Algorithms, Database Systems, Cloud Computing.
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* Certifications Roster (Right 7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
            INDUSTRY CERTIFICATIONS:
          </div>

          {certifications.map((cert) => (
            <SpotlightCard
              key={cert.id}
              spotlightColor="rgba(0, 240, 255, 0.12)"
              borderColor="rgba(255, 255, 255, 0.1)"
              className="p-6 bg-gradient-to-r from-[#12131e] to-[#0c0d15] hover:border-cyan-400/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-base text-white">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-mono text-cyan-400">
                      Issued by {cert.issuer}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-white/10 text-white border border-white/15">
                    {cert.year}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                    {cert.badge}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-4">
                {cert.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                {cert.skillsLearned.map((sk) => (
                  <span
                    key={sk}
                    className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-slate-300 border border-white/10"
                  >
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>{sk}</span>
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};
