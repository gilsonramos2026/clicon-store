import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCard, type ProductProps } from './ProductCard';

export function BestDealsSection(): React.JSX.Element {
  // Lista de produtos conforme a imagem de referência
  const products: ProductProps[] = [
    {
      id: 1,
      title: "Xbox Series S - 512GB SSD Console with Wireless Controller - EU Version...",
      price: 442.12,
      originalPrice: 865.00,
      image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=400&auto=format&fit=crop",
      rating: 5,
      reviewsCount: 52677,
      badge: { text: "32% OFF", type: "sale" },
      description: "Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.",
      isFeaturedLarge: true,
    },
    {
      id: 2,
      title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
      price: 2300.00,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=300&auto=format&fit=crop",
      badge: { text: "SOLD OUT", type: "soldout" },
    },
    {
      id: 3,
      title: "Simple Mobile 4G LTE Prepaid Smartphone",
      price: 220.00,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 150.00,
      originalPrice: 865.00,
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=300&auto=format&fit=crop",
      badge: { text: "19% OFF", type: "sale" },
    },
    {
      id: 5,
      title: "Sony DSCHX80 High Zoom Point & Shoot Camera",
      price: 1200.00,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: 299.00,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 7,
      title: "Portable Fishing Machine, 11lbs capacity Model: 18NMFIAM",
      price: 70.00,
      originalPrice: 865.00,
      image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=300&auto=format&fit=crop",
    },
    {
      id: 8,
      title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
      price: 160.00,
      image: "https://images.unsplash.com/photo-1486006920555-c77dce18193c?q=80&w=300&auto=format&fit=crop",
      badge: { text: "HOT", type: "hot" },
    },
    {
      id: 9,
      title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker - Black",
      price: 250.00,
      originalPrice: 360.00,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=300&auto=format&fit=crop",
      badge: { text: "32% OFF", type: "sale" },
    },
  ];

  return (
    <section className="container mx-auto px-4 my-10">
      
      {/* Cabeçalho da Secção (Título, Cronómetro e Botão "Browse All Product") */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
            Best Deals
          </h2>
          
          {/* Caixa do Cronómetro */}
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
            <span>Deals ends in</span>
            <span className="bg-[#f3de6d] text-slate-900 font-bold px-2.5 py-1 rounded shadow-sm">
              16d : 21h : 57m : 23s
            </span>
          </div>
        </div>

        {/* Link para ver todos os produtos */}
        <a 
          href="#" 
          className="inline-flex items-center gap-1.5 text-[#2da5f3] hover:text-sky-600 dark:hover:text-sky-400 font-semibold text-sm transition-colors"
        >
          Browse All Product <ArrowRight className="w-4 h-4" />
        </a>

      </div>

      {/* Grelha de Produtos (Layout exato da imagem: 1 card grande à esquerda e 8 menores em grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* O primeiro produto ocupa 2 linhas e 2 colunas no desktop para dar o efeito de destaque */}
        <div className="lg:col-span-2 lg:row-span-2 flex flex-col">
          <ProductCard {...products[0]} />
        </div>

        {/* Restantes produtos em grelha */}
        {products.slice(1).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}

      </div>

    </section>
  );
}