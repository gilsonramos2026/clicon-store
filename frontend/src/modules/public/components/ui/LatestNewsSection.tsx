import React from 'react';
import { NewsCard,type NewsItem } from './NewsCard';

// Dados simulados idênticos aos cartões exibidos na referência
const latestNewsData: NewsItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500&auto=format&fit=crop",
    author: "Kristin",
    date: "19 Dec, 2013",
    commentsCount: 453,
    title: "Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
    excerpt: "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=500&auto=format&fit=crop",
    author: "Robert",
    date: "28 Nov, 2015",
    commentsCount: 738,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    excerpt: "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=500&auto=format&fit=crop",
    author: "Arlene",
    date: "9 May, 2014",
    commentsCount: 826,
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    excerpt: "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus."
  }
];

export function LatestNewsSection(): React.JSX.Element {
  return (
    <section className="container mx-auto px-4 my-12">
      {/* Cabeçalho da Secção */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
          Latest News
        </h2>
      </div>

      {/* Grelha de Artigos (3 Colunas) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestNewsData.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
}