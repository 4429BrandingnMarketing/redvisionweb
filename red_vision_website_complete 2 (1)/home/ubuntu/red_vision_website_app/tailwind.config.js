/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000", // Red for Red Vision
        secondary: "#333333", // Dark gray
        accent: "#f5f5f5", // Light gray
      },
    },
  },
  plugins: [],
}
