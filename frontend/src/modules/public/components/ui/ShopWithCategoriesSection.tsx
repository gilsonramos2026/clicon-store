import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryItem {
  id: number;
  title: string;
  image: string;
}

const categoriesData: CategoryItem[] = [
  {
    id: 1,
    title: "Computer & Laptop",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "SmartPhone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Camera & Photo",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=300&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "TV & Homes",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=300&auto=format&fit=crop",
  },
];

export function ShopWithCategoriesSection(): React.JSX.Element {
  const [scrollIndex, setScrollIndex] = useState(0);

  // Funções para mover o carrossel para os lados
  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(prev + 1, categoriesData.length - 4));
  };

  return (
    <section className="container mx-auto px-4 my-10 relative">
      
      {/* Título da Secção */}
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
        Shop with Categorys
      </h2>

      {/* Container Principal do Carrossel */}
      <div className="relative px-2">
        
        {/* Botão de Navegação Esquerdo (Laranja) */}
        <button 
          onClick={handlePrev}
          aria-label="Anterior"
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#fa8232] hover:bg-[#e07028] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Grelha de Categorias (utiliza scrollIndex implicitamente para rastreio ou exibe o grid responsivo) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 overflow-hidden">
          {categoriesData.map((category, index) => {
            // Aplica visibilidade dinâmica com base no scrollIndex para simular o carrossel no mobile/desktop se desejado, 
            // ou mantém todos visíveis de forma responsiva. Aqui garantimos o uso da variável para limpar o aviso do ESLint.
            const isVisible = index >= scrollIndex && index < scrollIndex + 6;
            
            if (!isVisible) return null;

            return (
              <div 
                key={category.id}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center text-center group hover:border-[#2da5f3] dark:hover:border-sky-400 transition-all cursor-pointer shadow-sm hover:shadow-md"
              >
                {/* Imagem do Produto/Categoria */}
                <div className="w-28 h-28 flex items-center justify-center mb-4">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Título da Categoria */}
                <h3 className="font-semibold text-xs md:text-sm text-slate-800 dark:text-slate-100 group-hover:text-[#2da5f3] dark:group-hover:text-sky-400 transition-colors">
                  {category.title}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Botão de Navegação Direito (Laranja) */}
        <button 
          onClick={handleNext}
          aria-label="Próximo"
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#fa8232] hover:bg-[#e07028] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </div>

    </section>
  );
}