import { motion } from 'motion/react';
import { Zap, ChevronRight } from 'lucide-react';
import { WHATSAPP_LINK } from '@/src/constants';
import { useTheme } from '@/src/context/ThemeContext';

export const Metodo = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="solucao" className={`py-24 border-t relative overflow-hidden ${isDark ? 'border-white/5' : 'border-vh-dark/5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-vh-cyan/10 border border-vh-cyan/30 text-vh-cyan font-mono text-xs font-bold mb-6 tracking-widest uppercase"
          >
            <Zap size={14}/> MÉTODO VH
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight ${isDark ? 'text-white' : 'text-vh-dark'}`}
          >
            Descomplica.<br/>Sem termos chatos.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg md:text-xl leading-relaxed mb-8 font-medium ${isDark ? 'text-vh-light/80' : 'text-vh-dark/70'}`}
          >
            Sou um cara criativo que vai entender sua meta, desenhar a tela que vende e colocar o código no ar para seus clientes clicarem e comprarem.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 font-bold text-lg transition-colors group ${isDark ? 'text-vh-cyan hover:text-white' : 'text-vh-purple hover:text-vh-cyan'}`}>
              Vamos falar do meu projeto <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="lg:w-2/3 grid gap-6">
          {[
            { step: "01", title: "O Bate-Papo Rápido", desc: "A gente alinha pelo Zap. Você compartilha seu material e me diz exatamente o público da sua marca.", color: "text-vh-purple" },
            { step: "02", title: "Mão na Ferramenta", desc: "Construo uma interface criativa, sob medida, para a tela do celular do seu cliente (Mobile-first de verdade).", color: "text-vh-cyan" },
            { step: "03", title: "Tudo No Ar e Pronto", desc: "Site publicado, voando de rápido, com o botão configurado indo pro seu bolso ou seu celular.", color: "text-vh-lime" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ 
                duration: 0.7, 
                delay: idx * 0.15,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className={`backdrop-blur-md border p-6 md:p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start shadow-xl group/card transition-all duration-300 ${isDark ? 'bg-vh-dark/80 border-white/10 hover:bg-vh-dark/90' : 'bg-[var(--bg-secondary)] border-vh-dark/5 hover:bg-white shadow-vh-dark/5'}`}
            >
              <div className={`font-mono font-black text-4xl md:text-5xl ${item.color} opacity-90`}>
                {item.step}
              </div>
              <div>
                <h3 className={`font-heading text-2xl font-bold mb-3 transition-colors duration-300 ${isDark ? 'text-white group-hover/card:text-vh-cyan' : 'text-vh-dark group-hover/card:text-vh-purple'}`}>
                  {item.title}
                </h3>
                <p className={`text-lg font-medium ${isDark ? 'text-vh-light/80' : 'text-vh-dark/60'}`}>
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
