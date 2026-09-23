import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../components/AdminSidebar';
import AdminFooter from '../components/AdminFooter';
import { AdminHeader } from '../components/AdminHeader';

export default function AdminLayout(): React.JSX.Element {
  return (
    <div className="flex h-screen bg-slate-50 dark:bg-slate-950 overflow-hidden text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* 1. Sidebar Lateral */}
      <AdminSidebar />

      {/* Conteúdo à direita da Sidebar */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* 2. Topbar / Header Superior */}
        <AdminHeader />

        {/* 3. Área Principal Dinâmica */}
        <main className="flex-1 overflow-y-auto p-8 bg-slate-50 dark:bg-slate-950/40 transition-colors duration-300">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>

        {/* 4. Rodapé Inferior */}
        <AdminFooter />
      </div>

    </div>
  );
}
