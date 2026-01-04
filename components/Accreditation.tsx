import React from 'react';
import { SectionId } from '../types';
import { ACCREDITATIONS } from '../constants';

const Accreditation: React.FC = () => {
  // Create a longer, less repetitive list by combining the original array
  // with a shuffled version of itself. This makes the loop feel less predictable.
  const extendedAccreditations = [
    ...ACCREDITATIONS, 
    ...[...ACCREDITATIONS].sort(() => Math.random() - 0.5)
  ];

  const Logos = () => (
    extendedAccreditations.map((accreditation, index) => (
      <li key={`${accreditation.name}-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
        <img
          src={accreditation.logoUrl}
          alt={accreditation.name}
          title={accreditation.name}
          className="h-24 md:h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
        />
      </li>
    ))
  );

  return (
    <section id={SectionId.ACCREDITATION} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Accreditation</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group">
        <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll group-hover:[animation-play-state:paused]">
          <Logos />
        </ul>
        <ul className="flex items-center justify-center md:justify-start animate-infinite-scroll group-hover:[animation-play-state:paused]" aria-hidden="true">
          <Logos />
        </ul>
      </div>
    </section>
  );
};

export default Accreditation;