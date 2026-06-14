import React, { Suspense, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, ContactShadows, Html, Environment, Float } from '@react-three/drei';
import { FiGithub, FiLinkedin, FiMail, FiFileText, FiCode, FiAward, FiCpu, FiTarget, FiX, FiExternalLink } from 'react-icons/fi';

const projects = [
  { name: 'JoSAA AI Counsellor', color: 'from-blue-500/20 to-blue-900/40', border: 'border-blue-500/50', description: 'Intelligent college & branch recommendations based on JEE ranks using Gemini AI.' },
  { name: 'BorrowEase', color: 'from-purple-500/20 to-purple-900/40', border: 'border-purple-500/50', description: 'Peer-to-peer lending platform to streamline item sharing within communities.' },
  { name: 'Ravi Cycle Co.', color: 'from-emerald-500/20 to-emerald-900/40', border: 'border-emerald-500/50', description: 'Modern e-commerce storefront for a cycle company, showcasing products with a sleek and dynamic UI.' },
  { name: 'Cafe Bistro', color: 'from-orange-500/20 to-orange-900/40', border: 'border-orange-500/50', description: 'High-performance website for a modern cafe with smooth animations.' }
];

const ProfessionalLaptop = ({ activeProject, setActiveProject, setSelectedProject }) => {
  const group = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Mouse reactive rotation (subtle)
    if (!hovered) {
      group.current.rotation.x = state.pointer.y * 0.05;
      group.current.rotation.y = (state.pointer.x * 0.1) + Math.sin(t / 4) * 0.05;
    } else {
      group.current.rotation.x = state.pointer.y * 0.1;
      group.current.rotation.y = state.pointer.x * 0.2;
    }
  });

  return (
    <group 
      ref={group} 
      position={[0, -1, 0]} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
    >
      {/* Laptop Base */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 0.1, 2.8]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Keyboard area indentation */}
      <mesh position={[0, 0.051, 0.2]}>
        <boxGeometry args={[3.6, 0.01, 1.4]} />
        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.8} />
      </mesh>

      {/* Screen Hinge */}
      <mesh position={[0, 0.1, -1.4]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.08, 4, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Screen */}
      <group position={[0, 0.1, -1.4]} rotation={[0.2, 0, 0]}>
        <mesh position={[0, 1.4, 0]} castShadow>
          <boxGeometry args={[4, 2.8, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Screen Bezel */}
        <mesh position={[0, 1.4, 0.051]}>
          <planeGeometry args={[3.8, 2.6]} />
          <meshBasicMaterial color="#000" />
        </mesh>
        
        <Html 
          transform 
          position={[0, 1.4, 0.053]} 
          scale={0.2} 
          rotation-x={0} 
          zIndexRange={[100, 0]}
        >
          <div 
            className="w-[800px] h-[550px] bg-[#0d0d0d] rounded-md border border-white/10 p-6 flex flex-col font-sans text-sm overflow-hidden relative transition-colors duration-1000 cursor-pointer group"
            onClick={() => setSelectedProject(projects[activeProject])}
            onWheel={(e) => {
              if(e.deltaY > 0) setActiveProject((p) => (p + 1) % projects.length);
              if(e.deltaY < 0) setActiveProject((p) => (p - 1 + projects.length) % projects.length);
            }}
          >
            {/* Fake Browser UI */}
            <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 bg-white/5 rounded-md py-1.5 px-4 text-center text-gray-400 text-xs tracking-wider font-mono">
                localhost:3000 / {projects[activeProject].name.toLowerCase().replace(' ', '-')}
              </div>
            </div>
            
            {/* Project Content */}
            <div className="flex-1 flex flex-col items-center justify-center relative z-10">
              <motion.h2 
                key={activeProject}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl font-bold text-white mb-6 text-center"
              >
                {projects[activeProject].name}
              </motion.h2>
              <div className="flex gap-3 mb-6">
                <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm text-white backdrop-blur-md border border-white/10">Live Demo</span>
                <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm text-white backdrop-blur-md border border-white/10 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Active</span>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full flex items-center gap-2">
                Click to view details <FiExternalLink />
              </div>
            </div>

            {/* Glowing BG */}
            <div className={`absolute bottom-0 left-0 h-[60%] w-full bg-gradient-to-t ${projects[activeProject].color} transition-all duration-1000 blur-3xl opacity-60`}></div>
            <div className={`absolute bottom-0 left-0 h-1/3 w-full border-t ${projects[activeProject].border} shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-colors duration-1000`}></div>
          </div>
        </Html>
      </group>
    </group>
  );
};

const Hero = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!selectedProject) setActiveProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [selectedProject]);

  return (
    <section id="home" className="min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto w-full relative z-10">
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 max-w-lg w-full z-10 shadow-2xl"
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 bg-white/5 rounded-full transition-colors">
                <FiX size={20} />
              </button>
              <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.name}</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-8">{selectedProject.description}</p>
              <div className="flex gap-4">
                <a href="#projects" onClick={() => setSelectedProject(null)} className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors w-full text-center">View in Showcase</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="w-full md:w-[55%] z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-xs font-medium text-blue-400 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            B.Tech CSE @ NIAT
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Building Full Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Applications</span> & AI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Solutions.</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed font-light">
            I'm <strong className="text-white font-semibold">Madhav Sai Vemuri</strong>. A MERN Stack Developer, AI Enthusiast, and Financial Head who builds real-world, scalable software.
          </p>

          {/* Social Proof / Branding Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 py-6 border-y border-white/5">
            <div>
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-1.5"><FiCode /> Projects Built</p>
              <p className="text-sm font-semibold text-white">10+ Scalable Apps</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-1.5"><FiAward /> Leadership</p>
              <p className="text-sm font-semibold text-white">Financial Head</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-1.5"><FiCpu /> Technologies</p>
              <p className="text-sm font-semibold text-white">MERN, Next.js, AI</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1 flex items-center gap-1.5"><FiTarget /> Current Focus</p>
              <p className="text-sm font-semibold text-white">AI-Driven Solutions</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Explore Work
            </a>
            <a href="https://flowcv.com/resume/hsr4bwaov2sf" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg border border-white/10 bg-[#111] text-white font-medium hover:bg-[#1a1a1a] transition-colors flex items-center gap-2">
              <FiFileText /> Resume
            </a>
            
            <div className="flex items-center gap-2 ml-2">
              <a href="https://github.com/madhavsai198" target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-white/10 bg-[#111] text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/madhavsaiv789" target="_blank" rel="noreferrer" className="p-3 rounded-lg border border-white/10 bg-[#111] text-gray-400 hover:text-white hover:bg-[#1a1a1a] transition-all">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-[45%] h-[500px] md:h-[700px] relative z-10 mt-12 md:mt-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-[100px] opacity-50 pointer-events-none transform -translate-y-10"></div>
        <Canvas camera={{ position: [0, 1.5, 6], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <Environment preset="city" />
          <spotLight position={[10, 20, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
          <spotLight position={[-10, 10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#fff" />
          
          <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
            <PresentationControls 
              global 
              config={{ mass: 1, tension: 170, friction: 26 }}
              rotation={[0, -0.3, 0]} 
              polar={[-Math.PI / 6, Math.PI / 6]} 
              azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
              <ProfessionalLaptop activeProject={activeProject} setActiveProject={setActiveProject} setSelectedProject={setSelectedProject} />
            </PresentationControls>
          </Float>
          <ContactShadows position={[0, -1.8, 0]} opacity={0.5} scale={15} blur={2} far={4} color="#000" />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
