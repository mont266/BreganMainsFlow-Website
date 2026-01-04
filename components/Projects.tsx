import React from 'react';
import { SectionId } from '../types';
import { PROJECT_ITEMS } from '../constants';
import { MapPin } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id={SectionId.PROJECTS} className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Case Studies & Projects</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full mb-6"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg">
            A track record of excellence in delivering complex water infrastructure projects across the UK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECT_ITEMS.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl"
            >
              {/* Image */}
              <img
                src={project.imageUrl}
                alt={`Image of ${project.title} project`}
                className="aspect-[4/5] w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-transparent p-6 flex flex-col justify-start">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                  <div className="flex items-center text-slate-300 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1 text-brand-400" />
                    {project.location}
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 border-2 border-brand-500/0 group-hover:border-brand-500/50 rounded-2xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;