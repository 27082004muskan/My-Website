import React from 'react'
import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, X } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-500 via-purple-500 to-purple-700 relative overflow-hidden">
      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 transform animate-success-popup shadow-2xl relative">
            <button
              onClick={closeSuccessMessage}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-check-bounce">
                <CheckCircle className="w-10 h-10 text-green-500 animate-check-draw" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-2 animate-fade-in-up">
                Message Sent Successfully!
              </h3>
              
              <p className="text-gray-600 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Thank you for reaching out! I'll get back to you within 24 hours.
              </p>
              
              <div className="flex justify-center space-x-2 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce-dots" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce-dots" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce-dots" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-pink-200 focus:outline-none focus:border-pink-300 transition-colors duration-200"
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-pink-200 focus:outline-none focus:border-pink-300 transition-colors duration-200"
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-pink-200 focus:outline-none focus:border-pink-300 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-100 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-pink-200">gmuskan.2708@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-pink-200">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-pink-200">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors duration-200"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-pink-200 text-sm leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a specific project in mind or just want to connect, 
                feel free to reach out!
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-pink-500/30 text-pink-100 text-xs rounded-full">
                  Available for Freelance
                </span>
                <span className="px-3 py-1 bg-purple-500/30 text-purple-100 text-xs rounded-full">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes success-popup {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes check-bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: scale(1);
          }
          40% {
            transform: scale(1.1);
          }
          60% {
            transform: scale(1.05);
          }
        }

        @keyframes check-draw {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-dots {
          0%, 80%, 100% {
            transform: scale(0.8);
          }
          40% {
            transform: scale(1.2);
          }
        }

        .animate-success-popup {
          animation: success-popup 0.5s ease-out;
        }

        .animate-check-bounce {
          animation: check-bounce 1s ease-in-out;
        }

        .animate-check-draw {
          animation: check-draw 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-dots {
          animation: bounce-dots 1.4s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
