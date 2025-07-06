/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 20s linear infinite",
        pulseOpacity: "pulseOpacity 2s ease-in-out infinite",
        lineDraw: "lineDraw 0.8s ease-out forwards",
        lineGrow: "lineGrow 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        pulseOpacity: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        lineDraw: {
          "0%": { width: "0%" },
          "100%": { width: "200px" },
        },
        lineGrow: {
          "0%": { height: "0px" },
          "100%": { height: "900px" },
        },
      },
    },
  },
  plugins: [],
};
