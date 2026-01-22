/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./index.html"
  ],
  
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-blue': '#00f3ff',
        'neon-purple': '#9d4edd',
        'dark-bg': '#0a0a0f',
        'card-dark': '#12121a',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'loading-bar': 'loading 1.2s infinite',

      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px #00f3ff' },
          'to': { boxShadow: '0 0 30px #9d4edd, 0 0 40px #00f3ff' },
        },
         loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(300%)' },
       },
      }
    },
  },
  plugins: [],
}
