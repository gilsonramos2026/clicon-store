import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../contexts';

export function PublicHeader(): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          CLICON<span className="text-primary-500">.store</span>
        </Link>
        
        {/* Navegação e Ações */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            Início
          </Link>
          <Link to="/contact" className="text-slate-600 dark:text-slate-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            Contato
          </Link>
          
          {/* Alternador de Tema */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm cursor-pointer"
            title={theme === 'dark' ? 'Ativar Modo Claro' : 'Ativar Modo Escuro'}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {/* Link para o Painel Admin */}
          <Link 
            to="/admin" 
            className="bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-950 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors"
          >
            Painel Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
