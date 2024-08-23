/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'figma-1': 'rgb(255, 255, 240)',
        'figma-1-opacity': 'rgb(255, 255, 240, 0.5)',
        'figma-2': 'rgb(247,231,206)',
        'figma-3': 'rgb(246,226,194)',
        'figma-4': 'rgb(248,209,208)',
        'figma-5': 'rgb(246,178,176)',
        'figma-6': 'rgb(216,180,116)',
        'figma-7': 'rgb(183,110,121)',
        'figma-8': 'rgb(92,45,90)',
        'figma-9': 'rgb(228,204,225)',
        'figma-10': 'rgb(254,233,232)',
        'figma-11': 'rgb(68,68,68)',
        'figma-12': 'rgb(231,128,126)',
        'figma-12-opacity': 'rgb(231,128,126,0.71)',
        'figma-13': 'rgb(183,110,121)', 
        'figma-14': 'rgb(254,237,221)',
        'figma-15': 'rgb(230, 190, 164)',
        'figma-16': 'rgb(255, 240, 216)',
        'figma-17': 'rgb(217, 217, 217)',
        'figma-18': 'rgb(154,154,154)',
        'figma-19': 'rgb(187,187,187)',
        'figma-20': 'rgb(208,213,221)',
        'figma-21': 'rgb(0,149,246)',
      },
      zIndex:{
        '5': '5',
      },
      boxShadow:{
        'username': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
        'cardmua': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

