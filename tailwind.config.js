/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#141414',
        'bg-red': '#aa191a',
      },
      backgroundImage: {
        'monogram': "url('/img/CL-monogram-bg.png')"
      },
      fontFamily: {
        'mocha-rounded': ["Mocha Rounded"] 
      }
    },
  },
  plugins: [],
}
