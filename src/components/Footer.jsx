import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card-dark border-t border-gray-800">
      <div className="container mx-auto px-4 py-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
        
          
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>
            © {currentYear} Samith. All rights reserved.
          </p>
          <p className="mt-1">
            React • Tailwind CSS • Modern UI Development
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
