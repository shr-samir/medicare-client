/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto Condensed', 'Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#007E85',
        secondary: '#6EAB36',
        alternate: '#ECECEC',
        gradient: '#007E85',
      },
    },
  },
  plugins: [],
};
