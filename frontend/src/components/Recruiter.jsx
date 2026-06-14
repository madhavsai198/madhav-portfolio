import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiTarget, FiZap, FiUsers } from 'react-icons/fi';

const Recruiter = () => {
  const strengths = [
    {
      title: "Full-Stack Proficiency",
      description: "Capable of handling both frontend and backend development with modern tools like React, Next.js, and Node.js. Can architect scalable systems from scratch.",
      icon: <FiZap />
    },
    {
      title: "AI Integration Experience",
      description: "Hands-on experience integrating LLMs and building AI-driven solutions (like JoSAA AI Counsellor) that solve real-world user problems.",
      icon: <FiTarget />
    },
    {
      title: "Design-Driven Engineering",
      description: "Deep understanding of UX/UI principles. I don't just write code; I build products that feel premium, performant, and intuitive.",
      icon: <FiCheckCircle />
    },
    {
      title: "Leadership & Collaboration",
      description: "Proven experience leading teams and organizing large-scale events. Strong communicator who thrives in fast-paced, collaborative environments.",
      icon: <FiUsers />
    }
  ];

  return (
    <section id="why-hire-me" className="py-24 relative z-10 border-b border-white/5 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-400 mb-6">
              Recruiter Mode
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Why Hire <br/><span className="text-gray-400">Madhav?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light mb-8 max-w-md">
              I bring a unique combination of technical depth, product mindset, and design sensibility. I don't just complete tickets—I take ownership of features and deliver polished, user-centric experiences.
            </p>
            
            <div className="flex gap-4">
              <a href="https://flowcv.com/resume/hsr4bwaov2sf" target="_blank" rel="noreferrer" className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
                View Resume
              </a>
              <a href="#contact" className="px-6 py-3 bg-[#111] border border-white/10 text-white font-semibold rounded-lg hover:bg-[#1a1a1a] transition-colors">
                Schedule Interview
              </a>
            </div>
          </motion.div>

          {/* Right Strengths */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {strengths.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-[#0d0d0d] border border-white/5 rounded-2xl hover:bg-[#111] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Recruiter;
