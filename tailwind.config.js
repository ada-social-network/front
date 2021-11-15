module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          light: "#ff7ce5",
          DEFAULT: "#f9dadb",
          dark: "#ff16d1",
        },
        red: {
          DEFAULT: "#e74f3c",
        },
        blue: {
          DEFAULT: "#1f78f4",
        },
        yellow: {
          DEFAULT: "#ffcd2b",
        },
      },
      boxShadow: {
        DEFAULT: "#1f78f4 -15px 15px",
        'small': "#1f78f4 -5px 5px"
      },
      fontFamily: {
        'sans': ['Oswald', 'Chivo']
      }
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
