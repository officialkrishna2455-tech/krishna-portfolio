import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radio, Send, CheckCircle, FileText, Mail, Phone, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon, GithubIcon } from './Icons';
import { cyberSound } from '../utils/soundEffects';

interface CyberTransmissionBoxProps {
  onOpenResumeModal: () => void;
}

export const CyberTransmissionBox: React.FC<CyberTransmissionBoxProps> = ({ onOpenResumeModal }) => {
  const { director } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    roleOffer: 'Software Engineer / AI-ML Engineer',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    cyberSound.playTransmission();

    // Trigger celebratory cyber particles
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f0ff', '#3b82f6', '#10b981', '#ffffff']
    });

    setSubmitted(true);
  };

  const handleOpenEmailClient = () => {
    const subject = encodeURIComponent(`Inquiry / Opportunity: ${formData.roleOffer} from ${formData.company || 'Our Team'}`);
    const body = encodeURIComponent(
      `Hi Krishna,\n\nI explored your AI/ML and software engineering portfolio (CareerLaunch, DeepFake Detector, FaceNet Attendance).\n\nSender: ${formData.name}\nOrganization: ${formData.company}\nMessage: ${formData.message}\n\nLet's connect regarding opportunities!\n`
    );
    window.open(`mailto:${director.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="transmission-box" className="relative py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Radio className="w-3.5 h-3.5" />
          <span>MODULE 05 // TRANSMISSION TERMINAL & COMM LINK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-syne tracking-tight text-white uppercase">
          INITIALIZE DIRECT COMM
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-2xl mx-auto mt-2">
          Connect directly with Krishna for engineering roles, technical collaboration, or project deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Terminal Info Card (Left 5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#151722] via-[#0f1118] to-[#0a0b10] border-2 border-cyan-500/30 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase block">
                  SYSTEM IDENTIFIER
                </span>
                <h3 className="font-syne font-black text-2xl text-white">
                  KRISHNA
                </h3>
              </div>
              <div className="text-right font-mono text-[10px] text-slate-400">
                <span className="text-emerald-400 block font-bold">STATUS: READY</span>
                <span>SWE // AI-ML</span>
              </div>
            </div>

            {/* Engineer Specs */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">ROLE:</span>
                <span className="text-cyan-300 font-bold">AI/ML & Software Engineer</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">SPECIALIZATION:</span>
                <span className="text-white">B.Tech CSE (AI/ML) · JLU Bhopal</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">PHONE:</span>
                <a href={`tel:${director.phone}`} className="text-cyan-400 hover:underline">
                  {director.phone}
                </a>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">EMAIL:</span>
                <a href={`mailto:${director.email}`} className="text-cyan-400 hover:underline truncate max-w-[200px]">
                  {director.email}
                </a>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">LOCATION:</span>
                <span className="text-slate-300">{director.location}</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-slate-400">AVAILABILITY:</span>
                <span className="text-emerald-400 font-bold">Open for Full-Time Roles</span>
              </div>
            </div>

            {/* Quick Action Links */}
            <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                onClick={onOpenResumeModal}
                className="btn-cinema-cyan flex items-center justify-center gap-1.5 p-2.5 rounded-xl font-bold cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>

              <a
                href={director.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => cyberSound.playChirp()}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all cursor-pointer"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn Link</span>
              </a>
            </div>
          </div>
        </div>

        {/* Transmission Form (Right 7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0f1118] border border-white/10 shadow-2xl relative">
            <div className="flex items-center gap-2 mb-2">
              <Radio className="w-4 h-4 text-cyan-400" />
              <h3 className="font-syne font-bold text-lg text-white">
                Transmit a Message or Opportunity
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Send an inquiry directly to Krishna regarding full-time engineering positions, technical projects, or interviews.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/40 text-center space-y-4"
              >
                <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto" />
                <div>
                  <h4 className="font-syne font-bold text-lg text-white">
                    Transmission Formatted!
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-mono">
                    Click below to dispatch this message directly to Krishna's inbox.
                  </p>
                </div>

                <button
                  onClick={handleOpenEmailClient}
                  className="btn-cinema-cyan inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email to Krishna</span>
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1">Your Name / Title:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer, Tech Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Organization / Company:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. AI Lab / Tech Co."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Your Contact Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Role / Topic:</label>
                  <select
                    value={formData.roleOffer}
                    onChange={(e) => setFormData({ ...formData, roleOffer: e.target.value })}
                    className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    <option value="Software Engineer / AI-ML Engineer">Software Engineer / AI-ML Engineer</option>
                    <option value="Deep Learning / PyTorch Specialist">Deep Learning / PyTorch Specialist</option>
                    <option value="Full-Stack Next.js Developer">Full-Stack Next.js Developer</option>
                    <option value="Technical Interview / Opportunity">Technical Interview / Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Message:</label>
                  <textarea
                    rows={3}
                    placeholder="Share details about the role, engineering stack, or technical challenge..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-cinema-cyan w-full py-3.5 rounded-xl font-syne font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
