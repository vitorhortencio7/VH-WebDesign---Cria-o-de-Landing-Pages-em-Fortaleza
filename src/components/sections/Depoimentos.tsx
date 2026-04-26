import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { ImagemBranca } from '@/src/components/ui/ImagemBranca';
import { useTheme } from '@/src/context/ThemeContext';

export const Depoimentos = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="depoimentos" className={`py-24 border-t relative ${isDark ? 'border-white/5' : 'border-vh-dark/5'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 ${isDark ? 'text-white' : 'text-vh-dark'}`}
          >
            A Galera que Confiou na Promessa
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}
            className={`font-sans text-xl font-medium max-w-2xl mx-auto ${isDark ? 'text-vh-light/90' : 'text-vh-dark/70'}`}
          >
            Ajudando a profissionalizar o pequeno e médio empresário local.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              text: '"O Vitor salvou a gente! Antigamente só era panfleto e uns posts perdidos. Nossa mecânica duplicou o agendamento vindo das buscas da internet."',
              name: "Julio Andrade",
              role: "Oficina Automotiva",
              img: 6,
              border: "border-vh-cyan"
            },
            {
              text: '"Eu achava que ter um site pro estúdio de extensão de cílios ia dar muito trabalho. Foi tão rápido que eu nem acreditei. Perfeito."',
              name: "Bia Vasconcelos",
              role: "Clínica de Estética",
              img: 7,
              border: "border-vh-purple",
              highlight: true
            },
            {
              text: '"O design pegou exatamente a essência do meu estúdio. Criativo de ponta, simples onde tem que ser e carrega absurdamente rápido."',
              name: "Marcos Davi",
              role: "Estúdio de Tatuagem",
              img: 8,
              border: "border-vh-orange"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-[24px] relative flex flex-col border transition-all duration-300 ${isDark 
                ? `${item.highlight ? 'bg-gradient-to-b from-vh-dark to-[#241c42] border-vh-purple/30 shadow-lg shadow-vh-purple/10' : 'bg-vh-dark border-white/10'}` 
                : `${item.highlight ? 'bg-white border-vh-purple/20 shadow-xl shadow-vh-purple/5' : 'bg-[var(--bg-secondary)] border-vh-dark/5 shadow-md shadow-vh-dark/5'}`}`}
            >
              <div className="flex gap-1 mb-6 text-vh-ochre">
                <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
              </div>
              <p className={`text-lg font-medium mb-8 flex-grow ${isDark ? 'text-vh-light/90' : 'text-vh-dark/80'}`}>{item.text}</p>
              <div className="flex gap-4 items-center">
                <ImagemBranca numero={item.img} className={`w-14 h-14 rounded-full text-sm shrink-0 border-2 ${item.border}`} />
                <div>
                  <p className={`font-heading font-bold text-lg leading-tight ${isDark ? 'text-white' : 'text-vh-dark'}`}>{item.name}</p>
                  <p className={`text-sm font-mono ${isDark ? 'text-vh-light/60' : 'text-vh-dark/50'}`}>{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
