import React, { useState } from 'react';
import { ClipboardList, X, Send } from 'lucide-react';
import { SERVICES } from '../constants';

const LeadGenWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Lead form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form and close widget after a delay
    setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        setIsSubmitted(false);
        setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-2xl transition-all duration-500 transform ${
          isOpen 
            ? 'bg-slate-900 rotate-180' 
            : 'bg-brand-600 hover:bg-brand-700 hover:scale-110'
        } text-white group`}
        aria-label={isOpen ? "Close quote form" : "Open quote form"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <ClipboardList className="w-6 h-6" />}
      </button>

      {/* Form Window */}
      <div 
        className={`absolute bottom-20 right-0 w-[calc(100vw-3rem)] sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 transition-all duration-500 origin-bottom-right overflow-hidden flex flex-col ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: 'auto', maxHeight: '80vh' }}
      >
        {/* Header */}
        <div className="bg-slate-900 p-5 text-center">
            <div className="flex items-center gap-3 justify-center">
                <div className="bg-brand-500 p-2 rounded-xl">
                    <ClipboardList className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="font-bold text-white text-lg">Get a Quick Quote</h3>
                    <p className="text-xs text-slate-400">Response within 24 hours</p>
                </div>
            </div>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          {isSubmitted ? (
            <div className="text-center py-12 px-4">
              <h4 className="text-xl font-bold text-slate-800 mb-2">Thank You!</h4>
              <p className="text-slate-600">Your request has been sent. Our team will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="lead-name" className="sr-only">Name</label>
                <input
                  type="text" id="lead-name" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 text-sm"
                  placeholder="Your Name*"
                />
              </div>
              <div>
                <label htmlFor="lead-email" className="sr-only">Email</label>
                <input
                  type="email" id="lead-email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 text-sm"
                  placeholder="Email Address*"
                />
              </div>
              <div>
                <label htmlFor="lead-phone" className="sr-only">Phone</label>
                <input
                  type="tel" id="lead-phone" name="phone" required value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 text-sm"
                  placeholder="Phone Number*"
                />
              </div>
              <div>
                <label htmlFor="lead-service" className="sr-only">Service</label>
                <select
                  id="lead-service" name="service" required value={formData.service} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 bg-white text-sm"
                >
                  <option value="" disabled>Select Service*</option>
                  <option value="General Query">General Query</option>
                  {SERVICES.map((service) => (
                    <option key={service.title} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="lead-message" className="sr-only">Message</label>
                <textarea
                  id="lead-message" name="message" rows={4} required value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 text-sm resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Submit Request
              </button>
            </form>
          )}
        </div>
         <div className="p-2 bg-white border-t border-slate-100">
            <p className="text-center text-[10px] text-slate-400 font-medium">
                We respect your privacy and will not share your details.
            </p>
         </div>
      </div>
    </div>
  );
};

export default LeadGenWidget;
