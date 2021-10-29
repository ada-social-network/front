module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#f9dadb',
          dark: '#ff16d1',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


