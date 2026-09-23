import React from 'react';

export default function Dashboard(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      
      {/* Cards de Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-sm font-medium text-slate-500">Total de Vendas</span>
          <div className="text-2xl font-bold text-slate-900 mt-2">R$ 24.500,00</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-sm font-medium text-slate-500">Novos Usuários</span>
          <div className="text-2xl font-bold text-slate-900 mt-2">+142</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <span className="text-sm font-medium text-slate-500">Pedidos Pendentes</span>
          <div className="text-2xl font-bold text-slate-900 mt-2">12</div>
        </div>
      </div>
    </div>
  );
}
