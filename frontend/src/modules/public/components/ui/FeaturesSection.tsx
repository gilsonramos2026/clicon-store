import React from 'react';
import { Package, Trophy, CreditCard, Headphones } from 'lucide-react';

export function FeaturesSection(): React.JSX.Element {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-slate-800 dark:text-slate-100" />,
      title: "FASTED DELIVERY",
      description: "Delivery in 24/H",
    },
    {
      icon: <Trophy className="w-8 h-8 text-slate-800 dark:text-slate-100" />,
      title: "24 HOURS RETURN",
      description: "100% money-back guarantee",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-slate-800 dark:text-slate-100" />,
      title: "SECURE PAYMENT",
      description: "Your money is safe",
    },
    {
      icon: <Headphones className="w-8 h-8 text-slate-800 dark:text-slate-100" />,
      title: "SUPPORT 24/7",
      description: "Live contact/message",
    },
  ];

  return (
    <section className="container mx-auto px-4 my-8">
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-slate-700 transition-colors">
        {features.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-6 lg:p-8">
            <div className="flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-bold text-xs md:text-sm tracking-wider text-slate-900 dark:text-white uppercase">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}