import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PublicFooter(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full">
      {/* ======================================================== */}
      {/* 1. FAIXA SUPERIOR DE SUBSCRIÇÃO (NEWSLETTER)             */}
      {/* ======================================================== */}
      <div className="bg-[#1b6392] dark:bg-sky-950 py-12 px-4 text-white text-center">
        <div className="max-w-xl mx-auto">
          {/* Título e Subtítulo */}
          <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">
            Subscribe to our newsletter
          </h3>
          <p className="text-xs md:text-sm text-sky-100 mb-6 leading-relaxed">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>

          {/* Input de Email e Botão Laranja */}
          <div className="flex flex-col sm:flex-row items-center bg-white dark:bg-slate-900 rounded-md p-1.5 shadow-lg mb-8">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full px-4 py-2.5 text-xs md:text-sm text-slate-800 dark:text-white bg-transparent outline-none border-none placeholder:text-slate-400"
            />
            <button 
              type="button"
              className="w-full sm:w-auto bg-[#fa8232] hover:bg-[#e07028] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition-colors whitespace-nowrap shadow-sm cursor-pointer"
            >
              SUBSCRIBE <ArrowRight className="w-3.5 h-3.5 inline-block ml-1" />
            </button>
          </div>

          {/* Logótipos de Parceiros */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 opacity-75 grayscale hover:grayscale-0 transition-all">
            <span className="font-extrabold text-sm tracking-widest">Google</span>
            <span className="font-bold text-sm tracking-wider">amazon</span>
            <span className="font-bold text-sm tracking-widest">PHILIPS</span>
            <span className="font-bold text-sm tracking-widest">TOSHIBA</span>
            <span className="font-bold text-sm tracking-wider">SAMSUNG</span>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. CORPO ESCURO PRINCIPAL DO RODAPÉ                      */}
      {/* ======================================================== */}
      <div className="bg-[#191c1f] dark:bg-slate-950 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-xs">
          
          {/* Coluna 1: Logo e Apoio ao Cliente */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#fa8232] rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              </div>
              <span className="text-white font-extrabold text-lg tracking-wider">CLICON</span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-slate-500 uppercase text-[10px]">Customer Supports:</span>
              <a href="tel:6295550129" className="text-white font-bold text-sm hover:text-[#fa8232] transition-colors">
                (629) 555-0129
              </a>
            </div>

            <p className="text-slate-400 leading-relaxed">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>

            <a href="mailto:info@kinbo.com" className="text-white hover:text-[#fa8232] transition-colors">
              info@kinbo.com
            </a>
          </div>

          {/* Coluna 2: Top Category */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-1">
              TOP CATEGORY
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-white transition-colors">Computer & Laptop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SmartPhone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Headphone</a></li>
              <li>
                <a href="#" className="text-[#fdba74] font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#fdba74] rounded-full"></span> Accessories
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors">Camera & Photo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">TV & Homes</a></li>
              <li>
                <a href="#" className="text-[#fdba74] font-semibold flex items-center gap-1">
                  Browse All Product <ArrowRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Quick Links */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-1">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="hover:text-white transition-colors">Shop Product</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shopping Cart</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wishlist</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compare</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Help</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Coluna 4: Download App */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-1">
              DOWNLOAD APP
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="bg-slate-800 hover:bg-slate-700 text-white rounded p-2.5 flex items-center gap-3 transition-colors border border-slate-700">
                <span className="text-xl">▶</span>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 uppercase">Get it now</span>
                  <span className="font-semibold text-xs leading-none">Google Play</span>
                </div>
              </a>

              <a href="#" className="bg-slate-800 hover:bg-slate-700 text-white rounded p-2.5 flex items-center gap-3 transition-colors border border-slate-700">
                <span className="text-xl"></span>
                <div className="flex flex-col">
                  <span className="text-[9px] text-slate-400 uppercase">Get it now</span>
                  <span className="font-semibold text-xs leading-none">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Coluna 5: Popular Tag */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-[11px] mb-1">
              POPULAR TAG
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {['Game', 'iPhone', 'TV', 'Asus Laptops', 'Macbook', 'SSD', 'Graphics Card', 'Power Bank', 'Smart TV', 'Speaker', 'Tablet', 'Microwave', 'Samsung'].map((tag) => (
                <a 
                  key={tag} 
                  href="#" 
                  className="bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white text-[11px] px-2.5 py-1 rounded border border-slate-700 transition-colors"
                >
                  {tag}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. BARRA INFERIOR DE DIREITOS DE AUTOR                   */}
      {/* ======================================================== */}
      <div className="bg-[#121417] dark:bg-black py-4 px-4 text-center text-slate-500 text-[11px] border-t border-slate-900">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Kinbo - eCommerce Template &copy; {currentYear}. Design by Templatecookie
          </p>
          <div className="flex gap-4 text-xs">
            <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}