import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { RetroWindow } from './RetroWindow';
import { Mail, Phone, MapPin, Send, Copy, Check, Radio, Terminal, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { cyberSound } from '../utils/soundEffects';

interface Retro90sContactProps {
  onOpenResume: () => void;
}

export const Retro90sContact: React.FC<Retro90sContactProps> = ({ onOpenResume }) => {
  const { director } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [transmitted, setTransmitted] = useState(false);
  const [formData, setFormData] = useState({
    sender: '',
    email: '',
    subject: 'INQUIRY: Full-Stack / AI Engineer Opportunity',
    message: ''
  });

  const handleCopyEmail = () => {
    cyberSound.play90sKeyClick();
    navigator.clipboard.writeText(director.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    cyberSound.play90sKeyClick();
    navigator.clipboard.writeText(director.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSendPacket = (e: React.FormEvent) => {
    e.preventDefault();
    cyberSound.play90sModem();
    setTransmitted(true);
    setTimeout(() => setTransmitted(false), 4500);
  };

  return (
    <section id="contact" className="relative z-10 py-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <RetroWindow
        id="contact-window"
        title="Contact Krishna — AI/ML & Software Engineer"
        icon="terminal"
        version="Available Now"
        statusBarText="Status: Available for Full-Time Roles | Email: officialkrishna2455@gmail.com"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#141414] border-2 border-[#666] p-6 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]">
              <div className="flex items-center gap-2 font-mono text-sm font-black text-white border-b border-[#333] pb-2.5 mb-4">
                <Radio className="w-5 h-5 text-white" />
                <span>Contact Information</span>
              </div>

              <p className="font-mono text-xs sm:text-sm text-[#f0f0f0] font-medium leading-relaxed mb-5">
                Available for full-time Software Engineer, AI/ML Engineer, and Intelligent Systems roles. Connect via direct phone or email.
              </p>

              <div className="space-y-3.5 font-mono">
                {/* Email Address */}
                <div className="bg-[#0b0b0b] border-2 border-[#444] p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-white shrink-0" />
                    <span className="text-white text-xs sm:text-sm truncate font-black">{director.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 bg-[#333] text-white hover:bg-white hover:text-black border border-white px-2.5 py-1 text-xs font-black active:translate-y-[1px]"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Telephone Line */}
                <div className="bg-[#0b0b0b] border-2 border-[#444] p-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Phone className="w-4 h-4 text-white shrink-0" />
                    <span className="text-white text-xs sm:text-sm truncate font-black">{director.phone}</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="shrink-0 bg-[#333] text-white hover:bg-white hover:text-black border border-white px-2.5 py-1 text-xs font-black active:translate-y-[1px]"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="bg-[#0b0b0b] border-2 border-[#444] p-3 flex items-center gap-2.5 text-white text-xs sm:text-sm font-bold">
                  <MapPin className="w-4 h-4 text-white shrink-0" />
                  <span className="truncate">{director.location}</span>
                </div>
              </div>

              {/* Social Channels in 90s Bevel Button Style */}
              <div className="grid grid-cols-2 gap-3 mt-5 pt-4 border-t border-[#333]">
                <a
                  href={director.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.play90sKeyClick()}
                  className="font-mono text-xs sm:text-sm font-black p-2.5 bg-[#222] text-white hover:bg-white hover:text-black border-2 border-white flex items-center justify-center gap-2 text-center"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={director.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.play90sKeyClick()}
                  className="font-mono text-xs sm:text-sm font-black p-2.5 bg-[#222] text-white hover:bg-white hover:text-black border-2 border-white flex items-center justify-center gap-2 text-center"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
              </div>

              {/* Resume Trigger */}
              <button
                onClick={() => {
                  cyberSound.play90sKeyClick();
                  onOpenResume();
                }}
                className="w-full mt-4 font-mono text-sm font-black py-3 bg-white text-black hover:bg-[#ddd] border-2 border-black flex items-center justify-center gap-2"
                style={{
                  boxShadow: 'inset 1.5px 1.5px 0px #fff, inset -1.5px -1.5px 0px #888, 3px 3px 0px #000'
                }}
              >
                <FileText className="w-4 h-4 text-black" />
                <span>[ View Official Resume (PDF) ]</span>
              </button>
            </div>
          </div>

          {/* Right Column: 90s Electronic Mail Composer Form */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-[#111111] border-2 border-[#555] p-5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]">
              <div className="flex items-center justify-between border-b border-[#333] pb-2 mb-4 font-mono text-xs text-[#aaa]">
                <span className="font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-white" />
                  <span>Send a Direct Message</span>
                </span>
                <span className="text-[10px] bg-black text-white px-2 py-0.5 border border-[#444]">
                  Quick Form
                </span>
              </div>

              {transmitted ? (
                <div className="bg-[#050505] border-2 border-white p-6 text-center font-mono space-y-3">
                  <div className="inline-block p-2 bg-white text-black">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-white font-extrabold text-base tracking-widest">
                    MESSAGE SENT SUCCESSFULLY!
                  </h4>
                  <p className="text-xs text-[#bbb] max-w-md mx-auto">
                    Thank you for reaching out! Krishna has received your message and will respond promptly.
                  </p>
                  <button
                    onClick={() => setTransmitted(false)}
                    className="font-mono text-xs font-bold px-4 py-1.5 bg-[#222] text-white border border-[#666] hover:bg-white hover:text-black"
                  >
                    [ Send Another Message ]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendPacket} className="space-y-4 font-mono">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-black text-white uppercase block mb-1.5">
                        Your Name:
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lead Technical Recruiter"
                        value={formData.sender}
                        onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                        className="w-full bg-black border-2 border-white/60 text-white px-3.5 py-2.5 text-sm focus:border-white focus:outline-none placeholder:text-[#777]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-black text-white uppercase block mb-1.5">
                        Your Email Address:
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black border-2 border-white/60 text-white px-3.5 py-2.5 text-sm focus:border-white focus:outline-none placeholder:text-[#777]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-black text-white uppercase block mb-1.5">
                      Subject:
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-black border-2 border-white/60 text-white px-3.5 py-2.5 text-sm focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black text-white uppercase block mb-1.5">
                      Your Message:
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your message or project inquiries here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black border-2 border-white/60 text-white px-3.5 py-2.5 text-sm focus:border-white focus:outline-none resize-none placeholder:text-[#777]"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-[#d1d5db] font-bold">
                      Direct email notifications enabled
                    </span>

                    <button
                      type="submit"
                      className="font-mono text-sm font-black px-6 py-3 bg-white text-black hover:bg-[#ddd] border-2 border-white flex items-center gap-2.5 shadow-[3px_3px_0px_#444] active:translate-y-[1px]"
                    >
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>[ Send Message ]</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </RetroWindow>
    </section>
  );
};
