module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stardata: {
          DEFAULT: "#9E4F60",
          50: "#E1C3CA",
          100: "#DAB6BE",
          200: "#CD9BA5",
          300: "#BF7F8D",
          400: "#B26475",
          500: "#9E4F60",
          600: "#793C49",
          700: "#532A33",
          800: "#2E171C",
          900: "#080405",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
