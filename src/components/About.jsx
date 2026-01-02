import React from 'react'
import { Palette } from 'lucide-react';
import Muskan from '../assets/Muskan.jpg';



const About = () => {

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
        <div className="flex justify-center lg:justify-start">
  <div className="relative">
    <div className="w-80 h-80 bg-gradient-to-r from-gray-800/80 via-stone-700/80 to-orange-800/60 rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
      <div className="w-72 h-72 bg-white rounded-xl flex items-center justify-center overflow-hidden">
        <img 
          src={Muskan}  
          alt="Your Description" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
    {/* <div className="absolute -top-4 -right-4 w-16 h-16 bg-gray-500 rounded-full animate-pulse"></div> */}
    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gray-300 rounded-full animate-bounce"></div>
  </div>
</div>


          {/* Description */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-700/90 via-stone-600/85 to-orange-700/70 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
              <p>
                I'm a passionate Computer Science student at KIET Group of Institution with a strong focus on 
                MERN-stack development and Data Analytics. Currently working as a Tech Intern at <b>The Fin Lit Project </b>, 
                where I'm revolutionizing Fintech solutions.
              </p>
              <p>
                With expertise in MERN Stack, Python,Java and data visualization tools like Excel , Power BI and Tableau, 
                I love building innovative solutions that make a real impact. My experience spans from creating 
                ESG investment platforms to developing AI-powered applications.
              </p>
              <p>
                I've solved 350+ coding challenges on LeetCode and actively participate in hackathons and events, 
                recently securing a Top 30 position at HackFinance IIITD. I'm always eager to learn new 
                technologies and contribute to meaningful projects.
              </p>
            </div>
            
            {/* <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-pink-600">350+</div>
                <div className="text-sm text-gray-600">LeetCode Problems</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Major Projects</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md">
                <div className="text-2xl font-bold text-pink-600">2022</div>
                <div className="text-sm text-gray-600">Started Journey</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};


export default About
