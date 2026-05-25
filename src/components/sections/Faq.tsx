import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';
import { WHATSAPP_LINK } from '@/src/constants';
import { TerminalTyping } from '@/src/components/ui/TerminalTyping';

const faqs = [
  {
    question: "Como funcionam as atualizações mensais no Plano Start?",
    answer: "Para que você nunca fique desamparado após o site ir para o ar, o modelo WaaS da VH WebDesign garante suporte contínuo para pequenas modificações. Mensalmente, você pode solicitar ajustes simples (como a troca de uma foto de portfólio, atualização de textos de contato, alteração de horários ou novos links) enviando uma solicitação direta por e-mail ou WhatsApp. Essas atualizações são tratadas de forma prioritária e executadas em até 72 horas úteis."
  },
  {
    question: "E se eu não gostar do design na primeira versão?",
    answer: "Nosso processo de criação é inteiramente colaborativo e estruturado para alinhar expectativas antes de começarmos. Se, mesmo assim, a primeira proposta não ficar exatamente como você imaginou, fique tranquilo: o contrato assegura até duas rodadas completas de revisões gerais para ajustarmos cada elemento estético à perfeição antes do site ir oficialmente ao ar."
  },
  {
    question: "Vou ter custos mensais de alojamento?",
    answer: "Absolutamente não. Toda a hospedagem premium de alta velocidade, segurança SSL integrada e a infraestrutura técnica já estão integralmente inclusas no valor da sua anuidade. Isso elimina faturas flutuantes recorrentes no seu cartão de crédito e a preocupação constante de configurar ou manter servidores ativos."
  },
  {
    question: "Quanto tempo demora para meu site ficar pronto?",
    answer: "A partir do momento em que recebemos os seus materiais fundamentais (como logotipo, fotos iniciais e dados de contato), uma Landing Page de alta performance fica inteiramente pronta para conversão em até 7 dias úteis para o Plano Start, e em até 12 dias úteis para a estrutura multi-páginas do Plano Premium."
  },
  {
    question: "Por que contratar a VH WebDesign ao invés de tentar fazer sozinho no Wix?",
    answer: "O Wix consome dezenas de horas preciosas brigando com templates prontos que carregam de forma extremamente lenta no celular. Ao delegar a criação integral para mim, você alia estética refinada, velocidade absurdamente rápida de carregamento e um copywriting que guia o cliente diretamente ao fechamento, enquanto você foca puro no seu faturamento."
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
    <div className={`border-b border-dashed ${isDark ? 'border-zinc-800' : 'border-zinc-200'}`}>
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-lg md:text-xl font-heading font-bold transition-colors ${isOpen ? 'text-vh-cyan' : isDark ? 'text-white group-hover:text-zinc-300' : 'text-zinc-950 group-hover:text-zinc-700'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-6 w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:text-zinc-950 dark:border-white' : isDark ? 'bg-transparent border-zinc-800 text-zinc-400' : 'bg-transparent border-zinc-300 text-zinc-600'}`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className={`pb-6 text-sm md:text-base leading-relaxed font-semibold ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
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
    <section id="faq" className="py-20 md:py-32 relative transition-colors duration-300 bg-transparent">
      
      {/* Background Watermark */}
      <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className={`text-[5rem] sm:text-[10rem] md:text-[22rem] font-black tracking-tight leading-none uppercase ${isDark ? 'text-zinc-900/10' : 'text-zinc-200/30'}`}>
          Dúvidas
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Upper Title */}
        <div className="text-center mb-24 flex flex-col items-center">
          <TerminalTyping 
            phrases={["(perguntas frequentes)", "help --faq", "cat questions_answers.json", "sh resolve_doubts.sh"]} 
            isDark={isDark} 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl ${isDark ? 'text-white' : 'text-zinc-950'}`}
          >
            Respostas Claras, Sem Entrelinhas
          </motion.h2>
        </div>

        {/* FAQ Accordion items */}
        <div className="space-y-1">
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
          className={`text-center mt-12 font-mono text-[9px] uppercase tracking-widest font-extrabold ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}
        >
          Ainda com dúvidas? <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-vh-cyan hover:text-vh-purple transition-colors">Clique aqui e Me chame no WhatsApp</a>
        </motion.p>
      </div>
    </section>
  );
};
