import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Bot, Heart } from 'lucide-react';

export const CleanFooter: React.FC = () => {
  const { director } = PORTFOLIO_DATA;

  return (
    <footer className="py-8 px-4 border-t border-cyan-200/90 text-center text-xs font-mono bg-gradient-to-r from-cyan-100/40 via-blue-50/50 to-indigo-100/40 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-700 font-bold">
          <Bot className="w-4 h-4 text-cyan-600 animate-pulse" />
          <span>© {new Date().getFullYear()} {director.name}. Autonomous AI Systems.</span>
        </div>
        <div className="flex items-center gap-4 text-slate-700 font-bold">
          <a
            href={director.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-700 transition-colors"
          >
            GitHub
          </a>
          <span className="text-cyan-300">•</span>
          <a
            href={director.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-cyan-300">•</span>
          <a
            href="/krishna_resume.pdf"
            download="Krishna_Resume.pdf"
            className="text-cyan-800 hover:text-cyan-950 underline font-extrabold"
          >
            Resume (PDF)
          </a>
          <span className="text-cyan-300">•</span>
          <a
            href={`mailto:${director.email}`}
            className="hover:text-indigo-700 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
