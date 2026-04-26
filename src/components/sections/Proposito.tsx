import { motion } from 'motion/react';
import { ShieldCheck, LayoutTemplate, Zap } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

export const Proposito = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="proposito" className={`py-24 relative border-t overflow-hidden ${isDark ? 'border-white/5' : 'border-vh-dark/5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 ${isDark ? 'text-white' : 'text-vh-dark'}`}
          >
            Design com Propósito
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`font-sans text-xl md:text-2xl font-medium max-w-3xl mx-auto ${isDark ? 'text-vh-light/80' : 'text-vh-dark/70'}`}
          >
            Esqueça a frieza das agências. Aqui o foco é resultado real e contato direto.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-start mb-20 text-center">
          {[
            {
              icon: <ShieldCheck size={28} className="text-vh-cyan" />,
              title: "Contato Direto",
              desc: "Sem intermediários. Você fala direto com quem cria, desenha e bota o site no ar."
            },
            {
              icon: <LayoutTemplate size={28} className="text-blue-500" />,
              title: "Atendimento Local",
              desc: "De Fortaleza para o mundo. Entendo a linguagem e a urgência do mercado regional."
            },
            {
              icon: <Zap size={28} className="text-vh-purple" />,
              title: "Budget Otimizado",
              desc: "Você não paga pelo escritório caro da agência, apenas pela inteligência e design."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + (idx * 0.1) }}
              className="flex flex-col items-center group"
            >
              <div className={`w-20 h-20 flex items-center justify-center rounded-3xl border mb-6 transition-transform group-hover:scale-105 ${isDark ? 'bg-white/[0.02] border-white/5' : 'bg-[var(--bg-secondary)] border-vh-dark/10 shadow-sm'}`}>
                {item.icon}
              </div>
              <h3 className={`font-heading text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-vh-dark'}`}>{item.title}</h3>
              <p className={`text-lg font-medium leading-relaxed ${isDark ? 'text-vh-light/70' : 'text-vh-dark/60'}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Badge */}
        <div className="flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-vh-red/5 border border-vh-red/20 text-vh-red font-mono text-xs uppercase font-bold tracking-[0.2em]"
          >
            <span className="w-2 h-2 rounded-full bg-vh-red animate-pulse" />
            100% Foco em Conversão
          </motion.div>
        </div>

      </div>
    </section>
  );
};
