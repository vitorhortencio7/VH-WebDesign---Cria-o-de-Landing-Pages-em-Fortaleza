import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Check, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';
import { WHATSAPP_LINK } from '@/src/constants';
import { TerminalTyping } from '@/src/components/ui/TerminalTyping';

const projects = [
  {
    id: "caroline",
    client: "Caroline Monteiro Architecture",
    tag: "DESIGN PREMIUM",
    tagColor: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    description: "Design minimalista e sofisticado para destacar projetos de alto padrão em Fortaleza. Uma experiência imersiva que traduz a elegância da arquitetura de luxo.",
    results: ["+45% em Leads Qualificados", "Tempo de carregamento < 1s", "Mobile First de verdade"],
    imgWeb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
    imgMobile: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500",
    year: "2026",
    role: "Visual Developer & Designer",
    services: ["Arquitetura de Conversão", "Estágio de Marca", "Performance React Code"]
  },
  {
    id: "alpha",
    client: "Alpha Cupim Dedetizadora",
    tag: "CONVERSÃO ACELERADA",
    tagColor: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
    description: "Página focada em urgência e conversão rápida. Atendimento imediato via WhatsApp, com design que transmite confiança e autoridade no controle de pragas.",
    results: ["3x Mais Contatos", "SEO Local Otimizado", "Taxa de Rejeição Caiu 40%"],
    imgWeb: "https://i.ibb.co/9mBGFV9r/Alpha-Cupim-WEB.png",
    imgMobile: "https://i.ibb.co/8D9TW0jT/Alpha-Cupim-Mobile.png",
    year: "2025",
    role: "Website & Copy Strategist",
    services: ["SEO Otimizado no Google", "Script de Conversão", "UI de Alta Resolução"]
  },
  {
    id: "pv-refrigeracao",
    client: "PV Refrigeração",
    tag: "AUTORIDADE TÉCNICA",
    tagColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    description: "Uma página de alta performance para uma das maiores referências em manutenção de equipamentos frios de Fortaleza. Focada em conversão imediata e credibilidade técnica.",
    results: ["Agendamento via WhatsApp", "Serviço em até 24h", "Peças Originais e Garantia"],
    imgWeb: "https://i.ibb.co/DHv01N7H/PV-Refrigeracao-WEB.png",
    imgMobile: "https://i.ibb.co/3YNjmCbL/PV-Refrigeracao-Mobile.png",
    year: "2026",
    role: "Fullstack Web Designer",
    services: ["Copywriting Estratégico", "Funil de Agendamento", "Design Mobile Otimizado"]
  }
];

export const Portfolio = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px"
      }
    );

    const elements = document.querySelectorAll('.portfolio-item-text');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="relative py-20 md:py-32 transition-colors duration-300 bg-transparent">
      {/* Background ambient lighting of brand colors */}
      <div className="absolute top-[20%] left-[2%] w-[280px] h-[280px] rounded-full bg-vh-purple/5 dark:bg-vh-purple/10 blur-[110px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[20%] right-[2%] w-[320px] h-[320px] rounded-full bg-vh-cyan/5 dark:bg-vh-cyan/10 blur-[125px] pointer-events-none select-none z-0" />
      
      {/* Background Watermark */}
      <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className={`text-[5rem] sm:text-[10rem] md:text-[22rem] font-black tracking-tight leading-none uppercase ${isDark ? 'text-zinc-900/10' : 'text-zinc-200/30'}`}>
          Portfólio
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Header Title */}
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <TerminalTyping 
            phrases={["(trabalhos recentes)", "git status --portfolio", "npm run dev:showcase", "cat portfolio_recent.json"]} 
            isDark={isDark} 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl ${isDark ? 'text-white' : 'text-zinc-950'}`}
          >
            A Força do Portfólio Real
          </motion.h2>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row relative gap-8">
          
          {/* LEFT: Image Wrapper (Sticky) */}
          <div className="hidden lg:flex w-full lg:w-1/2 sticky top-24 h-[650px] items-center justify-center pr-8">
            
            {/* Desktop Mockup Image Box */}
            <div className="relative w-full max-w-[550px] h-[400px]">
              {/* Laptop Mockup */}
              <div className={`absolute top-0 left-0 w-[88%] aspect-[16/10] rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-in-out border-[8px] ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-150/80 bg-white'}`}>
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  {projects.map((proj, idx) => (
                    <div
                      key={`laptop-${proj.id}`}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img src={proj.imgWeb} alt={proj.client} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone Mockup */}
              <div className={`absolute bottom-0 right-0 w-[24%] aspect-[9/19] rounded-[24px] shadow-2xl overflow-hidden transition-all duration-700 ease-in-out border-[6px] ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'} z-20 translate-y-[10%] translate-x-[5%]`}>
                <div className="relative w-full h-full overflow-hidden rounded-[16px]">
                  {projects.map((proj, idx) => (
                    <div
                      key={`phone-${proj.id}`}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img src={proj.imgMobile} alt={proj.client} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
             {/* Decorative Glow that dynamically shifts color according to the active portfolio project */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] blur-[100px] -z-10 rounded-full transition-all duration-1000 ease-in-out ${
              activeIndex === 0 ? 'bg-vh-purple/15 opacity-80' : 
              activeIndex === 1 ? 'bg-vh-cyan/15 opacity-80' : 
              'bg-vh-lime/15 opacity-80'
            }`} />

          </div>

          {/* RIGHT: Text Content (Scrollable) */}
          <div className="w-full lg:w-1/2 flex flex-col lg:pl-12">
            <div className="lg:py-12">
              {projects.map((project, i) => (
                <div 
                  key={project.id} 
                  data-index={i} 
                  className="portfolio-item-text min-h-[75vh] lg:min-h-[90vh] flex flex-col justify-center border-b border-zinc-200/50 dark:border-zinc-800/50 last:border-0 py-12 lg:py-24"
                >
                  
                  {/* Mobile Only Mockup Image (Hidden on Desktop) */}
                  <div className="lg:hidden relative w-full aspect-[16/11] mb-12">
                    {/* Laptop Mockup */}
                    <div className={`absolute top-0 left-0 w-[85%] aspect-[16/10] rounded-xl shadow-lg overflow-hidden border-[6px] ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'}`}>
                      <div className="relative w-full h-full overflow-hidden rounded-[4px]">
                        <img src={project.imgWeb} alt={project.client} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                    {/* Phone Mockup */}
                    <div className={`absolute bottom-0 right-0 w-[24%] aspect-[9/19] rounded-[16px] shadow-2xl overflow-hidden border-[4px] ${isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-white'} z-20 translate-y-[10%]`}>
                      <div className="relative w-full h-full overflow-hidden rounded-[8px]">
                        <img src={project.imgMobile} alt={project.client} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
                      </div>
                    </div>
                  </div>

                  {/* Text Details & Metadata Table */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                  >
                    <span className={`inline-block px-3 py-1 mb-2 rounded-full text-[9px] font-mono font-black tracking-widest ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    
                    <h3 className={`text-3xl md:text-5xl font-heading font-black leading-[1.15] tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                      {project.client}
                    </h3>
                    
                    <p className={`text-base md:text-lg font-medium leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {project.description}
                    </p>

                    {/* Metadata table exactly similar to the Finton Vdesign blueprint */}
                    <div className={`border-t pt-6 mt-6 space-y-4 ${isDark ? 'border-zinc-800/80' : 'border-zinc-200/85'}`}>
                      
                      <div className="flex justify-between items-center text-xs py-1">
                        <span className="font-mono text-zinc-500 uppercase tracking-widest font-black">Entrega</span>
                        <span className={`font-mono font-bold ${isDark ? 'text-zinc-300' : 'text-zinc-800'}`}>{project.year}</span>
                      </div>

                      <div className="flex justify-between items-center text-xs py-1 border-t border-dashed border-zinc-200/50 dark:border-zinc-800/50">
                        <span className="font-mono text-zinc-500 uppercase tracking-widest font-black">Atuação</span>
                        <span className={`font-mono font-bold ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}>{project.role}</span>
                      </div>

                      <div className="flex justify-between items-start text-xs py-1 border-t border-dashed border-zinc-200/50 dark:border-zinc-800/50">
                        <span className="font-mono text-zinc-500 uppercase tracking-widest font-black pt-1">Serviços</span>
                        <div className="flex flex-col items-end gap-1">
                          {project.services.map((serv, sIdx) => (
                            <span key={sIdx} className={`font-mono font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{serv}</span>
                          ))}
                        </div>
                      </div>

                    </div>
                    
                    <div className="space-y-3.5 pt-6 border-t border-zinc-200/40 dark:border-zinc-800/40">
                      {project.results.map((res, j) => (
                        <div key={j} className="flex items-center gap-2.5 text-vh-cyan font-mono text-xs font-black tracking-widest uppercase">
                          <Check size={14} className="shrink-0 text-emerald-500" /> {res}
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <a 
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase font-black tracking-widest group transition-colors ${isDark ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-zinc-950'}`}
                      >
                        Verificar Projeto On-line <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
