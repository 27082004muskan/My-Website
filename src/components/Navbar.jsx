import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Code, Menu, X } from 'lucide-react';

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

  const navItems = [
    {name: 'Home', path: '/' } ,
    { name: 'About', path: '/about' },
    {name:'Experience', path: '/experience'},
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50 shadow-lg' 
        : 'bg-gray-900/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-gray-500" />
            </div>
            <span className="font-bold text-xl text-white">Creovate</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-orange-300 transition-colors duration-200 font-medium relative group hover:bg-gray-700 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70 hover:bg-gradient-to-r"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 via-stone-500 to-orange-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/muskan-gupta-639065250/" target="_blank" rel="noopener noreferrer" 
               className="text-gray-300 hover:text-orange-300 transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-full hover:bg-gray-700 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/27082004muskan" target="_blank" rel="noopener noreferrer"
               className="text-gray-300 hover:text-orange-700 transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-full hover:bg-gray-700 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70">
              <Github className="w-5 h-5" />
            </a>
            <a href="mailto:gmuskan.2708@gmail.com"
               className="text-gray-300 hover:text-orange-700 transition-colors duration-200 p-2 hover:bg-gray-800/50 rounded-full hover:bg-gray-700 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200 hover:bg-gray-700 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-orange-500 hover:bg-gray-800/30 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
