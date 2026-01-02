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
        <div className="flex justify-center items-stretch gap-8 md:gap-12 flex-wrap">
          {CLIENTS.map((client) => (
            <div 
              key={client.name} 
              className="group bg-white p-6 border border-slate-200 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center"
              style={{ minWidth: '200px' }}
            >
              <img
                src={client.logoUrl}
                alt={`${client.name} logo`}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
