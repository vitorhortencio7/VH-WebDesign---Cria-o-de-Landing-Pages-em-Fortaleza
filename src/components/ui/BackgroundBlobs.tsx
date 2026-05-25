import React, { useEffect } from 'react';
import { useTheme } from '@/src/context/ThemeContext';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export const BackgroundBlobs = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid movement
  const springConfig = { damping: 55, stiffness: 140, mass: 0.9 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Slower/looser spring for secondary reactive layer
  const lagX = useSpring(mouseX, { damping: 75, stiffness: 90, mass: 1.2 });
  const lagY = useSpring(mouseY, { damping: 75, stiffness: 90, mass: 1.2 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Start centered
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Subtle interactive parallax for static blobs
  const parallaxX = useTransform(smoothX, (x) => {
    if (typeof window === 'undefined') return 0;
    return (x / window.innerWidth - 0.5) * 45;
  });
  const parallaxY = useTransform(smoothY, (y) => {
    if (typeof window === 'undefined') return 0;
    return (y / window.innerHeight - 0.5) * 45;
  });

  const inverseParallaxX = useTransform(smoothX, (x) => {
    if (typeof window === 'undefined') return 0;
    return (x / window.innerWidth - 0.5) * -45;
  });
  const inverseParallaxY = useTransform(smoothY, (y) => {
    if (typeof window === 'undefined') return 0;
    return (y / window.innerHeight - 0.5) * -45;
  });

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden -z-10 transition-colors duration-1000">
      {/* Base theme-synced background matching the brand's aesthetic */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDark 
            ? 'opacity-100 bg-linear-to-b from-[#090919] via-[#0D0D26] to-[#060613]' 
            : 'opacity-100 bg-linear-to-b from-[#FCFCFB] via-[#F6F5F2] to-[#ECEAE4]'
        }`} 
      />

      {/* Dynamic Cursor Light 1 (Cyan/Purple Ambient Glow directly trailing the mouse) */}
      <motion.div
        className={`absolute rounded-full filter blur-[130px] mix-blend-normal transition-opacity duration-1000 ${
          isDark 
            ? 'bg-gradient-to-r from-vh-cyan/16 via-vh-purple/14 to-vh-red/12 opacity-85' 
            : 'bg-gradient-to-r from-vh-cyan/8 via-vh-purple/8 to-vh-red/6 opacity-60'
        }`}
        style={{
          x: useTransform(smoothX, (val) => val - 225),
          y: useTransform(smoothY, (val) => val - 225),
          width: '450px',
          height: '450px',
        }}
      />

      {/* Dynamic Cursor Light 2 (Orange/Lime Accent trailing with more fluid drag) */}
      <motion.div
        className={`absolute rounded-full filter blur-[110px] mix-blend-normal transition-opacity duration-1000 ${
          isDark 
            ? 'bg-gradient-to-r from-vh-orange/14 via-vh-lime/10 to-transparent opacity-75' 
            : 'bg-gradient-to-r from-vh-orange/6 via-vh-lime/4 to-transparent opacity-50'
        }`}
        style={{
          x: useTransform(lagX, (val) => val - 175),
          y: useTransform(lagY, (val) => val - 175),
          width: '350px',
          height: '350px',
        }}
      />

      {/* Floating Animated Gradient Aurora Blobs with interactive Parallax */}
      {/* Blob 1: Brand Purple */}
      <motion.div 
        className={`absolute rounded-full filter blur-[130px] mix-blend-normal transition-all duration-1000 ${
          isDark 
            ? 'bg-vh-purple/15 dark:bg-vh-purple/20' 
            : 'bg-vh-purple/8'
        } animate-blob-one`}
        style={{
          top: '10%',
          left: '15%',
          width: '500px',
          height: '500px',
          x: parallaxX,
          y: parallaxY,
        }}
      />

      {/* Blob 2: Brand Cyan */}
      <motion.div 
        className={`absolute rounded-full filter blur-[140px] mix-blend-normal transition-all duration-1000 ${
          isDark 
            ? 'bg-vh-cyan/15 dark:bg-vh-cyan/20' 
            : 'bg-vh-cyan/8'
        } animate-blob-two`}
        style={{
          top: '35%',
          right: '10%',
          width: '550px',
          height: '550px',
          x: inverseParallaxX,
          y: inverseParallaxY,
        }}
      />

      {/* Blob 3: Brand Lime (Green) */}
      <motion.div 
        className={`absolute rounded-full filter blur-[120px] mix-blend-normal transition-all duration-1000 ${
          isDark 
            ? 'bg-vh-lime/12 dark:bg-vh-lime/15' 
            : 'bg-vh-lime/6'
        } animate-blob-three`}
        style={{
          bottom: '25%',
          left: '10%',
          width: '420px',
          height: '420px',
          x: parallaxX,
          y: parallaxY,
        }}
      />

      {/* Blob 4: Brand Orange/Red */}
      <motion.div 
        className={`absolute rounded-full filter blur-[130px] mix-blend-normal transition-all duration-1000 ${
          isDark 
            ? 'bg-vh-orange/12 dark:bg-vh-orange/15' 
            : 'bg-vh-orange/6'
        } animate-blob-four`}
        style={{
          bottom: '8%',
          right: '20%',
          width: '480px',
          height: '480px',
          x: inverseParallaxX,
          y: inverseParallaxY,
        }}
      />

      {/* Extra Highlight / Lens Flare overlay */}
      <motion.div 
        className={`absolute top-[5%] left-[30%] w-[250px] h-[250px] rounded-full filter blur-[100px] transition-opacity duration-1000 ${
          isDark ? 'bg-vh-red/8 opacity-60' : 'bg-vh-red/3 opacity-30'
        }`}
        style={{
          x: parallaxX,
          y: inverseParallaxY,
        }}
      />
    </div>
  );
};
