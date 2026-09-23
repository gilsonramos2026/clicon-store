import React from 'react';
import { User, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

export interface NewsItem {
  id: string | number;
  image: string;
  author: string;
  date: string;
  commentsCount: number;
  title: string;
  excerpt: string;
}

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps): React.JSX.Element {
  return (
    <article className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        {/* Imagem do Artigo */}
        <div className="w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img 
            src={news.image} 
            alt={news.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Conteúdo do Cartão */}
        <div className="p-5">
          {/* Metadados (Autor, Data, Comentários) */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400 mb-3">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#fa8232]" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#fa8232]" />
              <span>{news.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#fa8232]" />
              <span>{news.commentsCount}</span>
            </div>
          </div>

          {/* Título Principal */}
          <h3 className="font-bold text-slate-900 dark:text-white text-sm md:text-base mb-2 line-clamp-2 leading-snug">
            {news.title}
          </h3>

          {/* Texto de Descrição / Excerto */}
          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 mb-6 leading-relaxed">
            {news.excerpt}
          </p>
        </div>
      </div>

      {/* Botão Read More */}
      <div className="px-5 pb-5">
        <a 
          href="#" 
          className="inline-flex items-center gap-2 text-[#fa8232] hover:text-[#e07028] font-bold text-xs uppercase tracking-wider border border-[#fa8232]/40 hover:border-[#fa8232] px-4 py-2 rounded transition-colors"
        >
          READ MORE <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </article>
  );
}