import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter, CheckCircle, X } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({}); // Added for individual field errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ''
      });
    }
  };

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters long';
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return 'Name can only contain letters and spaces';
    if (name.trim().length > 50) return 'Name must be less than 50 characters';
    return '';
  };

  const validateEmail = (email) => {
    if (!email.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
    if (email.length > 100) return 'Email must be less than 100 characters';
    return '';
  };

  const validateMessage = (message) => {
    if (!message.trim()) return 'Message is required';
    if (message.trim().length < 10) return 'Message must be at least 10 characters long';
    if (message.trim().length > 1000) return 'Message must be less than 1000 characters';
    return '';
  };

  const validateForm = () => {
    const errors = {};
    
    errors.name = validateName(formData.name);
    errors.email = validateEmail(formData.email);
    errors.message = validateMessage(formData.message);

    // Remove empty error messages
    Object.keys(errors).forEach(key => {
      if (!errors[key]) delete errors[key];
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validate form before submission
    if (!validateForm()) {
      setError('Please fix the errors below and try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
        timestamp: serverTimestamp()
      });

      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});

      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message: ", error);
      setError('Failed to send message. Please check your internet connection and try again.');
      setIsSubmitting(false);
    }
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-700/90 via-stone-600/85 to-orange-700/70 relative overflow-hidden">
      {/* Success Animation Overlay */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gray rounded-2xl p-8 max-w-md mx-4 transform animate-success-popup shadow-2xl relative">
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
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce-dots"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce-dots" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce-dots" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* General Error Display */}
              {error && (
                <div className="bg-red-100 border border-gray-400 text-gray-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border ${fieldErrors.name ? 'border-red-400' : 'border-white/30'} rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-pink-300`}
                  placeholder="Your Name"
                  required
                  disabled={isSubmitting}
                />
                {fieldErrors.name && (
                  <p className="text-red-300 text-sm mt-1">{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/20 border ${fieldErrors.email ? 'border-red-400' : 'border-white/30'} rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-pink-300`}
                  placeholder="your.email@example.com"
                  required
                  disabled={isSubmitting}
                />
                {fieldErrors.email && (
                  <p className="text-red-300 text-sm mt-1">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  className={`w-full px-4 py-3 bg-white/20 border ${fieldErrors.message ? 'border-red-400' : 'border-white/30'} rounded-lg text-white placeholder-gray-200 focus:outline-none focus:border-gray-300 resize-none`}
                  placeholder="Tell me about your project or just say hello!"
                  required
                  disabled={isSubmitting}
                ></textarea>
                {fieldErrors.message && (
                  <p className="text-red-300 text-sm mt-1">{fieldErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-200 text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
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

          {/* Contact Information - ALL RHS Components Preserved */}
          <div className="space-y-8">
            {/* Get In Touch Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-200">gmuskan.2708@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-200">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-200">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600">
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500">
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                {/* <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-400">
                  <Twitter className="w-6 h-6 text-white" />
                </a> */}
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Let's Work Together</h3>
              <p className="text-gray-200 text-sm">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a specific project in mind or just want to connect, feel free to reach out!
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/30 text-pink-100 text-xs rounded-full">
                  Available for Freelance
                </span>
                <span className="px-3 py-1 bg-orange-500/30 text-purple-100 text-xs rounded-full">
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
