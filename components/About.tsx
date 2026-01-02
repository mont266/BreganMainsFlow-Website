import React from 'react';
import { SectionId } from '../types';
import { CheckCircle, Award, HardHat, ClipboardCheck, Users, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Bregan MainsFlow Ltd</h3>
          <div className="w-24 h-1.5 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        {/* History / Founders Section */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start mb-24">
          <div className="prose prose-slate max-w-none">
            <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <TrendingUp className="w-7 h-7 text-brand-600 mr-3" />
              Our History & Growth
            </h4>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Bregan MainsFlow Ltd was formed in October 2017 by <strong>David Aylott</strong> and <strong>Glenn Brett</strong>. 
              With their extensive experience within the industry, they rapidly won some larger scale contracts such as designing and installing a new water main for the <strong>Queen of Kuwait</strong> and managing to open contracts with surrounding businesses.
            </p>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              These pivotal contracts allowed us to rapidly expand our core team and gave us the confidence to quote for larger tenders such as <strong>Clancy Group</strong>, <strong>PN Daly</strong>, and <strong>Agility Alliance</strong>, for whom we are now a preferred contractor.
            </p>
            <div className="bg-brand-50 border-l-4 border-brand-500 p-4 rounded-r-lg">
              <p className="text-brand-900 font-medium italic">
                "Bregan MainsFlow Ltd's core management team and strong values have allowed us to continue to grow from strength to strength at a time when other companies are downscaling."
              </p>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
             <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://picsum.photos/400/500?random=20" 
                alt="Bregan MainsFlow Team Site" 
                className="rounded-2xl shadow-lg transform translate-y-8 object-cover h-72 w-full"
              />
              <img 
                src="https://picsum.photos/400/500?random=21" 
                alt="Water Infrastructure Project" 
                className="rounded-2xl shadow-lg object-cover h-72 w-full"
              />
            </div>
            {/* Stat Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl border border-brand-100 text-center max-w-[220px] w-full">
               <span className="block text-4xl font-bold text-brand-600 mb-1">2017</span>
               <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Established</span>
            </div>
          </div>
        </div>

        {/* Training Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 mb-24 text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-brand-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 md:flex md:items-start md:gap-16">
                <div className="md:w-1/3 mb-10 md:mb-0 flex flex-col items-center text-center md:items-start md:text-left">
                    <div className="bg-brand-500/20 p-6 rounded-2xl mb-6 inline-block backdrop-blur-sm border border-brand-500/30">
                        <Users className="w-16 h-16 text-brand-400" />
                    </div>
                    <h4 className="text-3xl font-bold mb-4">Expertly Trained Employees</h4>
                    <p className="text-slate-300">
                      Investing in our people to deliver the highest standard of service.
                    </p>
                </div>
                <div className="md:w-2/3 space-y-6">
                    <p className="text-lg leading-relaxed text-slate-200">
                        We believe in training all of our employees to the highest standards in order to provide the best possible service to our customers.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-200">
                        We achieve this by working closely with approved training centres affiliated with the Water Training Industry or through in-house training. We draw on specialist knowledge from partners of the business, gained from years of experience and training with local water authorities.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <span className="px-4 py-2 bg-white/10 rounded-full text-brand-200 font-semibold border border-brand-500/30 flex items-center">
                            <Award className="w-4 h-4 mr-2" /> City & Guilds Accredited
                        </span>
                        <span className="px-4 py-2 bg-white/10 rounded-full text-brand-200 font-semibold border border-brand-500/30 flex items-center">
                            <Award className="w-4 h-4 mr-2" /> NVQ Certified
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* How We Work Section */}
        <div>
             <h4 className="text-3xl font-bold text-slate-900 mb-12 text-center">How We Work</h4>
             <div className="grid md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Intensive Survey",
                        desc: "Full intense survey carried out before any task is undertaken. This includes a survey of all the utilities and drainage.",
                        icon: <ClipboardCheck className="w-8 h-8 text-white" />
                    },
                    {
                        title: "Method Statement",
                        desc: "Written method statement produced following the intense survey. This is included as part of your free quote.",
                        icon: <CheckCircle className="w-8 h-8 text-white" />
                    },
                    {
                        title: "Trenchless Technology",
                        desc: "We use trenchless technology to keep our work as discreet as possible. Quite often our sites look like we haven’t even been there!",
                        icon: <HardHat className="w-8 h-8 text-white" />
                    }
                ].map((item, idx) => (
                    <div key={idx} className="group bg-white border border-slate-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                        <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-brand-200 group-hover:bg-brand-500 transition-colors">
                            {item.icon}
                        </div>
                        <h5 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h5>
                        <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
             </div>
        </div>

      </div>
    </section>
  );
};

export default About;