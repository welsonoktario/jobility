const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['media'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', ...defaultTheme.fontFamily.sans],
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#000000',
          secondary: '#343232',
          accent: '#50e3c2',
          neutral: '#272626',
          'base-100': '#ffffff',
          info: '#0070f3',
          success: '#0070f3',
          warning: '#f5a623',
          error: '#e00',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['[data-theme=dark]'],
          primary: '#ffffff',
          secondary: '#343232',
          accent: '#50e3c2',
          neutral: '#272626',
          'base-100': '#000000',
          info: '#0070f3',
          success: '#0070f3',
          warning: '#f5a623',
          error: '#e00',
        },
      },
    ],
    darkTheme: 'dark', // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'), require('tailwindcss-animate')],
};
