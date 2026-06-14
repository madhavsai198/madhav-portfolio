import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center max-w-6xl">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => scrollToSection('home')}
        >
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center font-bold text-black group-hover:scale-105 transition-transform">
            M
          </div>
          <span className="font-semibold tracking-tight text-white">Madhav</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link} 
              onClick={() => scrollToSection(link)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
          <a href="https://flowcv.com/resume/hsr4bwaov2sf" target="_blank" rel="noreferrer" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition-colors">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
