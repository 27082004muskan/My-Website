
      import React from 'react'
import { Code, Linkedin, Github, Mail, Heart, ArrowUp } from 'lucide-react'



const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-gray-900/80 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-600/90 via-stone-600/85 to-orange-600/70 flex items-center justify-center">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">Muskan Gupta</span>
            </div>
            <p className="text-gray-300 mb-4">
              Full Stack Developer & Data Analytics Enthusiast
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
                 <a href="/" className="block text-gray-400 hover:text-orange-600 transition-colors duration-200">Home</a>
              <a href="/about" className="block text-gray-400 hover:text-orange-600 transition-colors duration-200">About</a>
              <a href="/skills" className="block text-gray-400 hover:text-orange-600 transition-colors duration-200">Skills</a>
              <a href="/projects" className="block text-gray-400 hover:text-orange-600 transition-colors duration-200">Projects</a>
              <a href="/contact" className="block text-gray-400 hover:text-orange-600 transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-300">
              <p>gmuskan.2708@gmail.com</p>
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/in/muskan-gupta-639065250/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/27082004muskan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:gmuskan.2708@gmail.com"
                  className="text-gray-300 hover:text-orange-600 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm flex items-center">
            © 2026 Muskan Gupta. Made with <Heart className="w-4 h-4 text-orange-600 mx-1" />
          </p>
          
          {/* Scroll to Top Button */}
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gradient-to-r from-orange-700/90 via-stone-600/85 to-orange-700/70 text-white p-2 rounded-full hover:from-gray-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}



export default Footer
