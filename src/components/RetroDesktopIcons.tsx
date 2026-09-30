import React from 'react';
import { Terminal, Folder, Cpu, Award, Mail, FileText, Trash2, Monitor } from 'lucide-react';
import { cyberSound } from '../utils/soundEffects';

interface RetroDesktopIconsProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const RetroDesktopIcons: React.FC<RetroDesktopIconsProps> = ({
  onNavigate,
  onOpenResume
}) => {
  const icons = [
    {
      id: 'my-computer',
      label: 'My Computer',
      icon: Monitor,
      action: () => onNavigate('hero')
    },
    {
      id: 'projects',
      label: 'Projects.exe',
      icon: Folder,
      action: () => onNavigate('projects')
    },
    {
      id: 'skills',
      label: 'Skills.cpl',
      icon: Cpu,
      action: () => onNavigate('skills')
    },
    {
      id: 'credentials',
      label: 'Degrees.mui',
      icon: Award,
      action: () => onNavigate('certifications')
    },
    {
      id: 'modem',
      label: 'Modem.com',
      icon: Mail,
      action: () => onNavigate('contact')
    },
    {
      id: 'resume',
      label: 'Resume.pdf',
      icon: FileText,
      action: onOpenResume
    },
    {
      id: 'recycle-bin',
      label: 'Recycle Bin',
      icon: Trash2,
      action: () => {
        cyberSound.play90sFloppy();
        alert('[RECYCLE_BIN] 0 Bytes in Wastebasket. All neural pipelines intact!');
      }
    }
  ];

  return (
    <div className="fixed top-16 left-3 z-20 hidden md:flex flex-col gap-4 select-none pointer-events-auto">
      {icons.map((item) => {
        const IconComp = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => {
              cyberSound.play90sKeyClick();
              item.action();
            }}
            className="group flex flex-col items-center gap-1 w-20 p-1.5 focus:bg-white/20 active:translate-y-[1px] transition-all"
            title={`Launch ${item.label}`}
          >
            <div className="w-10 h-10 bg-[#161616] border border-[#666] flex items-center justify-center shadow-[inset_1px_1px_0px_#fff,inset_-1px_-1px_0px_#000,2px_2px_0px_#000] group-hover:border-white transition-colors">
              <IconComp className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono text-[10px] text-white text-center leading-tight drop-shadow-[0_1px_3px_rgba(0,0,0,1)] bg-black/60 px-1 py-0.5 border border-transparent group-hover:border-white/40">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
