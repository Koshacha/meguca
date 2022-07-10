const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
    fontFamily: {
      display: ['RocketFont', 'Helvetica', ...defaultTheme.fontFamily.sans],
      sans: ['Gantari', 'Helvetica', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.purple,
      yellow: colors.amber,
      pink: colors.fuchsia,
      indigo: colors.indigo,
      red: colors.red,
      bg: '#ecf8f8',
      iconBg: '#b2e9c6',
      icon: '#14746f',
      lead: '#248277',
      link: '#14746f',
      header: '#56ab91',
      h1: '#248277',
      Watching: '#A0D995ee',
      Completed: '#D3CEDFee',
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/line-clamp')],
};
