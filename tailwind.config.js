/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // or 'media' or false
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["acid"],
  },
}