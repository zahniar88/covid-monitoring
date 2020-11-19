const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    layers: ['utilities'],
    content: [
      './pages/**/*.js',
      './components/**/*.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "poppins": ["Poppins", "sans-serif"]
    },
    extend: {
      colors: {
        teal: colors.teal,
        emerald: colors.emerald,
        blueGray: colors.blueGray
      }
    }
  },
  variants: {},
  plugins: [],
}
