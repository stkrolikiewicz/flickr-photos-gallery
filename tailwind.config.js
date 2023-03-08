/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'stone': '#1c1917',
      'light': '#fafafa',
      'gray': '#525252',
      'black': '#000',
      'transparent': 'transparent'
    },
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        'left':  `5px 0 5px -5px #1c1917`,
        'right':  `-5px 0 5px -5px #1c1917`,
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("tailwindcss-animation-delay")
  ],
};
