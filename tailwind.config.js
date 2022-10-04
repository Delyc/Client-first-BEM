/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        gradient1:"#D798E1",
        gradient2:"#9BFFA5",
        gradient3:"#AED3FF",
        "blue-dark": "#1D2130",
        "gray-light": "#1D2130",
        textGradient1: "#373FFF",
        textGradient2: "#3ACAF8",
        lightViolet: "#E0E4FC",
        borderColor: "#6199ED"
      },
     fontFamily:{
      roboto: "Roboto"
     }
    },
  },
  plugins: [],
}
