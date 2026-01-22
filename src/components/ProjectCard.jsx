import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

const ProjectCard = ({ project, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="bg-card-dark rounded-xl overflow-hidden border border-gray-800 hover:border-neon-blue/50 transition-all duration-300 group h-full flex flex-col"
    >
      
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        {project.image && !imageError ? (
          <>
            
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse"></div>
            )}
            
            {/* Actual Image */}
            <img 
              src={project.image} 
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              } ${imageLoaded ? 'group-hover:scale-110' : ''}`}
              loading="lazy"
              decoding="async"
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
          </>
        ) : (
          // Fallback when no image or image fails to load
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-4xl font-bold text-gray-700">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Tech Badges on Image */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.tech.slice(0, 2).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-dark-bg/80 backdrop-blur-sm text-xs rounded border border-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold group-hover:text-neon-blue transition-colors line-clamp-1">
            {project.title}
          </h3>
          <div className="flex space-x-2">
            {project.liveUrl && project.liveUrl !== '#' && (
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-neon-blue transition-colors"
                title="Live Demo"
              >
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </motion.a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1 hover:text-neon-blue transition-colors"
                title="View Code"
              >
                <CodeBracketIcon className="w-5 h-5" />
              </motion.a>
            )}
          </div>
        </div>

        <p className="text-gray-400 mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        
       


        <div className="mt-auto pt-4">
  <motion.a
    href={project.liveUrl || project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="w-full py-2 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 text-neon-blue rounded-lg hover:from-neon-blue/20 hover:to-neon-purple/20 transition-all duration-300 text-sm font-medium border border-neon-blue/20 text-center block"
  >
    View Details
  </motion.a>
</div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;