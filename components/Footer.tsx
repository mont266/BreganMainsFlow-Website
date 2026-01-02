import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 text-slate-700 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-slate-900">Bregan MainsFlow Ltd</h2>
          <div className="w-20 h-1 bg-brand-500 my-6 rounded-full"></div>
          <address className="not-italic text-slate-600 mb-6 space-y-1">
            <p>Unit 7</p>
            <p>Enterprise Centre</p>
            <p>Orchard Rd</p>
            <p>Stevenage</p>
            <p>SG1 3HH</p>
          </address>
          <div className="text-slate-500 space-y-2 text-sm font-medium">
            <p>GLENN BRETT: <a href="tel:07850561058" className="text-slate-700 hover:text-brand-600 transition-colors">07850 561058</a></p>
            <p>DAVID AYLOTT: <a href="tel:07720929469" className="text-slate-700 hover:text-brand-600 transition-colors">07720 929469</a></p>
            <p><a href="mailto:info@breganmainsflow.com" className="uppercase text-slate-700 hover:text-brand-600 transition-colors">info@breganmainsflow.com</a></p>
          </div>
        </div>
      </div>
       <div className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center sm:text-left text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Bregan MainsFlow Ltd. All rights reserved.</p>
        </div>
       </div>
    </footer>
  );
};

export default Footer;
