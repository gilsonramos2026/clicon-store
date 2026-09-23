import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

// Dados dos banners que passam no carrossel principal (à esquerda)
const mainBanners = [
  {
    id: 1,
    tag: "THE BEST PLACE TO PLAY",
    title: "Xbox Consoles",
    description: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
    price: "$299",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=500&auto=format&fit=crop", // Imagem ilustrativa de console/controle
    buttonText: "SHOP NOW",
    buttonLink: "#"
  },
  {
    id: 2,
    tag: "NEXT-GEN GAMING",
    title: "PlayStation 5",
    description: "Experience lightning-fast loading with an ultra-high speed SSD and deeper immersion.",
    price: "$499",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=500&auto=format&fit=crop",
    buttonText: "EXPLORE",
    buttonLink: "#"
  },
  {
    id: 3,
    tag: "ULTIMATE PERFORMANCE",
    title: "Gaming Laptops",
    description: "Discover high-performance rigs engineered with RTX graphics and powerful processors.",
    price: "$899",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop",
    buttonText: "DISCOVER",
    buttonLink: "#"
  }
];

export function HeroBannerSection(): React.JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Troca automática de banner a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mainBanners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = mainBanners[currentIndex];

  return (
    <section className="container mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      
      {/* ======================================================== */}
      {/* 1. CARROSSEL PRINCIPAL (Ocupa 2 colunas no desktop)       */}
      {/* ======================================================== */}
      <div className="lg:col-span-2 bg-[#f2f4f5] dark:bg-slate-800 rounded-lg p-8 md:p-12 relative flex flex-col justify-between overflow-hidden min-h-[420px] transition-colors">
        
        {/* Conteúdo do Banner (Texto e Botão) */}
        <div className="max-w-md z-10">
          <span className="text-[#2da5f3] dark:text-sky-400 font-semibold text-xs tracking-widest uppercase flex items-center gap-2 mb-3">
            <span className="w-4 h-[2px] bg-[#2da5f3]"></span>
            {currentBanner.tag}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
            {currentBanner.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
            {currentBanner.description}
          </p>

          <a 
            href={currentBanner.buttonLink}
            className="inline-flex items-center gap-2 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs md:text-sm font-bold px-6 py-3.5 rounded transition-all shadow-sm"
          >
            {currentBanner.buttonText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Imagem do Produto e Badge de Preço */}
        <div className="absolute right-4 bottom-4 md:right-10 md:bottom-8 flex items-center">
          <div className="relative">
            {/* Badge de Preço Circular */}
            <div className="absolute -top-4 -left-6 md:-top-6 md:-left-10 bg-[#2da5f3] text-white w-16 h-16 md:w-20 md:h-20 rounded-full flex flex-col items-center justify-center font-bold text-lg md:text-xl shadow-lg z-20">
              {currentBanner.price}
            </div>
            {/* Imagem */}
            <img 
              src={currentBanner.image} 
              alt={currentBanner.title} 
              className="w-56 md:w-80 h-48 md:h-64 object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Três Pontinhos de Navegação (Exatamente como na imagem) */}
        <div className="flex items-center gap-2 z-10 mt-8">
          {mainBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para banner ${index + 1}`}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === index 
                  ? "w-8 bg-slate-900 dark:bg-white" // Ponto ativo (maior e escuro/claro)
                  : "w-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400" // Pontos inativos (cinzas)
              }`}
            />
          ))}
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. BANNERS MENORES À DIREITA (Google Pixel e Xiaomi)      */}
      {/* ======================================================== */}
      <div className="flex flex-col gap-6">
        
        {/* Banner Superior Direito (Google Pixel 6 Pro) */}
        <div className="bg-[#191c1f] dark:bg-slate-900 text-white rounded-lg p-6 flex items-center justify-between relative overflow-hidden flex-1 border border-transparent dark:border-slate-800">
          <div className="z-10 max-w-[180px]">
            <span className="text-[#ebc80c] text-[10px] md:text-xs font-bold uppercase tracking-wider block mb-1">
              SUMMER SALES
            </span>
            <h2 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
              New Google Pixel 6 Pro
            </h2>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#2da5f3] hover:text-sky-400 text-xs md:text-sm font-semibold transition-colors"
            >
              SHOP NOW <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative">
            <span className="absolute -top-2 right-0 bg-[#ebc80c] text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded shadow">
              29% OFF
            </span>
            <img 
              src="https://images.unsplash.com/photo-1635870733900-520e181e1801?q=80&w=300&auto=format&fit=crop" 
              alt="Google Pixel 6 Pro" 
              className="w-28 md:w-36 h-32 md:h-36 object-contain"
            />
          </div>
        </div>

        {/* Banner Inferior Direito (Xiaomi FlipBuds Pro) */}
        <div className="bg-[#f2f4f5] dark:bg-slate-800 rounded-lg p-6 flex items-center justify-between relative overflow-hidden flex-1 transition-colors">
          <div className="z-10">
            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">
              Xiaomi FlipBuds Pro
            </h2>
            <p className="text-[#2da5f3] dark:text-sky-400 font-bold text-sm mb-3">
              $299 USD
            </p>
            <a 
              href="#" 
              className="inline-flex items-center gap-2 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs font-bold px-4 py-2.5 rounded transition-all shadow-sm"
            >
              SHOP NOW <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div>
            <img 
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop" 
              alt="Xiaomi FlipBuds Pro" 
              className="w-28 md:w-32 h-28 md:h-32 object-contain"
            />
          </div>
        </div>

      </div>

    </section>
  );
}