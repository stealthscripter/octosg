/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './js/**/*.js', 
    './index.html',
    
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/backgrounds/Colored Shapes.svg')",
        'curved-line': "url('/assets/backgrounds/Curve Line.svg')",
        'hexagon' : "url('/assets/backgrounds/Hexagon.svg')",
        'simple-shiny' : "url('/assets/backgrounds/Simple Shiny.svg')"
      },
      fontFamily : {
        Kanit : ['Kanit'],
        OpenSans : ['Open Sans']
      }
    },
  },
  plugins: [],
}