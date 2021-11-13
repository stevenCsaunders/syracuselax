module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'overpass': ['"overpass"', 'arial', 'san-serif']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      Green: {
        light: 'hsl(112, 96%, 48%)',
        DEFAULT: 'hsl(124, 85%, 40%)',
      },
      blue: {
        DEFAULT: 'hsl(208, 96%, 18%)',
      },
      black: {
        DEFAULT: 'hsl(0, 0%, 5%)',
      },
      white: {
        DEFAULT: '#	hsl(0, 0%, 95%)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}