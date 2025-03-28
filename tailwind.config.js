/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { maxWidth: "0" },
          to: { maxWidth: "100%" },
        },
        blink: {
          "50%": { opacity: "0" },
        },
      },
      animation: {
        typing: "typing 2s steps(20, end) forwards",
        blink: "blink 0.7s step-end infinite",
      },
    },
  },
  plugins: [],
};
