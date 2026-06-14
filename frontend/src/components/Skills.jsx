import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, Wireframe } from '@react-three/drei';
import { FiBox, FiLayers, FiDatabase, FiTarget, FiTool, FiUsers, FiArrowRight } from 'react-icons/fi';

const expertiseData = [
  {
    category: "Full Stack Development",
    icon: <FiLayers />,
    skills: [
      { name: "React.js", summary: "Building dynamic, highly interactive UIs.", useCase: "Client-side routing, state management, and component architecture.", projects: ["JoSAA AI Counsellor", "Cafe Bistro"] },
      { name: "Node.js & Express", summary: "Architecting scalable backend services.", useCase: "REST APIs, authentication middleware, and server-side logic.", projects: ["BorrowEase", "Cafe Bistro Backend"] },
      { name: "Next.js", summary: "Server-side rendering and static generation.", useCase: "SEO optimization and performance-critical frontend applications.", projects: ["Varna Crafts Platform"] }
    ]
  },
  {
    category: "AI Applications",
    icon: <FiBox />,
    skills: [
      { name: "Gemini AI", summary: "Integrating powerful LLMs into web apps.", useCase: "Generating dynamic, context-aware college counseling advice.", projects: ["JoSAA AI Counsellor"] },
      { name: "OpenAI API", summary: "Automating natural language tasks.", useCase: "Building conversational interfaces and processing user queries.", projects: ["Ask Madhav AI Assistant"] }
    ]
  },
  {
    category: "Databases",
    icon: <FiDatabase />,
    skills: [
      { name: "MongoDB", summary: "NoSQL document storage for scalable apps.", useCase: "Flexible schema design, aggregations, and rapid prototyping.", projects: ["BorrowEase", "JoSAA AI Counsellor"] },
      { name: "PostgreSQL", summary: "Relational data management.", useCase: "Complex queries, transactions, and structured data integrity.", projects: ["Financial Analytics Dashboard"] }
    ]
  },
  {
    category: "Problem Solving",
    icon: <FiTarget />,
    skills: [
      { name: "Data Structures", summary: "Optimizing code execution and memory.", useCase: "Implementing efficient search and filter algorithms.", projects: ["Rank Prediction Engine"] },
      { name: "Algorithms", summary: "Logical breakdown of complex tasks.", useCase: "Graph traversal, dynamic programming, and sorting.", projects: ["Competitive Programming"] }
    ]
  },
  {
    category: "Developer Tools",
    icon: <FiTool />,
    skills: [
      { name: "Git/GitHub", summary: "Version control and collaborative coding.", useCase: "Branching strategies, PR reviews, and CI/CD pipelines.", projects: ["All Projects"] },
      { name: "Docker", summary: "Containerizing applications for deployment.", useCase: "Ensuring consistent environments across dev and production.", projects: ["SaaS Boilerplate"] },
      { name: "Vercel", summary: "Edge network deployment.", useCase: "Seamless CI/CD, serverless functions, and global distribution.", projects: ["Portfolio", "Cafe Bistro"] }
    ]
  },
  {
    category: "Leadership",
    icon: <FiUsers />,
    skills: [
      { name: "Financial Head", summary: "Managing budgets and resource allocation.", useCase: "Optimized spending and coordinated cross-functional event teams.", projects: ["University Tech Fest 2023"] },
      { name: "Tech Mentorship", summary: "Guiding junior developers.", useCase: "Conducting workshops on React and modern web development.", projects: ["Coding Club"] }
    ]
  }
];

// Subtle 3D Abstract Shape
const AbstractCore = ({ activeCategoryIndex }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 4) * 0.5;
    meshRef.current.rotation.y = t * 0.2;
    // Morph scale slightly based on category to make it feel responsive
    const targetScale = 1 + (activeCategoryIndex * 0.05);
    meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale }, 0.05);
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial 
          color="#111" 
          metalness={0.8} 
          roughness={0.2} 
          wireframe={true}
          transparent
          opacity={0.3}
        />
        {/* Inner solid core */}
        <mesh>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.5} />
        </mesh>
      </mesh>
    </Float>
  );
};

const Skills = () => {
  // Default to first skill of first category
  const [activeSkill, setActiveSkill] = useState(expertiseData[0].skills[0]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const handleSkillClick = (skill, categoryIndex) => {
    setActiveSkill(skill);
    setActiveCategoryIndex(categoryIndex);
  };

  return (
    <section id="expertise" className="py-24 relative z-10 border-b border-white/5 bg-[#030303] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-400 mb-6">
            Technical Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Core Expertise</h2>
          <p className="text-gray-400 font-light max-w-lg leading-relaxed text-lg">
            I don't just write code; I architect solutions. Explore my technical capabilities through the lens of real-world application.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left: Categories & Badges */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8">
            {expertiseData.map((category, catIndex) => (
              <motion.div 
                key={category.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gray-500">{category.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{category.category}</h3>
                  <div className="flex-1 h-[1px] bg-gradient-to-r from-white/10 to-transparent ml-4"></div>
                </div>
                
                <div className="flex flex-wrap gap-3 pl-8">
                  {category.skills.map((skill) => {
                    const isActive = activeSkill.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => handleSkillClick(skill, catIndex)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                          isActive 
                            ? 'bg-blue-500/10 border-blue-500/50 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]' 
                            : 'bg-[#0a0a0a] border-white/10 text-gray-400 hover:bg-[#111] hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Interactive Details Panel */}
          <div className="w-full lg:w-5/12 relative">
            <div className="sticky top-24">
              {/* 3D Background Canvas */}
              <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <AbstractCore activeCategoryIndex={activeCategoryIndex} />
                </Canvas>
              </div>

              {/* Glassmorphism Detail Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 min-h-[400px] shadow-2xl flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                    {expertiseData[activeCategoryIndex].icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-3">{activeSkill.name}</h3>
                  <p className="text-gray-400 font-light text-lg mb-8 leading-relaxed">
                    {activeSkill.summary}
                  </p>

                  <div className="space-y-6 mt-auto">
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Technical Application</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{activeSkill.useCase}</p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Proven In Projects</h4>
                      <div className="flex flex-col gap-2">
                        {activeSkill.projects.map(project => (
                          <div key={project} className="flex items-center justify-between group cursor-pointer p-2 rounded-lg hover:bg-white/5 transition-colors -mx-2">
                            <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">{project}</span>
                            <FiArrowRight className="text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Skills;
