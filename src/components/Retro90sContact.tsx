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
        title="C:\COMMUNICATIONS\MODEM_TERMINAL.COM"
        icon="terminal"
        version="HAYES_AT v9.6"
        statusBarText="CARRIER DETECT: 56,600 BPS | PROTOCOL: V.90 | HANDSHAKE: ACK"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="bg-[#121212] border-2 border-[#555] p-5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-white border-b border-[#333] pb-2 mb-3">
                <Radio className="w-4 h-4 text-white" />
                <span>OPERATOR_COORDINATES</span>
              </div>

              <p className="font-mono text-xs text-[#aaa] leading-relaxed mb-4">
                Available for full-time Software Engineer, AI/ML Engineer, and Intelligent Systems roles. Connect via direct carrier or electronic mail.
              </p>

              <div className="space-y-3 font-mono text-xs">
                {/* Email Address */}
                <div className="bg-[#0b0b0b] border border-[#2b2b2b] p-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Mail className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="text-white truncate font-bold">{director.email}</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 bg-[#252525] text-white hover:bg-white hover:text-black border border-[#555] px-2 py-1 text-[10px] font-bold active:translate-y-[1px]"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* Telephone Line */}
                <div className="bg-[#0b0b0b] border border-[#2b2b2b] p-2.5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 overflow-hidden">
                    <Phone className="w-3.5 h-3.5 text-white shrink-0" />
                    <span className="text-white truncate font-bold">{director.phone}</span>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="shrink-0 bg-[#252525] text-white hover:bg-white hover:text-black border border-[#555] px-2 py-1 text-[10px] font-bold active:translate-y-[1px]"
                  >
                    {copiedPhone ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* Location */}
                <div className="bg-[#0b0b0b] border border-[#2b2b2b] p-2.5 flex items-center gap-2 text-[#ccc]">
                  <MapPin className="w-3.5 h-3.5 text-white shrink-0" />
                  <span className="truncate">{director.location}</span>
                </div>
              </div>

              {/* Social Channels in 90s Bevel Button Style */}
              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-[#262626]">
                <a
                  href={director.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.play90sKeyClick()}
                  className="font-mono text-xs font-bold p-2 bg-[#1f1f1f] text-white hover:bg-white hover:text-black border border-[#555] flex items-center justify-center gap-2 text-center"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>

                <a
                  href={director.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => cyberSound.play90sKeyClick()}
                  className="font-mono text-xs font-bold p-2 bg-[#1f1f1f] text-white hover:bg-white hover:text-black border border-[#555] flex items-center justify-center gap-2 text-center"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
              </div>

              {/* Resume Trigger */}
              <button
                onClick={() => {
                  cyberSound.play90sKeyClick();
                  onOpenResume();
                }}
                className="w-full mt-3 font-mono text-xs font-bold py-2 bg-white text-black hover:bg-[#ddd] border border-black flex items-center justify-center gap-2"
                style={{
                  boxShadow: 'inset 1px 1px 0px #fff, inset -1px -1px 0px #888, 2px 2px 0px #000'
                }}
              >
                <FileText className="w-4 h-4 text-black" />
                <span>[ OPEN_OFFICIAL_RESUME.PDF ]</span>
              </button>
            </div>
          </div>

          {/* Right Column: 90s Electronic Mail Composer Form */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-[#111111] border-2 border-[#555] p-5 shadow-[inset_1.5px_1.5px_0px_#fff,inset_-1.5px_-1.5px_0px_#000]">
              <div className="flex items-center justify-between border-b border-[#333] pb-2 mb-4 font-mono text-xs text-[#aaa]">
                <span className="font-bold text-white flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-white" />
                  <span>ELECTRONIC_DISPATCH_CLIENT</span>
                </span>
                <span className="text-[10px] bg-black text-white px-2 py-0.5 border border-[#444]">
                  ENCRYPT: RSA-1024
                </span>
              </div>

              {transmitted ? (
                <div className="bg-[#050505] border-2 border-white p-6 text-center font-mono space-y-3">
                  <div className="inline-block p-2 bg-white text-black">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-white font-extrabold text-base tracking-widest">
                    PACKET TRANSMISSION CONFIRMED!
                  </h4>
                  <p className="text-xs text-[#bbb] max-w-md mx-auto">
                    Data packets dispatched successfully over port 25. Operator Krishna has received your communication signal and will respond promptly.
                  </p>
                  <button
                    onClick={() => setTransmitted(false)}
                    className="font-mono text-xs font-bold px-4 py-1.5 bg-[#222] text-white border border-[#666] hover:bg-white hover:text-black"
                  >
                    [ COMPOSE_ANOTHER ]
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSendPacket} className="space-y-3.5 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-[#888] uppercase block mb-1">
                        SENDER_IDENTIFIER (NAME):
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lead Technical Recruiter"
                        value={formData.sender}
                        onChange={(e) => setFormData({ ...formData, sender: e.target.value })}
                        className="w-full bg-[#080808] border border-[#444] text-white px-3 py-2 text-xs focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-[#888] uppercase block mb-1">
                        RETURN_ROUTING (EMAIL):
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="recruiter@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#080808] border border-[#444] text-white px-3 py-2 text-xs focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-[#888] uppercase block mb-1">
                      PACKET_HEADER (SUBJECT):
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#080808] border border-[#444] text-white px-3 py-2 text-xs focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-[#888] uppercase block mb-1">
                      MESSAGE_PAYLOAD:
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Write your transmission or project inquiries here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#080808] border border-[#444] text-white px-3 py-2 text-xs focus:border-white focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-[#666]">
                      PRESS SEND TO DISPATCH PACKET
                    </span>

                    <button
                      type="submit"
                      className="font-mono text-xs font-bold px-5 py-2.5 bg-white text-black hover:bg-[#ccc] border-2 border-white flex items-center gap-2 shadow-[2px_2px_0px_#444] active:translate-y-[1px]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>[ TRANSMIT_PACKET.SEND ]</span>
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
