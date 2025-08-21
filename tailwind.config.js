// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // This tells Tailwind where to find your classes
    ],
    // tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      kantumruy: ['"Kantumruy Pro"', 'sans-serif'],
      montAlt: ['"Montserrat Alternates"', 'sans-serif'],
      alfa: ['"Alfa Slab One"', 'serif'],
    },
  },
},      
    plugins: [],
  }