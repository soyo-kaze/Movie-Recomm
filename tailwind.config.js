module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(50px)" },

          "100%": { opacity: 1, transform: "translateY(0px)" },
        },
        fadeOut: {
          "0%": { opacity: 1, transform: "translateX(0px)" },

          "100%": { opacity: 0, transform: "translateX(-50px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 700ms ease-in-out forwards",
        fadeOut: "fadeOut 700ms ease-in-out forwards",
      },
      fontFamily: {
        sams: ["samsFont"],
      },
    },
  },
  plugins: [],
};
