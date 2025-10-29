/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { opacity: 1, filter: "brightness(100%)" },
          "50%": { opacity: 0.8, filter: "brightness(120%)" },
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      boxShadow: {
        "temple-glow": "0 0 20px rgba(245, 158, 11, 0.4)",
      },
      colors: {
        saffron: "#F4A300",
        "temple-gold": "#D97706",
      },
    },
  },
  plugins: [],
};
