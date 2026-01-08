import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Github, Linkedin, Mail, Code, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Activities', path: '/activities' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-800/50 shadow-lg'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-200">
              <Code className="w-6 h-6 text-gray-500" />
            </div>
            <div className="flex flex-col">
             
              <span className="font-bold text-xl text-white tracking-wide">
                Creovate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium tracking-wide px-1 py-1 transition-all duration-200 
                ${
                  isActive(item.path)
                    ? 'text-orange-300'
                    : 'text-gray-300 hover:text-orange-300'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-orange-400 via-stone-500 to-orange-600 transition-all duration-300 origin-center ${
                    isActive(item.path)
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 hover:scale-x-100 hover:opacity-100'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://www.linkedin.com/in/muskan-gupta-639065250/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-300 hover:text-orange-300 bg-gray-800/50 hover:bg-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70 border border-gray-700/60 hover:border-orange-500/70 shadow-sm shadow-orange-500/30 transition-all duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/27082004muskan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-300 hover:text-orange-300 bg-gray-800/50 hover:bg-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70 border border-gray-700/60 hover:border-orange-500/70 shadow-sm shadow-orange-500/30 transition-all duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:gmuskan.2708@gmail.com"
              className="p-2 rounded-full text-gray-300 hover:text-orange-300 bg-gray-800/50 hover:bg-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70 border border-gray-700/60 hover:border-orange-500/70 shadow-sm shadow-orange-500/30 transition-all duration-200"
            >
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
            <div className="px-3 pt-3 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-300 bg-gray-800/80 border border-orange-500/70'
                      : 'text-gray-300 hover:text-orange-500 hover:bg-gray-800/30 border border-transparent hover:border-orange-500/60 hover:bg-gray-700 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex items-center justify-between pt-3 border-t border-gray-800/50 mt-2">
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/muskan-gupta-639065250/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-gray-300 hover:text-orange-300 bg-gray-800/60 hover:bg-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70 border border-gray-700/60 hover:border-orange-500/70 transition-all duration-200"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/27082004muskan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-gray-300 hover:text-orange-300 bg-gray-800/60 hover:bg-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70 border border-gray-700/60 hover:border-orange-500/70 transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:gmuskan.2708@gmail.com"
                    className="p-2 rounded-full text-gray-300 hover:text-orange-300 bg-gray-800/60 hover:bg-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70 border border-gray-700/60 hover:border-orange-500/70 transition-all duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
