/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['node_modules/flowbite-react/',"./src/App.js","./src/components/Navbar/Navbar.js","./src/components/CardDisplay/CardDisplay.js","./src/components/HomePage/Home.js","./src/components/Footer/Footer.js","./src/components/Login/Login.js"],
  theme: {
    extend: {
      fontFamily:{
        body:['Nunito']
      },
      colors:{
        'misty':'#E6EBEF'
      },
      maxWidth:{
        '14rem':'14rem'
      },
      minWidth:{
        '5.5rem':'5.5rem'
      },
      width:{
        '14rem':'14rem'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}