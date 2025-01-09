/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { // in extends you can add customs options you need first classified under extends and need to give the data in sting method (i.e) in qutotes.
      colors: {
        'vijay-purple': '#009688'
      },
      fontWeight: {
        'vijay-weight': "200"
      }
    },
    fontFamily: {
      bebas:['Bebas Neue','sans-serif']
    }
  },
  plugins: [],
  darkMode:"selector"
}

