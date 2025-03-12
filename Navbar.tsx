import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-bold text-indigo-600">Portfolio</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-indigo-600 transition-colors">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-indigo-600 transition-colors">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-indigo-600 transition-colors">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-indigo-600 transition-colors">Contact</button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-indigo-600 transition-colors py-2">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-slate-700 hover:text-indigo-600 transition-colors py-2">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="text-slate-700 hover:text-indigo-600 transition-colors py-2">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-indigo-600 transition-colors py-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;