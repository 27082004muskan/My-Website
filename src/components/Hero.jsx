import React, { useState, useEffect } from "react";
import { Code, Download, Linkedin, Github } from "lucide-react";
import Resume from "../assets/Resume.pdf";

// Simple typewriter hook
const useTypewriter = (texts, typeSpeed = 120, deleteSpeed = 80, pauseTime = 2000) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // typing
      timeout = setTimeout(() => setCharIndex((c) => c + 1), typeSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
      // pause when full word shown
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && charIndex > 0) {
      // deleting
      timeout = setTimeout(() => setCharIndex((c) => c - 1), deleteSpeed);
    } else if (isDeleting && charIndex === 0) {
      // go to next text
      setIsDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typeSpeed, deleteSpeed, pauseTime]);

  return texts[textIndex].slice(0, charIndex);
};

const Hero = () => {
  const typedText = useTypewriter(
    ["Hi, I'm Muskan Gupta"],
    120,
    80,
    2000
  );

  return (
    <section className="min-h-screen flex items-center justify-center 
  bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 
  relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gray-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gray-400/5 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 min-h-[1.2em]">
              <span className="bg-gradient-to-r from-gray-800/80 via-stone-700/80 to-orange-800/60
 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-400 mb-8 leading-relaxed">
              Full Stack Developer & Data Analytics Enthusiast
              <br />
              <span className="text-lg text-gray-400">
                Building innovative fintech solutions with modern technologies
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={Resume}
                download="Muskan.pdf"
               className="group bg-gradient-to-r from-gray-800/80 via-stone-700/80 to-orange-800/60
  hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70
  text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 
  transform hover:scale-105 hover:-translate-y-2 animate-bounce-slow 
  flex items-center justify-center space-x-2 shadow-lg 
  hover:shadow-orange-600/30 no-underline"

              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>

              <a
                href="https://www.linkedin.com/in/muskan-gupta-639065250/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/80 hover:bg-gray-700 border border-gray-600 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70
  text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-bounce-slow animation-delay-200 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-orange-600/30"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/27082004muskan"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-800/80 hover:bg-gray-700 border border-gray-600 hover:from-gray-700/90 hover:via-stone-600/85 hover:to-orange-700/70
  text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 animate-bounce-slow animation-delay-400 flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-orange-600/30"
              >
                <Github className="w-5 h-5 " />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right - Circle with icon */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="w-80 h-80 bg-gray-800/50 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse border border-gray-700/50 hover:border-gray-400/30 transition-all duration-500">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-800/80 via-stone-700/80 to-orange-800/60 rounded-full flex items-center justify-center animate-spin-slow">
                  <Code className="w-32 h-32 text-gray-300 animate-pulse hover:text-gray-300 transition-colors duration-300" />
                </div>
              </div>

              <div className="absolute -top-5 -right-5 w-12 h-12 bg-orange-400/30 rounded-full animate-bounce delay-500" />
              <div className="absolute -bottom-5 -left-5 w-8 h-8 bg-gray-400/30 rounded-full animate-bounce delay-1000" />
              <div className="absolute top-1/4 -left-8 w-6 h-6 bg-gray-400/30 rounded-full animate-ping delay-700" />
         
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
