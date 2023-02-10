/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bac': "url('./img/bac.jpg')",
        '1': "url('./img/1.jpg.webp')",
        '2': "url('./img/2.jpg.webp')",
        '3': "url('./img/3.jpg.webp')",
        '4': "url('./img/4.jpg.webp')",

        
      }

    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],

    }
  },
  plugins: [],
}
