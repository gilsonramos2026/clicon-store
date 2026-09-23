import React from 'react';

export default function PublicFooter(): React.JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-slate-400 dark:text-slate-500 py-8 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 text-center text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 dark:text-slate-400">
          &copy; {currentYear} <span className="font-semibold text-slate-200 dark:text-slate-300">CLICON.store</span>. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 text-xs">
          <a href="#" className="hover:text-slate-200 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-slate-200 transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
