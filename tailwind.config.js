/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          gray: "#F5F6F6",
        },
        primary: "#5AC8D8",
        secondary: {
          dark: "#1197A7",
          light: "#91FBFF",
        },
      },
    },
  },
  important: "#__next",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
