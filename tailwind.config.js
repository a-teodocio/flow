/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--background)',
        'theme-primary': 'var(--primary)',
        'theme-error': 'var(--error)',
        'theme-secondary': 'var(--secondary)'
      },
    },
  },
  plugins: [],
}

