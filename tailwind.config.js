module.exports = {
  content: ['./src/**/*.{html,js}'],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        full: '100%',
      },
    },
    fontFamily: {
      sansBold: ['Ubuntu-Bold', 'ui-sans-serif', '\"Helvetica Neue\"', 'Arial', 'sans-serif'],
      sans: ['Ubuntu', 'ui-sans-serif', '\"Helvetica Neue\"', 'Arial', 'sans-serif'],
      mono: ['Inconsolata', 'ui-monospace', '\"Courier New\"', 'monospace'],
    },
    // fontSize: {
    //   smol: ['12px', '14px'],
    //   sm: ['14px', '17.5px'],
    //   base: ['16px', '20px'],
    //   lg: ['20px', '22px'],
    //   xl: ['24px', '32px'],
    //   xxl: ['32px', '32px'],
    // },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#FFFFFF',
      },
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#CBD5E1',
        400: '#94A3B8',
        800: '#1E293B',
        900: '#0F172A',
      },
      yellow: {
        light: '#FADD70',
        DEFAULT: '#C7A832',
      },
      purple: {
        lighter: '#CBCEF5',
        light: '#BCC0FB',
        DEFAULT: '#707AFA',
        dark: '#373C7A',
        darker: '#202347',
      },
      black: {
        DEFAULT: '#000000',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
