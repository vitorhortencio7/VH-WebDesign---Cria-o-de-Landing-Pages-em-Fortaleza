import { motion } from 'motion/react';
import { CTAButton } from '@/src/components/ui/CTAButton';

export const MidCta = () => {
  return (
    <section className="py-24 bg-vh-red relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="font-heading font-black text-3xl md:text-4xl text-white mb-2 leading-tight"
            >
              Gostou do que viu até aqui?
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="text-white/80 text-lg font-medium"
            >
              Não deixe sua ideia morrer no papel. Vamos colocar sua página no ar hoje.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CTAButton text="Falar com o Vitor" variant="dark" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
