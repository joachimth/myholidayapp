/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  darkMode: "class", // or 'media' or false
  plugins: [
    require('daisyui'),
    require("tw-elements-react/dist/plugin.cjs") // only if you're using tw-elements-react
  ],
  daisyui: {
    themes: ["acid"],
  },
}