/** @type {import('tailwindcss').Config} */

/* Helper Functions */
// IMPORTANT: if we set the html font-size to a different value update the `base` here
const pxToRem = (px, base = 16) => {
  return `${px / base}rem`;
};

const letterSpacing = {
  1: pxToRem(1),
  2: pxToRem(2),
  3: pxToRem(3),
  4: pxToRem(4),
};

const boxShadow = {
  card: 'rgb(143 144 152 / 15%) 0px 2px 4px',
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    letterSpacing,
    boxShadow,
    extend: {},
  },
  plugins: [],
};