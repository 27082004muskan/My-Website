import React from 'react'
import { MessageSquareQuote } from 'lucide-react';

const Quote = () => {
  return (
    <section id="quote" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden">
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-pulse">
                <MessageSquareQuote className="w-8 h-8 text-white animate-bounce" />
              </div>
            </div>
            
            {/* Main Quote */}
            <div className="relative animate-fade-in">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-500 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-spin"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-pink-400 rounded-full opacity-30 animate-bounce"></div>
              
              <blockquote className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent leading-relaxed transform hover:scale-105 transition-transform duration-500 animate-slide-up">
                "Code is like poetry; it should be elegant, meaningful, and capable of touching lives in ways you never imagined."
              </blockquote>
            </div>
            
            {/* Author */}
            {/* <div className="flex items-center justify-center space-x-4 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <div className="w-1 h-8 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
              <p className="text-lg text-gray-700 font-medium transform hover:scale-110 transition-transform duration-300">Muskan</p>
              <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div> */}
            
            {/* Decorative Elements */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 animate-bounce">
                  <span className="text-white font-bold text-xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-pink-600 transition-colors duration-300">Innovation</h3>
                <p className="text-gray-600 text-sm">Turning ideas into reality through creative problem-solving</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.8s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 animate-bounce" style={{animationDelay: '0.2s'}}>
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-purple-600 transition-colors duration-300">Growth</h3>
                <p className="text-gray-600 text-sm">Continuously learning and pushing boundaries</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '1s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 animate-bounce" style={{animationDelay: '0.4s'}}>
                  <span className="text-white font-bold text-xl">❤️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-pink-600 transition-colors duration-300">Passion</h3>
                <p className="text-gray-600 text-sm">Driven by love for technology and meaningful impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote