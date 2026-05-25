import React, { useState, useEffect } from 'react';

interface TerminalTypingProps {
  phrases: string[];
  isDark: boolean;
}

export const TerminalTyping: React.FC<TerminalTypingProps> = ({ phrases, isDark }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = phrases[currentIdx];

    const handleType = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setSpeed(50); // Typing speed

        if (currentText === fullText) {
          setSpeed(2000); // Wait on full word
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setSpeed(25); // Erasing speed

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIdx((prev) => (prev + 1) % phrases.length);
          setSpeed(350); // Pause before next text
        }
      }
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIdx, speed, phrases]);

  return (
    <div 
      className={`font-mono text-[11px] px-4 py-2 rounded-full mb-8 font-black flex items-center justify-center gap-1.5 shadow-sm transition-colors border select-none ${
        isDark 
          ? 'bg-zinc-900/80 text-cyan-400 border-zinc-800' 
          : 'bg-white text-[#0088CC] border-zinc-200/80'
      }`}
    >
      <span>{currentText}</span>
      <span className="w-1.5 h-3 bg-current animate-pulse shrink-0" />
    </div>
  );
};
