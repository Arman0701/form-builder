/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{html, js,ts,jsx,tsx}",
    "../../node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        12.5: "3.125rem",
      },
      minHeight: {
        12.5: "3.125rem",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
