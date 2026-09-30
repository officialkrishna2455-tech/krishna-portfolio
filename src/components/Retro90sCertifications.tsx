import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Award, GraduationCap, CheckCircle, ShieldCheck, FileCheck } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

export const Retro90sCertifications: React.FC = () => {
  const { director, certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="relative z-10 py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <RetroWindow
        id="certifications-window"
        title="Education & Certifications"
        icon="disc"
        statusBarText="Education: B.Tech CSE (AI/ML) | Verified Certifications: Active"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Academic Degree Record */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div 
              className="bg-[#141414] border-2 border-[#666] p-6 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]"
            >
              <div className="flex items-center gap-2 font-mono text-sm font-black text-white border-b border-[#333] pb-2.5 mb-4">
                <GraduationCap className="w-5 h-5 text-white" />
                <span>Academic Education</span>
              </div>

              <div className="font-mono space-y-3.5 text-white">
                <div>
                  <span className="text-xs text-[#cfcfcf] block font-bold uppercase">DEGREE</span>
                  <span className="text-base sm:text-lg font-black text-white block mt-1">
                    {director.education.degree}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-[#cfcfcf] block font-bold uppercase">INSTITUTION</span>
                  <span className="text-sm sm:text-base font-extrabold text-[#f3f4f6] block mt-1">
                    {director.education.institution}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#333]">
                  <div>
                    <span className="text-xs text-[#cfcfcf] block font-bold">TIMELINE</span>
                    <span className="text-sm sm:text-base font-black text-white mt-0.5 block">{director.education.duration}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[#cfcfcf] block font-bold">STATUS</span>
                    <span className="text-sm sm:text-base font-black text-white mt-0.5 block">{director.education.status}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs text-[#cfcfcf] block font-bold">SPECIALIZATION</span>
                  <span className="text-sm sm:text-base font-black text-white mt-0.5 block">{director.education.specialization}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#333] font-mono text-xs text-white flex items-center justify-between">
                <span>Verification:</span>
                <span className="bg-white text-black font-black px-2 py-0.5 border border-black">
                  Official Academic Record
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-[#181818] border-2 border-[#444] p-3 text-xs sm:text-sm font-mono text-white flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="font-extrabold text-white">Professional Certifications</span>
              </span>
              <span className="bg-black text-white font-black px-2.5 py-0.5 border border-white text-xs">
                {certifications.length} Credentials
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#141414] border-2 border-[#555] p-5 flex flex-col justify-between shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000] hover:border-white transition-all select-text"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-mono text-xs bg-white text-black font-black px-2 py-0.5 border border-black">
                        {cert.year} · {cert.issuer}
                      </span>
                      <span className="font-mono text-xs text-white font-bold border border-white/60 bg-black px-2 py-0.5">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="font-mono text-lg font-black text-white tracking-wide mb-1.5">
                      {cert.title}
                    </h4>

                    <p className="font-mono text-xs sm:text-sm text-[#f0f0f0] font-medium leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono font-bold text-[#cfcfcf] uppercase mb-1.5">
                      Skills Learned:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cert.skillsLearned.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-xs font-bold bg-black text-white px-2.5 py-1 border border-white/60"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};
