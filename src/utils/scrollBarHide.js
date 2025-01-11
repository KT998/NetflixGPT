export default function ({ addUtilities }) {
    addUtilities({
      '.scrollbar-hide': {
        /* Chrome, Safari and Opera */
        '&::-webkit-scrollbar': {
          display: 'none' 
        },
        /* Firefox */
        scrollbarWidth: 'none',
        /* IE and Edge */
        '-ms-overflow-style': 'none',
      },
    });
  };