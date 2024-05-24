/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '544px',
      lg: '1124px',
      xl: '1440px',
    },
    extend: {
      colors:{
        queen: "#e388d5",
        ory:"#f09e56",
        lim:"#a4db5c",
        re:"#d64b57",
        pin:"#d14f8e",
        bl:"#4676a6"
      }
    },
  },
  plugins: [],
}

