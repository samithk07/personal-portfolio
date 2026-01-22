import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import yourImage from '../assets/pofile/pip.jpg';

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${yourImage})`,
          backgroundPosition: 'right',
        }}
      />

      {/* Combined Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/25 to-dark-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-purple rounded-full blur-3xl opacity-10 animate-float" />
      

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi, I'm <span className="text-neon-blue">Samith</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-purple-400">
              Frontend Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-200 mb-8 max-w-xl"
          >
            Specializing in building modern, responsive web applications with
            <span className="text-neon-blue font-semibold mx-1">React</span>,
            <span className="text-neon-purple font-semibold mx-1">Tailwind CSS</span>,
            and interactive UI animations.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-blue/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-neon-blue rounded-lg font-semibold hover:bg-neon-blue/20 transition-all duration-300 hover:shadow-lg hover:shadow-neon-blue/20"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Next.js', 'Redux'].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="px-4 py-2 bg-dark-bg/70 backdrop-blur-sm rounded-full text-sm bordertext border border-gray-700 hover:border-neon-blue hover:text-neon-blue transition-all duration-300 hover:scale-105"
                >
                  {skill}
                </motion.span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

  
    </section>
  );
};

export default Home;
