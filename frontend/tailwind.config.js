module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    letterSpacing: {
      widest: '.2em',
    },
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
    }
  },
  variants: {
    extend: {},
    aspectRatio: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
