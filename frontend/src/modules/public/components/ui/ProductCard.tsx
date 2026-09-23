import React from 'react';
import { Heart, ShoppingCart, Eye, Star } from 'lucide-react';

export interface ProductProps {
  id: string | number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating?: number;
  reviewsCount?: number;
  badge?: {
    text: string;
    type: 'hot' | 'sale' | 'soldout';
  };
  description?: string;
  isFeaturedLarge?: boolean; // Para o primeiro card maior à esquerda
}

export function ProductCard({
  title,
  price,
  originalPrice,
  image,
  rating = 5,
  reviewsCount,
  badge,
  description,
  isFeaturedLarge = false,
}: ProductProps) {
  return (
    <div className={`bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 relative flex flex-col justify-between transition-all hover:shadow-md ${
      isFeaturedLarge ? 'lg:col-span-1 lg:row-span-2' : ''
    }`}>
      
      {/* Topo do Card: Badges (HOT, 32% OFF, SOLD OUT) */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {badge && (
          <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider ${
            badge.type === 'hot' 
              ? 'bg-[#ee5858] text-white' 
              : badge.type === 'sale' 
              ? 'bg-[#efd33b] text-slate-900' 
              : 'bg-slate-500 text-white'
          }`}>
            {badge.text}
          </span>
        )}
      </div>

      {/* Imagem do Produto */}
      <div className="relative w-full h-48 md:h-56 flex items-center justify-center my-2 group">
        <img 
          src={image} 
          alt={title} 
          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Ícones de Ação Flutuantes (aparecem ao passar o rato em cards normais) */}
        {!isFeaturedLarge && (
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <button aria-label="Favorito" className="w-9 h-9 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button aria-label="Carrinho" className="w-9 h-9 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
            <button aria-label="Ver detalhes" className="w-9 h-9 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 rounded-full flex items-center justify-center shadow hover:bg-[#fa8232] hover:text-white transition-colors">
              <Eye className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Informações do Produto */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Avaliação em Estrelas (opcional) */}
          {rating && (
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3.5 h-3.5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`} 
                />
              ))}
              {reviewsCount && (
                <span className="text-xs text-slate-400 ml-1">({reviewsCount})</span>
              )}
            </div>
          )}

          <h3 className="font-medium text-slate-800 dark:text-slate-100 text-sm md:text-base line-clamp-2 mb-2">
            {title}
          </h3>

          {description && isFeaturedLarge && (
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-3">
              {description}
            </p>
          )}

          {/* Preços */}
          <div className="flex items-center gap-2 mb-4">
            {originalPrice && (
              <span className="text-slate-400 line-through text-xs md:text-sm">
                ${originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-[#2da5f3] dark:text-sky-400 font-bold text-base md:text-lg">
              ${price.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Botões do Card Destaque (Xbox Grande) */}
        {isFeaturedLarge ? (
          <div className="flex items-center gap-2 pt-2">
            <button aria-label="Favorito" className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="flex-1 bg-[#fa8232] hover:bg-[#e07028] text-white text-xs md:text-sm font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors shadow-sm">
              <ShoppingCart className="w-4 h-4" />
              ADD TO CARD
            </button>
            <button aria-label="Ver detalhes" className="p-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 rounded transition-colors">
              <Eye className="w-5 h-5" />
            </button>
          </div>
        ) : null}
      </div>

    </div>
  );
}