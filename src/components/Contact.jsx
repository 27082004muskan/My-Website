import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, X, MessageCircle } from 'lucide-react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import PageLayout from './PageLayout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (fieldErrors[name]) {
      setFieldErrors({
        ...fieldErrors,
        [name]: ''
      });
    }
  };

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

    Object.keys(errors).forEach(key => {
      if (!errors[key]) delete errors[key];
    });

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

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

  const inputClass = (field) =>
    `w-full rounded-xl border bg-[#11151c] px-4 py-3 text-white placeholder-gray-500 transition duration-200 focus:outline-none focus:border-orange-400/50 ${
      fieldErrors[field] ? 'border-red-400/60' : 'border-white/10'
    }`;
  return (
    <PageLayout title="">
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative mx-4 max-w-md transform rounded-[2rem] border border-white/10 bg-[#121821] p-8 shadow-2xl">
            <button
              onClick={closeSuccessMessage}
              className="absolute right-4 top-4 text-gray-400 transition-colors duration-200 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-400/15">
                <CheckCircle className="h-10 w-10 text-green-400" />
              </div>
              <h3 className="mb-2 text-2xl font-semibold text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-400">
                Thank you for reaching out! I'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-red-300">
                {error}
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={inputClass('name')}
                placeholder="Your Name"
                required
                disabled={isSubmitting}
              />
              {fieldErrors.name && (
                <p className="mt-1 text-sm text-red-300">{fieldErrors.name}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClass('email')}
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
              {fieldErrors.email && (
                <p className="mt-1 text-sm text-red-300">{fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="6"
                className={`${inputClass('message')} resize-none`}
                placeholder="Tell me about your project or just say hello!"
                required
                disabled={isSubmitting}
              />
              {fieldErrors.message && (
                <p className="mt-1 text-sm text-red-300">{fieldErrors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:scale-[1.02] hover:bg-orange-400 disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <h3 className="mb-6 text-xl font-semibold text-white">Get In Touch</h3>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: "gmuskan.2708@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX" },
                { icon: MapPin, label: "Location", value: "India" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{label}</p>
                    <p className="text-sm text-gray-400">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
            <h3 className="mb-4 text-xl font-semibold text-white">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/27082004muskan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-[#11151c] p-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/muskan-gupta-639065250/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-[#11151c] p-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-orange-400/40 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-6 backdrop-blur-xl">
            <h3 className="mb-3 text-xl font-semibold text-white">Let's Work Together</h3>
            <p className="text-sm leading-7 text-gray-300">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a specific project in mind or just want to connect, feel free to reach out!
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-orange-400/20 bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-200">
                Available for Freelance
              </span>
              <span className="rounded-full border border-blue-400/20 bg-blue-500/15 px-3 py-1 text-xs font-medium text-blue-200">
                Open to Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Contact;
