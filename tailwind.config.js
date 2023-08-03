const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#B0BEC5",
      white: '#ffffff',
      text: {
        DEFAULT: "#ffffff",
        light: "#6C7281",
      },
      light: {
        DEFAULT: "#2F3A40",
        lighter: "#F3F4F6",
      },
    },
    extend: {},
  },
  plugins: [],
}
