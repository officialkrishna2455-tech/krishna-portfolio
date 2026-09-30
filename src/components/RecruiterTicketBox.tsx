import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, Sparkles, Send, CheckCircle, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { LinkedinIcon } from './Icons';
import { soundFX } from '../utils/soundEffects';

interface RecruiterTicketBoxProps {
  onOpenResumeModal: () => void;
}

export const RecruiterTicketBox: React.FC<RecruiterTicketBoxProps> = ({ onOpenResumeModal }) => {
  const { director } = PORTFOLIO_DATA;

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    roleOffer: 'Software Engineer (Full-Stack / AI-ML)',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFX.playCelebration();

    // Trigger golden celebratory confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#00f0ff', '#ffffff', '#eab308']
    });

    setSubmitted(true);
  };

  const handleOpenEmailClient = () => {
    const subject = encodeURIComponent(`Interview / Offer: ${formData.roleOffer} at ${formData.company || 'Our Company'}`);
    const body = encodeURIComponent(
      `Hi Krishna,\n\nI was impressed by your portfolio and projects (CareerLaunch, DeepFake Detector, FaceNet Attendance).\n\nCompany: ${formData.company}\nName: ${formData.name}\nMessage: ${formData.message}\n\nLet's schedule a placement interview!\n`
    );
    window.open(`mailto:${director.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="box-office" className="relative py-16 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono mb-3">
          <Ticket className="w-3.5 h-3.5" />
          <span>ACT V: THE BOX OFFICE & CASTING CALL</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-cinzel tracking-wider text-white">
          RECRUITER VIP PASS
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-2xl mx-auto mt-2">
          Admit One for Placement Teams, Engineering Leads & Recruiters. Book an interview with Krishna.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Golden Cinema Ticket (Left 6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1a1710] via-[#12131a] to-[#0a0a0f] border-2 border-amber-400/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(245,158,11,0.2)] overflow-hidden">
            {/* Ticket Perforation Notches on Left & Right */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#05060b] border border-amber-400/30" />
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-[#05060b] border border-amber-400/30" />

            {/* Ticket Header */}
            <div className="flex items-center justify-between border-b border-amber-400/20 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase block">
                  CAMPUS PLACEMENT '27 · VIP PASS
                </span>
                <h3 className="font-cinzel font-black text-2xl text-white">
                  ADMIT ONE
                </h3>
              </div>
              <div className="text-right font-mono text-[10px] text-slate-400">
                <span className="text-amber-400 block font-bold">SEAT: A-01</span>
                <span>TIER: PREMIERE</span>
              </div>
            </div>

            {/* Candidate Credentials */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">ENGINEER:</span>
                <span className="text-white font-bold">{director.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">DEGREE:</span>
                <span className="text-cyan-300">B.Tech CSE (AI/ML) · JLU Bhopal</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-slate-400">PHONE:</span>
                <a href={`tel:${director.phone}`} className="text-amber-400 hover:underline">
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
                <span className="text-emerald-400 font-bold">Immediate Full-Time Placement</span>
              </div>
            </div>

            {/* Realistic Barcode */}
            <div className="mt-6 pt-4 border-t-2 border-dashed border-amber-400/30 flex flex-col items-center">
              <div className="w-full flex items-center justify-center gap-1 h-12 px-4 opacity-80">
                {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 4, 1, 2, 3, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 4, 1, 3].map((w, i) => (
                  <div
                    key={i}
                    className="h-full bg-amber-400/90 rounded-sm"
                    style={{ width: `${w * 2.5}px` }}
                  />
                ))}
              </div>
              <span className="text-[10px] font-mono tracking-widest text-amber-400/70 mt-1">
                * 2023-2027-KRISHNA-SWE-AIML-PASS *
              </span>
            </div>

            {/* Quick Action Links on Ticket */}
            <div className="mt-6 grid grid-cols-2 gap-2 text-xs font-mono">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Full Resume</span>
              </button>

              <a
                href={director.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFX.playTick()}
                className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium border border-white/20 transition-all"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn Pass</span>
              </a>
            </div>
          </div>
        </div>

        {/* Casting Call & Interview Booking Form (Right 6 Cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0f1018] border border-white/10 shadow-2xl relative">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <h3 className="font-syne font-bold text-lg text-white">
                Cast Krishna In Your Next Production
              </h3>
            </div>
            <p className="text-xs text-slate-400 mb-6 font-mono">
              Directly invite Krishna for campus placement, technical interviews, or SWE / AI-ML engineering roles.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-4"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <div>
                  <h4 className="font-syne font-bold text-lg text-white">
                    Casting Invitation Prepared!
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Thank you! Click below to send this directly to Krishna's inbox with prefilled details.
                  </p>
                </div>

                <button
                  onClick={handleOpenEmailClient}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
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
                      placeholder="e.g. Lead Tech Recruiter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Company / Organization:</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Google / Microsoft / Startup"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Your Work Email:</label>
                  <input
                    type="email"
                    required
                    placeholder="recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Opportunity / Role:</label>
                  <select
                    value={formData.roleOffer}
                    onChange={(e) => setFormData({ ...formData, roleOffer: e.target.value })}
                    className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Software Engineer (Full-Stack / AI-ML)">Software Engineer (Full-Stack / AI-ML)</option>
                    <option value="AI / ML Engineer (PyTorch / LLMs)">AI / ML Engineer (PyTorch / LLMs)</option>
                    <option value="Frontend / Next.js Engineer">Frontend / Next.js Engineer</option>
                    <option value="Campus Placement Interview">Campus Placement Interview</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-400 mb-1">Invitation Message:</label>
                  <textarea
                    rows={3}
                    placeholder="Tell Krishna about your engineering culture and interview process..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#171822] border border-white/10 rounded-xl px-3.5 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-amber-400 text-black font-syne font-bold uppercase tracking-wider shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4 fill-black" />
                  <span>Issue Casting Call & Recruiter Ticket</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
