/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'purple':'rgb(24,19,53)',
      'pink':'rgb(18,12,34)',
      'white': '#ffffff',
      'fushia':"#ff0252ce"
    },
    extend: {
      fontFamily:{
        'Josefin':['Josefin Sans']
      }
    },
  },
  plugins: [],
}

