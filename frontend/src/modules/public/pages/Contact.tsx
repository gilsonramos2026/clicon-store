import React from 'react';

export default function Contact(): React.JSX.Element {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-xs border border-slate-200">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">Fale Conosco</h1>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
          <input type="text" className="w-full rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-sky-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
          <input type="email" className="w-full rounded-lg border border-slate-300 p-2 text-sm outline-none focus:border-sky-500" />
        </div>
        <button className="w-full bg-sky-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-sky-700 transition-colors">
          Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
