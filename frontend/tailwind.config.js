module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        secondary: '#FF5722',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};