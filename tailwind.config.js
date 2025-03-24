/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'saad-header-bg': "url('/img/bg-header-saad.png')",
      },
      colors: {
        'brand-primary': {
          50: '#FDF7E4',
          100: '#FBEFC9',
          200: '#F7DF94',
          300: '#F3CF5E',
          400: '#EFBF29',
          DEFAULT: "#D4A10F",
          600: '#A97D0C',
          700: '#7F5E09',
          800: '#543E06',
          900: '#2A1F03'
        },
        'brand-secondary': {
          50: '#E6ECEC',
          100: '#CCD9DA',
          200: '#99B3B5',
          300: '#668D90',
          400: '#33676B',
          DEFAULT: "#00454A",
          600: '#00373B',
          700: '#00292C',
          800: '#001B1E',
          900: '#000D0F'
        },
      },
    },
    screens: {
      'xs': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    }
  },
  plugins: [],
};
