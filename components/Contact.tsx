import React, { useState } from 'react';
import { SectionId } from '../types';
import { Phone, Mail, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you, ${formData.name}. We have received your inquiry about ${formData.service}.`);
    setFormData({ name: '', email: '', service: 'General Inquiry', message: '' });
  };

  return (
    <section id={SectionId.CONTACT} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl border border-slate-100 grid lg:grid-cols-5 gap-16">
          
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get In Touch</h2>
            <p className="text-slate-600 text-lg mb-10">
              Whether you need an emergency repair or a comprehensive infrastructure plan, our team is ready to deploy. Fill out the form or contact us directly.
            </p>

            <div className="space-y-8">
               <div className="flex items-start">
                <div className="bg-brand-100 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-slate-800">Our Office</h4>
                  <address className="text-slate-600 not-italic">
                    Unit 7<br />
                    Enterprise Centre<br />
                    Orchard Rd<br />
                    Stevenage<br />
                    SG1 3HH
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-100 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-slate-800">Direct Lines</h4>
                  <p className="text-slate-600">
                    Glenn Brett: <a href="tel:07850561058" className="hover:text-brand-600 transition-colors">07850 561058</a>
                  </p>
                  <p className="text-slate-600">
                    David Aylott: <a href="tel:07720929469" className="hover:text-brand-600 transition-colors">07720 929469</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-100 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-brand-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1 text-slate-800">Email Us</h4>
                  <p className="text-slate-600">
                    <a href="mailto:info@breganmainsflow.com" className="hover:text-brand-600 transition-colors">info@breganmainsflow.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-transparent bg-slate-800 text-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/50 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-transparent bg-slate-800 text-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/50 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all bg-white text-slate-900"
                >
                  <option>General Inquiry</option>
                  <option>Mains Replacement</option>
                  <option>Leak Detection</option>
                  <option>Emergency Repair</option>
                  <option>Commercial Installation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-transparent bg-slate-800 text-white placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/50 outline-none transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-500/30 hover:shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                Send Request <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;