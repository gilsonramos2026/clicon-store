import { Twitter, Facebook,  Youtube, Instagram, ChevronDown } from "lucide-react";

export function TopBar() {
  return (
    <div className="w-full bg-[#1b6496] dark:bg-[#12456b] text-zinc-100 text-xs py-2 px-6 lg:px-16 flex items-center justify-between border-b border-blue-600/30 transition-colors">
      
      {/* Texto de Boas-Vindas à esquerda */}
      <div className="text-zinc-200 font-normal">
        Bem-vindo à Clicon! eletrônicos, acessórios e muito mais. Aproveite nossas ofertas!
      </div>

      {/* Lado Direito: Redes Sociais, Divisor, Idioma e Moeda */}
      <div className="flex items-center gap-6">
        
        {/* Redes Sociais com espaçamento idêntico */}
        <div className="flex items-center gap-3 text-zinc-200">
          <span className="text-zinc-300 font-light mr-1">Rede sociais:</span>
          <a href="#twitter" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter className="w-3.5 h-3.5" /></a>
          <a href="#facebook" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
          

          <a href="#youtube" aria-label="Youtube" className="hover:text-white transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
          <a href="#instagram" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
        </div>

        {/* Linha Divisória Vertical */}
        <div className="h-4 w-px bg-blue-400/30"></div>

        {/* Seletor de Idioma */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>PT-BR</span>
          <ChevronDown className="w-3 h-3 opacity-80" />
        </div>

        {/* Seletor de Moeda */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
          <span>R$</span>
          <ChevronDown className="w-3 h-3 opacity-80" />
        </div>

      </div>
    </div>
  );
}