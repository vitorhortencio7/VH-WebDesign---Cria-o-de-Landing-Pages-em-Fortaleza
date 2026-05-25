import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, LayoutTemplate, Zap } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

export const Proposito = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const helloWorldCodes = [
    'console.log("Hello, World!");',
    'print("Hello, World!")',
    'std::cout << "Hello, World!";',
    'printf("Hello, World\\n");',
    'echo "Hello, World!"',
    'System.out.println("Hello, World!");'
  ];

  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    let timer: any;
    const fullText = helloWorldCodes[currentWordIdx];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(60);

        if (currentText === fullText) {
          setSpeed(1800); // pause at full word
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(30);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % helloWorldCodes.length);
          setSpeed(400); // pause before starting next text
        }
      }
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, speed]);

  const servicesPills = [
    { name: "Branding", color: "border-vh-purple/30 text-vh-purple dark:text-purple-300 dark:border-purple-500/20" },
    { name: "Landing Pages", color: "border-vh-cyan/30 text-vh-cyan dark:text-cyan-300 dark:border-cyan-500/20" },
    { name: "Websites", color: "border-vh-lime/30 text-vh-lime dark:text-lime-300 dark:border-lime-500/20" },
    { name: "UI/UX Design", color: "border-vh-orange/30 text-vh-orange dark:text-orange-300 dark:border-orange-500/20" },
    { name: "Copywriting", color: "border-vh-red/30 text-vh-red dark:text-red-300 dark:border-red-500/20" },
    { name: "SEO Otimizado", color: "border-vh-ochre/30 text-vh-ochre dark:text-yellow-300 dark:border-yellow-500/20" },
    { name: "E-commerce", color: "border-vh-purple/30 text-vh-purple dark:text-purple-300 dark:border-purple-500/20" },
    { name: "Suporte Rápido", color: "border-vh-cyan/30 text-vh-cyan dark:text-cyan-300 dark:border-cyan-500/20" }
  ];

  return (
    <section id="proposito" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-300 bg-transparent">
      {/* Ambient background blur blobs */}
      <div className="absolute top-[15%] right-[2%] w-[330px] h-[330px] rounded-full bg-vh-lime/6 dark:bg-vh-lime/10 blur-[130px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[15%] left-[2%] w-[300px] h-[300px] rounded-full bg-vh-ochre/6 dark:bg-vh-ochre/10 blur-[110px] pointer-events-none select-none z-0" />

      {/* Huge subtle Watermark in background */}
      <div className="absolute top-10 md:top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className={`text-[5rem] sm:text-[9rem] md:text-[20rem] font-black tracking-tight leading-none uppercase select-none ${isDark ? 'text-zinc-900/15' : 'text-zinc-200/35'}`}>
          Nacional
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Hello Banner Pitch */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-mono text-[11px] px-4 py-2 rounded-full mb-8 font-black flex items-center justify-center gap-1.5 shadow-xs transition-colors border ${
              isDark 
                ? 'bg-zinc-900/80 text-cyan-400 border-zinc-800' 
                : 'bg-white text-[#0088CC] border-zinc-200/80'
            }`}
          >
            <span>{currentText}</span>
            <span className="w-1.5 h-3 bg-current animate-pulse shrink-0" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.12] mb-12 tracking-tight ${isDark ? 'text-white' : 'text-zinc-900'}`}
          >
            Seu negócio merece mais do que um template lento do Wix. Nós criamos <span className="bg-gradient-to-r from-vh-cyan to-vh-purple bg-clip-text text-transparent">sites rápidos</span>, <span className="bg-gradient-to-r from-vh-purple to-vh-red bg-clip-text text-transparent">com tudo incluso</span> e focados no seu faturamento.
          </motion.h2>

          {/* Service pill links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl"
          >
            {servicesPills.map((pill, idx) => (
              <span 
                key={idx}
                className={`px-4 py-2 text-[10px] font-mono tracking-widest font-extrabold uppercase rounded-full border transition-all ${pill.color} bg-white/5`}
              >
                {pill.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Dynamic Card Presentation of features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16">
          {[
            {
              icon: <Zap size={24} className="text-vh-cyan" />,
              title: "Velocidade Absoluta",
              desc: "Páginas ultrarrápidas que carregam em menos de 1 segundo para reter todo visitante. Cada milissegundo a mais de lentidão custa vendas reais para o seu negócio.",
              hoverGlow: "hover:border-vh-cyan/40 hover:shadow-[0_10px_35px_rgba(0,170,238,0.1)]"
            },
            {
              icon: <ShieldCheck size={24} className="text-vh-purple" />,
              title: "Infraestrutura Sem Surpresas",
              desc: "Domínio próprio, servidores profissionais de ponta e segurança SSL inclusos por 1 ano completo. Sem taxas picadas mensais surpresa flutuando na fatura.",
              hoverGlow: "hover:border-vh-purple/40 hover:shadow-[0_10px_35px_rgba(123,31,204,0.1)]"
            },
            {
              icon: <LayoutTemplate size={24} className="text-vh-orange" />,
              title: "Design Focado em Resultados",
              desc: "Interfaces limpas e inteligentes criadas do zero para guiar o olhar de forma natural. Seu visitante é atraído e levado direto para o botão do seu WhatsApp.",
              hoverGlow: "hover:border-vh-orange/40 hover:shadow-[0_10px_35px_rgba(255,140,0,0.1)]"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`p-8 rounded-3xl border text-left transition-all hover:translate-y-[-4px] duration-300 ${
                isDark 
                  ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900/85' 
                  : 'bg-[#F2F2F0] border-zinc-200/60 hover:bg-white'
              } ${item.hoverGlow}`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-6 ${isDark ? 'bg-zinc-800 border-zinc-700/50' : 'bg-white border-zinc-200 shadow-xs'}`}>
                {item.icon}
              </div>
              <h3 className={`font-heading text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-zinc-950'}`}>{item.title}</h3>
              <p className={`text-sm leading-relaxed font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
