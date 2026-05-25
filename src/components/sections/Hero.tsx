import React from 'react';
import { motion } from 'motion/react';
import { WHATSAPP_LINK } from '@/src/constants';
import { useTheme } from '@/src/context/ThemeContext';

export const Hero = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Sliding marquee items for horizontal banner
  const marqueeItems = [
    "Website Design", "Conversão Máxima", "Arquitetura Digital", "Mobile-First", 
    "5 Anos de Experiência", "Código Otimizado", "Fortaleza, CE", "Design Premium",
    "Sem Enrolação", "Giro de Clientes", "Foco em Vendas"
  ];

  return (
    <section className="min-h-[90vh] md:min-h-screen flex flex-col justify-between pt-40 md:pt-48 pb-24 md:pb-32 overflow-hidden relative bg-transparent animate-fade-in">
      {/* Ambient background blur blobs of brand colors based on logo */}
      <div className="absolute top-[8%] left-[2%] w-[320px] h-[320px] rounded-full bg-vh-purple/8 dark:bg-vh-purple/12 blur-[120px] pointer-events-none select-none z-0" />
      <div className="absolute top-[25%] right-[2%] w-[420px] h-[420px] rounded-full bg-vh-cyan/8 dark:bg-vh-cyan/12 blur-[140px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[10%] left-[35%] -translate-x-1/2 w-[340px] h-[340px] rounded-full bg-vh-orange/6 dark:bg-vh-orange/10 blur-[130px] pointer-events-none select-none z-0" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 flex flex-col items-center justify-center flex-grow mb-16 md:mb-24">
        
        {/* Social Proof Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 mb-8 px-5 py-2.5 border rounded-full ${isDark ? 'bg-zinc-900/60 border-zinc-800 animate-pulse' : 'bg-white/60 border-zinc-200 shadow-xs'} backdrop-blur-md`}
        >
          <span className="text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2 select-none">
            <span>⭐⭐⭐⭐⭐</span>
            <span className={`${isDark ? 'text-zinc-300' : 'text-zinc-800'} font-medium`}>+50 Projetos Entregues em Todo o Brasil</span>
          </span>
        </motion.div>
 
        {/* Brand Master Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`font-heading font-black text-4xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[1.1] tracking-tight mb-8 max-w-5xl ${isDark ? 'text-white' : 'text-zinc-950'}`}
        >
          Seu site profissional no ar. <br />
          <span className="bg-gradient-to-r from-vh-purple via-vh-orange to-vh-cyan bg-clip-text text-transparent dark:from-purple-400 dark:via-orange-400 dark:to-cyan-400">Zero dor de cabeça.</span>
        </motion.h1>
 
        {/* Explanatory subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`text-lg md:text-xl font-medium max-w-3xl leading-relaxed mb-10 ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}
        >
          Chega de perder noites brigando com plataformas lentas. Eu projeto sua Landing Page de alta performance, gerencio o domínio, a hospedagem e a manutenção. Você foca em faturar, eu resolvo a tecnologia.
        </motion.p>
 
        {/* CTA triggers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 relative z-20"
        >
          <a
            href="#pricing"
            className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest rounded-xl bg-gradient-to-r from-vh-purple via-vh-red to-vh-orange hover:scale-[1.03] text-white shadow-[0_10px_25px_rgba(123,31,204,0.25)] dark:shadow-[0_10px_30px_rgba(123,31,204,0.35)] transition-all ease-out duration-300"
          >
            VER PLANOS E PREÇOS &rarr;
          </a>
          <a
            href="#portfolio"
            className={`px-8 py-4 text-xs font-extrabold uppercase tracking-widest rounded-xl transition-all border hover:scale-[1.01] ${
              isDark 
                ? 'border-zinc-805 text-zinc-300 hover:bg-zinc-900/80 hover:border-zinc-700' 
                : 'border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:border-zinc-400'
            }`}
          >
            VER PROJETOS PRONTOS
          </a>
        </motion.div>

      </div>

      {/* Infinite scrolling marquee banner */}
      <div className={`w-full py-4 border-y overflow-hidden relative z-10 ${isDark ? 'bg-zinc-900/50 border-zinc-800' : 'bg-amber-500/5 border-black/5'}`}>
        <div className="flex w-[200%] md:w-[150%] select-none whitespace-nowrap animate-[marquee_40s_linear_infinite]">
          {/* Loop double-times to cover scrolling transition */}
          <div className="flex justify-around min-w-full items-center">
            {marqueeItems.map((item, id) => (
              <span key={id} className={`font-mono text-[10px] uppercase tracking-widest font-black inline-flex items-center gap-2 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
                <span>★</span>
                <span>{item}</span>
              </span>
            ))}
          </div>
          <div className="flex justify-around min-w-full items-center">
            {marqueeItems.map((item, id) => (
              <span key={`dup-${id}`} className={`font-mono text-[10px] uppercase tracking-widest font-black inline-flex items-center gap-2 ${isDark ? 'text-zinc-500' : 'text-zinc-600'}`}>
                <span>★</span>
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
