import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '@/src/constants';

interface CTAButtonProps {
  text: string;
  className?: string;
  showIcon?: boolean;
  variant?: 'red' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const CTAButton = ({ text, className = "", showIcon = true, variant = 'red', size = 'md' }: CTAButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  
  // Magnetic effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x * 0.35);
    mouseY.set(y * 0.35);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const isRed = variant === 'red';
  const bgColor = isRed ? 'bg-vh-red' : 'bg-vh-dark';
  const shadowColor = isRed ? 'rgba(230,30,48,0.3)' : 'rgba(0,0,0,0.3)';
  const shadowColorHover = isRed ? 'rgba(230,30,48,0.6)' : 'rgba(100,50,255,0.4)';

  const sizeClasses = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-10 py-5 text-xl',
    lg: 'px-12 py-6 text-2xl'
  };

  return (
    <motion.a
      ref={ref}
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className={`
        relative group overflow-hidden ${bgColor} text-white rounded-full 
        font-bold inline-flex items-center justify-center gap-3 
        transition-shadow z-20 ${sizeClasses[size]} ${className}
      `}
      // Discrete "calling" animation - constant breathing
      animate={{
        scale: [1, 1.02, 1],
        boxShadow: [
          `0 0 15px ${shadowColor}`,
          `0 0 25px ${isRed ? 'rgba(230,30,48,0.4)' : 'rgba(100,50,255,0.2)'}`,
          `0 0 15px ${shadowColor}`
        ]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {/* Shimmer Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
        animate={{
          x: ["100%", "-100%"]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2
        }}
      />

      <span className="relative z-10">{text}</span>
      
      {showIcon && (
        <motion.span
          className="relative z-10"
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight size={size === 'sm' ? 16 : 22} className="group-hover:translate-x-1 transition-transform" />
        </motion.span>
      )}

      {/* Hover background color transition layer */}
      <div className="absolute inset-0 bg-vh-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.a>
  );
};
