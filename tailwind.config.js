/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'headd': ['Rakkas'],
        'top-sec': ['Inter'],
      },
      colors: {
        'tr': '#C4C4C480',
        'li': '#C4C4C4',
        'footer-co': '#645143',
        'input-co': '#E9EAFF',
      },
    },
  },
  plugins: [],
}
