import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Underground Utility Specialists
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg mt-6">
            We have over 30 years experience working on a variety of different projects for some very high profile clients.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-12 sm:gap-x-16 gap-y-10 flex-wrap">
          {CLIENTS.map((client) => (
            <div 
              key={client.name} 
              className="group transition-all duration-300"
              title={client.name}
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} logo`}
                className="h-10 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;