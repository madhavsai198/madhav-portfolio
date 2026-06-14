import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook, FiAward, FiCode } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    type: 'work',
    role: "Full Stack Engineer",
    organization: "Sitezy",
    date: "2025 - Present",
    description: "Designed and delivered end-to-end web solutions for external shops and businesses, building custom websites and digital tools tailored to their needs. Worked across the full stack to ensure fast, reliable, and scalable products.",
    metrics: "Client-focused delivery",
    icon: <FiBriefcase />
  },
  {
    id: 2,
    type: 'education',
    role: "B.Tech in Computer Science",
    organization: "NIAT",
    date: "2024 - 2028",
    description: "Specialization in Computer Science and Engineering with a focus on full-stack development and AI. Actively participating in hackathons and technical projects.",
    metrics: "9.77 CGPA",
    icon: <FiBook />
  },
  {
    id: 3,
    type: 'leadership',
    role: "Finance Head",
    organization: "Media Council Club, NIAT",
    date: "Dec 2024 - May 2026",
    description: "Served as Finance Head of the Media Council Club at NIAT. Managed club budgets, coordinated financial planning for events, and ensured transparent resource allocation across all club activities.",
    metrics: "Club Finance Head",
    icon: <FiAward />
  },
  {
    id: 4,
    type: 'project',
    role: "JoSAA AI Counsellor",
    organization: "Independent Project",
    date: "2026",
    description: "Built an AI-driven college counseling platform leveraging Gemini AI to provide specific, rank-based branch and college recommendations for JEE aspirants.",
    metrics: "Launched in 2026",
    icon: <FiCode />
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 border-b border-white/5 bg-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Journey</h2>
            <div className="w-12 h-1 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-400 font-light max-w-sm">A timeline of my professional experience, education, and key leadership roles.</p>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Subtle Timeline Line */}
          <div className="absolute left-[27px] md:left-[50%] top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-[0.5px]"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-5/12"></div>
              
              {/* Timeline Icon Node */}
              <div className="absolute left-[-11px] md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center z-10 shadow-[0_0_0_4px_#0a0a0a] text-gray-400">
                {exp.icon}
              </div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-6 md:pl-0">
                <div className="p-6 rounded-2xl border border-white/5 bg-[#0d0d0d] hover:bg-[#111] transition-all relative group shadow-sm hover:shadow-xl hover:shadow-white/5">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-gray-500 tracking-wider uppercase">{exp.date}</span>
                    <div className="inline-block px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-medium text-gray-300 uppercase tracking-widest">
                      {exp.type}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                  <h4 className="text-sm text-gray-400 mb-4 font-medium">{exp.organization}</h4>
                  
                  <p className="text-gray-400 font-light leading-relaxed mb-4 text-sm">
                    {exp.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/5 text-xs font-medium text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {exp.metrics}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
