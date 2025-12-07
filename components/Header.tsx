import React, { useState } from 'react';
import { Menu, X, Hammer } from 'lucide-react';
import { SectionId } from '../types';

interface HeaderProps {
  scrollToSection: (id: SectionId) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', id: SectionId.HOME },
    { label: 'Servizi', id: SectionId.SERVICES },
    { label: 'Progetti', id: SectionId.PROJECTS },
    { label: 'Contatti', id: SectionId.CONTACT },
  ];

  const handleNavClick = (id: SectionId) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick(SectionId.HOME)}>
            <div className="bg-amber-500 p-2 rounded-lg mr-2">
              <Hammer className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-2xl text-slate-800 tracking-tight">Nova<span className="text-amber-600">Costruzioni</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="text-slate-600 hover:text-amber-600 font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick(SectionId.CONTACT)}
              className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-slate-800 transition-colors"
            >
              Richiedi Preventivo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-3 text-base font-medium text-slate-600 hover:text-amber-600 hover:bg-amber-50 rounded-md"
              >
                {item.label}
              </button>
            ))}
             <button
              onClick={() => handleNavClick(SectionId.CONTACT)}
              className="w-full mt-4 bg-amber-500 text-white px-5 py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors"
            >
              Richiedi Preventivo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;