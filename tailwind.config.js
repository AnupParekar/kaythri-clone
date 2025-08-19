/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js", // 👈 Add this line
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
