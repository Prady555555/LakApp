/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#d3d2cd",
        lightGray: "#f0efeb",
        darkGray: "#c0bfb9",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(135deg, #d3d2cd, #f0efeb, #c0bfb9)",
      },
    },
  },
  plugins: [],
};
