/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xxs: '360px',
      xs: '390px',
      deskSm: '435px',
      sm: '640px',
      md: '768px',
      thousandWidth: '1000px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1350px',
      tall: {
        raw: '(min-height: 750px) and (max-width: 420px)',
      },
    },
    extend: {
      colors: {
        bluePurple: '#6618f9',
        brightRed: '#ff2e5b',
        dark: '#060918',
        lightGray: '#616983',
        bright: '#fffef9',
        matteBlack: '#28282B',
        coal: '#0C0908',
      },
      scale: {
        fifty: '0.5',
        seventyFive: '0.75',
      },
    },
  },
  plugins: [],
};
