/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#008374',
        'secondary-color': '#00796B',
        'secondary-color-2': '#F1D3B2'
      },
      fontFamily: {
        primary: ["Montserrat", "sans-serif"]


      }
    },
  },
  plugins: [],
}

