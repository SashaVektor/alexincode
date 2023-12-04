/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue" : "#326CF9",
        "orange": "#FF8A56",
        "violet": "#B16CEA",
        "gold": "#FFA84B",
        "green": "#0FC65C",
        "azure": "#00C4F0",
        "textgray": "#707070",
      },
      fontFamily: {
      }
    },
  },
  plugins: [],
}