import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Layout } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

const projects = [
  {
    id: "caroline",
    client: "Caroline Monteiro Arquitetura",
    tag: "DESIGN PREMIUM",
    tagColor: "bg-vh-purple",
    description: "Design minimalista e sofisticado para destacar projetos de alto padrão em Fortaleza. Uma experiência imersiva que traduz a elegância da arquitetura de luxo.",
    results: ["+45% em Leads Qualificados", "Tempo de carregamento < 1s", "Mobile First de verdade"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "alpha",
    client: "Alpha Cupim Dedetizadora",
    tag: "CONVERSÃO ACELERADA",
    tagColor: "bg-vh-cyan text-vh-dark",
    description: "Página focada em urgência e conversão rápida. Atendimento imediato via WhatsApp, com design que transmite confiança e autoridade no controle de pragas.",
    results: ["3x Mais Contatos", "SEO Local Otimizado", "Taxa de Rejeição Caiu 40%"],
    img: "https://images.unsplash.com/photo-1584820927498-cafe4c23c6f6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: "traduzir",
    client: "Traduzir Arquitetura",
    tag: "PORTFÓLIO IMERSIVO",
    tagColor: "bg-vh-orange transition-colors text-white",
    description: "Um portfólio digital que valoriza cada detalhe dos projetos. O layout limpo garante que as fotos e o conceito arquitetônico sejam os verdadeiros protagonistas.",
    results: ["Navegação Fluida", "Catálogo Dinâmico", "Fácil Atualização"],
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09c15468?auto=format&fit=crop&q=80&w=1200",
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
    <section id="portfolio" className={`relative py-32 border-t ${isDark ? 'bg-[#12122A] border-white/5' : 'bg-[#fafafa] border-vh-dark/5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        
        {/* Header Title */}
        <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vh-cyan/10 border border-vh-cyan/30 text-vh-cyan font-mono text-xs font-bold mb-6"
          >
            <Layout size={14} /> CLIENTES SATISFEITOS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-5xl ${isDark ? 'text-white' : 'text-vh-dark'}`}
          >
            Casos Reais de Sucesso
          </motion.h2>
        </div>

        {/* Content Container */}
        <div className="flex flex-col lg:flex-row relative">
          
          {/* LEFT: Image Wrapper (Sticky) */}
          <div className="hidden lg:flex w-full lg:w-1/2 sticky top-24 h-[calc(100vh-6rem)] items-center justify-start pr-12">
            
            {/* Timeline Line */}
            <div className="flex flex-col items-center justify-center h-full mr-8 w-2 relative">
              <div className="absolute top-1/2 -translate-y-1/2 h-48 w-0.5 bg-gray-200 dark:bg-white/10 rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 h-48 flex flex-col justify-between py-2">
                 {projects.map((_, i) => (
                    <motion.div 
                      key={i}
                      className={`w-2 h-2 rounded-full z-10 transition-colors duration-500 ${i === activeIndex ? 'bg-vh-cyan shadow-[0_0_10px_rgba(0,170,238,0.8)]' : isDark ? 'bg-white/20' : 'bg-gray-300'}`} 
                    />
                 ))}
              </div>
            </div>

            {/* Desktop Mockup Image Box */}
            <div className="relative w-full max-w-[600px] h-[400px] xl:h-[450px]">
              {/* Laptop Mockup */}
              <div className={`absolute top-0 left-0 w-[85%] aspect-[16/10] rounded-[16px] shadow-2xl overflow-hidden transition-all duration-700 ease-in-out border-[8px] ${isDark ? 'border-[#2a2a2a] bg-[#1a1a1a]' : 'border-gray-200 bg-white'}`}>
                <div className="relative w-full h-full overflow-hidden rounded-[8px]">
                  {projects.map((proj, idx) => (
                    <div
                      key={`laptop-${proj.id}`}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img src={proj.img} alt={proj.client} className="w-full h-full object-cover object-top" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone Mockup */}
              <div className={`absolute bottom-0 right-0 w-[24%] aspect-[9/19] rounded-[24px] shadow-2xl overflow-hidden transition-all duration-700 ease-in-out border-[6px] ${isDark ? 'border-[#333] bg-[#1a1a1a]' : 'border-gray-300 bg-white'} z-20 translate-y-[10%]`}>
                {/* Phone Notch */}
                <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-30">
                  <div className={`w-[40%] h-full rounded-b-xl ${isDark ? 'bg-[#333]' : 'bg-gray-300'}`} />
                </div>
                <div className="relative w-full h-full overflow-hidden rounded-[16px]">
                  {projects.map((proj, idx) => (
                    <div
                      key={`phone-${proj.id}`}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                    >
                      <img src={proj.img} alt={proj.client} className="w-full h-full object-cover object-center scale-[2.5]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-vh-cyan/20 blur-[100px] -z-10 rounded-full opacity-60" />

          </div>

          {/* RIGHT: Text Content (Scrollable) */}
          <div className="w-full lg:w-1/2 flex flex-col lg:pl-16">
            <div className="lg:py-[30vh]"> {/* Padding space at top to center initial item */}
              {projects.map((project, i) => (
                <div 
                  key={project.id} 
                  data-index={i} 
                  className="portfolio-item-text min-h-[70vh] lg:min-h-[100vh] flex flex-col justify-center"
                >
                  
                  {/* Mobile Only Mockup Image (Hidden on Desktop) */}
                  <div className="lg:hidden relative w-full aspect-[16/11] mb-8 mt-4">
                    {/* Laptop Mockup */}
                    <div className={`absolute top-0 left-0 w-[85%] aspect-[16/10] rounded-[12px] shadow-xl overflow-hidden border-[6px] ${isDark ? 'border-[#2a2a2a] bg-[#1a1a1a]' : 'border-gray-200 bg-white'}`}>
                      <div className="relative w-full h-full overflow-hidden rounded-[4px]">
                        <img src={project.img} alt={project.client} className="w-full h-full object-cover object-top" />
                      </div>
                    </div>
                    {/* Phone Mockup */}
                    <div className={`absolute bottom-0 right-0 w-[24%] aspect-[9/19] rounded-[16px] shadow-2xl overflow-hidden border-[4px] ${isDark ? 'border-[#333] bg-[#1a1a1a]' : 'border-gray-300 bg-white'} z-20 translate-y-[10%]`}>
                      {/* Phone Notch */}
                      <div className="absolute top-0 inset-x-0 h-3 flex justify-center z-30">
                        <div className={`w-[40%] h-full rounded-b-lg ${isDark ? 'bg-[#333]' : 'bg-gray-300'}`} />
                      </div>
                      <div className="relative w-full h-full overflow-hidden rounded-[8px]">
                        <img src={project.img} alt={project.client} className="w-full h-full object-cover object-center scale-[2.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Text Details */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className={`inline-block px-4 py-1.5 mb-6 rounded-full text-[10px] font-mono font-black tracking-widest ${project.tagColor}`}>
                      {project.tag}
                    </span>
                    
                    <h3 className={`text-3xl md:text-5xl font-heading font-black leading-[1.1] mb-6 ${isDark ? 'text-white' : 'text-vh-dark'}`}>
                      {project.client}
                    </h3>
                    
                    <p className={`text-lg md:text-xl font-medium leading-relaxed mb-8 ${isDark ? 'text-vh-light/80' : 'text-vh-dark/70'}`}>
                      {project.description}
                    </p>
                    
                    <div className="space-y-4 pt-8 border-t border-vh-dark/10 dark:border-white/10">
                      {project.results.map((res, j) => (
                        <div key={j} className="flex items-center gap-3 text-vh-cyan font-mono text-sm md:text-base font-bold tracking-wide uppercase">
                          <Check size={20} className="shrink-0" /> {res}
                        </div>
                      ))}
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
