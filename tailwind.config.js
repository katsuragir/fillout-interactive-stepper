/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./features/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        disabled: "#9DA4B226",
        inactive: "#677289",
        borderInactive: "#E1E1E1",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
