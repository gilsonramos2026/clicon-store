import React from 'react';
import { HeroBannerSection } from '../components/ui/HeroBannerSection';
import { FeaturesSection } from '../components/ui/FeaturesSection';
import { BestDealsSection } from '../components/ui/BestDealsSection';
import { ShopWithCategoriesSection } from '../components/ui/ShopWithCategoriesSection';
import { FeaturedProductsSection } from '../components/ui/FeaturedProductsSection';

export default function Home(): React.JSX.Element {
  return (
    <div>
      <HeroBannerSection />
      <FeaturesSection/>
      <BestDealsSection />
      <ShopWithCategoriesSection />
      <FeaturedProductsSection />
    </div>
  );
}
