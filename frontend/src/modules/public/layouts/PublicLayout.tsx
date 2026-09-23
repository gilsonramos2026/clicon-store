import React from 'react';
import { Outlet } from 'react-router-dom';
import { PublicHeader } from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';


export default function PublicLayout(): React.JSX.Element {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      <PublicHeader />
      <main className="grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <PublicFooter />
    </div>
  );
}
