import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CTAButton } from '@/src/components/ui/CTAButton';
import { ThemeToggle } from '@/src/components/layout/ThemeToggle';
import { useTheme } from '@/src/context/ThemeContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isExpanded = isScrolled || isHovered;

  return (
    <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
      <motion.nav 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={false}
        animate={{
          width: isExpanded ? '100%' : 'auto',
          minWidth: isExpanded ? '100%' : '300px',
          maxWidth: isExpanded ? '100%' : '90%',
          borderRadius: isExpanded ? '0px' : '40px',
          top: isExpanded ? '-24px' : '0px',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className={`relative transition-all duration-500 overflow-hidden ${
          isExpanded 
            ? `${isDark ? 'bg-vh-dark/80 border-white/5' : 'bg-white/90 border-vh-dark/5'} backdrop-blur-xl border-b py-5` 
            : `${isDark ? 'bg-vh-dark/60 border-white/10' : 'bg-white/70 border-vh-dark/10'} backdrop-blur-md border px-6 py-2.5 shadow-lg ${!isDark && 'shadow-vh-dark/5'}`
        }`}
      >
        <div className={`flex items-center gap-6 justify-between px-6 ${isExpanded ? 'max-w-7xl mx-auto md:px-12 w-full' : 'w-full'}`}>
          <div className="flex items-center">
              <motion.a 
                href="/"
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 shrink-0"
              >
                <img 
                  src="/wireframe - 2.jpeg" 
                  alt="VH Logo" 
                  className="h-7 w-auto rounded-md shadow-sm"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className={`font-heading font-black text-sm tracking-tight hidden sm:block ${isDark ? 'text-white' : 'text-vh-dark'}`}>Vitor Hortêncio</span>
              </motion.a>
          </div>
          
          <div className={`hidden md:flex items-center gap-6 font-mono text-[10px] uppercase tracking-widest font-black transition-opacity ${!isExpanded && 'opacity-0 pointer-events-none md:flex'} ${isDark ? 'text-vh-light/60' : 'text-vh-dark/60'}`}>
              <a href="#proposito" className="hover:text-vh-cyan transition-colors">Propósito</a>
              <a href="#portfolio" className="hover:text-vh-cyan transition-colors">Portfólio</a>
              <a href="#solucao" className="hover:text-vh-cyan transition-colors">Método</a>
          </div>
  
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <CTAButton text="Conversar" size="sm" showIcon={false} className="!text-[10px] !px-4 !py-2" />
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
