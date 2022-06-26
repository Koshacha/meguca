const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      display: ['RocketFont', 'Helvetica', ...defaultTheme.fontFamily.sans],
    },
  },
  darkMode: 'class',
  plugins: [],
};
