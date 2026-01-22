import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Everlast Water Solution",
      description: "Developed a responsive water purifier e-commerce platform with product listing, search, filters, and secure checkout. Integrated backend APIs and SEO-optimized, mobile-first UI for fast performance and better visibility.",
      tech: ["React", "Tailwind CSS", "Chart.js", "Redux", "API Integration", "SEO"],
      githubUrl: "https://github.com/samithk07/everlastwatersolution-",
      liveUrl: "https://everlastwatersolution.vercel.app/",
      image: "src/assets/project/Screenshot 2026-01-20 160455.png" 
    },
    {
      id: 2,
      title: "Fit Club",
      description: "Collaborative task management application with drag & drop functionality, real-time updates, and team collaboration features.",
      tech: ["React", "Framer Motion", "Firebase", "Tailwind CSS", "Drag & Drop"],
      githubUrl: "https://github.com/samithk07/task-manager",
      liveUrl: "https://taskflow-samith.vercel.app/",
      image: "src/assets/project/Screenshot 2025-10-06 095500.png" 
    },
    {
      id: 3,
      title: "Trivago clone",
      description: "Trivago is a global hotel metasearch engine that compares prices from hundreds of booking sites (like Expedia, Booking.com, etc.) to help users find the best deals on hotels and other accommodations, without actually handling bookings or payments itself, acting as a comparison tool.",
      tech: ["React", "OpenWeather API", "Geolocation", "Chart.js", "Responsive Design"],
      githubUrl: "https://github.com/samithk07/weather-dashboard",
      liveUrl: "https://weather-samith.vercel.app/",
      image: "src/assets/project/IMG-20251006-WA0012[1].jpg" 
    },
   
  ];

  // Extract all unique tech skills from projects
  const allTechs = Array.from(new Set(projects.flatMap(project => project.tech)));
  const popularTechs = ['React', 'Tailwind CSS', 'Firebase', 'API Integration', 'Responsive Design'];

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tech.some(tech => 
          tech.toLowerCase().includes(filter.toLowerCase())
        )
      );

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-neon-blue">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in React, 
            modern UI development, and responsive design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        

        {/* Filter Status */}
        {filter !== 'all' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <p className="text-gray-400 inline-flex items-center gap-2 bg-card-dark px-4 py-2 rounded-full">
              <span>Showing</span>
              <span className="text-neon-blue font-semibold">{filteredProjects.length}</span>
              <span>projects with</span>
              <span className="text-neon-purple font-semibold">{filter}</span>
            </p>
          </motion.div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Projects;