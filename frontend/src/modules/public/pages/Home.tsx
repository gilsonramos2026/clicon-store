import React from 'react';

export default function Home(): React.JSX.Element {
  return (
    <div className="py-12 text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Bem-vindo à CLICON.store
      </h1>
      <p className="mt-4 text-lg text-slate-600 leading-relaxed">
        Sua plataforma moderna estruturada com React, TypeScript, Tailwind v4 e React Router DOM.
      </p>
    </div>
  );
}
