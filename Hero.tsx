import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-slate-100 pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center text-center md:text-left">
        
        {/* Text and Buttons Container */}
        <div className="flex-1 md:flex-[2]">  
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-4">
            <span className="text-indigo-600">Hello, I'm</span> Nia Balaji
          </h1>
          <h2 className="text-2xl md:text-4xl text-slate-800 mb-8">Computer Engineering Senior | Developer</h2>
          
          <p className="text-2xl text-slate-700 max-w-2xl mb-10">
            I design and implement innovative solutions that span both software and hardware, with an emphasis on clean code, user-centric design, and seamless integration.
            I will graduate in June 2025, with a degree in Computer Engineering from the University of California Santa Cruz. 
          </p>
          
          <div className="flex space-x-4 mb-12 justify-center md:justify-start">
            <a href="https://github.com/niabalaji" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition-colors">
              <Github size={40} />
            </a>
            <a href="https://linkedin.com/in/nia-balaji" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition-colors">
              <Linkedin size={40} />
            </a>
            <a href="mailto:nbalaji1@ucsc.edu" className="p-3 bg-slate-800 text-white rounded-full hover:bg-indigo-600 transition-colors">
              <Mail size={40} />
            </a>
          </div>
          
          <div className="flex space-x-4 justify-center md:justify-start">
            <button 
              onClick={scrollToProjects}
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              View My Work
            </button>
            <a 
              href="https://drive.google.com/file/d/1Oo2MBwavznINeJYv7pdHGvTH1k-ixmQr/view?usp=sharing" 
              className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Headshot Image */}
        <div className="flex-1 md:flex-[1]">  
          <img 
            src="img/myheadshot.png" 
            alt="Nia Balaji"
            className="w-100 h-100 rounded-full object-cover shadow-lg"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
