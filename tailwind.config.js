/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-bg': 'var(--background)',
        'theme-text': 'var(--text)',
        'theme-accent': 'var(--accent)',
        'theme-card': 'var(--card)',
        'theme-card-hover': 'var(--cardHover)'
      },
    },
  },
  plugins: [],
}

