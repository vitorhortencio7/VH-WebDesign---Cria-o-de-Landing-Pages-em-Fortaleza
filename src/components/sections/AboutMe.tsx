import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Globe, ArrowRight, Briefcase } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';
import { WHATSAPP_LINK } from '@/src/constants';
import { TerminalTyping } from '@/src/components/ui/TerminalTyping';

export const AboutMe = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="sobre" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-300 bg-transparent">
      
      {/* Background Watermark */}
      <div className="absolute top-12 md:top-24 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className={`text-[6rem] sm:text-[10rem] md:text-[20rem] font-black tracking-tight leading-none uppercase ${isDark ? 'text-zinc-900/10' : 'text-zinc-200/30'}`}>
          Perfil
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column: Greyscale Image card and socials with brand color shadow/glow glow effect */}
          <div className="w-full lg:w-5/12 flex flex-col items-center">
            <div className="relative group max-w-[360px] w-full">
              {/* Subtle brand color glow achter the photo for depth */}
              <div className="absolute inset-0 bg-vh-purple/20 dark:bg-vh-purple/35 rounded-3xl filter blur-xl scale-95 opacity-80 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 -z-10" />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`p-3 rounded-3xl border w-full aspect-[4/5] overflow-hidden ${isDark ? 'bg-zinc-900/90 border-zinc-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-white border-zinc-200 shadow-[0_10px_30px_rgba(123,31,204,0.04)]'}`}
              >
                <div className="w-full h-full overflow-hidden rounded-2xl bg-zinc-950">
                  <img 
                    src="https://i.ibb.co/W4q53XTp/trabalhando.jpg" 
                    alt="Vitor Hortêncio trabalhando" 
                    className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700 scale-[1.01] hover:scale-[1.04]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>

            {/* Social Links underneath similar to reference icons (Instagram and Portfolio) */}
            <div className="flex gap-4 mt-8">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border transition-all ${
                  isDark 
                    ? 'border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700' 
                    : 'border-zinc-250 bg-white text-zinc-600 hover:text-zinc-950 hover:border-zinc-350'
                }`}
              >
                <Instagram size={14} className="text-vh-purple" />
                <span>Instagram</span>
              </a>
              <a 
                href="#portfolio" 
                className={`flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider rounded-xl border transition-all ${
                  isDark 
                    ? 'border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700' 
                    : 'border-zinc-250 bg-white text-zinc-600 hover:text-zinc-950 hover:border-zinc-350'
                }`}
              >
                <Globe size={14} className="text-vh-cyan" />
                <span>Portfólio</span>
              </a>
            </div>
          </div>

          {/* Right Column: About Vitor Hortêncio & Timeline table */}
          <div className="w-full lg:w-7/12 text-left space-y-8">
            <div className="flex flex-col items-start">
              <TerminalTyping 
                phrases={["(quem sou eu)", "whoami", "cat profile.md", "vitor.getExpertise()"]} 
                isDark={isDark} 
              />
              
              <motion.h3 
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className={`font-heading font-black text-4xl md:text-5xl lg:text-[3.25rem] leading-none tracking-tight mb-8 ${
                  isDark 
                    ? 'bg-gradient-to-r from-white via-zinc-200 to-vh-purple/90 bg-clip-text text-transparent' 
                    : 'text-zinc-950'
                }`}
              >
                Estética Fina,<br />Código Impecável.
              </motion.h3>
              
              <div className="space-y-5 text-sm md:text-base leading-relaxed max-w-2xl font-medium">
                <p className={isDark ? 'text-zinc-300' : 'text-zinc-800'}>
                  Meu nome é Vitor Hortêncio. Sou desenvolvedor e designer focado em tirar o peso da tecnologia das costas de donos de pequenos negócios e profissionais liberais. Cansei de ver empreendedores brilhantes perdendo vendas por causa de sites lentos ou plataformas amadoras.
                </p>
                
                <p className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
                  Através da <strong className="text-vh-purple font-bold">VH WebDesign</strong>, eu mudo esse jogo. Mais do que entregar um site sob medida e focado em conversão, eu me torno o seu parceiro de tecnologia. Eu cuido do design, da hospedagem e da segurança para que você foque 100% no que importa: vender e atender seus clientes.
                </p>
              </div>
            </div>

            {/* Timeline Career Milestones Table */}
            <div className={`border-t pt-8 mt-10 space-y-5 max-w-2xl ${isDark ? 'border-zinc-850' : 'border-zinc-200'}`}>
              <div className="flex items-center gap-2">
                <Briefcase size={14} className="text-vh-purple" />
                <h4 className={`font-mono text-xs uppercase tracking-widest font-black ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Trajetória Profissional
                </h4>
              </div>
              
              <div className="space-y-4 font-mono text-xs">
                {[
                  { position: "Especialista WaaS & Web Designer Sênior", employer: "Estúdio Independente VH", years: "2025 - Atual" },
                  { position: "UI/UX Designer & Foco em Conversão", employer: "Projetos de Conversão Digital", years: "2022 - 2024" },
                  { position: "Web Developer", employer: "Criação de Sites Profissionais", years: "2021" }
                ].map((row, rIdx) => (
                  <div 
                    key={rIdx} 
                    className="flex justify-between items-start md:items-center py-3 border-b border-dashed border-zinc-200/50 dark:border-zinc-800/40 hover:translate-x-1 transition-transform duration-300"
                  >
                    <div className="space-y-1">
                      <div className={`font-black ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>{row.position}</div>
                      <div className={`text-[10px] ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>{row.employer}</div>
                    </div>
                    <div className={`font-black shrink-0 ml-4 ${isDark ? 'text-vh-purple' : 'text-vh-purple/90'}`}>{row.years}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* BRAND NEW CALL TO ACTION BUTTON */}
            <div className="pt-4 max-w-2xl">
              <motion.a 
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 font-mono text-xs uppercase font-black tracking-widest bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-md select-none cursor-pointer group"
              >
                <span>Vamos construir o seu projeto?</span>
                <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
