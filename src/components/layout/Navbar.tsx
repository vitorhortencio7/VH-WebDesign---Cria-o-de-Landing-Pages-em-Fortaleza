import React from 'react';
import { ThemeToggle } from '@/src/components/layout/ThemeToggle';
import { useTheme } from '@/src/context/ThemeContext';
import { WHATSAPP_LINK } from '@/src/constants';

export const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Micro Status Bar */}
      <div className={`w-full py-2.5 flex items-center justify-center border-b font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${isDark ? 'bg-black/40 border-white/5 text-vh-lime' : 'bg-amber-500/10 border-black/5 text-[#1b502c]'}`}>
        <span className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vh-lime opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-vh-lime"></span>
          </span>
          Disponível para novos projetos • Agenda Aberta
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 md:py-8 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="/" className="group flex items-center gap-2">
          <img 
            src="https://i.ibb.co/B5QnqfTc/Logo-VH.png" 
            alt="Logo VH" 
            className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <span className={`font-heading font-black text-lg sm:text-xl tracking-tight transition-colors hidden sm:inline-block ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            <span className="text-vh-purple dark:text-purple-400">V</span>itor <span className="text-vh-lime dark:text-lime-400">H</span>ortêncio<span className="text-vh-orange">.</span>
          </span>
        </a>

        {/* Center: Links */}
        <div className={`hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          <a href="#proposito" className="hover:text-vh-cyan transition-colors duration-200">Quem Sou</a>
          <a href="#portfolio" className="hover:text-vh-cyan transition-colors duration-200">Portfólio</a>
          <a href="#solucao" className="hover:text-vh-cyan transition-colors duration-200">Método</a>
          <a href="#faq" className="hover:text-vh-cyan transition-colors duration-200">Faq</a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-5 py-2.5 text-xs font-bold rounded-full transition-all uppercase tracking-wider duration-300 ${
              isDark 
                ? 'bg-white text-zinc-950 hover:bg-zinc-200' 
                : 'bg-zinc-900 text-white hover:bg-zinc-800'
            }`}
          >
            Conversar
          </a>
        </div>
      </nav>
    </header>
  );
};
