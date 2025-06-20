/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        dna: {
          '0%': { transform: 'rotate(0deg) translateX(0)' },
          '25%': { transform: 'rotate(90deg) translateX(20px)' },
          '50%': { transform: 'rotate(180deg) translateX(0)' },
          '75%': { transform: 'rotate(270deg) translateX(-20px)' },
          '100%': { transform: 'rotate(360deg) translateX(0)' },
        },
      },
      animation: {
        dna: 'dna 4s linear infinite',
      },
    },
  },

  plugins: [],
}


