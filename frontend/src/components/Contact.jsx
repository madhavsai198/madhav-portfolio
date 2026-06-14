import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiMessageCircle, FiArrowRight, FiPhone } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS once with the public key (v4 recommended pattern)
emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'general' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: formData.type,
        }
      );
      console.log('EmailJS success:', response.status, response.text);
      setStatus('success');
      setFormData({ name: '', email: '', message: '', type: 'general' });
    } catch (error) {
      console.error('EmailJS error details:', JSON.stringify(error));
      console.error('Service ID:', EMAILJS_SERVICE_ID);
      console.error('Template ID:', EMAILJS_TEMPLATE_ID);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Connect</h2>
          <div className="w-12 h-1 bg-white rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 mb-10 text-lg font-light leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:madhavsaiv789@gmail.com" className="flex items-center gap-4 group/link p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover/link:text-white transition-colors">
                  <FiMail />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email</h4>
                  <span className="text-sm text-gray-500 group-hover/link:text-gray-300 transition-colors">madhavsaiv789@gmail.com</span>
                </div>
                <FiArrowRight className="ml-auto text-gray-600 group-hover/link:text-white opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-2 transition-all duration-300" />
              </a>
              <a href="tel:+916301408907" className="flex items-center gap-4 group/link p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover/link:text-green-400 transition-colors">
                  <FiPhone />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Phone</h4>
                  <span className="text-sm text-gray-500 group-hover/link:text-gray-300 transition-colors">+91 6301408907</span>
                </div>
                <FiArrowRight className="ml-auto text-gray-600 group-hover/link:text-white opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-2 transition-all duration-300" />
              </a>
              <a href="https://wa.me/916301408907" target="_blank" rel="noreferrer" className="flex items-center gap-4 group/link p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover/link:text-green-400 transition-colors">
                  <FaWhatsapp size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">WhatsApp</h4>
                  <span className="text-sm text-gray-500 group-hover/link:text-gray-300 transition-colors">Message me directly</span>
                </div>
                <FiArrowRight className="ml-auto text-gray-600 group-hover/link:text-white opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-2 transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/madhavsaiv789" target="_blank" rel="noreferrer" className="flex items-center gap-4 group/link p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover/link:text-blue-400 transition-colors">
                  <FiLinkedin />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">LinkedIn</h4>
                  <span className="text-sm text-gray-500 group-hover/link:text-gray-300 transition-colors">Connect professionally</span>
                </div>
                <FiArrowRight className="ml-auto text-gray-600 group-hover/link:text-white opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-2 transition-all duration-300" />
              </a>
              <a href="https://github.com/madhavsai198" target="_blank" rel="noreferrer" className="flex items-center gap-4 group/link p-4 rounded-xl border border-white/5 bg-[#0a0a0a] hover:bg-[#111] hover:border-white/20 transition-all">
                <div className="w-10 h-10 rounded bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover/link:text-white transition-colors">
                  <FiGithub />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">GitHub</h4>
                  <span className="text-sm text-gray-500 group-hover/link:text-gray-300 transition-colors">View my repositories</span>
                </div>
                <FiArrowRight className="ml-auto text-gray-600 group-hover/link:text-white opacity-0 group-hover/link:opacity-100 group-hover/link:-translate-x-2 transition-all duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl border border-white/5 bg-[#0a0a0a]">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 focus:bg-[#1a1a1a] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 focus:bg-[#1a1a1a] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Reason</label>
                <select 
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 focus:bg-[#1a1a1a] transition-all appearance-none"
                >
                  <option value="general">General Inquiry</option>
                  <option value="hiring">Hiring / Project Opportunity</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 focus:bg-[#1a1a1a] transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full py-3 rounded-lg bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && <p className="text-green-500 text-sm mt-4">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-500 text-sm mt-4">Failed to send message. Try again later.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
