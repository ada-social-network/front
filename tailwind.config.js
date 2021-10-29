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
        red: {
          DEFAULT:'#e74f3c'
        },
        blue: {
          DEFAULT:'#1f78f4'
        },
        yellow: {
          DEFAULT:'#ffcd2b'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


