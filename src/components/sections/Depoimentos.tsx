import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { ImagemBranca } from '@/src/components/ui/ImagemBranca';
import { useTheme } from '@/src/context/ThemeContext';
import { TerminalTyping } from '@/src/components/ui/TerminalTyping';

const reviews = [
  {
    text: '"Antes da VH, a gente dependia quase 100% de indicação boca a boca. O Vitor entregou nosso site em poucos dias e, com a otimização e o botão do WhatsApp integrados, nosso telefone passou a tocar com clientes que vieram direto do Google. Foi o melhor investimento comercial que fiz pro meu negócio."',
    name: "Paulo Victor",
    role: "PV Refrigeração",
    img: 6,
  },
  {
    text: '"Nosso serviço é de urgência: o cliente pesquisa no celular e quer resolver o problema na hora. O site que o Vitor criou passa uma credibilidade imensa, carrega rápido e não trava. O melhor de tudo é o modelo de parceria: eu não preciso me estressar com hospedagem ou parte técnica, ele resolve tudo."',
    name: "Raquel Queiroz",
    role: "Alpha Cupim Dedetização",
    img: 7,
  },
  {
    text: '"Como arquiteta, sou extremamente criteriosa com design, proporção e estética. O Vitor conseguiu captar perfeitamente a essência e o nível de sofisticação do meu escritório. O resultado foi um site absurdamente elegante, moderno e fluido. Meus clientes sempre elogiam a nossa vitrine digital."',
    name: "Caroline",
    role: "CM Arquitetura",
    img: 8,
  }
];

export const Depoimentos = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [index, setIndex] = useState(0);

  const prevReview = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[index];

  return (
    <section id="depoimentos" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-300 bg-transparent">
      
      {/* Huge Background Watermark */}
      <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className={`text-[6rem] sm:text-[10rem] md:text-[22rem] font-black tracking-tight leading-none uppercase ${isDark ? 'text-zinc-900/10' : 'text-zinc-200/30'}`}>
          Feedback
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Title */}
        <div className="mb-10 md:mb-20 text-center lg:text-left flex flex-col items-center lg:items-start">
          <TerminalTyping 
            phrases={["(depoimentos)", "cat client_feedback.csv", "git log --reviews", "get_testimonials()"]} 
            isDark={isDark} 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${isDark ? 'text-white' : 'text-zinc-950'}`}
          >
            A Parceria que Gera Resultados
          </motion.h2>
        </div>

        {/* Split Section Layout: Left stats, Right sliding Card */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* LEFT: Prominent Monospace Column Stats */}
          <div className="w-full lg:w-5/12 grid grid-cols-1 gap-8 text-left">
            {[
              { value: "50+", label: "Páginas Lançadas", desc: "Sistemas web e landing pages no ar em todo o país." },
              { value: "98%", label: "Satisfação de Parceria", desc: "Clientes satisfeitos que recomendam a flexibilidade do design." },
              { value: "R$ 500k+", label: "Em Vendas Geradas", desc: "Estimativa de faturamento de nossos parceiros após o lançamento." }
            ].map((stat, sId) => (
              <motion.div 
                key={sId}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sId * 0.1, duration: 0.6 }}
                className={`pb-6 border-b ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}
              >
                <div className={`font-heading font-black text-4xl md:text-5xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                  {stat.value}
                </div>
                <div className={`font-mono text-xs uppercase font-extrabold tracking-widest mt-1 mb-2 ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
                  {stat.label}
                </div>
                <p className={`text-xs ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: High-End Curated Testimonial Quote Card */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 md:p-12 rounded-3xl border text-left relative flex flex-col justify-between min-h-[440px] md:min-h-[400px] h-full shadow-lg transition-all duration-300 ${isDark ? 'bg-zinc-900 border-zinc-800' : 'bg-[#F2F2F0] border-zinc-200'}`}
            >
              <Quote size={40} className="text-vh-cyan/20 absolute top-8 left-8" />
              
              <div className="relative z-10 pt-4 flex-grow">
                <div className="flex gap-1 mb-6 text-amber-500">
                  <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                </div>
                
                {/* Text Slider Animations */}
                <div className="min-h-[140px]">
                  <AnimatePresence mode="wait">
                    <motion.p 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className={`text-base md:text-lg lg:text-xl font-medium leading-relaxed italic ${isDark ? 'text-zinc-100' : 'text-zinc-800'}`}
                    >
                      {current.text}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slider Bottom Profile and Controllers */}
              <div className="relative z-10 flex items-center justify-between pt-6 border-t border-zinc-200/50 dark:border-zinc-800/55">
                <div className="flex gap-4 items-center">
                  <ImagemBranca numero={current.img} className="w-12 h-12 rounded-full text-xs shrink-0 border border-zinc-300/40" />
                  <div>
                    <h4 className={`font-heading font-black text-base leading-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>{current.name}</h4>
                    <p className={`text-xs font-mono tracking-widest uppercase font-extrabold ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>{current.role}</p>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex gap-2">
                  <button 
                    onClick={prevReview}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-white' : 'border-zinc-300 bg-white hover:bg-zinc-200 text-zinc-950'}`}
                  >
                    <ArrowLeft size={16} />
                  </button>
                  <button 
                    onClick={nextReview}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${isDark ? 'border-zinc-800 bg-zinc-900 hover:bg-zinc-800 text-white' : 'border-zinc-300 bg-white hover:bg-zinc-200 text-zinc-950'}`}
                  >
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
