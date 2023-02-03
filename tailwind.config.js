/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/daisyui/dist/**/*.js", "node_modules/react-daisyui/dist/**/*.js"],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      boxShadow: {
        myShadowL: "4.1px -5px 0 0 white",
        myShadowR: "-4.1px -5px 0 0 white",
      },
    },
  },
  plugins: [require("daisyui")],
}
