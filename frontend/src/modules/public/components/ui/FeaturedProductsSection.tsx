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
    title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
    price: 70.00,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop",
    category: "Headphone",
    rating: 5,
    reviewsCount: 738,
    badge: { text: "HOT", type: "hot" }
  },
  {
    id: 2,
    title: "Samsung Electronics Samsung Galaxy S21 5G",
    price: 2300.00,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300&auto=format&fit=crop",
    category: "Smart Phone",
    rating: 5,
    reviewsCount: 536
  },
  {
    id: 3,
    title: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
    price: 360.00,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=300&auto=format&fit=crop",
    category: "TV",
    rating: 5,
    reviewsCount: 423,
    badge: { text: "BEST DEALS", type: "best" }
  },
  {
    id: 4,
    title: "Portable Fishing Machine, 11lbs capacity Model:18NMF...",
    price: 80.00,
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=300&auto=format&fit=crop",
    category: "Laptop",
    rating: 4,
    reviewsCount: 816
  },
  {
    id: 5,
    title: "Wired Over-Ear Gaming Headphones with USB",
    price: 1500.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
    category: "Headphone",
    rating: 5,
    reviewsCount: 647
  },
  {
    id: 6,
    title: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
    price: 1200.00,
    originalPrice: 1600.00,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=300&auto=format&fit=crop",
    category: "Laptop",
    rating: 4,
    reviewsCount: 977,
    badge: { text: "25% OFF", type: "discount" }
  },
  {
    id: 7,
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: 250.00,
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=300&auto=format&fit=crop",
    category: "Laptop",
    rating: 5,
    reviewsCount: 426
  },
  {
    id: 8,
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    price: 220.00,
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=300&auto=format&fit=crop",
    category: "TV",
    rating: 5,
    reviewsCount: 593,
    badge: { text: "SALE", type: "sale" }
  }
];

export function FeaturedProductsSection(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("All Product");

  const tabs = ["All Product", "Smart Phone", "Laptop", "Headphone", "TV"];

  // Filtra os produtos com base na aba selecionada
  const filteredProducts = activeTab === "All Product" 
    ? productsData 
    : productsData.filter(item => item.category === activeTab);

  return (
    <section className="container mx-auto px-4 my-10">
      
      {/* Cabeçalho da Secção (Título e Abas de Navegação) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Featured Products
        </h2>

        {/* Abas e Link "Browse All Product" */}
        <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
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
            className="inline-flex items-center gap-1.5 text-[#2da5f3] hover:text-sky-600 dark:hover:text-sky-400 font-semibold transition-colors"
          >
            Browse All Product <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Grid Principal: Banner Amarelo à Esquerda + Produtos à Direita */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* ======================================================== */}
        {/* 1. BANNER AMARELO À ESQUERDA                             */}
        {/* ======================================================== */}
        <div className="bg-[#f3de6d] dark:bg-amber-950/60 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden min-h-[500px]">
          
          <div className="z-15 text-center">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-800 dark:text-amber-200 block mb-1">
              COMPUTER & ACCESSORIES
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2">
              32% Discount
            </h3>
            <p className="text-xs text-slate-700 dark:text-amber-100 mb-4">
              For all electronics products
            </p>
            
            <div className="text-xs text-slate-700 dark:text-amber-200 mb-2">
              Offers ends in: <span className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-bold px-2 py-1 rounded shadow-sm inline-block mt-1">ENDS OF CHRISTMAS</span>
            </div>
          </div>

          {/* Botão Shop Now */}
          <div className="z-15">
            <a 
              href="#" 
              className="w-full inline-flex items-center justify-center gap-2 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs md:text-sm font-bold py-3 px-4 rounded transition-all shadow-sm"
            >
              SHOP NOW <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Imagem de Fundo de Acessórios no Banner Amarelo */}
          <div className="absolute bottom-0 left-0 right-0 z-0 opacity-45 pointer-events-none flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=400&auto=format&fit=crop" 
              alt="Computer Accessories" 
              className="w-full h-48 object-cover"
            />
          </div>
        </div>

        {/* ======================================================== */}
        {/* 2. GRELHA DE PRODUTOS À DIREITA (Ocupa 3 colunas)       */}
        {/* ======================================================== */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 relative flex flex-col justify-between group hover:shadow-md transition-all"
            >
              {/* Etiqueta / Badge (HOT, BEST DEALS, 25% OFF, SALE) */}
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

              {/* Imagem do Produto */}
              <div className="relative w-full h-44 flex items-center justify-center my-2 group">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />

                {/* Ícones flutuantes de ação ao passar o rato */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button aria-label="Favorito" className="w-8 h-8 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
                    <Heart className="w-3.5 h-3.5" />
                  </button>
                  <button aria-label="Adicionar ao carrinho" className="w-8 h-8 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
                  <button aria-label="Ver detalhes" className="w-8 h-8 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Informações do Produto */}
              <div>
                {/* Avaliação por Estrelas */}
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} 
                    />
                  ))}
                  <span className="text-[11px] text-slate-400 ml-1">({product.reviewsCount})</span>
                </div>

                {/* Título */}
                <h4 className="font-medium text-slate-800 dark:text-slate-100 text-xs md:text-sm line-clamp-2 mb-2">
                  {product.title}
                </h4>

                {/* Preço */}
                <div className="flex items-center gap-2">
                  {product.originalPrice && (
                    <span className="text-slate-400 line-through text-xs">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-[#2da5f3] dark:text-sky-400 font-bold text-sm md:text-base">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}