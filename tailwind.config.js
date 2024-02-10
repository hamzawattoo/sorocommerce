// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C290FF',
        secondaryblue:'#7BD5FF',
        secondarypink:'#C290FF',
      },
      maxWidth: {
        '8xl': '110rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
