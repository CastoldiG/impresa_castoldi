import React, { useState } from 'react';
import { SectionId } from '../types';

const Portfolio: React.FC = () => {
  const categories = ["Tutti", "Residenziale", "Commerciale", "Esterni"];
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const projects = [
    {
      id: 1,
      title: "Villa Moderna",
      category: "Residenziale",
      image: "https://picsum.photos/600/400?random=1",
      location: "Milano"
    },
    {
      id: 2,
      title: "Uffici TechHub",
      category: "Commerciale",
      image: "https://picsum.photos/600/400?random=2",
      location: "Torino"
    },
    {
      id: 3,
      title: "Attico Panoramico",
      category: "Residenziale",
      image: "https://picsum.photos/600/400?random=3",
      location: "Roma"
    },
    {
      id: 4,
      title: "Restauro Facciata",
      category: "Esterni",
      image: "https://picsum.photos/600/400?random=4",
      location: "Firenze"
    },
    {
      id: 5,
      title: "Showroom Design",
      category: "Commerciale",
      image: "https://picsum.photos/600/400?random=5",
      location: "Bologna"
    },
    {
      id: 6,
      title: "Giardino Zen",
      category: "Esterni",
      image: "https://picsum.photos/600/400?random=6",
      location: "Verona"
    }
  ];

  const filteredProjects = activeCategory === "Tutti" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id={SectionId.PROJECTS} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-amber-600 font-bold tracking-wide uppercase mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">I Nostri Ultimi Progetti</h3>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-slate-900 text-white shadow-md" 
                    : "bg-white text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-lg bg-white cursor-pointer">
              <div className="aspect-w-3 aspect-h-2 w-full h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-amber-400 text-sm font-medium mb-1">{project.category} • {project.location}</p>
                <h4 className="text-white text-xl font-bold">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;