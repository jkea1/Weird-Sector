/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: {
          black: '#000000',
          white: '#FFFFFF',
          orange: '#EE3918',
          grey: '#CFCFCF',
        },
        hover: {
          dark: '#414040',
          light: '#E1E1E1',
        },
      },
    },
  },
  plugins: [],
}
