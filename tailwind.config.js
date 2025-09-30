/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#FFB6D9',
          DEFAULT: '#FF69B4',
          dark: '#C2185B',
        },
        orange: {
          light: '#FFD6A5',
          DEFAULT: '#FF9800',
          dark: '#F57C00',
        },
      },
    },
  },
  plugins: [],
};
