import React from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { Target } from 'lucide-react';
import { BackgroundBlobs } from '@/src/components/ui/BackgroundBlobs';
import { ImagemBranca } from '@/src/components/ui/ImagemBranca';
import { CTAButton } from '@/src/components/ui/CTAButton';
import { useTheme } from '@/src/context/ThemeContext';

export const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden group/hero"
    >
      {/* Interactive Cursor Spotlight */}
      <motion.div 
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className={`absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10 w-[600px] h-[600px] bg-vh-purple/10 rounded-full blur-[120px] opacity-0 group-hover/hero:opacity-100 transition-opacity duration-500 ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
      />
      
      <motion.div 
        style={{
          left: smoothX,
          top: smoothY,
        }}
        className={`absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 bg-vh-cyan/20 rounded-full blur-3xl opacity-0 group-hover/hero:opacity-100 transition-opacity duration-700 ${isDark ? 'mix-blend-screen' : 'mix-blend-multiply'}`}
      />

      <BackgroundBlobs />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-vh-cyan/40 bg-vh-cyan/10 font-mono text-vh-cyan text-sm lg:text-base font-bold mb-8"
            >
              <Target size={18} />
              <span>Seu Web Designer em Fortaleza, CE</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className={`font-heading font-black text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight mb-6 ${isDark ? 'text-white' : 'text-vh-dark'}`}
            >
              A primeira {" "}
              <motion.span 
                whileHover={{ scale: 1.03, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-gradient-to-r from-vh-purple to-vh-red px-4 py-1 text-white block sm:inline-block cursor-default select-none shadow-lg shadow-vh-purple/10"
              >
                página do seu negócio
              </motion.span> 
              {" "} começa aqui.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className={`font-sans text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-medium ${isDark ? 'text-vh-light/90' : 'text-vh-dark/80'}`}
            >
              Crio landing pages e sites focados em venda para pequenos negócios e profissionais liberais. Você fala direto comigo — sem agência, sem enrolação.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
            >
              <CTAButton text="Quero minha página" className="w-full sm:w-auto" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-5/12 xl:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[450px] aspect-[16/10] sm:aspect-[4/5]">
              <div className="absolute inset-0 bg-gradient-to-tr from-vh-cyan to-vh-purple rounded-[32px] translate-x-4 translate-y-4 opacity-50 blur-lg"></div>
              
              {/* Device Frame Wrap */}
              <div className="relative z-10 w-full h-full bg-slate-200 p-3 rounded-[32px] shadow-2xl border-4 border-white/40">
                <div className="w-full h-full bg-white rounded-[24px] overflow-hidden">
                    <img 
                      src="https://i.ibb.co/W4q53XTp/trabalhando.jpg" 
                      alt="Vitor Hortêncio" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                </div>
              </div>
              
              <div className={`absolute -left-6 bottom-12 z-20 border px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 ${isDark ? 'bg-vh-dark border-white/10' : 'bg-white border-vh-dark/10'}`}>
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-vh-lime opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-vh-lime"></span>
                </span>
                <span className={`font-heading font-bold ${isDark ? 'text-white' : 'text-vh-dark'}`}>Disponível em Fortaleza</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
