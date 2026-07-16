import React from 'react'
import { MessageSquareQuote } from 'lucide-react';

const Quote = () => {
  return (
    <section id="quote" className="relative overflow-hidden bg-[#0a1020] py-20 text-white">
      <div className="absolute inset-0">
        <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/30 transform hover:scale-110 transition-all duration-300 animate-pulse">
                <MessageSquareQuote className="w-8 h-8 text-white animate-bounce" />
              </div>
            </div>
            
            {/* Main Quote */}
            <div className="relative animate-fade-in">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-violet-500 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-400 rounded-full opacity-30 animate-spin"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-violet-400 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-1/4 -right-8 w-5 h-5 bg-cyan-400 rounded-full opacity-30 animate-bounce"></div>
              
              <blockquote className="text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent leading-relaxed transform hover:scale-105 transition-transform duration-500 animate-slide-up">
                "Code is like poetry; it should be elegant, meaningful, and capable of touching lives in ways you never imagined."
              </blockquote>
            </div>
            
            {/* Decorative Elements */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-[#121c32] border border-violet-400/10 rounded-xl shadow-md hover:shadow-violet-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.6s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 animate-bounce">
                  <span className="text-white font-bold text-xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-violet-300 transition-colors duration-300">Innovation</h3>
                <p className="text-slate-400 text-sm">Turning ideas into reality through creative problem-solving</p>
              </div>
              
              <div className="text-center p-6 bg-[#121c32] border border-violet-400/10 rounded-xl shadow-md hover:shadow-cyan-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '0.8s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-lg mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 animate-bounce" style={{animationDelay: '0.2s'}}>
                  <span className="text-white font-bold text-xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-cyan-300 transition-colors duration-300">Growth</h3>
                <p className="text-slate-400 text-sm">Continuously learning and pushing boundaries</p>
              </div>
              
              <div className="text-center p-6 bg-[#121c32] border border-violet-400/10 rounded-xl shadow-md hover:shadow-violet-500/10 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-slide-up" style={{animationDelay: '1s'}}>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-lg mx-auto mb-4 flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 animate-bounce" style={{animationDelay: '0.4s'}}>
                  <span className="text-white font-bold text-xl">❤️</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-violet-300 transition-colors duration-300">Passion</h3>
                <p className="text-slate-400 text-sm">Driven by love for technology and meaningful impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote
