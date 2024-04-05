/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    './js/**/*.js', 
    './index.html',
    
  ],
  theme: {
    extend: {

      fontFamily : {
        Kanit : ['Kanit'],
        OpenSans : ['Open Sans']
      }
    },
  },
  plugins: [],
}