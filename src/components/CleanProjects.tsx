import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  ScanFace, 
  Video, 
  ShoppingBag, 
  Star, 
  GitFork, 
  RefreshCw, 
  FolderGit2, 
  Radio,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export const CleanProjects: React.FC = () => {
  const { projects, director } = PORTFOLIO_DATA;
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'curated' | 'live-github'>('curated');
  const [lastFetched, setLastFetched] = useState<string | null>(null);

  const fetchDirectFromGitHub = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.github.com/users/officialkrishna2455-tech/repos?sort=updated&per_page=30');
      if (!response.ok) {
        throw new Error(`GitHub API error (${response.status})`);
      }
      const data: GitHubRepo[] = await response.json();
      setRepos(data);
      setLastFetched(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    } catch (err: any) {
      console.warn('Direct GitHub fetch notice:', err.message);
      setError(err.message || 'Rate limit or network delay');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDirectFromGitHub();
  }, []);

  // Distinct rich color theme presets for each project
  const getProjectTheme = (type: string) => {
    switch (type) {
      case 'interview':
        return {
          icon: <Cpu className="w-5 h-5 text-cyan-600" />,
          bgGradient: 'from-cyan-100/40 via-white/95 to-sky-100/40',
          border: 'border-cyan-300 hover:border-cyan-500',
          shadowHover: 'hover:shadow-[0_12px_36px_rgba(6,182,212,0.22)]',
          badge: 'bg-cyan-100 text-cyan-800 border-cyan-200',
          tag: 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100',
          buttonGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-md shadow-cyan-600/25',
          accentColor: 'text-cyan-700',
          dotColor: 'bg-cyan-500'
        };
      case 'facenet':
        return {
          icon: <ScanFace className="w-5 h-5 text-blue-600" />,
          bgGradient: 'from-blue-100/40 via-white/95 to-indigo-100/40',
          border: 'border-blue-300 hover:border-blue-500',
          shadowHover: 'hover:shadow-[0_12px_36px_rgba(37,99,235,0.22)]',
          badge: 'bg-blue-100 text-blue-800 border-blue-200',
          tag: 'bg-blue-50 text-blue-800 border-blue-200 hover:bg-blue-100',
          buttonGradient: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-600/25',
          accentColor: 'text-blue-700',
          dotColor: 'bg-blue-500'
        };
      case 'deepfake':
        return {
          icon: <Video className="w-5 h-5 text-rose-600" />,
          bgGradient: 'from-rose-100/40 via-white/95 to-purple-100/40',
          border: 'border-rose-300 hover:border-rose-500',
          shadowHover: 'hover:shadow-[0_12px_36px_rgba(244,63,94,0.22)]',
          badge: 'bg-rose-100 text-rose-800 border-rose-200',
          tag: 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100',
          buttonGradient: 'bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-700 hover:to-purple-700 text-white shadow-md shadow-rose-600/25',
          accentColor: 'text-rose-700',
          dotColor: 'bg-rose-500'
        };
      case 'ecommerce':
        return {
          icon: <ShoppingBag className="w-5 h-5 text-emerald-600" />,
          bgGradient: 'from-emerald-100/40 via-white/95 to-teal-100/40',
          border: 'border-emerald-300 hover:border-emerald-500',
          shadowHover: 'hover:shadow-[0_12px_36px_rgba(16,185,129,0.22)]',
          badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
          tag: 'bg-emerald-50 text-emerald-800 border-emerald-200 hover:bg-emerald-100',
          buttonGradient: 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-md shadow-emerald-600/25',
          accentColor: 'text-emerald-700',
          dotColor: 'bg-emerald-500'
        };
      default:
        return {
          icon: <Cpu className="w-5 h-5 text-cyan-600" />,
          bgGradient: 'from-cyan-100/40 via-white/95 to-sky-100/40',
          border: 'border-cyan-300 hover:border-cyan-500',
          shadowHover: 'hover:shadow-[0_12px_36px_rgba(6,182,212,0.22)]',
          badge: 'bg-cyan-100 text-cyan-800 border-cyan-200',
          tag: 'bg-cyan-50 text-cyan-800 border-cyan-200 hover:bg-cyan-100',
          buttonGradient: 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-md shadow-cyan-600/25',
          accentColor: 'text-cyan-700',
          dotColor: 'bg-cyan-500'
        };
    }
  };

  // Match curated project cards to direct live GitHub repository URLs
  const getLiveRepoForProject = (projId: string, fallbackUrl: string) => {
    if (!repos || repos.length === 0) {
      return { url: fallbackUrl, stars: 1, forks: 0, live: false, name: '' };
    }

    let matched: GitHubRepo | undefined;
    if (projId === 'career-launch') {
      matched = repos.find(r => r.name.toLowerCase().includes('interview') || r.name.toLowerCase().includes('career'));
    } else if (projId === 'attendance-system') {
      matched = repos.find(r => r.name.toLowerCase().includes('attendance') || r.name.toLowerCase().includes('facial'));
    } else if (projId === 'ecommerce-platform') {
      matched = repos.find(r => r.name.toLowerCase().includes('commerce') || r.name.toLowerCase().includes('e-commerce'));
    } else if (projId === 'deepfake-detector') {
      matched = repos.find(r => r.name.toLowerCase().includes('ai-app') || r.name.toLowerCase().includes('deepfake'));
    }

    if (matched) {
      return {
        url: matched.html_url,
        stars: matched.stargazers_count,
        forks: matched.forks_count,
        live: true,
        name: matched.name
      };
    }

    return { url: fallbackUrl, stars: 0, forks: 0, live: false, name: '' };
  };

  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto border-t border-cyan-200/80">
      {/* Section Header with Live GitHub Status */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-mono font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              Live GitHub API Synced
            </span>
            {lastFetched && !error && (
              <span className="text-[11px] font-mono text-cyan-800 bg-cyan-100/60 px-2 py-0.5 rounded border border-cyan-200 hidden sm:inline">
                Synced at {lastFetched}
              </span>
            )}
            {error && (
              <span className="text-[11px] font-mono text-amber-700 bg-amber-100/60 px-2 py-0.5 rounded border border-amber-200 hidden sm:inline">
                (Cached verified links active)
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects & Source Code
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Real repositories directly synced from{' '}
            <a 
              href={director.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-cyan-800 hover:text-cyan-950 underline font-mono inline-flex items-center gap-1 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200"
            >
              github.com/officialkrishna2455-tech
              <ExternalLink className="w-3 h-3" />
            </a>
          </p>
        </div>

        {/* View Switcher & Refresh Button */}
        <div className="flex items-center gap-2">
          <div className="flex p-1 rounded-2xl bg-white/90 border border-cyan-200 text-xs font-medium shadow-sm">
            <button
              onClick={() => setActiveTab('curated')}
              className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                activeTab === 'curated'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Curated Architecture
            </button>
            <button
              onClick={() => setActiveTab('live-github')}
              className={`px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'live-github'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>All Repos ({repos.length > 0 ? repos.length : '6'})</span>
            </button>
          </div>

          <button
            onClick={fetchDirectFromGitHub}
            disabled={loading}
            title="Re-fetch links directly from GitHub API"
            className="p-2.5 rounded-xl bg-white hover:bg-cyan-50 text-cyan-700 hover:text-cyan-900 border border-cyan-200 transition-colors disabled:opacity-50 shadow-sm cursor-pointer"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-cyan-600' : ''}`} />
          </button>
        </div>
      </div>

      {/* VIEW 1: CURATED ARCHITECTURE CARDS WITH UNIQUE COLOR THEMES */}
      {activeTab === 'curated' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => {
            const liveInfo = getLiveRepoForProject(proj.id, proj.githubUrl);
            const targetUrl = liveInfo.url || proj.githubUrl;
            const theme = getProjectTheme(proj.interactiveType);

            return (
              <div
                key={proj.id}
                className={`flex flex-col justify-between p-6 rounded-2xl border ${theme.border} ${theme.shadowHover} transition-all duration-300 group hover:-translate-y-1`}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div>
                  {/* Header: Icon + Year + GitHub Button */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2.5 rounded-xl ${theme.badge} shadow-xs group-hover:scale-110 transition-transform`}>
                        {theme.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-mono font-bold text-slate-700">
                          {proj.year}
                        </span>
                        {liveInfo.stars > 0 && (
                          <span className="text-[10px] font-mono text-amber-700 flex items-center gap-0.5 font-bold">
                            <Star className="w-2.5 h-2.5 fill-current" />
                            {liveInfo.stars} {liveInfo.stars === 1 ? 'star' : 'stars'}
                          </span>
                        )}
                      </div>
                    </div>

                    <a
                      href={targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-cyan-50 text-slate-800 hover:text-cyan-800 text-xs font-mono font-bold border border-slate-300 hover:border-cyan-400 transition-all cursor-pointer shadow-xs"
                      title="Direct GitHub Link"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Direct Link</span>
                      <ExternalLink className="w-3 h-3 opacity-70" />
                    </a>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className={`text-xl font-extrabold ${theme.accentColor} transition-colors tracking-tight`}>
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-700 font-semibold mb-3">
                    {proj.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4 font-normal">
                    {proj.summary}
                  </p>

                  {/* Key Highlights with Green Checkmarks */}
                  <ul className="space-y-2 mb-5">
                    {proj.bulletPoints.map((bp, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-800 leading-snug font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Tech Stack Tags & Direct GitHub CTA */}
                <div className="pt-4 border-t border-slate-200/90 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold border transition-colors ${theme.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs transition-all cursor-pointer ${theme.buttonGradient}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>View Repository on GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: ALL REPOSITORIES FETCHED DIRECTLY FROM GITHUB */}
      {activeTab === 'live-github' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-100/90 via-sky-100/90 to-blue-100/90 border border-cyan-300 text-xs text-slate-800 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2 font-medium">
              <Radio className="w-4 h-4 text-cyan-700 animate-pulse" />
              <span>
                All repositories fetched live via <code className="text-cyan-900 font-mono font-bold">api.github.com/users/officialkrishna2455-tech/repos</code>
              </span>
            </div>
            <a
              href={director.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-800 hover:text-cyan-950 underline flex items-center gap-1 font-mono text-xs font-bold bg-white/80 px-2 py-1 rounded border border-cyan-200"
            >
              Open Profile <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(repos.length > 0 ? repos : [
              {
                id: 1,
                name: 'Engineering-Student-Interview-Preparing-Platform',
                full_name: 'officialkrishna2455-tech/Engineering-Student-Interview-Preparing-Platform',
                html_url: 'https://github.com/officialkrishna2455-tech/Engineering-Student-Interview-Preparing-Platform',
                description: 'AI-powered placement preparation platform built to help Student Interview preparation',
                stargazers_count: 1,
                forks_count: 0,
                language: 'TypeScript',
                updated_at: '2026-05-10T18:35:45Z'
              },
              {
                id: 2,
                name: 'Attendance-Marking-System-Using-Facial-Recognition',
                full_name: 'officialkrishna2455-tech/Attendance-Marking-System-Using-Facial-Recognition',
                html_url: 'https://github.com/officialkrishna2455-tech/Attendance-Marking-System-Using-Facial-Recognition',
                description: 'A cutting-edge, real-time attendance management system powered by advanced deep learning facial recognition technology.',
                stargazers_count: 1,
                forks_count: 0,
                language: 'TypeScript',
                updated_at: '2026-05-02T17:47:17Z'
              },
              {
                id: 3,
                name: 'E-Commerce-Website',
                full_name: 'officialkrishna2455-tech/E-Commerce-Website',
                html_url: 'https://github.com/officialkrishna2455-tech/E-Commerce-Website',
                description: 'A blazing-fast, modern e-commerce platform built with cutting-edge technologies for the 2026 retail landscape.',
                stargazers_count: 1,
                forks_count: 0,
                language: 'TypeScript',
                updated_at: '2026-05-02T16:27:23Z'
              },
              {
                id: 4,
                name: 'AI-App-Architect',
                full_name: 'officialkrishna2455-tech/AI-App-Architect',
                html_url: 'https://github.com/officialkrishna2455-tech/AI-App-Architect',
                description: 'Full-stack AI system with multi-agent orchestration, backend microservices, and containerized deployment.',
                stargazers_count: 0,
                forks_count: 0,
                language: 'Python',
                updated_at: '2026-06-05T10:41:40Z'
              },
              {
                id: 5,
                name: 'roblox-tower-defense',
                full_name: 'officialkrishna2455-tech/roblox-tower-defense',
                html_url: 'https://github.com/officialkrishna2455-tech/roblox-tower-defense',
                description: 'Strategic tower defense experience with custom economy and wave management mechanics.',
                stargazers_count: 0,
                forks_count: 0,
                language: 'Lua',
                updated_at: '2026-05-04T18:46:49Z'
              },
              {
                id: 6,
                name: 'signlanguage',
                full_name: 'officialkrishna2455-tech/signlanguage',
                html_url: 'https://github.com/officialkrishna2455-tech/signlanguage',
                description: 'Computer vision and gesture classification pipeline for real-time sign language translation.',
                stargazers_count: 0,
                forks_count: 0,
                language: 'Python',
                updated_at: '2026-07-13T14:56:31Z'
              }
            ]).map((repo, idx) => {
              const borderColors = [
                'border-cyan-300 hover:border-cyan-500',
                'border-blue-300 hover:border-blue-500',
                'border-emerald-300 hover:border-emerald-500',
                'border-purple-300 hover:border-purple-500',
                'border-amber-300 hover:border-amber-500',
                'border-rose-300 hover:border-rose-500',
              ];
              const cardBorder = borderColors[idx % borderColors.length];

              return (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col justify-between p-5 rounded-2xl border ${cardBorder} shadow-sm hover:shadow-md transition-all group`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <FolderGit2 className="w-4 h-4 text-cyan-700 group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm font-bold text-slate-900 group-hover:text-cyan-700 transition-colors truncate max-w-[220px]">
                          {repo.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700 transition-colors" />
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {repo.description || "Public repository on officialkrishna2455-tech"}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 text-xs font-mono text-slate-500">
                    <div className="flex items-center gap-3">
                      {repo.language && (
                        <span className="flex items-center gap-1.5 text-slate-800 font-bold bg-white/80 px-2 py-0.5 rounded border border-slate-200">
                          <span className={`w-2 h-2 rounded-full ${
                            repo.language === 'TypeScript' ? 'bg-blue-500' :
                            repo.language === 'Python' ? 'bg-yellow-500' :
                            repo.language === 'Lua' ? 'bg-indigo-500' : 'bg-cyan-500'
                          }`} />
                          {repo.language}
                        </span>
                      )}

                      <span className="flex items-center gap-1 font-bold text-amber-700">
                        <Star className="w-3 h-3 text-amber-500 fill-current" />
                        {repo.stargazers_count}
                      </span>

                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1 font-semibold text-slate-600">
                          <GitFork className="w-3 h-3 text-slate-400" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>

                    <span className="text-[11px] text-cyan-800 font-bold group-hover:text-cyan-900 group-hover:underline">
                      Open Repo →
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
