
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Code, Database, Palette, Award, Calendar, MapPin, Send, Menu, X, Phone } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Certifications', 'Activities', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase().replace(' ', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
        : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400/80 to-purple-500/80 flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl text-white">Creovate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-pink-300 transition-colors duration-200 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/muskan-gupta-639065250/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-pink-300 transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-full">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/27082004muskan" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-purple-300 transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-full">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:gmuskan.2708@gmail.com"
               className="text-gray-300 hover:text-pink-300 transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-full">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-pink-300 hover:bg-gray-800/30 rounded-lg transition-all duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar ;