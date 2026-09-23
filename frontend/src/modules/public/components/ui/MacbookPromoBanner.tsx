import React from 'react';
import { ArrowRight } from 'lucide-react';

export function MacbookPromoBanner(): React.JSX.Element {
  return (
    <section className="container mx-auto px-4 my-10">
      <div className="bg-[#fde8df] dark:bg-amber-950/50 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-sm">
        
        {/* ======================================================== */}
        {/* CONTEÚDO ESQUERDA                                        */}
        {/* ======================================================== */}
        <div className="z-10 max-w-lg mb-8 md:mb-0">
          
          {/* Etiqueta Azul */}
          <span className="inline-block bg-[#2da5f3] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded mb-4 shadow-sm">
            SAVE UP TO $200.00
          </span>

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
            Macbook Pro
          </h2>

          {/* Descrição */}
          <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
            Apple M1 Max Chip, 32GB Unified Memory, 1TB SSD Storage
          </p>

          {/* Botão Shop Now Laranja */}
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs md:text-sm font-bold py-3 px-6 rounded transition-colors shadow-sm"
          >
            SHOP NOW <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* ======================================================== */}
        {/* IMAGEM E CRACHÁ DE PREÇO (DIREITA)                       */}
        {/* ======================================================== */}
        <div className="relative z-10 flex items-center justify-center w-full md:w-1/2 max-w-md">
          
          {/* Crachá Circular Flutuante com Preço ($1999) */}
          <div className="absolute -top-4 left-6 md:left-12 z-20 w-20 h-20 bg-[#fde2cb] dark:bg-amber-900 border-4 border-white dark:border-slate-800 rounded-full flex flex-col items-center justify-center text-slate-900 dark:text-white font-extrabold shadow-lg animate-pulse">
            <span className="text-sm md:text-base tracking-tight">$1999</span>
          </div>

          {/* Imagem do MacBook Pro */}
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop" 
            alt="Macbook Pro Apple M1 Max" 
            className="w-full max-h-[300px] object-contain drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}