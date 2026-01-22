import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active index based on current path
  useEffect(() => {
    const currentIndex = navLinks.findIndex(link => link.path === location.pathname);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [location.pathname]);

  // Dynamic Island variants
  const islandVariants = {
    initial: { 
      y: -100,
      scale: 0.8,
      opacity: 0 
    },
    animate: { 
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    scrolled: {
      scale: 0.95,
      transition: { duration: 0.3 }
    }
  };

  // Background blob variants
  const blobVariants = {
    normal: {
      scale: 1,
      transition: { duration: 0.5 }
    },
    expanded: {
      scale: 2,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      {/* Dynamic Island Container */}
      <motion.nav
        variants={islandVariants}
        initial="initial"
        animate={isScrolled ? ["animate", "scrolled"] : "animate"}
        className={`fixed top-3 left-1/3 transform -translate-x-1/2 z-50 ${
          isOpen ? 'w-11/12 md:w-2/3' : 'w-auto'
        }`}
      >
        <div className="relative">
          {/* Background Blob */}
          <motion.div
            variants={blobVariants}
            animate={isOpen ? "expanded" : "normal"}
            className="absolute inset-0 bg-gradient-to-br from-dark-bg/90 via-gray-900/90 to-dark-bg/90 backdrop-blur-xl rounded-3xl border border-gray-800/50 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-transparent to-neon-purple/10 rounded-3xl"></div>
          </motion.div>

          {/* Main Island Content */}
          <div className="relative px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3"
              >
              
                {isOpen && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    className="text-lg font-bold text-white whitespace-nowrap"
                  >
                    Samith
                  </motion.span>
                )}
              </motion.div>

              {/* Navigation Links - Desktop */}
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                  >
                    <Link
                      to={link.path}
                      onClick={() => setActiveIndex(index)}
                      className={`relative px-5 py-2 rounded-xl transition-all duration-300 ${
                        activeIndex === index
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {link.name}
                      {activeIndex === index && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-xl border border-neon-blue/30 shadow-lg shadow-neon-blue/10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden w-10 h-10 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700 shadow-lg"
              >
                <svg
                  className="w-5 h-5 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden md:hidden"
                >
                  <div className="pt-6 pb-2 space-y-3">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => {
                            setActiveIndex(index);
                            setIsOpen(false);
                          }}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                            activeIndex === index
                              ? 'bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30'
                              : 'hover:bg-gray-800/50'
                          }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${activeIndex === index ? 'bg-neon-blue' : 'bg-gray-600'}`}></div>
                          <span className={`font-medium ${activeIndex === index ? 'text-white' : 'text-gray-300'}`}>
                            {link.name}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

         
        </div>
      </motion.nav>

      
    </>
  );
};

export default Navbar;