/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'rgb(252, 255, 252)'
      },
      fontFamily:{
        montserrat:'Montserrat'
      }
    },
  },
  plugins: [],
}
