import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiActivity, FiAward, FiEye } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'JoSAA AI Counsellor',
    description: 'Intelligent college & branch recommendations based on JEE ranks. Uses Gemini AI for specific counseling.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Gemini AI'],
    metrics: 'AI-Powered Counselling',
    github: 'https://github.com/madhavsai198',
    live: 'https://josaa-buddy.vercel.app/',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Cafe Bistro Website',
    description: 'Performant and beautifully designed website for a modern cafe, featuring smooth animations.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    metrics: '99/100 Lighthouse Score',
    github: 'https://github.com/madhavsai198',
    live: 'https://ca-phe-delight.vercel.app',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'BorrowEase',
    description: 'Peer-to-peer lending and borrowing platform streamlining item sharing within a community.',
    techStack: ['MERN Stack', 'Redux', 'Stripe'],
    metrics: '$5k+ secure transactions',
    github: 'https://github.com/madhavsai198',
    live: 'https://quick-loan-hub-app.lovable.app/',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Ravi Cycle Co.',
    description: 'Modern e-commerce storefront for a cycle company, showcasing products with a sleek and dynamic UI.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    metrics: '500+ products listed',
    github: 'https://github.com/madhavsai198',
    live: 'https://ravi-cycle-co.vercel.app',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="py-24 relative z-10 border-b border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Project Showcase</h2>
            <div className="w-12 h-1 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-400 font-light max-w-sm">Hover to explore full stack applications and AI solutions built for real-world impact.</p>
        </motion.div>

        {/* Horizontal Accordion Showcase */}
        <div className="flex flex-col md:flex-row h-[600px] gap-4 w-full">
          {projectsData.map((project, index) => {
            const isActive = activeProject === index;
            return (
              <motion.div
                key={project.id}
                onMouseEnter={() => setActiveProject(index)}
                layout
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'md:flex-[3] flex-1' : 'md:flex-1 h-20 md:h-auto'}`}
              >
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ${isActive ? 'scale-105' : 'scale-100'}`}
                />
                
                {/* Active Content Overlay */}
                <div className={`absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                  
                  {/* Title (Always visible on desktop, hides on mobile if not active) */}
                  <h3 className={`text-xl md:text-3xl font-bold text-white mb-2 transition-all duration-300 ${!isActive && 'md:origin-bottom-left md:-rotate-90 md:translate-y-[-100px] md:translate-x-4 md:whitespace-nowrap md:text-2xl'}`}>
                    {project.title}
                  </h3>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-300 font-light mb-6 max-w-lg hidden md:block">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6 hidden md:flex">
                          {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/10 backdrop-blur-md text-xs font-medium text-white rounded border border-white/10">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-4">
                          <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors">
                            <FiEye /> View Live
                          </a>
                          <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium bg-white/10 text-white px-4 py-2 rounded-md border border-white/20 hover:bg-white/20 transition-colors">
                            <FiGithub /> Source
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
