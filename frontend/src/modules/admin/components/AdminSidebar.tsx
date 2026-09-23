import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminSidebar(): React.JSX.Element {
  const location = useLocation();

  // Função simples para verificar se a rota está ativa e mudar o estilo do link
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="w-64 bg-slate-900 dark:bg-slate-950 text-slate-100 border-r border-transparent dark:border-slate-900 flex flex-col justify-between transition-colors duration-300">
      <div className="p-6">
        {/* Brand / Logo Admin */}
        <div className="text-xl font-black tracking-wider text-primary-400 mb-8 flex items-center gap-2">
          <span>CLICON</span>
          <span className="text-xs bg-primary-500/20 text-primary-400 px-2 py-0.5 rounded font-mono">ADM</span>
        </div>

        {/* Links do Menu */}
        <nav className="space-y-1">
          <Link
            to="/admin"
            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/admin')
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/admin/users"
            className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive('/admin/users')
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-slate-300 hover:bg-slate-800 hover:text-white'
            }`}
          >
            Usuários
          </Link>
        </nav>
      </div>

      {/* Rodapé da Sidebar */}
      <div className="p-4 border-t border-slate-800 dark:border-slate-900">
        <Link 
          to="/" 
          className="text-xs text-slate-400 hover:text-white flex items-center gap-2 px-2 py-1.5 rounded transition-colors"
        >
          ← Voltar para o Site Público
        </Link>
      </div>
    </aside>
  );
}
