import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

const faqs = [
  {
    question: "Quanto tempo demora para meu site ficar pronto?",
    answer: "Depende da complexidade, mas uma Landing Page focada em conversão geralmente fica pronta entre 7 a 15 dias úteis, após o envio de todo o material necessário."
  },
  {
    question: "Eu preciso pagar mensalidade?",
    answer: "Não cobro mensalidade pela criação. Você paga apenas uma vez pelo projeto. Os únicos custos recorrentes que você terá são a hospedagem e o domínio (que são pagos diretamente às empresas fornecedoras)."
  },
  {
    question: "O site funciona bem no celular?",
    answer: "Com certeza! Hoje mais de 80% dos acessos vêm do celular. Meu processo é 'Mobile-First', garantindo que a experiência em smartphones seja impecável e rápida."
  },
  {
    question: "O que é domínio e hospedagem?",
    answer: "Domínio é o endereço do seu site (ex: www.suaempresa.com.br) e hospedagem é o 'aluguel' do espaço na internet onde os arquivos do site ficam guardados. Se você não tiver, eu te ajudo a configurar tudo."
  },
  {
    question: "Vou conseguir editar o site depois?",
    answer: "Sim! Eu entrego o site estruturado de forma que você ou sua equipe consigam fazer alterações simples de texto e imagens sem depender de um programador para tudo."
  },
  {
    question: "Você faz gestão de tráfego (anúncios) também?",
    answer: "Meu foco total é no Design e Performance do site. No entanto, tenho parceiros de confiança em Fortaleza que fazem gestão de tráfego e posso te indicar para que seu site já nasça com visitas qualificadas."
  }
];

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  isDark: boolean;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick, isDark }) => {
  return (
    <div className={`border-b ${isDark ? 'border-white/10' : 'border-vh-dark/10'}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-xl md:text-2xl font-heading font-bold transition-colors ${isOpen ? 'text-vh-cyan' : isDark ? 'text-white group-hover:text-vh-light' : 'text-vh-dark group-hover:text-vh-purple'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-6 w-10 h-10 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'bg-vh-cyan border-vh-cyan' : isDark ? 'bg-transparent border-white/20' : 'bg-transparent border-vh-dark/20'}`}>
          {isOpen ? <Minus size={18} className={isDark ? 'text-vh-dark' : 'text-white'} /> : <Plus size={18} className={isDark ? 'text-white' : 'text-vh-dark'} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className={`pb-6 text-lg leading-relaxed font-medium max-w-3xl ${isDark ? 'text-vh-light/80' : 'text-vh-dark/60'}`}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="faq" className={`py-24 relative border-t ${isDark ? 'border-white/5' : 'border-vh-dark/5'}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 ${isDark ? 'text-white' : 'text-vh-dark'}`}
          >
            Dúvidas Frequentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`text-lg md:text-xl font-medium max-w-2xl mx-auto ${isDark ? 'text-vh-light/80' : 'text-vh-dark/70'}`}
          >
            Tudo o que você precisa saber antes de começarmos.
          </motion.p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <FaqItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              isDark={isDark}
            />
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center mt-8 font-mono text-[10px] uppercase tracking-widest ${isDark ? 'text-vh-light/30' : 'text-vh-dark/30'}`}
        >
          Ainda tem dúvidas? <a href="https://wa.me/5585999999999" className="text-vh-cyan hover:text-vh-purple transition-colors">Me chama no WhatsApp</a>
        </motion.p>
      </div>
    </section>
  );
};
