import React from 'react';
import { HeroBannerSection } from '../components/ui/HeroBannerSection';
import { FeaturesSection } from '../components/ui/FeaturesSection';
import { BestDealsSection } from '../components/ui/BestDealsSection';
import { ShopWithCategoriesSection } from '../components/ui/ShopWithCategoriesSection';
import { FeaturedProductsSection } from '../components/ui/FeaturedProductsSection';
import { PromoBannersSection } from '../components/ui/PromoBannersSection';
import { ComputerAccessoriesSection } from '../components/ui/ComputerAccessoriesSection';
import { MacbookPromoBanner } from '../components/ui/MacbookPromoBanner';
import { SidebarCategoriesGrid } from '../components/ui/SidebarCategoriesGrid';
import { LatestNewsSection } from '../components/ui/LatestNewsSection';

export default function Home(): React.JSX.Element {
  return (
    <div>
      <HeroBannerSection />
      <FeaturesSection/>
      <BestDealsSection />
      <ShopWithCategoriesSection />
      <FeaturedProductsSection />
      <PromoBannersSection />
      <ComputerAccessoriesSection />
      <MacbookPromoBanner />
      <SidebarCategoriesGrid />
      <LatestNewsSection />
    </div>
  );
}
