import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';

export const Cta = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    status: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.status) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Formatting the text for WhatsApp API
      const message = `Olá Vitor! Me chamo *${form.name}*.
Meu WhatsApp/Contato: ${form.phone}

*Qual o meu momento atual:*
"${form.status}"

Gostaria de iniciar um projeto com você!`;

      const encoded = encodeURIComponent(message);
      // Open WhatsApp API
      window.open(`https://wa.me/5585994218128?text=${encoded}`, '_blank');
    }, 1200);
  };

  return (
    <section id="contato" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-300 bg-transparent">
      {/* Background ambient lighting of brand colors */}
      <div className="absolute top-[25%] left-[2%] w-[270px] h-[270px] rounded-full bg-vh-purple/5 dark:bg-vh-purple/10 blur-[110px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[20%] right-[2%] w-[330px] h-[330px] rounded-full bg-vh-orange/4 dark:bg-vh-orange/8 blur-[130px] pointer-events-none select-none z-0" />
      
      {/* Background Watermark */}
      <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className={`text-[5rem] sm:text-[10rem] md:text-[20rem] font-black tracking-tight leading-none uppercase ${isDark ? 'text-zinc-900/10' : 'text-zinc-200/30'}`}>
          Contato
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column Description */}
          <div className="w-full lg:w-5/12 text-left space-y-8 flex flex-col items-start">
            
            {/* Availability Badge */}
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[10px] font-mono font-black uppercase tracking-widest ${
              isDark 
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' 
                : 'bg-emerald-500/5 border-emerald-500/20 text-emerald-600'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>[ Disponível Para Novos Projetos ]</span>
            </div>
            
            <h2 className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              Tem um projeto em mente?<br/>
              Vamos criar algo único juntos.
            </h2>
            
            <p className={`text-sm md:text-base leading-relaxed font-medium max-w-lg ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Preencha os dados ao lado. O formulário vai gerar uma mensagem direta para o meu WhatsApp. É simples, rápido e sem burocracia.
            </p>

            {/* Column Footer: Avatar and Live Pulse */}
            <div className={`flex items-center gap-3.5 pt-4 border-t w-full max-w-md ${isDark ? 'border-zinc-850' : 'border-zinc-200'}`}>
              <div className="relative">
                <img 
                  src="https://i.ibb.co/W4q53XTp/trabalhando.jpg" 
                  alt="Vitor Hortêncio" 
                  className={`w-11 h-11 rounded-full object-cover grayscale contrast-110 border ${isDark ? 'border-zinc-800' : 'border-zinc-300'}`}
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 dark:border-zinc-950 border-white animate-pulse" />
              </div>
              <div className="font-mono text-xs text-left">
                <span className={`block font-black ${isDark ? 'text-zinc-200' : 'text-zinc-800'}`}>
                  Online agora
                </span>
                <span className={`text-[10px] block ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  Resposta média em até 2 horas
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact form box with glassmorphism */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 md:p-12 rounded-3xl border text-left shadow-2xl relative overflow-hidden transition-all duration-300 ${
                isDark 
                  ? 'bg-zinc-900/60 backdrop-blur-xl border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                  : 'bg-white/75 backdrop-blur-xl border-zinc-200/90 shadow-[0_20px_50px_rgba(123,31,204,0.03)]'
              }`}
            >
              <div className="absolute inset-0 bg-noise opacity-3 pointer-events-none"></div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10 font-mono text-xs">
                  
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className={`uppercase tracking-widest font-black ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Nome Completo *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Qual o seu nome?"
                      value={form.name}
                      onChange={(e) => setForm({...form, name: e.target.value})}
                      className={`w-full p-4 rounded-xl text-sm transition-all outline-none border focus:ring-2 ${
                        isDark 
                          ? 'bg-zinc-950 border-zinc-800 text-white focus:border-vh-purple focus:ring-vh-purple/20' 
                          : 'bg-white border-zinc-300 text-zinc-950 focus:border-vh-purple focus:ring-vh-purple/15'
                      }`}
                    />
                  </div>

                  {/* WhatsApp Input */}
                  <div className="space-y-2">
                    <label className={`uppercase tracking-widest font-black ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>WhatsApp de Contato *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="(85) 99999-9999"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      className={`w-full p-4 rounded-xl text-sm transition-all outline-none border focus:ring-2 ${
                        isDark 
                          ? 'bg-zinc-950 border-zinc-800 text-white focus:border-vh-lime focus:ring-vh-lime/20' 
                          : 'bg-white border-zinc-300 text-zinc-950 focus:border-vh-lime focus:ring-vh-lime/15'
                      }`}
                    />
                  </div>

                  {/* Moment Selection */}
                  <div className="space-y-2">
                    <label className={`uppercase tracking-widest font-black ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>Qual o seu momento atual? *</label>
                    <select
                      required
                      value={form.status}
                      onChange={(e) => setForm({...form, status: e.target.value})}
                      className={`w-full p-4 rounded-xl text-sm transition-all outline-none border appearance-none cursor-pointer focus:ring-2 bg-no-repeat ${
                        isDark 
                          ? 'bg-zinc-950 border-zinc-800 text-white focus:border-vh-cyan focus:ring-vh-cyan/20' 
                          : 'bg-white border-zinc-300 text-zinc-950 focus:border-vh-cyan focus:ring-vh-cyan/15'
                      }`}
                      style={{
                        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='grey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>\")",
                        backgroundPosition: 'right 1rem center',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option value="" disabled className={isDark ? 'bg-zinc-900 text-zinc-500' : 'bg-white text-zinc-400'}>Selecione uma opção...</option>
                      <option value="Quero o Plano Start (Landing Page)" className={isDark ? 'bg-zinc-900' : 'bg-white'}>Quero o Plano Start (Landing Page)</option>
                      <option value="Quero o Plano Completo (Assinatura Anual)" className={isDark ? 'bg-zinc-900' : 'bg-white'}>Quero o Plano Completo (Assinatura Anual)</option>
                      <option value="Quero um Site Institucional Premium" className={isDark ? 'bg-zinc-900' : 'bg-white'}>Quero um Site Institucional Premium</option>
                      <option value="Quero apenas tirar uma dúvida" className={isDark ? 'bg-zinc-900' : 'bg-white'}>Quero apenas tirar uma dúvida</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-5 uppercase tracking-wider font-extrabold rounded-xl bg-gradient-to-r from-vh-purple via-[#8B42FF] to-vh-cyan hover:shadow-[0_8px_30px_rgba(139,66,255,0.4)] transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 text-white text-xs sm:text-xs select-none mt-4"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-zinc-200 border-t-transparent animate-spin rounded-full"></span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <MessageCircle size={16} className="shrink-0" />
                        <span>Iniciar Projeto Via WhatsApp</span>
                      </span>
                    )}
                  </motion.button>

                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <CheckCircle2 size={56} className="text-emerald-500 animate-bounce" />
                  <h3 className={`font-heading font-black text-2xl ${isDark ? 'text-white' : 'text-zinc-950'}`}>Formulário Gerado com Sucesso!</h3>
                  <p className={`text-sm tracking-tight ${isDark ? 'text-zinc-400' : 'text-zinc-600'} max-w-sm font-semibold`}>
                    O WhatsApp foi aberto para continuarmos a conversa por lá. Caso não tenha carregado, sinta-se confortável para nos chamar diretamente!
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono uppercase tracking-widest text-vh-purple hover:underline font-black pt-4"
                  >
                    Preencher Formulário Novamente
                  </button>
                </motion.div>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
