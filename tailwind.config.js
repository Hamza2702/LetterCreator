/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: '#9370db',
          secondary: '#dea193',
          tertiary: '#b7b7ff',
          accent: '#efe6cd',
        }
      }
    },
  },
  plugins: [],
}