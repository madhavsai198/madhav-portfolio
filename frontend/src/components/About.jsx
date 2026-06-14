import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiTarget, FiUsers, FiGithub, FiTrendingUp, FiAward } from 'react-icons/fi';

const metrics = [
  { label: "Technologies", value: "15+", icon: <FiCpu /> },
  { label: "CGPA", value: "9.77", icon: <FiAward /> },
  { label: "Years Coding", value: "2+", icon: <FiTrendingUp /> }
];

const capabilities = [
  {
    title: "Full Stack Development",
    description: "Building scalable, end-to-end applications using the MERN stack and Next.js, with a strong focus on system architecture and performance optimization.",
    icon: <FiCode />
  },
  {
    title: "AI Integration",
    description: "Designing intelligent solutions by leveraging large language models, like Gemini AI, to solve real-world problems and enhance user experiences.",
    icon: <FiCpu />
  },
  {
    title: "Problem Solving",
    description: "Strong foundation in Data Structures and Algorithms. I approach complex engineering challenges logically, optimizing for both speed and scalability.",
    icon: <FiTarget />
  },
  {
    title: "Leadership & Strategy",
    description: "Served as Financial Head, managing resources and driving team objectives. I excel in collaborative environments, bridging technical and strategic goals.",
    icon: <FiUsers />
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10 border-b border-white/5 bg-[#050505]">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Behind the Code</h2>
            <div className="w-12 h-1 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-400 font-light max-w-sm">My journey from learning algorithms to architecting full-stack AI solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Story Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                I am <strong className="text-white font-semibold">Madhav Sai Vemuri</strong>, a highly motivated Full Stack Developer currently pursuing my B.Tech in Computer Science and Engineering at NIAT. 
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                My engineering journey began with a deep dive into Data Structures and Algorithms, forging a strong problem-solving mindset. This foundation naturally evolved into a passion for building software that scales. Today, I specialize in the <strong className="text-white font-semibold">MERN stack</strong> and modern React frameworks, crafting digital experiences that are as performant as they are beautiful.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light mb-6">
                Beyond traditional web development, I am deeply invested in the intersection of software and artificial intelligence. From conceptualizing the <span className="text-blue-400 font-medium">JoSAA AI Counsellor</span> to integrating sophisticated LLMs, I actively build tools that leverage AI to deliver tangible value.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                Outside the IDE, I have honed my leadership and organizational skills serving as <strong className="text-white font-semibold">Financial Head</strong>, where I managed budgets, coordinated cross-functional teams, and learned the crucial balance between technical feasibility and business strategy.
              </p>
            </div>
          </motion.div>

          {/* Metrics Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-[#111] hover:border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 mb-4 group-hover:text-white group-hover:scale-110 transition-all">
                  {metric.icon}
                </div>
                <h4 className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{metric.value}</h4>
                <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* What I Bring Section */}
        <div className="mt-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            What I Bring to the Table
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-[#0a0a0a] border border-white/5 rounded-2xl hover:bg-[#0d0d0d] transition-colors group relative overflow-hidden"
              >
                {/* Subtle hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:border-white/30 transition-colors">
                    {cap.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{cap.title}</h4>
                    <p className="text-gray-400 font-light leading-relaxed text-sm">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
