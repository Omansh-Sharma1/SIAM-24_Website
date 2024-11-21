const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class", // Enables dark mode using class-based toggling
  theme: {
    extend: {
      colors: {
        primary: '#1c1c1c', // Dark background color
        secondary: '#ff0000', // Example color
      },
      spacing: {
        128: '32rem', // Custom spacing
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        exo_2: ['[Exo_2]', 'serif'],
      },
      letterSpacing: {
        wider: '1.2em', // Custom letter-spacing of 1.2em
      },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite", // Custom scroll animation
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))", // Scroll animation transform
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars, // Add custom CSS variables for all colors
  });
}
