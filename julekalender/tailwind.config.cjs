/** @type {import('tailwindcss').Config}*/
const defaultTheme = require('tailwindcss/defaultTheme')
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      screens: {
        'xs': '400px',
        ...defaultTheme.screens
      }
    },
  },

  plugins: [],
};

module.exports = config;
