/** @type {import('tailwindcss').Config} */
import plugin from "./src/utils/scrollBarHide";
// const plugin = require('./scrollbar-hide'); 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide : {
           /* Chrome, Safari and Opera */
           '&::-webkit-scrollbar': {
            display: 'none' 
          },
          /* Firefox */
          scrollbarWidth: 'none',
          /* IE and Edge */
          '-ms-overflow-style': 'none',
        },
      },
    },
  },
  plugins: [
    plugin
  ],
}