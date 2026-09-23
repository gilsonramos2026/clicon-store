import React, { useState } from 'react';
import { ArrowRight, Star, Heart, ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviewsCount: number;
  badge?: {
    text: string;
    type: 'hot' | 'best' | 'sale' | 'discount';
  };
}

const productsData: Product[] = [
  {
    id: 1,
    title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
    category: "Headphone",
    rating: 4,
    reviewsCount: 944,
    badge: { text: "BEST DEALS", type: "best" }
  },
  {
    id: 2,
    title: "Portable Fishing Machine, 11lbs capacity Model: 18NMF...",
    price: 80.00,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop",
    category: "Keyboard & Mouse",
    rating: 5,
    reviewsCount: 792
  },
  {
    id: 3,
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=300&auto=format&fit=crop",
    category: "Keyboard & Mouse",
    rating: 5,
    reviewsCount: 900,
    badge: { text: "HOT", type: "hot" }
  },
  {
    id: 4,
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=300&auto=format&fit=crop",
    category: "Printer",
    rating: 4,
    reviewsCount: 492
  },
  {
    id: 5,
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    price: 2300.00,
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=300&auto=format&fit=crop",
    category: "Smart Phone",
    rating: 4,
    reviewsCount: 740
  },
  {
    id: 6,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=300&auto=format&fit=crop",
    category: "Webcam",
    rating: 4,
    reviewsCount: 556,
    badge: { text: "SALE", type: "sale" }
  },
  {
    id: 7,
    title: "Wired Over-Ear Gaming Headphones with USB",
    price: 1500.00,
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=300&auto=format&fit=crop",
    category: "Headphone",
    rating: 4,
    reviewsCount: 538
  },
  {
    id: 8,
    title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: 1200.00,
    originalPrice: 1600.00,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=300&auto=format&fit=crop",
    category: "Printer",
    rating: 4,
    reviewsCount: 423,
    badge: { text: "25% OFF", type: "discount" }
  }
];

export function ComputerAccessoriesSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("All Product");

  const tabs = ["All Product", "Keyboard & Mouse", "Headphone", "Webcam", "Printer"];

  // Filtra os produtos com base na aba selecionada
  const filteredProducts = activeTab === "All Product" 
    ? productsData 
    : productsData.filter(item => item.category === activeTab);

  return (
    <section className="container mx-auto px-4 my-10">
      
      {/* Grid Principal: 9 colunas para os produtos à esquerda + 3 colunas para os banners à direita */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ======================================================== */}
        {/* 1. SEÇÃO ESQUERDA: TÍTULO, ABAS E GRELHA DE PRODUTOS     */}
        {/* ======================================================== */}
        <div className="lg:col-span-9 flex flex-col justify-between">
          
          {/* Cabeçalho */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              Computer Accessories
            </h2>

            {/* Abas e Link */}
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`font-medium pb-1 transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === tab
                        ? "text-[#fa8232] border-b-2 border-[#fa8232]"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <a 
                href="#" 
                className="inline-flex items-center gap-1 text-[#2da5f3] hover:text-sky-600 dark:hover:text-sky-400 font-semibold transition-colors whitespace-nowrap"
              >
                Browse All Product <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Grelha de Produtos (4 Colunas) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 relative flex flex-col justify-between group hover:shadow-md transition-all"
              >
                {/* Badge / Etiqueta */}
                {product.badge && (
                  <span className={`absolute top-3 left-3 z-10 text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
                    product.badge.type === 'hot' 
                      ? 'bg-[#ee5858] text-white' 
                      : product.badge.type === 'best' 
                      ? 'bg-[#2da5f3] text-white' 
                      : product.badge.type === 'discount'
                      ? 'bg-[#efd33b] text-slate-900'
                      : 'bg-[#2db653] text-white'
                  }`}>
                    {product.badge.text}
                  </span>
                )}

                {/* Imagem */}
                <div className="relative w-full h-36 flex items-center justify-center my-2 group">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Ações flutuantes ao passar o rato */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button aria-label="Favorito" className="w-7 h-7 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
                      <Heart className="w-3 h-3" />
                    </button>
                    <button aria-label="Adicionar ao carrinho" className="w-7 h-7 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
                      <ShoppingCart className="w-3 h-3" />
                    </button>
                    <button aria-label="Ver detalhes" className="w-7 h-7 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
                      <Eye className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Informações */}
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} 
                      />
                    ))}
                    <span className="text-[10px] text-slate-400 ml-1">({product.reviewsCount})</span>
                  </div>

                  <h4 className="font-medium text-slate-800 dark:text-slate-100 text-xs line-clamp-2 mb-2">
                    {product.title}
                  </h4>

                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-slate-400 line-through text-[11px]">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-[#2da5f3] dark:text-sky-400 font-bold text-sm">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. SEÇÃO DIREITA: 2 BANNERS EMPILHADOS                   */}
        {/* ======================================================== */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          
          {/* Banner Superior Amarelo (Xiaomi True Wireless Earbuds) */}
          <div className="bg-[#fde047] dark:bg-amber-950/70 rounded-lg p-6 flex flex-col items-center text-center relative overflow-hidden shadow-sm">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=250&auto=format&fit=crop" 
                alt="Xiaomi True Wireless Earbuds" 
                className="max-h-full max-w-full object-contain drop-shadow-md"
              />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
              Xiaomi True Wireless Earbuds
            </h3>
            
            <p className="text-xs text-slate-700 dark:text-amber-100 mb-4">
              Escape the noise, It's time to hear the magic with Xiaomi Earbuds.
            </p>

            <div className="text-xs text-slate-800 dark:text-amber-200 mb-4">
              Only for: <span className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold px-2 py-1 rounded shadow-sm inline-block ml-1">$299 USD</span>
            </div>

            <a 
              href="#" 
              className="w-full inline-flex items-center justify-center gap-2 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs font-bold py-3 px-4 rounded transition-colors shadow-sm"
            >
              SHOP NOW <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Banner Inferior Azul Escuro (Summer Sales 37% Discount) */}
          <div className="bg-[#121926] dark:bg-slate-900 rounded-lg p-6 text-center text-white relative overflow-hidden shadow-sm flex flex-col items-center justify-center">
            
            <span className="inline-block bg-[#334155] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-3">
              SUMMER SALES
            </span>

            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-wide">
              37% DISCOUNT
            </h3>

            <p className="text-xs text-slate-300 mb-6">
              only for <span className="text-[#fde047] font-semibold">SmartPhone</span> product.
            </p>

            <a 
              href="#" 
              className="w-full inline-flex items-center justify-center gap-2 bg-[#2da5f3] hover:bg-sky-600 text-white text-xs font-bold py-3 px-4 rounded transition-colors shadow-sm"
            >
              SHOP NOW <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}