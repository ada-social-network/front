module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#f9dadb',
          dark: '#ff16d1'
        },
        red: {
          DEFAULT: '#e74f3c'
        },
        lightBlue: {
          DEFAULT: '#1f78f4'
        },
        yellow: {
          DEFAULT: '#ffcd2b'
        },
        blue: {
          DEFAULT: '#2D337B'
        }
      },
      boxShadow: {
        DEFAULT: '#2D337B -20px 20px',
        small: '#2D337B -10px 10px',
        red: '#e74f3c -20px 20px',
        sred: '#e74f3c  -5px 5px',
        lightBlue: '#1f78f4 -20px 20px'
      },
      fontFamily: {
        sans: ['Oswald', 'Chivo']
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
}
