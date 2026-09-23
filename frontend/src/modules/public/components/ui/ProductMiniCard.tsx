import React from 'react';

export interface ProductItem {
  id: string | number;
  title: string;
  price: number;
  image: string;
}

interface ProductMiniCardProps {
  product: ProductItem;
}

export function ProductMiniCard({ product }: ProductMiniCardProps): React.JSX.Element {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-3 flex items-center gap-3 hover:shadow-sm transition-shadow">
      {/* Imagem do Produto em miniatura */}
      <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-slate-50 dark:bg-slate-900 rounded p-1">
        <img 
          src={product.image} 
          alt={product.title} 
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Informações do Produto */}
      <div className="flex flex-col justify-center min-w-0 flex-1">
        <h4 className="text-xs font-normal text-slate-800 dark:text-slate-200 line-clamp-2 mb-1 leading-snug">
          {product.title}
        </h4>
        <span className="text-[#2da5f3] dark:text-sky-400 font-bold text-xs">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}