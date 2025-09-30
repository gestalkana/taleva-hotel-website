/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'taleva-indigo': '#2E2A7C',
        'taleva-olive': '#6B8E23',
        'taleva-red': '#D72638',
        'taleva-light': '#F9FAFB',
      },
    },
  },
  plugins: [],
}
