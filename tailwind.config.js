/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'one': "url('./img/1675835553211.jpg')",
        'two': "url('./img/download 2.jpg')",
      }
    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif'],

    }
  },
  plugins: [],
}
