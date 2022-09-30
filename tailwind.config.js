/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
  "./index.html",
  "./src/**/*.{html,js}"
],
  theme: {
    extend: {
      extend: {
        },
        fontFamily: {
          'Rubik': 'Rubik',
          'Mada': 'Mada',
        },
        colors: {
          "principal": "#3B6FB9",
          "secondary":"#3E7FDC",
          'light': {
            100: '#f75762',
            200: '#EAF7FF',
          },
          "black": "#090D28",
        },
    },
  },
  plugins: [],
}