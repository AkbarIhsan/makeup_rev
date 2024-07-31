/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'figma-1': 'rgb(255, 255, 240)',
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
        'figma-13': 'rgb(183,110,121)', 
        'figma-14': 'rgb(254,237,221)',
        'figma-15': 'rgb(230, 190, 164)',
        'figma-16': 'rgb(255, 240, 216)',
      },
        zIndex:{
          '5': '5',
        },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

