import { WHATSAPP_LINK } from '@/src/constants';
import { useTheme } from '@/src/context/ThemeContext';

export const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <footer className={`py-12 border-t relative z-10 font-mono text-sm transition-colors ${isDark ? 'bg-[#09091A] border-white/5 text-vh-light/60' : 'bg-slate-50 border-vh-dark/5 text-vh-dark/50'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 opacity-90">
          <img 
            src="/wireframe - 2.jpeg" 
            alt="VH Logo" 
            className="h-8 w-auto"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className={`font-sans font-medium text-base ${isDark ? 'text-white' : 'text-vh-dark'}`}>Vitor Hortêncio © {new Date().getFullYear()}</span>
        </div>
        <div className="flex gap-6 items-center text-base">
          <span className="font-sans">Fortaleza, CE</span>
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-vh-light/20' : 'bg-vh-dark/10'}`}></span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-vh-cyan transition-colors font-bold">Instagram</a>
          <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-vh-light/20' : 'bg-vh-dark/10'}`}></span>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-vh-lime transition-colors font-bold">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
};
