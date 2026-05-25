import { motion } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '@/src/constants';
import { useTheme } from '@/src/context/ThemeContext';
import { TerminalTyping } from '@/src/components/ui/TerminalTyping';

export const Metodo = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const steps = [
    { 
      step: "01", 
      title: "O Bate-Papo Rápido", 
      desc: "A gente alinha tudo pelo WhatsApp. Você compartilha seu material e me diz exatamente o objetivo principal da sua marca e público-alvo.", 
      color: "text-vh-purple dark:text-purple-300",
      hoverColor: "hover:border-vh-purple/40 hover:shadow-[0_8px_30px_rgba(123,31,204,0.08)]"
    },
    { 
      step: "02", 
      title: "Design & Mobile-First", 
      desc: "Construo uma interface criativa, sob medida, 100% otimizada para a tela do celular do seu cliente — rápido, leve e irresistivelmente simples.", 
      color: "text-vh-cyan dark:text-cyan-300",
      hoverColor: "hover:border-vh-cyan/40 hover:shadow-[0_8px_30px_rgba(0,170,238,0.08)]"
    },
    { 
      step: "03", 
      title: "Colocando no Ar", 
      desc: "Site publicado, carregando voando baixo, com o botão configurado indo direto para o seu WhatsApp comercial ou CRM de vendas.", 
      color: "text-vh-lime dark:text-lime-300",
      hoverColor: "hover:border-vh-lime/40 hover:shadow-[0_8px_30px_rgba(141,198,63,0.08)]"
    }
  ];

  return (
    <section id="solucao" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-300 bg-transparent">
      {/* Background ambient lighting of brand colors */}
      <div className="absolute top-[25%] left-[2%] w-[250px] h-[250px] rounded-full bg-vh-purple/6 dark:bg-vh-purple/10 blur-[100px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[25%] right-[2%] w-[270px] h-[270px] rounded-full bg-vh-cyan/6 dark:bg-vh-cyan/10 blur-[110px] pointer-events-none select-none z-0" />

      {/* Background Watermark */}
      <div className="absolute top-10 md:top-20 left-1/4 select-none pointer-events-none z-0">
        <span className={`text-[5rem] sm:text-[10rem] md:text-[20rem] font-black tracking-tight leading-none uppercase ${isDark ? 'text-zinc-900/10' : 'text-zinc-200/30'}`}>
          Método
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
        
        {/* Left Side: Pitch Title */}
        <div className="lg:w-2/5 lg:sticky lg:top-32 flex flex-col items-start">
          <TerminalTyping 
            phrases={["(como eu trabalho)", "npm run project:build", "git push origin master", "vitor.getWorkflow()"]} 
            isDark={isDark} 
          />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1] tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}
          >
            Descomplica.<br/>Sem termos técnicos chatos.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-base md:text-lg leading-relaxed mb-8 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}
          >
            Não espere jargões de programação chatos, dor de cabeça com servidores ou noites mal dormidas tentando configurar o próprio domínio. Eu cuido de toda a criação do seu site, te entrego pronto para vender e disponibilizo 1 ano inteiro de hospedagem de alta performance sem nenhuma mensalidade pendurada no seu cartão.
          </motion.p>
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer" 
              className={`inline-flex items-center gap-2 font-mono text-xs uppercase font-black transition-colors tracking-widest group ${isDark ? 'text-cyan-400 hover:text-white' : 'text-zinc-800 hover:text-cyan-600'}`}
            >
              Iniciar Meu Projeto <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Process Cards block */}
        <div className="lg:w-3/5 w-full grid gap-6">
          {steps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 ${isDark ? 'bg-zinc-900/40 border-zinc-800/80' : 'bg-[#F2F2F0] border-zinc-200/60 hover:bg-white'} ${item.hoverColor}`}
            >
              <div className={`font-mono font-black text-3.5xl md:text-4.5xl ${item.color} opacity-90 shrink-0`}>
                {item.step}
              </div>
              <div className="space-y-2">
                <h3 className={`font-heading text-xl md:text-2xl font-bold ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm md:text-base leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
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
