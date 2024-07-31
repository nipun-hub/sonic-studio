/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rasa: ["Rasa", "sans-serif"]
      },
      colors: {
        'gradient-start': 'rgba(88,255,10,1)', // #58ff0a
        'gradient-mid-1': 'rgba(255,255,255,1)', // #ffffff
        'gradient-mid-2': 'rgba(255,255,255,1)', // #ffffff
        'gradient-end': 'rgba(237,126,199,1)', // #ed7ec7
      },
    },
  },
  plugins: [],
}