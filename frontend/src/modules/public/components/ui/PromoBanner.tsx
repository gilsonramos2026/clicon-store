import { useState } from "react";

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Anúncio Promocional"
      className="hidden md:flex w-full bg-[#1b1b1f] dark:bg-[#09090b] text-zinc-100 px-12 py-3.5 items-center justify-between shadow-md transition-colors relative"
    >
      {/* Esquerda: Selo Black + Friday */}
      <div className="flex items-center gap-3">
        <span className="bg-[#facc15] text-zinc-950 font-black text-xs uppercase px-2 py-0.5 rounded shadow-sm -rotate-2">
          Black
        </span>
        <span className="font-medium tracking-wide text-sm text-white">
          Friday
        </span>
      </div>

      {/* Centro: Desconto exato do design original */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm">
        <span className="text-zinc-400 text-xs">Up to</span>
        <span className="text-[#facc15] font-extrabold text-lg tracking-wide">59%</span>
        <span className="text-zinc-100 font-bold text-xs uppercase">OFF</span>
      </div>

      {/* Direita: Botão SHOP NOW e Fechar */}
      <div className="flex items-center gap-6">
        <a 
          href="#shop" 
          className="bg-[#facc15] hover:bg-[#eab308] text-zinc-950 font-bold text-xs px-4 py-2 rounded shadow-sm transition-all flex items-center gap-2 group cursor-pointer"
        >
          <span>SHOP NOW</span>
          <svg 
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>

        {/* Botão Fechar em quadrado sutil */}
        <button 
          onClick={() => setIsVisible(false)}
          aria-label="Fechar banner"
          className="bg-zinc-800/90 hover:bg-zinc-700 text-zinc-400 hover:text-white p-1.5 rounded transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </aside>
  );
}