import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

// Inline SVG Icons
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-400">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

export default function ContactRedesigned() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", message: "" });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const validate = useCallback(() => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFeedback({
          type: "success",
          message: "Message sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        const result = await response.json();
        setFeedback({
          type: "error",
          message: result.error || "Failed to send message.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      setFeedback({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6 relative">
      <motion.h1 
        className="absolute top-24 text-7xl tracking-wide font-['Exo_2']  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100 text-center flex items-center justify-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Contact Us
      </motion.h1>
      <div className="h-20"></div>
      <motion.div 
        className="w-full max-w-6xl bg-gray-800 rounded-2xl overflow-hidden shadow-2xl mt-36 border-10 border-black-900"
        style={{ borderColor: "#2d2d2d", borderWidth: "10px" }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Upper Section */}
        <div className="grid grid-cols-3 p-8">
          {/* Get In Touch Section */}
          <div className="col-span-1 pr-6">
            <div className="flex items-left mb-4">
              <UserIcon />
              <h2 className="text-3xl font-['Exo_2'] font-bold text-green-300 ml-3">Get In Touch</h2>
            </div>
            <p className="text-gray-400 text-base text-left">
              We'd love to hear from you. Whether you have a question, 
              suggestion, or just want to say hello, feel free to reach out.
            </p>
          </div>

          {/* Contact Info Section */}
          <div className="col-span-1 px-6">
            <div className="flex items-center mb-3">
              <MapPinIcon />
              <h3 className="text-xl font-['Exo_2'] font-semibold text-blue-300 ml-3">Our Address</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed text-left">
              Department of CS&IT, Jaypee University of Information Technology
              Solan, Himachal Pradesh, India
            </p>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 pl-6">
            <div className="flex items-center mb-3">
              <MailIcon />
              <h3 className="font-['Exo_2'] text-xl font-semibold text-red-300 ml-3">Contact Info</h3>
            </div>
            <div className="text-gray-400 text-sm leading-relaxed space-y-1 text-left">
              <p><strong>Email:</strong> siam@juitsolan.in</p>
              <p><strong>President:</strong> presidentsiam@juitsolan.in</p>
              <p><strong>Phone:</strong> +91 XXXXXXXXXX</p>
            </div>
          </div>
        </div>

        {/* Lower Section */}
        <div className="grid grid-cols-2">
          {/* Map Section */}
          <div className="col-span-1 h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6838.696114052959!2d77.070159!3d31.016551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057db24364e085%3A0x4f4fefd65caa0317!2sJaypee%20University%20of%20Information%20Technology!5e0!3m2!1sen!2sin!4v1731866271207!5m2!1sen!2sin"
              className="w-full h-full filter saturate-150 hue-rotate-30 contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Form Section */}
          <div className="col-span-1 p-8 bg-gray-700">
            <h3 className="text-3xl font-bold text-green-300 mb-6 flex items-center">
              <SendIcon /> 
              <span className="ml-3">Send a Message</span>
            </h3>

            {feedback.message && (
              <div className={`p-4 mb-6 rounded ${
                feedback.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}>
                {feedback.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition-shadow"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 bg-gray-600 text-white rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none transition-shadow"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-3 bg-gray-600 text-white rounded-lg h-32 resize-none focus:ring-2 focus:ring-green-400 focus:outline-none transition-shadow"
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-500 text-black py-3 rounded-lg hover:bg-green-400 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}