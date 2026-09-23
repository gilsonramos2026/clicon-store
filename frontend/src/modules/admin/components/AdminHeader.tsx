import React from 'react';
import { useTheme } from '../../../contexts';

export function AdminHeader(): React.JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between shadow-xs transition-colors duration-300">
      {/* Indicador de Seção */}
      <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        <span>Visão Geral</span>
      </div>
      
      {/* Ações da Direita */}
      <div className="flex items-center gap-4">
        {/* Alternador de Tema Compacto */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm cursor-pointer"
          title={theme === 'dark' ? 'Mudar para o Modo Claro' : 'Mudar para o Modo Escuro'}
          aria-label="Alternar tema"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* Perfil Simplificado */}
        <div className="flex items-center gap-3 border-l border-slate-200 dark:border-slate-800 pl-4">
          <div className="hidden md:flex flex-col text-right">
            <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Admin Clicon</span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 font-medium">Master</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            AC
          </div>
        </div>
      </div>
    </header>
  );
}
