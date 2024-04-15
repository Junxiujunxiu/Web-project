/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        allAround: "0px 2px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        mainRed: "#c8161e",
        subRed: "#96161e",
        richGold: "#ad8b53",
        darkGold: "#8f714a",
      },
      fontFamily: {
        home: ["fwzz", "sans-serif"],
        content: ["gdt", "sans-serif"],
      },
      transitionProperty: {
        height: "height",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeIn2s: "fadeIn 2s ease-in forwards",
        floatUp: "floatUp 1s ease-in forwards",
        floatLeft: "floatLeft 1s ease-in forwards",
        floatRight: "floatRight 1s ease-in forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        floatUp: {
          "0%": { transform: "translateY(30%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        floatLeft: {
          "0%": { transform: "translateX(-50%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        floatRight: {
          "0%": { transform: "translateX(50%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      spacing: {
        "10%": "10%",
        "130%": "130%",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("flowbite/plugin")],
  variants: {
    animation: ["motion-safe"],
  },
};
