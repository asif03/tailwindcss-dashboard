/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        secondary: "#adb5bd",
      },
      fontFamily: {
        roboto: ["Roboto"],
        "font-awesome": ["FontAwesome"],
      },
      animation: {
        introX: ".4s intro-x-animation ease-in-out .33333s",
        introXReverse: ".4s intro-reverse-x-animation ease-in-out .33333s",
      },
      keyframes: {
        "intro-x-animation": {
          "0%": {
            transform: "translate(-50px)",
            opacity: "0",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
        "intro-reverse-x-animation": {
          "0%": {
            transform: "translate(50px)",
            opacity: "0",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
        "intro-menu": {
          "0%": {
            transform: "translate(50px)",
            opacity: "0",
          },
          "100%": {
            opacity: 1,
            transform: "translate(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
