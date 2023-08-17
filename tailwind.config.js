/** @type {import('tailwindcss').Config} */

import { range } from 'lodash';
const pxToRem = (px, base = 16) => `${px / base}rem`;

const pxToRemFunc = (start, end) => {
  return range(0, 1000).reduce((acc, px) => {
    acc[`${px}pxr`] = pxToRem(px);
    return acc;
  }, {});
};

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      sans: ['noto-sans-kr', 'sans-serif'],
    }, // font-family: noto-sans-kr, sans-serif;
    spacing: {
      ...pxToRemFunc(0, 1000),
    }, // px을 rem으로 변환
    inset: {
      ...pxToRemFunc(0, 1000),
    },
    fontSize: {
      ...pxToRemFunc(0, 1000),
    }, // px을 rem으로 변환
    lineHeight: {
      ...pxToRemFunc(0, 1000),
    }, // px을 rem으로 변환
    screens: {
      mobile: '360px',
      tablet: '768px',
    },
  },
  plugins: [],
};
