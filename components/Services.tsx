import React from 'react';
import { Home, Building2, PaintBucket, Zap, Ruler, HardHat } from 'lucide-react';
import { SectionId } from '../types';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-amber-600" />,
      title: "Ristrutturazioni Residenziali",
      description: "Trasformiamo la tua casa con interventi mirati o ristrutturazioni complete chiavi in mano."
    },
    {
      icon: <Building2 className="h-8 w-8 text-amber-600" />,
      title: "Costruzioni Commerciali",
      description: "Realizzazione di uffici, negozi e capannoni industriali con focus su funzionalità e design."
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Efficienza Energetica",
      description: "Cappotti termici, impianti fotovoltaici e soluzioni per ridurre i consumi e migliorare il comfort."
    },
    {
      icon: <Ruler className="h-8 w-8 text-amber-600" />,
      title: "Progettazione 3D",
      description: "Visualizza il risultato finale prima di iniziare i lavori grazie ai nostri architetti interni."
    },
    {
      icon: <PaintBucket className="h-8 w-8 text-amber-600" />,
      title: "Finiture di Pregio",
      description: "Posa pavimenti, resine, stucchi e decorazioni di alto livello per ambienti esclusivi."
    },
    {
      icon: <HardHat className="h-8 w-8 text-amber-600" />,
      title: "Manutenzione Stabili",
      description: "Servizi di manutenzione ordinaria e straordinaria per condomini e complessi residenziali."
    }
  ];

  return (
    <section id={SectionId.SERVICES} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-amber-600 font-bold tracking-wide uppercase mb-2">I Nostri Servizi</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Soluzioni Edili a 360 Gradi</h3>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Offriamo un servizio completo, dalla progettazione alla realizzazione, garantendo standard qualitativi elevati e rispetto dei tempi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="bg-white rounded-xl p-4 w-fit mb-6 shadow-sm group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { className: "h-8 w-8 text-amber-600 group-hover:text-white transition-colors" })}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;