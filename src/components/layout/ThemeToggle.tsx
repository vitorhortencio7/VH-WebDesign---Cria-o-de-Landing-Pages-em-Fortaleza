import React from 'react';
import { useTheme } from '@/src/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`p-2 rounded-full border transition-all duration-300 ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-vh-dark/5 border-vh-dark/10'}`}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-vh-cyan" />
      ) : (
        <Moon size={20} className="text-vh-purple" />
      )}
    </motion.button>
  );
};
