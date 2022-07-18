/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'launch': 'custom 3s ease-in 0s 1 forwards',
      },
      keyframes: {
        custom: {
          '0%': {transform: 'translateY(0%)'},
          '50%': {transform: 'translateY(-50%)'},
          '75%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(-300%)'}
        }
      }
    },
  },
  plugins: [],
}
