import React from 'react';

interface ImagemBrancaProps {
  numero: string | number;
  className?: string;
}

export const ImagemBranca: React.FC<ImagemBrancaProps> = ({ numero, className = "" }) => (
  <div className={`bg-white text-[#1A1A3E] flex items-center justify-center font-heading font-black text-3xl shadow-xl overflow-hidden ${className}`}>
    IMAGEM {numero}
  </div>
);
