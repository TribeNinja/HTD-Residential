/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFD602",
        secondary: "#231F20",
      },
      fontFamily: {
        Raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        custom: "0px 25px 55px rgba(126, 126, 126, 0.25)",
      },
    },
  },
  plugins: [],
};
