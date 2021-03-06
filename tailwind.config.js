/** @type {import('tailwindcss').Config} */
module.exports = {
  content: require('./styles/tailwind.content'),
  theme: {
    extend: {
      colors: require('./styles/tailwind.extend.colors'),
      fontFamily: require('./styles/tailwind.extend.fontFamily'),
    },
  },
  plugins: [],
};
