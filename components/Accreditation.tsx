import React from 'react';
import { SectionId } from '../types';
import { ACCREDITATIONS } from '../constants';

const Accreditation: React.FC = () => {
  return (
    <section id={SectionId.ACCREDITATION} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Accreditation</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-10">
          {ACCREDITATIONS.map((accreditation) => (
            <div key={accreditation.name} className="flex-shrink-0">
              <img
                src={accreditation.logoUrl}
                alt={accreditation.name}
                title={accreditation.name}
                className="h-14 md:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditation;
