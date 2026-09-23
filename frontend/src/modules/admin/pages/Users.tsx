import React from 'react';

export default function Users(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Gerenciamento de Usuários</h1>
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-xs font-semibold text-slate-600 uppercase tracking-wider">
              <th className="p-4">Nome</th>
              <th className="p-4">E-mail</th>
              <th className="p-4">Cargo</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100 text-slate-700">
            <tr>
              <td className="p-4 font-medium">Admin Inicial</td>
              <td className="p-4">admin@clicon.store</td>
              <td className="p-4"><span className="bg-sky-50 text-sky-700 text-xs px-2 py-1 rounded-md font-medium">Administrador</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
