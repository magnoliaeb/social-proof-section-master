const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      gray: colors.coolGray,
      'purple': 'hsl(300, 43%, 22%)',
      'purple-darker': 'hsl(303, 10%, 53%)',
      'pink-darker': 'hsl(333, 80%, 67%)',
      'purple-ligth': 'hsl(300, 24%, 96%)',
      white: colors.white,
    },
    screens: {
      'sm': '375px',

      'md': '768px',

    },
    fontFamily: {
      body: ['Spartan']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
