import React, { useState, useRef, useEffect, useCallback } from 'react';
import { SectionId } from '../types';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToTestimonial = useCallback((index: number) => {
    const testimonialEl = slidesRef.current[index];
    if (testimonialEl && scrollContainerRef.current) {
      const scrollLeft = testimonialEl.offsetLeft - scrollContainerRef.current.offsetLeft;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft,
        behavior: 'smooth',
      });
    }
  }, []);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? TESTIMONIALS.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToTestimonial(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === TESTIMONIALS.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToTestimonial(newIndex);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slidesRef.current.findIndex(el => el === entry.target);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.5,
      }
    );

    slidesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      slidesRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [TESTIMONIALS.length]);


  return (
    <section id={SectionId.TESTIMONIALS} className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="max-w-3xl mx-auto text-slate-600 text-lg mt-6">
            Honest feedback from our valued customers.
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar -mx-4 px-4"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => { slidesRef.current[index] = el; }}
                className="flex-shrink-0 w-full snap-center px-4"
                style={{ minWidth: '100%' }}
              >
                <div className="bg-white border border-slate-200 rounded-lg p-8 md:p-12 h-full flex flex-col justify-between max-w-3xl mx-auto">
                  <Quote className="w-12 h-12 text-brand-200 mb-6" fill="currentColor" />
                  <blockquote className="text-slate-600 text-lg md:text-xl leading-relaxed italic mb-8 flex-grow">
                    "{testimonial.content}"
                  </blockquote>
                  <figcaption className="flex items-center">
                    <div>
                      <p className="font-bold text-slate-800">{testimonial.name}</p>
                      <p className="text-slate-500 text-sm">{testimonial.date}</p>
                      <div className="flex items-center gap-0.5 text-yellow-400 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5" fill="currentColor" />)}
                        {[...Array(5 - testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-slate-300" />)}
                      </div>
                    </div>
                  </figcaption>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-all hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToTestimonial(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-brand-500' : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
       <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;