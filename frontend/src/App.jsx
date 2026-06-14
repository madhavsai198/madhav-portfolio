import React, { Suspense } from 'react';
import { ReactLenis } from 'lenis/react';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Recruiter from './components/Recruiter';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      <div className="bg-[#050505] min-h-screen text-gray-200 font-sans selection:bg-white/20">
        <Navbar />
        
        <main className="flex flex-col relative w-full overflow-hidden">
          <Hero />
          <FeaturedProject />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Recruiter />
          <Contact />
        </main>
        
        <AIAssistant />
      </div>
    </ReactLenis>
  );
}

export default App;
