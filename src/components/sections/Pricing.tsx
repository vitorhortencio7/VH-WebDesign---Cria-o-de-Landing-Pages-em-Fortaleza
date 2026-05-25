import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, X, ArrowRight, Sparkles, AlertCircle, HelpCircle } from 'lucide-react';
import { useTheme } from '@/src/context/ThemeContext';
import { WHATSAPP_LINK } from '@/src/constants';
import { TerminalTyping } from '@/src/components/ui/TerminalTyping';

// Define Plan types
type PlanId = 'start' | 'completo' | 'premium';

interface ExtraOption {
  id: 'gmb' | 'analytics';
  title: string;
  price: number;
  description: string;
  detailedDesc: string;
}

export const Pricing = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Selected plan state for interactive customizer (defaults to best-value: completo)
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('completo');
  
  // Extra options states
  const [extras, setExtras] = useState({
    gmb: false,
    analytics: false,
  });

  const toggleExtra = (id: 'gmb' | 'analytics') => {
    setExtras(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Extras configuration data
  const extraOptions: ExtraOption[] = [
    {
      id: 'gmb',
      title: 'Configuração do Perfil Google Meu Negócio',
      price: 99,
      description: 'Sua empresa no mapa do Google.',
      detailedDesc: 'Apareça para clientes locais que pesquisarem pelos seus serviços diretamente no Google Maps e na sua região em Fortaleza.'
    },
    {
      id: 'analytics',
      title: 'Indexação Avançada e Google Analytics GA4',
      price: 99,
      description: 'Indexação imediata e rastreamento total de tráfego.',
      detailedDesc: 'Cadastro nos servidores do Google Search Console e integração profissional com painel do GA4 para mapeamento total.'
    }
  ];

  // Dynamic values calculation for selected plan + extras
  const getCalculatedTotal = () => {
    const extrasTotal = (extras.gmb ? 99 : 0) + (extras.analytics ? 99 : 0);
    
    if (selectedPlan === 'start') {
      const base = 199;
      const total = base + extrasTotal;
      return {
        base: 'R$ 199 / ano',
        type: 'Assinatura Anual',
        extras: extrasTotal > 0 ? `+ R$ ${extrasTotal} opcionais` : null,
        total: `R$ ${total}`,
        alternative: 'Assinatura anual',
        description: 'Sua Landing page profissional com renovação facilitada na hospedagem.'
      };
    } else if (selectedPlan === 'completo') {
      const basePIX = 699.90;
      const totalPIX = basePIX + extrasTotal;
      // 12x of 64.15 is 769.80 base
      const totalCard = 769.80 + extrasTotal;
      const monthlyCard = (totalCard / 12).toFixed(2).replace('.', ',');
      
      return {
        base: '12x de R$ 64,15',
        type: 'ou R$ 699,90 à vista',
        extras: extrasTotal > 0 ? `+ R$ ${extrasTotal} opcionais` : null,
        total: `12x de R$ ${monthlyCard}`,
        alternative: `ou R$ ${totalPIX.toFixed(2).replace('.', ',')} à vista via PIX`,
        description: 'Assinatura anual. Renovação facilitada após o 1º ano por apenas R$ 199/ano (avisamos com 3 meses de antecedência).'
      };
    } else {
      return {
        base: 'Sob Consulta',
        type: 'Orçamento Personalizado',
        extras: null,
        total: 'A consultar',
        alternative: 'Baseado no seu escopo específico',
        description: 'Licença e suporte continuados por apenas R$ 199/ano após o primeiro ano.'
      };
    }
  };

  // Generated dynamic WhatsApp url based on active selection
  const getDynamicWhatsAppUrl = () => {
    const planNames: Record<PlanId, string> = {
      start: 'Plano Start (Design de Landing Page por R$ 199 / ano)',
      completo: 'Plano Completo WaaS (Hospedagem inclusa por 12x de R$ 64,15 ou R$ 699,90 à vista)',
      premium: 'Plano Premium Comercial (Institucional Completo - Orçamento Sob Consulta)'
    };
    
    let baseMsg = `Olá Vitor! Estive analisando o seu site e gostaria de conversar sobre o *${planNames[selectedPlan]}*.`;
    
    const selectedExtras: string[] = [];
    if (extras.gmb) selectedExtras.push('Google Meu Negócio (+ R$ 99)');
    if (extras.analytics) selectedExtras.push('Analytics e Indexação Avançada Google (+ R$ 99)');
    
    if (selectedExtras.length > 0) {
      baseMsg += `\n\nTambém me interessei por estes opcionais de otimização:\n- ${selectedExtras.join('\n- ')}`;
    }
    
    const totalInfo = getCalculatedTotal();
    if (selectedPlan !== 'premium') {
      baseMsg += `\n\n*Investimento Estimado:* ${totalInfo.total} ${totalInfo.alternative ? '\n' + totalInfo.alternative : ''}\n\n_Note: ${totalInfo.description}_`;
    } else {
      baseMsg += `\n\nGostaria de obter um escopo personalizado e orçamento customizado para o meu negócio.`;
    }
    
    return `${WHATSAPP_LINK}&text=${encodeURIComponent(baseMsg)}`;
  };

  const selectedTotal = getCalculatedTotal();

  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden transition-colors duration-300 bg-transparent">
      {/* Background ambient lighting of brand colors */}
      <div className="absolute top-[30%] left-[2%] w-[290px] h-[290px] rounded-full bg-vh-cyan/4 dark:bg-vh-cyan/8 blur-[130px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-[20%] right-[2%] w-[330px] h-[330px] rounded-full bg-vh-purple/4 dark:bg-vh-purple/8 blur-[140px] pointer-events-none select-none z-0" />

      {/* Background Watermark */}
      <div className="absolute top-10 md:top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0">
        <span className={`text-[5rem] sm:text-[10rem] md:text-[20rem] font-black tracking-tight leading-none uppercase ${isDark ? 'text-zinc-900/10' : 'text-zinc-200/25'}`}>
          Tabelas
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Header Title */}
        <div className="mb-24 flex flex-col items-center">
          <TerminalTyping 
            phrases={["(pricing_optimizations)", "grep -r 'goldilocks_prices'", "npm run simulate:rates", "cat rate_chart.json"]} 
            isDark={isDark} 
          />
          <motion.h2 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className={`font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tight max-w-4xl ${isDark ? 'text-white' : 'text-zinc-950'}`}
          >
            Investimento Inteligente. Retorno Garantido.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className={`text-md max-w-2xl mt-4 font-medium leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-700'}`}
          >
            Escolha o modelo perfeito para o momento da sua empresa. Adote o formato inteligente Website as a Service (WaaS) ou adquira seu produto em modelo tradicional. Sem burocracias ou letras miúdas.
          </motion.p>
        </div>

        {/* Dynamic Plan Selection Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4 md:px-6 text-left relative z-10 items-stretch mb-20">
          
          {/* Card 1: Start Plan (Simples / Independente) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onClick={() => setSelectedPlan('start')}
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative cursor-pointer group ${
              selectedPlan === 'start'
                ? isDark
                  ? 'bg-zinc-900 border-vh-cyan/60 scale-[1.01] shadow-[0_20px_50px_rgba(0,170,238,0.15)]'
                  : 'bg-white border-vh-cyan/60 scale-[1.01] shadow-[0_20px_50px_rgba(0,170,238,0.08)]'
                : isDark
                  ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700 hover:scale-[1.01]'
                  : 'bg-[#F2F2F0]/85 border-zinc-200 hover:bg-white hover:border-zinc-350 hover:scale-[1.01]'
            }`}
          >
            {selectedPlan === 'start' && (
              <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest font-black uppercase text-vh-cyan flex items-center gap-1.5 py-1 px-2.5 bg-vh-cyan/10 border border-vh-cyan/30 rounded-full animate-pulse">
                <span className="w-1.5 h-1.5 bg-vh-cyan rounded-full"></span> ATIVO NO ORÇAMENTO
              </span>
            )}

            <div>
              <div className="mb-6 flex justify-between items-center">
                <span className={`font-mono text-[10px] uppercase tracking-widest font-black ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  01 // Para quem sabe se virar
                </span>
              </div>
              
              <h3 className={`font-heading text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-zinc-950'}`}>Plano Start</h3>
              <p className={`text-xs mb-8 font-medium h-10 overflow-hidden leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Desenvolvimento da Landing Page estruturada e envio do código final. Total autonomia de hospedagem.
              </p>
              
              {/* Price Anchoring */}
              <div className="mb-6 min-h-[95px] flex flex-col justify-center">
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className={`text-4xl lg:text-[2.5rem] font-heading font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                    R$ 199
                  </span>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                    / ano
                  </span>
                </div>
                <div className={`text-xs font-mono font-black uppercase tracking-wider mt-1.5 ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  Assinatura anual recorrente
                </div>
                <div className={`text-[11px] font-medium leading-relaxed mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Renovação após o 1º ano por apenas R$ 199/ano. Avisamos com 3 meses de antecedência para facilitar.
                </div>
              </div>

              {/* Benefits list */}
              <div className="border-t border-zinc-200/20 dark:border-zinc-800/60 pt-6 mt-6">
                <ul className="space-y-4 text-xs font-medium">
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Criação de Landing Page de Alta Conversão</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Layout 100% Responsivo e Otimizado</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Otimização de SEO Técnico Básica</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>1 Rodada de Ajustes (via Dossiê Único)</span>
                  </li>
                  {/* Negative Feature for Plano Start */}
                  <li className="flex gap-2.5 items-center opacity-45">
                    <X size={14} className="text-zinc-400 dark:text-zinc-600 shrink-0" />
                    <span className={`line-through ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Hospedagem inclusa (Cliente configura domínio e DNS)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan('start');
                  setTimeout(() => {
                    const el = document.getElementById('extras-customizer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`w-full text-center py-3.5 font-mono text-[11px] uppercase font-black tracking-widest rounded-xl transition-all cursor-pointer ${
                  selectedPlan === 'start'
                    ? 'bg-vh-cyan text-zinc-950 font-black shadow-[0_4px_15px_rgba(0,170,238,0.25)]'
                    : isDark 
                      ? 'bg-zinc-800 text-white hover:bg-zinc-750' 
                      : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'
                }`}
              >
                {selectedPlan === 'start' ? 'Selecionado' : 'Quero o Plano Start'}
              </button>
            </div>
          </motion.div>

          {/* Card 2: Plano Completo / WaaS (CARRO-CHEFE / GOLDILOCKS DESTAQUE MÁXIMO) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => setSelectedPlan('completo')}
            className={`p-8 lg:p-10 rounded-3xl border-2 flex flex-col justify-between transition-all duration-300 relative lg:-translate-y-4 cursor-pointer group ${
              selectedPlan === 'completo'
                ? isDark
                  ? 'bg-zinc-950 border-vh-purple shadow-[0_25px_60px_rgba(123,31,204,0.25)] pointer-events-auto scale-[1.03] dark:bg-zinc-950/98'
                  : 'bg-white border-vh-purple shadow-[0_25px_60px_rgba(123,31,204,0.12)] pointer-events-auto scale-[1.03]'
                : isDark
                  ? 'border-vh-purple/50 bg-zinc-900/80 hover:bg-zinc-900 hover:scale-[1.02] hover:border-vh-purple/80 shadow-[0_15px_30px_rgba(123,31,204,0.06)] scale-[1.01]'
                  : 'border-vh-purple/30 bg-[#F2F2F0] hover:bg-white hover:scale-[1.02] hover:border-vh-purple/70 shadow-[0_15px_30px_rgba(123,31,204,0.03)] scale-[1.01]'
            }`}
          >
            {/* Visual Goldilocks Ribbon Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-vh-orange via-vh-purple to-vh-cyan text-white font-mono text-[9px] uppercase tracking-widest font-black px-5 py-1.5 rounded-full shadow-[0_4px_15px_rgba(123,31,204,0.4)] flex items-center gap-1">
              <Sparkles size={10} className="animate-spin text-yellow-300" /> MELHOR CUSTO-BENEFÍCIO
            </div>

            <div>
              <div className="mb-6 flex justify-between items-center mt-2">
                <span className="font-mono text-[10px] uppercase tracking-widest font-black text-vh-lime">
                  02 // Carro-Chefe sem complicações
                </span>
                
                {selectedPlan === 'completo' && (
                  <span className="text-[9px] font-mono tracking-widest font-black uppercase text-vh-lime flex items-center gap-1.5 py-1 px-2.5 bg-vh-lime/10 border border-vh-lime/20 rounded-full">
                    <span className="w-1.5 h-1.5 bg-vh-lime rounded-full"></span> ATIVO
                  </span>
                )}
              </div>
              
              <h3 className={`font-heading text-3xl font-black mb-1 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                Plano Completo
              </h3>
              <p className={`text-xs mb-8 font-medium h-10 leading-relaxed ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                A solução inteligente em WaaS (Website as a Service). Coloque seu marketing digital no piloto automático perpétuo.
              </p>
              
              {/* Massive Price Anchoring with Goldilocks scale */}
              <div className="mb-6 min-h-[95px] flex flex-col justify-center">
                <div className={`flex flex-wrap items-baseline gap-1.5 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'text-zinc-400' : 'text-zinc-500'} self-center`}>12x de</span>
                  <span className="text-4xl lg:text-[2.75rem] font-heading font-black tracking-tight text-vh-cyan">
                    R$ 64,15
                  </span>
                  <span className={`text-[10px] font-mono font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'} ml-1`}>(no cartão)</span>
                </div>
                <div className="text-xs font-mono font-black uppercase tracking-wider text-vh-lime mt-1.5">
                  ou R$ 699,90 à vista (via PIX)
                </div>
                <div className={`text-[11px] font-medium leading-relaxed mt-1 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  Assinatura anual. Renovação facilitada após o 1º ano por apenas R$ 199/ano (avisamos com 3 meses de antecedência).
                </div>
              </div>

              {/* Benefits list */}
              <div className={`border-t pt-6 mt-6 ${isDark ? 'border-zinc-800/80' : 'border-zinc-200'}`}>
                <ul className="space-y-4 text-xs font-medium">
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-lime/90 shrink-0" />
                    <span className={`${isDark ? 'text-zinc-100' : 'text-zinc-900'} font-bold`}>Tudo do Plano Start Incluso</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-200' : 'text-zinc-700'}>Domínio Próprio Grátis (.com.br ou .com) no 1º ano</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-200' : 'text-zinc-700'}>Hospedagem Profissional de Altíssima Velocidade</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-200' : 'text-zinc-700'}>Até 4 Rodadas de Ajustes e Revisões de Design</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-cyan shrink-0" />
                    <span className={isDark ? 'text-zinc-200' : 'text-zinc-700'}>Suporte Técnico Permanente & Manutenção Vitalícia</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan('completo');
                  setTimeout(() => {
                    const el = document.getElementById('extras-customizer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="w-full text-center py-4 font-mono text-[11px] uppercase font-black tracking-widest bg-gradient-to-r from-vh-purple via-vh-cyan to-vh-lime text-white rounded-xl shadow-[0_5px_22px_rgba(123,31,204,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                {selectedPlan === 'completo' ? '✓ Plano Selecionado' : 'Assinar Plano Completo'}
              </button>
            </div>
          </motion.div>

          {/* Card 3: Plano Premium (Expandido / Institucional) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onClick={() => setSelectedPlan('premium')}
            className={`p-8 rounded-3xl border flex flex-col justify-between transition-all duration-300 relative cursor-pointer group ${
              selectedPlan === 'premium'
                ? isDark
                  ? 'bg-zinc-900 border-vh-purple/60 scale-[1.01] shadow-[0_20px_50px_rgba(123,31,204,0.15)]'
                  : 'bg-white border-vh-purple/60 scale-[1.01] shadow-[0_20px_50px_rgba(123,31,204,0.08)]'
                : isDark
                  ? 'bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700 hover:scale-[1.01]'
                  : 'bg-[#F2F2F0]/85 border-zinc-200 hover:bg-white hover:border-zinc-350 hover:scale-[1.01]'
            }`}
          >
            {selectedPlan === 'premium' && (
              <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest font-black uppercase text-vh-purple flex items-center gap-1.5 py-1 px-2.5 bg-vh-purple/10 border border-vh-purple/30 rounded-full animate-pulse">
                <span className="w-1.5 h-1.5 bg-vh-purple rounded-full"></span> ATIVO NO ORÇAMENTO
              </span>
            )}

            <div>
              <div className="mb-6 flex justify-between items-center">
                <span className={`font-mono text-[10px] uppercase tracking-widest font-black ${isDark ? 'text-zinc-500' : 'text-zinc-500'}`}>
                  03 // Empresas em expansão
                </span>
              </div>
              
              <h3 className={`font-heading text-2xl font-black mb-1 ${isDark ? 'text-white' : 'text-zinc-950'}`}>Plano Premium</h3>
              <p className={`text-xs mb-8 font-medium h-10 overflow-hidden leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                Desenvolvimento institucional multi-páginas para empresas robustas e consolidadas.
              </p>
              
              {/* Price Anchoring */}
              <div className="mb-6 min-h-[95px] flex flex-col justify-center">
                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl lg:text-4xl font-heading font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                    Sob Consulta
                  </span>
                </div>
                <div className={`text-xs font-mono font-black uppercase tracking-wider mt-1.5 ${isDark ? 'text-vh-purple' : 'text-vh-purple'}`}>
                  Orçamento Personalizado
                </div>
                <div className={`text-[11px] font-medium leading-relaxed mt-1 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  Escopo sob medida para o seu projeto. Renovação após o 1º ano por apenas R$ 199/ano (avisamos com 3 meses de antecedência).
                </div>
              </div>

              {/* Benefits list */}
              <div className="border-t border-zinc-200/20 dark:border-zinc-800/60 pt-6 mt-6">
                <ul className="space-y-4 text-xs font-medium">
                  <li className="flex gap-2.5 items-center font-bold">
                    <Check size={14} className="text-vh-purple shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Site Multi-páginas (Até 5 páginas completas)</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-purple shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>SEO Avançado Especializado Estruturado</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-purple shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Hospedagem Dedicada Privativa de Alta Performance</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-purple shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Integrações Complexas completas (CRMs, ERP)</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <Check size={14} className="text-vh-purple shrink-0" />
                    <span className={isDark ? 'text-zinc-300' : 'text-zinc-700'}>Suporte Tecnico VIP com canal rápido</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPlan('premium');
                  setTimeout(() => {
                    const el = document.getElementById('extras-customizer');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className={`w-full text-center py-3.5 font-mono text-[11px] uppercase font-black tracking-widest rounded-xl transition-all cursor-pointer ${
                  selectedPlan === 'premium'
                    ? 'bg-vh-purple text-white font-black shadow-[0_4px_15px_rgba(123,31,204,0.25)]'
                    : isDark 
                      ? 'bg-zinc-800 text-white hover:bg-zinc-750' 
                      : 'bg-zinc-200 text-zinc-900 hover:bg-zinc-300'
                }`}
              >
                {selectedPlan === 'premium' ? 'Selecionado' : 'Falar com Consultor'}
              </button>
            </div>
          </motion.div>

        </div>

        {/* --- EXTRA SECTION: ADDITIONAL UPSELL SYSTEM & DYNAMIC TOTAL --- */}
        <div id="extras-customizer" className="mt-32 max-w-4xl mx-auto scroll-mt-24 text-left relative z-10 transition-colors duration-300">
          
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest uppercase font-black text-vh-purple bg-vh-purple/10 border border-vh-purple/20 px-3 py-1 rounded-full">
              ⚡ Otimização de Alcance Local
            </span>
            <h3 className={`font-heading font-black text-2xl md:text-3xl tracking-tight mt-4 ${isDark ? 'text-white' : 'text-zinc-950'}`}>
              Turbine seu projeto (Serviços Opcionais)
            </h3>
            <p className={`text-xs max-w-lg mx-auto mt-2 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Ative estes componentes opcionais de Marketing de Proximidade e indexação direta nos servidores de busca principais do Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {extraOptions.map((opt) => {
              const infoSelected = opt.id === 'gmb' ? extras.gmb : extras.analytics;
              return (
                <div 
                  key={opt.id}
                  onClick={() => toggleExtra(opt.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer select-none group relative overflow-hidden ${
                    infoSelected 
                      ? isDark 
                        ? 'bg-zinc-900 border-vh-purple/60 shadow-[0_4px_25px_rgba(123,31,204,0.12)]' 
                        : 'bg-white border-vh-purple/60 shadow-[0_4px_25px_rgba(123,31,204,0.06)]'
                      : isDark
                        ? 'bg-zinc-900/20 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60'
                        : 'bg-[#F2F2F0]/50 border-zinc-200 hover:border-zinc-350 hover:bg-white'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <h4 className={`font-heading font-black text-sm lg:text-base ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                        {opt.title}
                      </h4>
                      <span className="text-xs font-mono font-black text-vh-orange bg-vh-orange/10 px-2 py-0.5 rounded-md shrink-0">
                        + R$ {opt.price}
                      </span>
                    </div>
                    <p className={`text-xs font-medium leading-relaxed ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                      {opt.detailedDesc}
                    </p>
                  </div>
                  
                  {/* Premium customized iOS animated toggle switch using pure Tailwind + inline flex */}
                  <div 
                    className={`w-11 h-6 rounded-full p-0.5 transition-colors duration-300 shrink-0 mt-1 flex items-center ${
                      infoSelected ? 'bg-[#7B1FCC]' : isDark ? 'bg-zinc-800' : 'bg-zinc-300'
                    }`}
                  >
                    <div 
                      className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-out ${
                        infoSelected ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* DYNAMIC VALUATION OUTLINE (Interactive live builder checkout card) */}
          <motion.div 
            layout
            className={`p-6 md:p-8 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden ${
              isDark 
                ? 'bg-zinc-950 border-zinc-900/90 shadow-[0_15px_40px_rgba(0,0,0,0.6)]' 
                : 'bg-white border-zinc-200 shadow-[0_15px_40px_rgba(7B,1F,CC,0.04)]'
            }`}
          >
            {/* Ambient subtle light leak inside calculator */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-vh-purple/5 dark:bg-vh-purple/8 blur-[90px] pointer-events-none select-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div>
                <span className={`text-[10px] font-mono tracking-widest uppercase font-black ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  🛒 ORÇAMENTO INTERATIVO PERSONALIZADO
                </span>
                <div className="flex items-center gap-2 mt-2">
                  <h4 className={`text-xl font-heading font-black tracking-tight ${isDark ? 'text-white' : 'text-zinc-950'}`}>
                    {selectedPlan === 'start' ? 'Plano Start Customizado' : selectedPlan === 'completo' ? 'Plano Completo Customizado' : 'Plano Premium Customizado'}
                  </h4>
                  <span className="px-2 py-0.5 text-[9px] font-mono uppercase bg-vh-purple/10 text-vh-purple font-bold border border-vh-purple/20 rounded-sm">
                    {selectedPlan.toUpperCase()}
                  </span>
                </div>
                <p className={`text-xs mt-1.5 font-medium leading-relaxed max-w-xl ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Base: {selectedPlan === 'start' ? 'R$ 199 / ano (Hospedagem à parte)' : selectedPlan === 'completo' ? '12x de R$ 64,15 ou R$ 699,90 à vista (Hospedagem inclusa)' : 'Sob Consulta (Valores estruturados sob orçamento de escopo)'}
                  {(extras.gmb || extras.analytics) && (
                    <span className="text-vh-purple font-bold">
                      {' '} + opcionais selecionados (+R$ {(extras.gmb ? 99 : 0) + (extras.analytics ? 99 : 0)})
                    </span>
                  )}
                </p>
              </div>

              {/* Dynamic Cost Anchor Section */}
              <div className="text-left md:text-right shrink-0">
                <span className={`text-[10px] font-mono tracking-widest font-black block mb-0.5 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  INVESTIMENTO ESTIMADO
                </span>
                <div className="flex items-baseline md:justify-end gap-1.5">
                  <span className="text-3xl md:text-4xl font-heading font-black tracking-tight text-vh-cyan">
                    {selectedTotal.total}
                  </span>
                </div>
                <span className={`text-xs font-mono font-bold block mt-1 ${isDark ? 'text-vh-lime' : 'text-vh-lime/90'}`}>
                  {selectedTotal.alternative || selectedTotal.description}
                </span>
              </div>
            </div>

            {/* Form CTA Redirecting directly to custom pre-filled Whatsapp */}
            <div className="mt-8 pt-6 border-t border-zinc-200/20 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <AlertCircle size={14} className="text-vh-orange shrink-0 animate-bounce" />
                <span className={isDark ? 'text-zinc-400' : 'text-zinc-600'}>
                  Clique no botão para contratar ou tirar dúvidas com Vitor pelo WhatsApp
                </span>
              </div>

              <a 
                href={getDynamicWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto text-center px-10 py-4 font-mono text-xs uppercase font-black tracking-widest bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all block shadow-[0_5px_15px_rgba(16,185,129,0.3)] select-none cursor-pointer"
              >
                Garantir Essa Oferta no WhatsApp →
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
