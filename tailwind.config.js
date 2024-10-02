/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red-100': '#FF7979',
        'purple-100': '#5E54A4',
        'grey-100': '#DEDEDE',
        'grey-200': '#3D3B48',
        'green-100': '#38CC8B',
        'grey-300': '#BAB7D4'
      },
      boxShadow:{
        'premiun-shadow': '0 8px 0 rgba(0, 0, 0, 0.1469)',
        'button-shadow': '0 4px 0 rgba(0, 0, 0, 0.0909)',
      },
      fontSize:{
        15: '0.9375rem',
        14: '0.875rem',
        11: '0.6875rem',
      },
    },
  },
  plugins: [],
}

