/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      filter: {
        'grayscale': 'grayscale(1)',
        'contrast': 'contrast(1.2)',
        'opacity': 'opacity(0.4)',
      },
    },
  },
  plugins: [ function ({ addUtilities }) {
    addUtilities({
      '.filter-grayscale': {
        'filter': 'grayscale(1)',
      },
      '.filter-contrast': {
        'filter': 'contrast(1.2)',
      },
      '.filter-opacity': {
        'filter': 'opacity(0.4)',
      },
    });
  },],
}