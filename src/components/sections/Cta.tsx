import { motion } from 'motion/react';
import { CTAButton } from '@/src/components/ui/CTAButton';
import { useTheme } from '@/src/context/ThemeContext';

export const Cta = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className={`pt-24 pb-32 relative overflow-hidden border-t ${isDark ? 'border-white/5' : 'border-vh-dark/5'}`}>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`inline-flex items-center gap-3 font-mono text-sm px-5 py-2.5 rounded-full mb-8 font-bold border ${isDark ? 'bg-vh-lime/10 text-vh-lime border-vh-lime/20' : 'bg-vh-lime/[0.08] text-vh-lime border-vh-lime/30'}`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-vh-lime animate-pulse"></span>
            Agenda aberta para novos projetos
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`font-heading font-black text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight ${isDark ? 'text-white' : 'text-vh-dark'}`}
          >
            O que você ganha adiando?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className={`font-sans text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed ${isDark ? 'text-vh-light/90' : 'text-vh-dark/70'}`}
          >
            Aperta o botão embaixo. Eu te respondo rapidinho, a gente bate um papo sem estresse e você já sai com um plano na cabeça e um valor justo no bolso.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          >
            <CTAButton text="Me manda um WhatsApp" className="w-full sm:w-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
