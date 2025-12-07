import React from 'react';
import { Hammer, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="bg-amber-500 p-2 rounded-lg mr-2">
                <Hammer className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight">Nova<span className="text-amber-500">Costruzioni</span></span>
            </div>
            <p className="text-slate-400 mb-6">
              Costruiamo eccellenza dal 1995. Leader nel settore delle ristrutturazioni e costruzioni sostenibili in Italia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Link Rapidi</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Chi Siamo</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Servizi</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Progetti</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Lavora con Noi</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Interventi</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Ristrutturazioni Casa</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Rifacimento Bagno</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Cappotto Termico</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Tetti e Coperture</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Impianti Elettrici</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b border-slate-700 pb-2 inline-block">Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">Rimani aggiornato sulle ultime novità e incentivi fiscali.</p>
            <div className="flex flex-col space-y-3">
              <input type="email" placeholder="La tua email" className="bg-slate-800 border-none text-white px-4 py-2 rounded focus:ring-2 focus:ring-amber-500 outline-none" />
              <button className="bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded hover:bg-amber-400 transition-colors">Iscriviti</button>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} NovaCostruzioni S.r.l. - P.IVA 01234567890 - Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;