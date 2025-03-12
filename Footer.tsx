import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Nia Balaji</h2>
            <p className="text-slate-300">Computer Engineering Student & Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/niabalaji" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-indigo-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/nia-balaji" target="_blank" rel="noopener noreferrer" className="p-2 text-white hover:text-indigo-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:nbalaji1@ucsc.edu" className="p-2 text-white hover:text-indigo-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            &copy; {currentYear} Nia Balaji. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;