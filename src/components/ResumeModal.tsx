import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Printer, Download, ExternalLink, FileText, Eye, UploadCloud, Check } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/soundEffects';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const { director, projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<'pdf' | 'text'>('pdf');
  const [customPdfUrl, setCustomPdfUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentPdfUrl = customPdfUrl || '/krishna_resume.pdf';

  const handlePrint = () => {
    soundFX.playTick();
    window.print();
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      const url = URL.createObjectURL(file);
      setCustomPdfUrl(url);
      setUploadedFileName(file.name);
      setActiveTab('pdf');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-2 sm:p-4 md:p-6 overflow-y-auto"
    >
      <div className="relative max-w-5xl w-full bg-[#11131a] text-white rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] border border-white/10 overflow-hidden my-auto flex flex-col max-h-[95vh]">
        {/* Top Floating Control Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-[#0d0f17] border-b border-white/10 gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-sans font-bold text-xs sm:text-sm tracking-wide text-white">
              KRISHNA — OFFICIAL RESUME
            </span>
            {uploadedFileName && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[11px] font-mono border border-emerald-500/30">
                <Check className="w-3 h-3" /> {uploadedFileName}
              </span>
            )}
          </div>

          {/* Tab Switcher & Quick Actions */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* View Mode Toggle */}
            <div className="flex p-0.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'pdf'
                    ? 'bg-cyan-500 text-black font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Original PDF</span>
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all ${
                  activeTab === 'text'
                    ? 'bg-cyan-500 text-black font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Web Format</span>
              </button>
            </div>

            {/* Direct Download Button */}
            <a
              href={currentPdfUrl}
              download="Krishna_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500 text-emerald-300 hover:text-black font-semibold text-xs border border-emerald-500/30 transition-all cursor-pointer"
              title="Download Resume as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span> PDF
            </a>

            {/* Open in New Window */}
            <a
              href={currentPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/10 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Upload / Replace Option */}
            <input
              type="file"
              ref={fileInputRef}
              accept="application/pdf"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-400 text-xs border border-white/10 transition-colors cursor-pointer"
              title="Upload an updated resume PDF"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span>Update PDF</span>
            </button>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
              title="Print document"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close Modal */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-rose-500/20 text-slate-400 hover:text-rose-300 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TAB 1: EMBEDDED NATIVE PDF VIEWER */}
        {activeTab === 'pdf' && (
          <div className="w-full flex-1 bg-[#1a1d26] flex flex-col min-h-[600px] h-[78vh]">
            <object
              data={currentPdfUrl}
              type="application/pdf"
              className="w-full h-full"
            >
              {/* Fallback if browser PDF plugin is blocked or mobile */}
              <iframe
                src={currentPdfUrl}
                title="Krishna Resume PDF"
                className="w-full h-full border-0"
              >
                <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#0e1017]">
                  <FileText className="w-12 h-12 text-cyan-400 mb-3" />
                  <p className="text-white font-medium mb-2">
                    PDF preview is available for download or external viewing.
                  </p>
                  <a
                    href={currentPdfUrl}
                    download="Krishna_Resume.pdf"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Krishna's Resume PDF
                  </a>
                </div>
              </iframe>
            </object>
          </div>
        )}

        {/* TAB 2: PIXEL-PERFECT WEB FORMAT */}
        {activeTab === 'text' && (
          <div className="p-6 sm:p-10 font-sans text-neutral-800 bg-white overflow-y-auto max-h-[78vh] print:max-h-none print:overflow-visible print:p-0">
            {/* Header */}
            <div className="text-center border-b-2 border-neutral-300 pb-5 mb-5">
              <h1 className="text-3xl sm:text-4xl font-black font-cinzel tracking-wider text-neutral-950 uppercase">
                {director.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-mono text-neutral-600 mt-2">
                <span>{director.phone}</span>
                <span>⋄</span>
                <span>{director.location}</span>
                <span>⋄</span>
                <a href={`mailto:${director.email}`} className="text-blue-700 hover:underline">{director.email}</a>
                <span>⋄</span>
                <a href={director.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">github.com/officialkrishna2455-tech</a>
                <span>⋄</span>
                <a href={director.linkedin} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">linkedin.com/in/krishna</a>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-5">
              <h2 className="text-xs font-bold font-mono tracking-widest text-neutral-900 uppercase border-b border-neutral-300 pb-1 mb-2">
                OBJECTIVE
              </h2>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {director.objective}
              </p>
            </div>

            {/* Education */}
            <div className="mb-5">
              <h2 className="text-xs font-bold font-mono tracking-widest text-neutral-900 uppercase border-b border-neutral-300 pb-1 mb-2">
                EDUCATION
              </h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-neutral-900">
                    {director.education.degree}
                  </h3>
                  <p className="text-xs text-neutral-600">
                    {director.education.institution}
                  </p>
                  <p className="text-xs text-neutral-600 italic">
                    Specialization: {director.education.specialization}
                  </p>
                </div>
                <span className="text-xs font-mono text-neutral-600 font-semibold">
                  {director.education.duration}
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-5">
              <h2 className="text-xs font-bold font-mono tracking-widest text-neutral-900 uppercase border-b border-neutral-300 pb-1 mb-2">
                SKILLS
              </h2>
              <div className="space-y-1.5 text-xs">
                <div className="grid grid-cols-12">
                  <span className="col-span-3 sm:col-span-2 font-bold text-neutral-900">Languages</span>
                  <span className="col-span-9 sm:col-span-10 text-neutral-700">Python, TypeScript, JavaScript, SQL, HTML/CSS</span>
                </div>
                <div className="grid grid-cols-12">
                  <span className="col-span-3 sm:col-span-2 font-bold text-neutral-900">Frontend</span>
                  <span className="col-span-9 sm:col-span-10 text-neutral-700">Next.js, React, Tailwind CSS, Framer Motion</span>
                </div>
                <div className="grid grid-cols-12">
                  <span className="col-span-3 sm:col-span-2 font-bold text-neutral-900">Backend</span>
                  <span className="col-span-9 sm:col-span-10 text-neutral-700">FastAPI, Flask, Node.js</span>
                </div>
                <div className="grid grid-cols-12">
                  <span className="col-span-3 sm:col-span-2 font-bold text-neutral-900">AI/ML</span>
                  <span className="col-span-9 sm:col-span-10 text-neutral-700">PyTorch, FaceNet-PyTorch, OpenCV, scikit-learn, Groq API (LLMs), Generative AI</span>
                </div>
                <div className="grid grid-cols-12">
                  <span className="col-span-3 sm:col-span-2 font-bold text-neutral-900">Databases</span>
                  <span className="col-span-9 sm:col-span-10 text-neutral-700">SQLite, MongoDB, JSON-based storage</span>
                </div>
                <div className="grid grid-cols-12">
                  <span className="col-span-3 sm:col-span-2 font-bold text-neutral-900">Tools & Platforms</span>
                  <span className="col-span-9 sm:col-span-10 text-neutral-700">Git, GitHub, Vercel, Render, Netlify, Docker, JWT Auth, Google OAuth</span>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-5">
              <h2 className="text-xs font-bold font-mono tracking-widest text-neutral-900 uppercase border-b border-neutral-300 pb-1 mb-3">
                PROJECTS
              </h2>
              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="font-bold text-neutral-900 sm:text-sm">
                        {proj.title} – {proj.subtitle}
                      </span>
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-700 hover:underline font-mono text-[11px]"
                      >
                        GitHub Link
                      </a>
                    </div>
                    <div className="text-[11px] text-neutral-600 font-mono italic mb-1.5">
                      {proj.techStack.join(', ')}
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 leading-relaxed">
                      {proj.bulletPoints.map((bp, i) => (
                        <li key={i}>{bp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-bold font-mono tracking-widest text-neutral-900 uppercase border-b border-neutral-300 pb-1 mb-2">
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700">
                <li>Anthropic Claude Code in Action (2026)</li>
                <li>AWS EC2 Fundamentals – KodeKloud</li>
                <li>Cloud Computing Fundamentals – KodeKloud</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
