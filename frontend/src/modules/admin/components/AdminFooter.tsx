import React from 'react';

export default function AdminFooter(): React.JSX.Element {
  return (
    <footer className="h-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 transition-colors duration-300">
      <div>
        <span>Painel de Controle Interno v1.0.0</span>
      </div>
      <div>
        <span>&copy; {new Date().getFullYear()} CLICON.store</span>
      </div>
    </footer>
  );
}
