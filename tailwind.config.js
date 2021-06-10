module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Ubuntu', 'ui-sans-serif', '\"Helvetica Neue\"', 'Arial', 'sans-serif'],
      mono: ['Inconsolata', 'ui-monospace', '\"Courier New\"', 'monospace'],
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FFFFFF',
      },
      purple: {
        light: '#BCC0FB',
        DEFAULT: '#707AFA',
        dark: '#373C7A',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
