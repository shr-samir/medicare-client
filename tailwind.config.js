/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto Condensed', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#2a3c6c',
      },
    },
  },
  plugins: [],
};
