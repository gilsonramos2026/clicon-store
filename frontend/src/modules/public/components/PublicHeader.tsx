import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../contexts';
import { PromoBanner } from './ui/PromoBanner';
import { TopBar } from './ui/TopBar';
import { Search, ShoppingCart, Heart, User, ChevronDown, MapPin, ArrowLeftRight, Headphones, HelpCircle, PhoneCall } from 'lucide-react';

export function PublicHeader(): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  return (
    <>
      {/* 1. Banner Promocional no topo absoluto */}
      <PromoBanner />

      {/* 2. Barra Superior (Boas-vindas, Redes Sociais, Idioma, Moeda) */}
      <TopBar />

      {/* 3. Header Principal com fundo azul, Logo CLICON, Barra de Pesquisa e Ícones */}
      <div className="w-full bg-[#1b6496] dark:bg-[#12456b] text-white py-4 px-6 lg:px-16 flex items-center justify-between transition-colors shadow-sm">
        
        {/* Logotipo CLICON à esquerda */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center p-1.5 shadow-sm">
            <div className="w-4 h-4 border-4 border-[#1b6496] rounded-full"></div>
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            CLICON
          </span>
        </Link>

        {/* Barra de Pesquisa Centralizada */}
        <div className="hidden md:flex items-center bg-white dark:bg-slate-900 rounded-md overflow-hidden w-[450px] lg:w-[550px] shadow-sm">
          <input 
            type="text" 
            placeholder="Search for anything..." 
            className="w-full py-2.5 px-4 text-sm text-slate-800 dark:text-slate-100 bg-transparent focus:outline-none placeholder:text-slate-400"
          />
          <button 
            aria-label="Pesquisar"
            className="px-4 py-2.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Ícones da Direita (Carrinho, Favoritos e Usuário) */}
        <div className="flex items-center gap-6">
          <div className="relative cursor-pointer group">
            <ShoppingCart className="w-6 h-6 text-white group-hover:opacity-80 transition-opacity" />
            <span className="absolute -top-2 -right-2 bg-white text-[#1b6496] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
              2
            </span>
          </div>
          <div className="cursor-pointer group">
            <Heart className="w-6 h-6 text-white group-hover:opacity-80 transition-opacity" />
          </div>
          <div className="cursor-pointer group">
            <User className="w-6 h-6 text-white group-hover:opacity-80 transition-opacity" />
          </div>
        </div>
      </div>

      {/* 4. Barra de Navegação Inferior */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          
          {/* Links e Atalhos da Esquerda (Incluindo o menu de telas antigas em All Category) */}
          <div className="flex items-center gap-6 text-xs lg:text-sm relative">
            
            {/* Dropdown de Categorias e Navegação das suas Telas */}
            <div className="relative">
              <button 
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2 font-medium text-slate-800 dark:text-slate-100 cursor-pointer bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <span>All Category</span>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {/* Menu com as suas telas antigas (Início e Contato) e categorias */}
              {isCategoryOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-2 z-50">
                  <Link 
                    to="/" 
                    onClick={() => setIsCategoryOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    🏠 Início
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setIsCategoryOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    ✉️ Contato
                  </Link>
                </div>
              )}
            </div>

            <Link to="/track-order" className="hidden md:flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Track Order</span>
            </Link>

            <Link to="/compare" className="hidden md:flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
              <ArrowLeftRight className="w-4 h-4 text-slate-400" />
              <span>Compare</span>
            </Link>

            <Link to="/support" className="hidden lg:flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
              <Headphones className="w-4 h-4 text-slate-400" />
              <span>Customer Support</span>
            </Link>

            <Link to="/help" className="hidden lg:flex items-center gap-1.5 text-slate-600 dark:text-slate-400 hover:text-primary-500 transition-colors">
              <HelpCircle className="w-4 h-4 text-slate-400" />
              <span>Need Help</span>
            </Link>
          </div>
          
          {/* Controles da Direita (Telefone, Tema e Painel Admin) */}
          <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium">
            <div className="hidden xl:flex items-center gap-2 text-slate-800 dark:text-slate-200 font-semibold text-sm">
              <PhoneCall className="w-4 h-4 text-slate-700 dark:text-slate-300" />
              <span>+1-202-555-0104</span>
            </div>
            
            {/* Alternador de Tema */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm cursor-pointer"
              title={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>

            {/* Painel Admin */}
            <Link 
              to="/admin" 
              className="bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-950 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
            >
              Painel Admin
            </Link>
          </div>

        </div>
      </header>
    </>
  );
}