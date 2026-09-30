import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Award, GraduationCap, CheckCircle, ShieldCheck, FileCheck } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

export const Retro90sCertifications: React.FC = () => {
  const { director, certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="relative z-10 py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <RetroWindow
        id="certifications-window"
        title="C:\CREDENTIALS\AUTHENTICATED_CERTIFICATES.MUI"
        icon="disc"
        version="KEY v1.024"
        statusBarText="CRYPTOGRAPHIC VERIFICATION: RSA-1024 VALIDATED | STATUS: GENUINE"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Academic Degree Record */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div 
              className="bg-[#121212] border-2 border-[#555] p-5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-white border-b border-[#333] pb-2 mb-3">
                <GraduationCap className="w-4 h-4 text-white" />
                <span>ACADEMIC_RECORD.DAT</span>
              </div>

              <div className="font-mono text-xs space-y-2 text-[#ccc]">
                <div>
                  <span className="text-[10px] text-[#777] block uppercase">DEGREE PROGRAM</span>
                  <span className="text-white font-bold block mt-0.5">
                    {director.education.degree}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-[#777] block uppercase">INSTITUTION</span>
                  <span className="text-white font-semibold block mt-0.5">
                    {director.education.institution}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#222]">
                  <div>
                    <span className="text-[10px] text-[#777] block">TIMELINE</span>
                    <span className="text-white font-bold">{director.education.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777] block">STATUS</span>
                    <span className="text-white font-bold">{director.education.status}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] text-[#777] block">SPECIALIZATION</span>
                  <span className="text-white font-bold">{director.education.specialization}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#262626] font-mono text-[10px] text-[#888] flex items-center justify-between">
                <span>SECURITY ENCRYPT:</span>
                <span className="bg-white text-black font-extrabold px-1.5 py-0.2">
                  OFFICIAL DEGREE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Certifications */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="bg-[#141414] border border-[#333] p-2 text-xs font-mono text-[#aaa] flex items-center justify-between">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-white" />
                <span className="font-bold text-white">ISSUED ACCREDITATIONS & LICENSES</span>
              </span>
              <span className="bg-black text-white px-2 py-0.5 border border-[#444] text-[10px]">
                {certifications.length} ENTRIES
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#121212] border-2 border-[#444] p-4 flex flex-col justify-between shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000] hover:border-white transition-all select-text"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] bg-white text-black font-extrabold px-1.5 py-0.5">
                        {cert.year} // {cert.issuer.toUpperCase()}
                      </span>
                      <span className="font-mono text-[10px] text-[#888] border border-[#333] px-1.5 py-0.5">
                        {cert.badge}
                      </span>
                    </div>

                    <h4 className="font-mono text-base font-bold text-white tracking-wide mb-1.5">
                      {cert.title}
                    </h4>

                    <p className="font-mono text-[11px] text-[#aaa] leading-relaxed mb-3">
                      {cert.description}
                    </p>
                  </div>

                  <div>
                    <div className="text-[10px] font-mono text-[#777] uppercase mb-1.5">
                      COMPETENCIES VERIFIED:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsLearned.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="font-mono text-[10px] bg-[#0a0a0a] text-[#ddd] px-2 py-0.5 border border-[#333]"
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
