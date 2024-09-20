/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      },
      cursor: {
        'cheese': 'url(./Img/cursor/cheeseCursor.png), pointer',
        'pizza': 'url(./Img/cursor/pizzaCursor.png), pointer',
        'palette': 'url(./Img/cursor/paletteCursor.png), pointer',
        'mario': 'url(./Img/cursor/marioCursor.png), pointer',
        'carrello': 'url(./Img/cursor/carrelloCursor.png), pointer',
        'world': 'url(./Img/cursor/worldCursor.png), pointer',
        'poke': 'url(./Img/cursor/pokeCursor.png), pointer',
        'home': 'url(./Img/cursor/homeCursor.png), pointer',
      }

    },
  },
  plugins: [],
}

