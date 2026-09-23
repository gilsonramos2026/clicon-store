import React from 'react';
import { ArrowRight } from 'lucide-react';

export function PromoBannersSection(): React.JSX.Element {
  return (
    <section className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* ======================================================== */}
        {/* 1. BANNER ESQUERDO (Apple HomePod Mini)                  */}
        {/* ======================================================== */}
        <div className="bg-[#f2f4f5] dark:bg-slate-800 rounded-lg p-6 md:p-8 flex items-center justify-between relative overflow-hidden min-h-[260px] shadow-sm">
          
          <div className="z-10 max-w-[55%]">
            {/* Etiqueta Azul */}
            <span className="inline-block bg-[#2da5f3] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-3">
              INTRODUCING
            </span>

            {/* Título */}
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              New Apple Homepod Mini
            </h3>

            {/* Descrição */}
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 mb-5 line-clamp-3">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>

            {/* Botão Shop Now Laranja */}
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs md:text-sm font-bold py-2.5 px-5 rounded transition-colors shadow-sm"
            >
              SHOP NOW <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Imagem do HomePod Mini */}
          <div className="absolute right-4 bottom-0 top-0 flex items-center justify-end z-0 pointer-events-none w-[45%]">
            <img 
              src="https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=350&auto=format&fit=crop" 
              alt="New Apple Homepod Mini" 
              className="max-h-full max-w-full object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. BANNER DIREITO (Xiaomi Mi 11 Ultra)                   */}
        {/* ======================================================== */}
        <div className="bg-[#191c1f] dark:bg-slate-900 rounded-lg p-6 md:p-8 flex items-center justify-between relative overflow-hidden min-h-[260px] shadow-sm text-white">
          
          {/* Crachá Circular Azul Flutuante (Preço) */}
          <div className="absolute top-4 right-4 z-20 w-14 h-14 bg-[#2da5f3] rounded-full flex flex-col items-center justify-center text-white font-bold text-sm shadow-md">
            <span className="text-[10px] uppercase font-normal leading-none">Only</span>
            $590
          </div>

          <div className="z-10 max-w-[55%]">
            {/* Etiqueta Amarela */}
            <span className="inline-block bg-[#efd33b] text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-3">
              INTRODUCING NEW
            </span>

            {/* Título */}
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
              Xiaomi Mi 11 Ultra <span className="block text-lg font-semibold">12GB+256GB</span>
            </h3>

            {/* Rodapé Descritivo */}
            <p className="text-[10px] md:text-xs text-slate-400 mb-5">
              *Data provided by internal laboratories. Industry measurement.
            </p>

            {/* Botão Shop Now Laranja */}
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs md:text-sm font-bold py-2.5 px-5 rounded transition-colors shadow-sm"
            >
              SHOP NOW <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Imagem dos Smartphones (Xiaomi Mi 11 Ultra Preto e Branco) */}
          <div className="absolute right-0 bottom-0 top-0 flex items-center justify-end z-10 pointer-events-none w-[45%]">
            <img 
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=350&auto=format&fit=crop" 
              alt="Xiaomi Mi 11 Ultra" 
              className="max-h-[90%] max-w-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}