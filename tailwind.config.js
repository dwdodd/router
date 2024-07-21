/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  options: {
    safelist: [/^animate__/],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

