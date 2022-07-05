/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'very-dark-blue-main': 'hsl(233, 47%, 7%)',
      'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
      'soft-violet': 'hsl(277, 64%, 61%)',
      'Slightly-transparent-white': ' hsla(0, 0%, 100%, 0.75)',
      'Slightly-transparent-white-head': 'hsla(0, 0%, 100%, 0.6)',
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'lexend':['Lexend Deca','sans-serif']
    },
    screens: {
      'tablet': '720px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    
    
  },
  plugins: [],
}

