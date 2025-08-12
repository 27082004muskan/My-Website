import React, { useState, useEffect } from 'react'
import { Linkedin, Github, Code, Download } from 'lucide-react'

// Enhanced TypewriterEffect with continuous loop
const TypewriterEffect = ({ texts, speed = 150, deleteSpeed = 100, pauseTime = 2000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

  return (
    <span>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 min-h-[1.2em]">
              <span className="bg-gradient-to-r from-white via-gray-200 to-pink-200 bg-clip-text text-transparent">
                <TypewriterEffect 
                  texts={[
                    "Hi, I'm Muskan Gupta"
                    
                  ]} 
                  speed={120}
                  deleteSpeed={80}
                  pauseTime={2000}
                />
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Full Stack Developer & Data Analytics Enthusiast
              <br />
              <span className="text-lg text-gray-400">Building innovative fintech solutions with modern technologies</span>
            </p>
            
            {/* Animated Buttons with Jump Effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-pink-500/80 to-purple-600/80 hover:from-pink-500 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-bounce-slow flex items-center justify-center space-x-2 shadow-lg hover:shadow-pink-500/25">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
              <a href="https://www.linkedin.com/in/muskan-gupta-639065250/" target="_blank" rel="noopener noreferrer"
                 className="group bg-gray-800/80 hover:bg-gray-700 border border-gray-600 hover:border-pink-400/50 text-gray-200 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-bounce-slow animation-delay-200 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25">
                <Linkedin className="w-5 h-5 group-hover:text-pink-300" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/27082004muskan" target="_blank" rel="noopener noreferrer"
                 className="group bg-gray-800/80 hover:bg-gray-700 border border-gray-600 hover:border-purple-400/50 text-gray-200 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-bounce-slow animation-delay-400 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25">
                <Github className="w-5 h-5 group-hover:text-purple-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Side - Enhanced Animated Developer Icon */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-80 h-80 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse border border-gray-700/50 hover:border-pink-400/30 transition-all duration-500">
                <div className="w-64 h-64 bg-gradient-to-br from-pink-400/30 to-purple-600/30 rounded-full flex items-center justify-center animate-spin-slow">
                  <Code className="w-32 h-32 text-gray-300 animate-pulse hover:text-pink-300 transition-colors duration-300" />
                </div>
              </div>
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-5 -right-5 w-12 h-12 bg-pink-400/30 rounded-full animate-bounce delay-500"></div>
              <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-purple-400/30 rounded-full animate-bounce delay-1000"></div>
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-blue-400/30 rounded-full animate-ping delay-700"></div>
              <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-green-400/20 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
