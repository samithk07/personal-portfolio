import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline';

const About = () => {
  const skills = [
    {
      name: 'React',
      level: 90,
      icon: CodeBracketIcon,
      color: 'text-cyan-400',
      barColor: 'bg-cyan-500',
    },
    {
      name: 'Tailwind CSS',
      level: 95,
      icon: CommandLineIcon,
      color: 'text-teal-400',
      barColor: 'bg-teal-500',
    },
    {
      name: 'JavaScript',
      level: 85,
      icon: CpuChipIcon,
      color: 'text-yellow-400',
      barColor: 'bg-yellow-500',
    },
    {
      name: 'Responsive Design',
      level: 90,
      icon: DevicePhoneMobileIcon,
      color: 'text-purple-400',
      barColor: 'bg-purple-500',
    },
    {
      name: 'UI Animations',
      level: 80,
      icon: CodeBracketIcon,
      color: 'text-pink-400',
      barColor: 'bg-pink-500',
    },
    {
      name: 'Git & GitHub',
      level: 85,
      icon: CommandLineIcon,
      color: 'text-orange-400',
      barColor: 'bg-orange-500',
    },
  ];

  return (
    <section className="pt-20 pb-16 relative">
      {/* Animated Gradient Borders */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        {['top', 'bottom'].map((pos, i) => (
          <div
            key={pos}
            className={`absolute ${pos}-0 left-0 right-0 h-1`}
            style={{
              background:
                'linear-gradient(90deg, transparent, #00f3ff, #9d4edd, transparent)',
              animation: `gradientFlow 4s linear infinite ${
                i ? 'reverse' : ''
              }`,
            }}
          />
        ))}
        {['left', 'right'].map((pos, i) => (
          <div
            key={pos}
            className={`absolute ${pos}-0 top-0 bottom-0 w-1`}
            style={{
              background:
                'linear-gradient(180deg, transparent, #00f3ff, #9d4edd, transparent)',
              animation: `gradientFlow 4s linear infinite ${
                i ? 'reverse' : ''
              }`,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 12 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center md:items-start">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start items-center">
            <div className="relative w-80 h-80 md:mt-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 border-4 border-transparent border-t-neon-blue border-r-neon-purple rounded-full"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-2xl opacity-30" />

              <div className="relative w-full h-full rounded-full overflow-hidden p-1 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue">
                <img
                  src="src/assets/pofile/ChatGPT Image Jan 21, 2026, 10_03_48 PM.png"
                  alt="Samith - Frontend Developer"
                  className="w-full h-full rounded-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-neon-blue">Me</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              I am a frontend developer focused on building clean, responsive,
              and high-performance interfaces using modern technologies such as
              React and Tailwind CSS. I emphasize maintainable code, smooth
              interactions, and scalable UI architecture.
            </p>

            {/* Skills */}
            <h3 className="text-2xl font-semibold mb-4">
              Technical Skills
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-card-dark p-4 rounded-xl border border-gray-800 hover:border-neon-blue/50 transition"
                  >
                    <div className="flex items-center mb-2">
                      <div
                        className={`p-2 rounded-lg bg-opacity-20 ${skill.color.replace(
                          'text',
                          'bg'
                        )}`}
                      >
                        <Icon className={`w-5 h-5 ${skill.color}`} />
                      </div>
                      <span className="ml-3 font-medium text-gray-200">
                        {skill.name}
                      </span>
                      <span className="ml-auto text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-gray-800 rounded-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        className={`h-full rounded-full ${skill.barColor}`}
                      >
                        <div className="h-full bg-gradient-to-r from-white/10 via-white/30 to-white/10 opacity-40" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
