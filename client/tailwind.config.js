module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        filter: 'repeat(5, 3em)',
        '2col': 'repeat(2, 288px)',
        '3col': 'repeat(3, 288px)',
        '4col': 'repeat(4, 288px)'
      }
    },
    colors: {
      dark: '#1C1C1C',
      light: '#F1F1F1'
    },
  },
  plugins: [],
}
