import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';

const FeaturedProject = () => {
  return (
    <section className="py-24 relative z-10 border-b border-white/5 bg-[#030303] overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-blue-900/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="h-[1px] w-12 bg-blue-500/50"></div>
          <span className="text-blue-400 font-semibold tracking-wider uppercase text-sm">Featured Product</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Project Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              JoSAA AI <br/> Counsellor
            </h2>
            <p className="text-xl text-gray-400 font-light mb-8 leading-relaxed max-w-lg">
              A highly intelligent college admission platform built with <strong className="text-white font-medium">MERN stack</strong> and <strong className="text-white font-medium">Gemini AI</strong>. It bypasses generic advice to offer specific, tactical branch recommendations based on historical JEE cutoffs.
            </p>
            
            <div className="space-y-4 mb-10">
              {['Rank-based AI recommendations', 'Complex rank-based filtering', 'Secure Role-Based Dashboard', 'Sub-100ms database queries'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <FiCheckCircle className="text-blue-500 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#" className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                Live Platform <FiExternalLink />
              </a>
              <a href="https://github.com/madhavsai198" target="_blank" rel="noreferrer" className="px-6 py-3 border border-white/10 bg-[#111] text-white font-medium rounded-lg hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
                Source Code <FiGithub />
              </a>
            </div>
          </motion.div>

          {/* Right: Premium Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.1)] group bg-[#0a0a0a] aspect-[4/3] flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" 
                alt="JoSAA AI Interface" 
                className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />

              {/* Floating Tech Badges */}
              <div className="absolute top-8 left-8 z-20 flex flex-col gap-2">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-xs font-medium text-white shadow-xl">React</span>
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded text-xs font-medium text-white shadow-xl">Node.js</span>
              </div>
              <div className="absolute bottom-8 right-8 z-20">
                <span className="px-4 py-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/50 rounded-full text-sm font-semibold text-blue-400 shadow-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                  Gemini AI Powered
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
