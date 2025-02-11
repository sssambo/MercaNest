/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: { colors: {
      darkBlue: "#1c3b6b",
      mediumBlue: "#4a69bd",
      lightBlue: "#a1c4fd",
      softWhite: "#f1f5f9",
      primaryBlack: "#000000",
    },
    backgroundImage: {
      'gradient-logo': "linear-gradient(to bottom right, #a1c4fd, #4a69bd, #1c3b6b)",
    },
  },
  },
  plugins: [],
};
