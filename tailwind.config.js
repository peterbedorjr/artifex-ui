const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './source/components/**/*.vue'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: colors.black,
        white: colors.white,
        primary: {
          fade: '#cd85eb',
          lighter: '#ae4ed6',
          light: '#9d47c0',
          DEFAULT: '#8e44Ad',
          dark: '#7c4a92',
          darker: '#6a4c77',
        },
        secondary: {
          fade: '#7299be',
          lighter: '#3b5976',
          light: '#344f69',
          DEFAULT: '#34495e',
          dark: '#2f4052',
          darker: '#2a3643',
        },
        info: {
          fade: '#71b6e3',
          lighter: '#3a98d4',
          light: '#2f8bc8',
          DEFAULT: '#2980b9',
          dark: '#2476ac',
          darker: '#1f6c9f',
        },
        success: {
          fade: '#6fe4a1',
          darker: '#269655',
          dark: '#269f59',
          DEFAULT: '#27ae60',
          light: '#39ba70',
          lighter: '#42c87a',
        },
        warning: {
          fade: '#f0e6bb',
          darker: '#d4b32b',
          dark: '#e3bd21',
          DEFAULT: '#f1c40f',
          light: '#facc15',
          lighter: '#ffd426',
        },
        danger: {
          fade: '#ff9d93',
          darker: '#c1493d',
          dark: '#d04b3e',
          DEFAULT: '#e74c3c',
          light: '#f15646',
          lighter: '#fd6454',
        },
      }
    },
    stroke: (theme) => ({
      primary: theme('colors.primary'),
      secondary: theme('colors.secondary'),
      info: theme('colors.info'),
      success: theme('colors.success'),
      warning: theme('colors.warning'),
      danger: theme('colors.danger'),
      black: theme('colors.black'),
      white: theme('colors.white'),
    }),
  },
  variants: {
    extend: {
      borderColor: ['disabled'],
      textColor: ['disabled'],
      backgroundColor: ['active', 'disabled'],
      boxShadow: ['active'],
      ringOpacity: ['focus'],
      primary: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
