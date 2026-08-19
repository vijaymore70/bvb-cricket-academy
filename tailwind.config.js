/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#0F1115',
          800: '#171A21',
          700: '#21262E',
        },
        victory: {
          red: '#DC2626',
          dark: '#B91C1C',
        },
        golden: {
          grass: '#EAB308',
          light: '#FDE047',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        marathi: ['Mukta', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
