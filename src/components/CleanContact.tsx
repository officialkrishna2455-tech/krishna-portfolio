import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const CleanContact: React.FC = () => {
  const { director } = PORTFOLIO_DATA;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Krishna,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );
    window.open(`mailto:${director.email}?subject=${subject}&body=${body}`);
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 px-4 max-w-5xl mx-auto border-t border-cyan-200/80">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold mb-2">
          <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
          <span>Direct Comm Link & Engineering Opportunities</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-slate-600 text-sm mt-1">
          Have an open role, technical inquiry, or want to collaborate? I'd love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Info (5 Cols) with Rich Color Themes */}
        <div className="md:col-span-5 space-y-4">
          <div
            className="p-6 rounded-2xl border border-cyan-300 shadow-md space-y-3.5 text-xs font-mono"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Email Card */}
            <a
              href={`mailto:${director.email}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/90 hover:bg-cyan-50/80 border border-cyan-200 text-slate-800 hover:text-cyan-900 transition-all group shadow-2xs"
            >
              <div className="p-2.5 rounded-lg bg-cyan-100 text-cyan-700 border border-cyan-300 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="block text-[10px] text-cyan-700 font-bold uppercase">Direct Email</span>
                <span className="truncate font-bold text-slate-900 group-hover:text-cyan-800">{director.email}</span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${director.phone}`}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/90 hover:bg-emerald-50/80 border border-emerald-200 text-slate-800 hover:text-emerald-900 transition-all group shadow-2xs"
            >
              <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-700 border border-emerald-300 group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-emerald-700 font-bold uppercase">Direct Phone</span>
                <span className="font-bold text-slate-900 group-hover:text-emerald-800">{director.phone}</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-white/90 border border-rose-200 text-slate-800 shadow-2xs">
              <div className="p-2.5 rounded-lg bg-rose-100 text-rose-700 border border-rose-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] text-rose-700 font-bold uppercase">Location</span>
                <span className="font-bold text-slate-900">{director.location}</span>
              </div>
            </div>
          </div>

          {/* Social Links with Custom Brand Colors */}
          <div className="flex items-center gap-3">
            <a
              href={director.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-cyan-900 hover:to-blue-900 border border-slate-700 shadow-md transition-all text-xs font-mono font-bold cursor-pointer"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <a
              href={director.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white hover:from-blue-800 hover:to-indigo-800 border border-blue-500 shadow-md transition-all text-xs font-mono font-bold cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4 text-white" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Clean Form (7 Cols) with Glowing Inputs and Vibrant Gradient Submit */}
        <div className="md:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 rounded-2xl border border-cyan-300 shadow-md space-y-4 text-xs font-mono"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <div>
              <label className="block text-slate-800 font-bold mb-1.5">Your Name:</label>
              <input
                type="text"
                required
                placeholder="Alex Mercer"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 font-medium transition-all outline-hidden shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-slate-800 font-bold mb-1.5">Your Email:</label>
              <input
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 font-medium transition-all outline-hidden shadow-2xs"
              />
            </div>

            <div>
              <label className="block text-slate-800 font-bold mb-1.5">Message:</label>
              <textarea
                rows={4}
                required
                placeholder="Hi Krishna, I'd like to discuss a Software Engineer or AI/ML opportunity..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 font-medium transition-all outline-hidden shadow-2xs resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-700 hover:to-indigo-700 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-600/30 hover:scale-[1.01]"
            >
              <Send className="w-4 h-4 text-cyan-200" />
              <span>Send Message</span>
            </button>

            {sent && (
              <div className="flex items-center gap-2 text-emerald-800 bg-emerald-100/80 p-3 rounded-xl border border-emerald-300 text-xs mt-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Email client opened! Feel free to hit send.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
