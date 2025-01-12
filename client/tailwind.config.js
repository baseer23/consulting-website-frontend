const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your file structure
    './public/index.html',
  ],
  theme: {
    extend: {
      // Custom Breakpoints
      screens: {
        xs: '480px', // Extra small devices (phones)
        ...defaultTheme.screens, // Include default breakpoints (sm, md, lg, etc.)
      },

      // Custom Colors
      colors: {
        primary: '#ff0000', // Replace with your primary color
        secondary: '#0055ff',
        neutral: '#f4f4f4',
        dark: '#1e293b',
        ...defaultTheme.colors,
      },

      // Custom Fonts
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Use Inter or any preferred font
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },

      // Custom Spacing
      spacing: {
        '128': '32rem', // Add large spacing
        '144': '36rem',
      },

      // Custom Keyframes & Animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideDown: 'slideDown 0.3s ease-in-out',
      },
    },
  },


};
