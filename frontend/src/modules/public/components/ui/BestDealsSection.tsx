import React, { useState, useEffect } from 'react';
import { ArrowRight, Star, Heart, Eye, ShoppingCart } from 'lucide-react';
import { ProductCard, type ProductProps } from './ProductCard';

import XboxImage from '../../../../assets/xbox.png';
import EarbudsImage from '../../../../assets/earbuds.png';
import SmartphoneImage from '../../../../assets/Earbuds.png';
import TvImage from '../../../../assets/ssmatTv.png';
import CameraImage from '../../../../assets/Camera.png';
import MonitorImage from '../../../../assets/Monitor.png';
import FishingMachineImage from '../../../../assets/Machine.png';
import CarburetorImage from '../../../../assets/Carburetor.png';

export function BestDealsSection(): React.JSX.Element {
  const [timeLeft, setTimeLeft] = useState({
    days: 16,
    hours: 21,
    minutes: 57,
    seconds: 23,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const allProducts: ProductProps[] = [
    {
      id: 1,
      title: "Console Xbox Series S - SSD de 512GB com Controle Sem Fio - Versão Europeia",
      price: 2210.60,
      originalPrice: 4325.00,
      image: XboxImage,
      rating: 5,
      reviewsCount: 52677,
      badge: { text: "32% OFF", type: "sale" },
      description: "Jogos desenvolvidos com o kit de desenvolvimento do Xbox Series X|S apresentam tempos de carregamento e visuais incomparáveis.",
    },
    {
      id: 2,
      title: "Fones de Ouvido Bose Sport Earbuds - Intra-auriculares Sem Fio - Bluetooth",
      price: 11500.00,
      image: EarbudsImage,
      badge: { text: "ESGOTADO", type: "soldout" },
      description: "Fones de ouvido sem fio projetados para o esporte, com som nítido e potente e ajuste seguro.",
    },
    {
      id: 3,
      title: "Smartphone Pré-pago Simple Mobile 4G LTE",
      price: 1100.00,
      image: SmartphoneImage,
      description: "Smartphone 4G LTE de alta performance com excelente autonomia de bateria e câmeras nítidas.",
    },
    {
      id: 4,
      title: "Smart TV LED 4K UHD com Chromecast Integrado",
      price: 750.00,
      originalPrice: 4325.00,
      image: TvImage,
      badge: { text: "19% OFF", type: "sale" },
      description: "Desfrute de cores vibrantes e resolução 4K UHD impressionante com entretenimento integrado.",
    },
    {
      id: 5,
      title: "Câmera Compacta Digital Sony DSCHX80 com Super Zoom",
      price: 6000.00,
      image: CameraImage,
      description: "Capture cada detalhe à distância com uma lente de zoom potente e sensor de alta qualidade da Sony.",
    },
    {
      id: 6,
      title: "Computador All-in-One Dell Optiplex 7000x7480 com Monitor",
      price: 1495.00,
      image: MonitorImage,
      description: "Desempenho corporativo avançado integrado a um design elegante de tela ampla com excelente definição.",
    },
    {
      id: 7,
      title: "Máquina Portátil de Pesca, Capacidade de 11lbs Modelo: 18NMFIAM",
      price: 350.00,
      originalPrice: 4325.00,
      image: FishingMachineImage,
      badge: { text: "15% OFF", type: "sale" },
      description: "Praticidade e resistência para suas pescarias, com estrutura portátil de alta durabilidade.",
    },
    {
      id: 8,
      title: "Carburador de 2 Corpos Carb 2100 para Aumento de Potência do Motor",
      price: 800.00,
      image: CarburetorImage,
      badge: { text: "DESTAQUE", type: "hot" },
      description: "Otimize o rendimento e ganhe potência real no motor do seu veículo com engenharia de precisão.",
    },
    {
      id: 9,
      title: "Caixa de Som Portátil Bluetooth Impermeável JBL FLIP 4 - Preta",
      price: 1250.00,
      originalPrice: 1800.00,
      image: CarburetorImage,
      badge: { text: "32% OFF", type: "sale" },
      description: "Som estéreo surpreendente e potente em qualquer lugar com resistência à água à prova de festa.",
    },
  ];

  const [selectedProductId, setSelectedProductId] = useState<number>(1);

  const featuredProduct = allProducts.find((p) => p.id === selectedProductId) || allProducts[0];
  const gridProducts = allProducts.filter((p) => p.id !== selectedProductId);

  const formatBRL = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <section className="container mx-auto px-4 my-10">
      
      {/* Cabeçalho da Secção */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4 flex-wrap">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Melhores Ofertas
          </h2>
          
          <div className="flex items-center gap-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
            <span>Termina em</span>
            <span className="bg-[#fde047] text-slate-900 font-mono font-bold px-2.5 py-1 rounded">
              {String(timeLeft.days).padStart(2, '0')}d : {String(timeLeft.hours).padStart(2, '0')}h : {String(timeLeft.minutes).padStart(2, '0')}m : {String(timeLeft.seconds).padStart(2, '0')}s
            </span>
          </div>
        </div>

        <a 
          href="#" 
          className="inline-flex items-center gap-1.5 text-[#2da5f3] hover:text-sky-600 dark:hover:text-sky-400 font-semibold text-sm transition-colors"
        >
          Ver Todos os Produtos <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Grelha Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        
        {/* Banner Grande à Esquerda (Imagem maior, sem sombras) */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 flex flex-col justify-between relative">
          
          {/* Badge */}
          {featuredProduct.badge && (
            <span className={`absolute top-4 left-4 text-xs font-bold px-2.5 py-1 rounded z-10 ${
              featuredProduct.badge.type === 'sale' ? 'bg-[#fde047] text-slate-900' : 
              featuredProduct.badge.type === 'hot' ? 'bg-red-500 text-white' : 'bg-slate-800 text-white'
            }`}>
              {featuredProduct.badge.text}
            </span>
          )}

          {/* Imagem Bem Maior e Sem Sombra */}
          <div className="w-full h-80 flex items-center justify-center my-auto p-2">
            <img 
              src={featuredProduct.image} 
              alt={featuredProduct.title} 
              className="max-h-80 max-w-full object-contain scale-125 transition-transform duration-300"
            />
          </div>

          {/* Informações do Produto */}
          <div className="space-y-2 mt-4">
            {/* Avaliação */}
            {featuredProduct.rating && (
              <div className="flex items-center gap-1 text-amber-400 text-sm">
                {[...Array(featuredProduct.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
                {featuredProduct.reviewsCount && (
                  <span className="text-slate-400 text-xs ml-1">({featuredProduct.reviewsCount.toLocaleString()})</span>
                )}
              </div>
            )}

            {/* Título */}
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base leading-snug line-clamp-2">
              {featuredProduct.title}
            </h3>

            {/* Descrição */}
            {featuredProduct.description && (
              <p className="text-slate-500 dark:text-slate-400 text-xs line-clamp-2">
                {featuredProduct.description}
              </p>
            )}

            {/* Preços */}
            <div className="flex items-center gap-3 pt-2">
              {featuredProduct.originalPrice && (
                <span className="text-slate-400 text-sm line-through">
                  {formatBRL(featuredProduct.originalPrice)}
                </span>
              )}
              <span className="text-[#2da5f3] font-extrabold text-xl">
                {formatBRL(featuredProduct.price)}
              </span>
            </div>
          </div>

          {/* Botões de Ação Inferiores */}
          <div className="flex items-center gap-2 pt-5 mt-4 border-t border-slate-100 dark:border-slate-800">
            <button className="p-3 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 transition-colors" title="Adicionar aos Favoritos">
              <Heart className="w-5 h-5" />
            </button>
            <button className="flex-1 bg-[#fa8232] hover:bg-[#e07028] text-white font-semibold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors">
              <ShoppingCart className="w-5 h-5" /> ADICIONAR AO CARRINHO
            </button>
            <button className="p-3 rounded bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 transition-colors" title="Visualização Rápida">
              <Eye className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Grelha de 8 produtos à direita (4 colunas x 2 linhas) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {gridProducts.map((product) => (
            <div 
              key={product.id} 
              onClick={() => setSelectedProductId(product.id)}
              className="cursor-pointer transition-all hover:ring-2 hover:ring-[#2da5f3] rounded-lg flex flex-col"
              title="Clique para ver em destaque"
            >
              <ProductCard 
                {...product} 
                priceFormatted={formatBRL(product.price)}
                originalPriceFormatted={product.originalPrice ? formatBRL(product.originalPrice) : undefined}
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}