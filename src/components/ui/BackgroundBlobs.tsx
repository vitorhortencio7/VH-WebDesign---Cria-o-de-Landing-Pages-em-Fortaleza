import React from 'react';
import { useTheme } from '@/src/context/ThemeContext';

export const BackgroundBlobs = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Blobs */}
      <div className={`absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-vh-purple/30 rounded-full filter blur-[120px] animate-pulse transition-all duration-700 ${isDark ? 'mix-blend-screen opacity-70' : 'mix-blend-multiply opacity-20'}`}></div>
      <div className={`absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] bg-vh-red/20 rounded-full filter blur-[100px] transition-all duration-700 ${isDark ? 'mix-blend-screen opacity-60' : 'mix-blend-multiply opacity-15'}`}></div>
      <div className={`absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] bg-vh-cyan/20 rounded-full filter blur-[100px] transition-all duration-700 ${isDark ? 'mix-blend-screen opacity-50' : 'mix-blend-multiply opacity-15'}`}></div>

      {/* Lens Flare Effect */}
      <div className={`absolute top-[5%] left-[10%] w-[1px] h-[1px] shadow-[0_0_150px_60px_rgba(255,255,255,0.4)] bg-white z-10 ${isDark ? 'opacity-40' : 'opacity-10'}`}></div>
      
      {/* Light Streaks */}
      <div className={`absolute top-[5%] left-0 w-[100vw] h-[1px] bg-gradient-to-r from-transparent via-vh-cyan/20 to-transparent rotate-[-15deg] blur-[2px] ${isDark ? 'opacity-30' : 'opacity-10'}`}></div>
      
      {/* Flare Ghosts (Reflections) */}
      <div className={`absolute top-[15%] left-[25%] w-[8vw] h-[8vw] rounded-full bg-vh-cyan/10 border border-vh-cyan/20 blur-[4px] ${isDark ? 'mix-blend-screen opacity-40' : 'mix-blend-multiply opacity-10'}`}></div>
    </div>
  );
};
