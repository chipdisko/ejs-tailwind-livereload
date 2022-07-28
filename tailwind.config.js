const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: ['./views/**/*.{html,js,ejs}'],
  theme: {
    screens: {
      pc: '900px',
      sp: {'max': '899px'},
      ...defaultTheme.screens,
    },
    fontFamily: {
      'sans' : ['Noto Sans JP',"Hiragino Kaku Gothic ProN", "Meiryo", "sans-serif" ],
      'serif' : ['Noto Serif JP'],
    },
    extend: {},
  },
  plugins: [],
}
  