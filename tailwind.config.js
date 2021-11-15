module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        overpass: ['"overpass"', "arial", "san-serif"],
      },
      backgroundImage: {
        intro:
          "linear-gradient(135deg, hsla(112, 96%, 48%, .95) 0%, hsla(208, 96%, 18%, .95)100%), url('../src/images/bg-pattern-intro.svg')",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      green: {
        light: "hsl(112, 96%, 48%)",
        DEFAULT: "hsl(124, 85%, 40%)",
      },
      blue: {
        DEFAULT: "hsl(208, 96%, 18%)",
      },
      black: {
        DEFAULT: "hsl(0, 0%, 5%)",
      },
      white: {
        DEFAULT: "hsl(0, 0%, 95%)",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      xl: "1rem",
      xxl: "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
