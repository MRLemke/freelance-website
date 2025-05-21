/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bubbleFall: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(200vh)" },
        },
      },
      animation: {
        bubbleFall: "bubbleFall linear infinite",
      },
    },
  },
  plugins: [],
}

