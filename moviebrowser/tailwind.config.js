module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primaryDark)',
        secondary: 'var(--color-secondary)',
        danger: 'var(--color-danger)',
        dangerDark: 'var(--color-dangerDark)',
        blackx: 'var(--color-black)',
        grayBackground: 'var(--color-gray)',
        colorBorder: 'var(--color-border)',
        colorInput: 'var(--color-input)',
        primaryHover: 'var(--color-primary-hover)',
        blackxHover: 'var(--color-black-hover)',
        veryLightBlue: '#E8F0F6',
        darkGreen: '#3D7A3F',
        redCustom: '#B01313',
        lightBlue: '#5EA9E6',
        blue: '#005CA9',
        darkBlue: '#11385D',
        golden: '#FFB669',
        black: '#222222',
        lightGray: '#F8F8F8',
      },
      gridTemplateRows: {
        formLayout: '75px minmax(75px, 1fr) 75px',
      },
      margin: {
        '0auto': '0 auto',
      },
    },
  },
  plugins: [],
};
