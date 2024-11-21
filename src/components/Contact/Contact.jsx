import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

// Inline SVG Icons with responsive sizes
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function ContactRedesigned() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-4">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon />
              </div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-2 md:py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-colors duration-300"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MailIcon />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full pl-10 pr-4 py-2 md:py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-colors duration-300"
                required
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-2 md:py-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-green-500 outline-none transition-colors duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 md:py-3 px-6 rounded-lg transition duration-300"
            >
              <span>Send Message</span>
              <SendIcon />
            </button>
          </motion.form>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="flex items-start space-x-2">
              <MapPinIcon />
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Location</h3>
                <p className="text-sm md:text-base text-gray-400">
                  Jaypee University of Information Technology, Waknaghat, 173234, Solan, Himachal Pradesh, India
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <MailIcon />
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Email</h3>
                <div className="space-y-2">
                  <a href="mailto:siamchapter@juitsolan.in" className="text-sm md:text-base text-gray-400 hover:text-green-400 transition duration-300 block">
                    siamchapter@juitsolan.in
                  </a>
                  <a href="mailto:president@juitsolan.in" className="text-sm md:text-base text-gray-400 hover:text-green-400 transition duration-300 block">
                    president@juitsolan.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}