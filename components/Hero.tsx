import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { SectionId } from '../types';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id={SectionId.HOME} className="relative pt-20 flex items-center min-h-[90vh] bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Construction Site"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-amber-500 mr-2 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide uppercase">Leader nelle Ristrutturazioni</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Costruiamo il tuo <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
              Futuro Solido
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Dal progetto alla consegna chiavi in mano. Uniamo artigianalità italiana e tecnologie moderne per realizzare spazi abitativi e commerciali d'eccellenza.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection(SectionId.CONTACT)}
              className="group bg-amber-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition-all flex items-center justify-center shadow-lg shadow-amber-500/25"
            >
              Richiedi Preventivo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection(SectionId.PROJECTS)}
              className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Vedi i Nostri Lavori
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-slate-700/50 pt-8">
            <div className="flex items-center space-x-3 text-slate-300">
              <ShieldCheck className="h-8 w-8 text-amber-500" />
              <div>
                <p className="font-bold text-white">Certificati</p>
                <p className="text-sm">ISO 9001 & SOA</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Clock className="h-8 w-8 text-amber-500" />
              <div>
                <p className="font-bold text-white">Puntuali</p>
                <p className="text-sm">Consegne Garantite</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-slate-300">
              <Award className="h-8 w-8 text-amber-500" />
              <div>
                <p className="font-bold text-white">Garanzia</p>
                <p className="text-sm">10 Anni sui lavori</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;