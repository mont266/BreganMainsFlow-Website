import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SectionId } from '../types';
import AnimatedHeroBackground from './AnimatedHeroBackground';

const Hero: React.FC = () => {
  return (
    <section id={SectionId.HOME} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Animated Background */}
      <AnimatedHeroBackground />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-brand-900/80"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl pt-16 sm:pt-0">          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Underground <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white">
              Utility Specialist
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed">
            Bregan MainsFlow provides world-class water infrastructure solutions. From municipal mains replacement to precision leak detection, we are the industry standard for reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={`#${SectionId.SERVICES}`} 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-600 rounded-full hover:bg-brand-500 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-brand-500/50"
            >
              Explore Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href={`#${SectionId.ABOUT}`} 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border-2 border-white/20 bg-white/5 rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
            >
              Our Projects
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;