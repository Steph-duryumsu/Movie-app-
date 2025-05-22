/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#121212',
        slategray: '#2C2F33',
        deepcrimson: '#9B1B30',
        goldenamber: '#FFBF00',
        steelblue: '#4682B4',
        platinum: '#E5E4E2',
        charcoal: '#1F1F1F',
        shadow: '#0F0F0F',
      },
      backgroundImage:{
        'hero-gradient': 'linear-gradient(to bottom, #121212, #1F1F1F)',
        'genre-action': 'linear-gradient(135deg, #9B1B30, #1F1F1F)',
        'genre-romance': 'linear-gradient(135deg, #FFBF00, #2C2F33)',
        'genre-sci-fi': 'linear-gradient(135deg, #4682B4, #121212)',
      },
    },
  },
  plugins: [],
};
// ,ts,tsx