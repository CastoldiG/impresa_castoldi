import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-amber-600 font-bold tracking-wide uppercase mb-2">Contatti</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Parliamo del tuo Progetto</h3>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Siamo pronti ad ascoltare le tue idee e trasformarle in realtà. 
              Compila il modulo o contattaci direttamente per un sopralluogo gratuito.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-amber-50 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Telefono</h4>
                  <p className="text-slate-600">+39 02 1234 5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-50 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">info@novacostruzioni.it</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-50 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sede Legale</h4>
                  <p className="text-slate-600">Via Roma 123, 20100 Milano (MI)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-amber-50 p-3 rounded-lg mr-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Orari Ufficio</h4>
                  <p className="text-slate-600">Lun - Ven: 08:30 - 18:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900 mb-6">Richiedi Preventivo</h4>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border-slate-200 focus:border-amber-500 focus:ring-amber-500" placeholder="Mario Rossi" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Telefono</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border-slate-200 focus:border-amber-500 focus:ring-amber-500" placeholder="+39 ..." />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border-slate-200 focus:border-amber-500 focus:ring-amber-500" placeholder="mario@example.com" />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Tipo di Intervento</label>
                <select id="service" className="w-full px-4 py-3 rounded-lg border-slate-200 focus:border-amber-500 focus:ring-amber-500 bg-white">
                  <option>Ristrutturazione Completa</option>
                  <option>Nuova Costruzione</option>
                  <option>Manutenzione</option>
                  <option>Consulenza</option>
                  <option>Altro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Messaggio</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border-slate-200 focus:border-amber-500 focus:ring-amber-500" placeholder="Descrivi brevemente il tuo progetto..."></textarea>
              </div>

              <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                Invia Richiesta
              </button>
              <p className="text-xs text-slate-500 text-center mt-4">
                I tuoi dati sono trattati nel rispetto della Privacy Policy GDPR.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;