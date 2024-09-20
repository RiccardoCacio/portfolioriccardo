/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '0.9',
        '12': '3rem',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'Hbg': "url('./Img/Hbg.png')",
      },
    },
  },
  plugins: [],
}

