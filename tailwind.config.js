/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',
        darkprimary: '#11204C',
        selectedprimary: '#152962',
        success: '#00A6A6',
        warning: '#E76F51',
        successalert: '#2E8B57',
      }, 
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        // To make Urbanist the default sans font:
        // sans: ['Urbanist', 'sans-serif'],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '7rem',
      }
    },
  },
  darkMode: 'class', // Enable class-based dark mode
  plugins: [],
}
