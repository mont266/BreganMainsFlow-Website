import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted By The UK's Leading Water Authorities
          </h2>
          <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg mt-6">
            We are proud to be a preferred contractor for major water companies, delivering reliable and efficient infrastructure solutions.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-16 sm:gap-x-24 gap-y-12 flex-wrap">
          {CLIENTS.map((client) => (
            <div 
              key={client.name} 
              className="group transition-all duration-300 transform hover:-translate-y-1"
              title={client.name}
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} logo`}
                className="h-32 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;