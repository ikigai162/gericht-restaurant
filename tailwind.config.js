/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#DCCA87",
        pharagraph: 'AAAAAA',
      },

      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        open: ["Open Sans", "sans-serif"],
        cormorant: ['"Cormorant Upright"', "serif"],
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
