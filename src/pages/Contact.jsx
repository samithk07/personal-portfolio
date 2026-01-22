import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Replace these with your EmailJS credentials
      const serviceID = 'service_arp4917';
      const templateID = 'template_rd3hdrz';
      const publicKey = '90zQYBwa0hBQE-NOH';
      
      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Samith',
        reply_to: formData.email,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      };
      
      // Send email using EmailJS
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );
      
      // Success
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/samithk07', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/samith-/', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/__.samith?igsh=MXN4YXIyNWZ0ZTUzbg%3D%3D&utm_source=qr', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: EnvelopeIcon, text: 'samithsamith677@gmail.com', href: 'mailto:samithsamith677@gmail.com' },
    { icon: PhoneIcon, text: '8078332452', href: 'tel:+8078332452' },
    { icon: MapPinIcon, text: 'Kasaragode, Kerala, India', href: 'https://www.google.com/maps/place/Kasaragod,+Kerala/@12.5000208,74.9632011,14z/data=!3m1!4b1!4m6!3m5!1s0x3ba482155de6aad1:0x3a07d5464844020a!8m2!3d12.5064039!4d74.994322!16zL20vMDIwdzBr?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D' },
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-neon-blue">Touch</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card-dark rounded-2xl p-8 border border-gray-800"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            
            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">Message Sent Successfully!</h4>
                    <p className="text-sm text-gray-300">I'll get back to you within 24 hours.</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-400">Failed to Send Message</h4>
                    <p className="text-sm text-gray-300">Please try again or contact me directly via email.</p>
                  </div>
                </div>
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-dark-bg border rounded-lg px-4 py-3 focus:outline-none transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-700 focus:border-neon-blue'
                  }`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-dark-bg border rounded-lg px-4 py-3 focus:outline-none transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-700 focus:border-neon-blue'
                  }`}
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-dark-bg border rounded-lg px-4 py-3 focus:outline-none transition-colors resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:border-red-500' 
                      : 'border-gray-700 focus:border-neon-blue'
                  }`}
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
                <p className="mt-2 text-xs text-gray-500">
                  Minimum 10 characters required
                </p>
              </div>

              <motion.button
                whileHover={!isSubmitting ? { scale: 1.05 } : {}}
                whileTap={!isSubmitting ? { scale: 0.95 } : {}}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-700 cursor-not-allowed'
                    : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:shadow-lg hover:shadow-neon-blue/30'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <PaperAirplaneIcon className="w-5 h-5" />
                  </>
                )}
              </motion.button>
              
              <p className="text-xs text-gray-500 text-center">
                * Required fields
              </p>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-card-dark rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-300 hover:text-neon-blue transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-dark-bg flex items-center justify-center group-hover:bg-neon-blue/10 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="break-all">{info.text}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card-dark rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 rounded-full bg-dark-bg border border-gray-700 flex items-center justify-center hover:border-neon-blue hover:text-neon-blue transition-all duration-300"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl p-8 border border-neon-blue/30">
              <h4 className="text-xl font-bold mb-2">Currently Available</h4>
              <p className="text-gray-300 mb-4">
                I'm open to new opportunities and freelance projects. Let's create something amazing together!
              </p>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm">Available for hire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;