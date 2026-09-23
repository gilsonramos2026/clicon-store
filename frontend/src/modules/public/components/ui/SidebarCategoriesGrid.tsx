import React from 'react';
import { ProductMiniCard,type ProductItem } from './ProductMiniCard';

interface CategoryColumnProps {
  title: string;
  products: ProductItem[];
}

// Componente reutilizável para cada coluna vertical
function CategoryColumn({ title, products }: CategoryColumnProps) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-1">
        {title}
      </h3>
      <div className="flex flex-col gap-3">
        {products.map((product) => (
          <ProductMiniCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// Dados simulados idênticos à referência (com 3 produtos por categoria)
const flashSaleProducts: ProductItem[] = [
  { id: 'fs-1', title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...", price: 1500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=150&auto=format&fit=crop" },
  { id: 'fs-2', title: "Simple Mobile 4G LTE Prepaid Smartphone", price: 1500, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=150&auto=format&fit=crop" },
  { id: 'fs-3', title: "4K UHD LED Smart TV with Chromecast Built-in", price: 1500, image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=150&auto=format&fit=crop" },
];

const bestSellersProducts: ProductItem[] = [
  { id: 'bs-1', title: "Samsung Electronics Samsung Galaxy S21 5G", price: 1500, image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=150&auto=format&fit=crop" },
  { id: 'bs-2', title: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone", price: 1500, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=150&auto=format&fit=crop" },
  { id: 'bs-3', title: "Sony DSC-HX8 High Zoom Point & Shoot Camera", price: 1500, image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=150&auto=format&fit=crop" },
];

const topRatedProducts: ProductItem[] = [
  { id: 'tr-1', title: "Portable Fishing Machine, 11lbs capacity Model: 18NMF...", price: 1500, image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=150&auto=format&fit=crop" },
  { id: 'tr-2', title: "Sony DSC-HX8 High Zoom Point & Shoot Camera", price: 1500, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=150&auto=format&fit=crop" },
  { id: 'tr-3', title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 1500, image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=150&auto=format&fit=crop" },
];

const newArrivalProducts: ProductItem[] = [
  { id: 'na-1', title: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...", price: 1500, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=150&auto=format&fit=crop" },
  { id: 'na-2', title: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...", price: 1500, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=150&auto=format&fit=crop" },
  { id: 'na-3', title: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...", price: 1500, image: "https://images.unsplash.com/photo-1557324232-b8917d7c3dcb?q=80&w=150&auto=format&fit=crop" },
];

export function SidebarCategoriesGrid(): React.JSX.Element {
  return (
    <section className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CategoryColumn title="FLASH SALE TODAY" products={flashSaleProducts} />
        <CategoryColumn title="BEST SELLERS" products={bestSellersProducts} />
        <CategoryColumn title="TOP RATED" products={topRatedProducts} />
        <CategoryColumn title="NEW ARRIVAL" products={newArrivalProducts} />
      </div>
    </section>
  );
}