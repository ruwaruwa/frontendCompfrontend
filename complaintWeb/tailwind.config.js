/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primeryColor: "#ff8552",
        seconderyColor: "#0f4c5c",
        thirdColor: "#b07888",
        textColor: "#fbf8f9",
        fourthColor: "#33658a",
        ruwa:"#e56b6f",
        blColor: "#3c096c",
        bSecondColor: "#5a189a",
        bThirdColor: "#5a189a",
        rColor: "#7b2cbf",
        bColors: "#9d4edd",
        bLightColor: "#f98d6b"
      }
    },
  },
  plugins: [],
}

