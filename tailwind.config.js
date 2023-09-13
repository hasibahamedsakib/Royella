/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#161616",
        lightBlack: " #1e1e1e",
        slateGray: "#161616",
        gray: "#616161",
        khaki: "#c19d68",
      },
      fontFamily: {
        Garamond: ["Cormorant Garamond", "serif"],
        Lora: ["Lora", "serif"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
