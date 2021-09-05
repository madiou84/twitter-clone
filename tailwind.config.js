module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#4cbeff",
          100: "#42b4ff",
          200: "#38aaf6",
          300: "#2ea0ec",
          400: "#2496e2",
          500: "#1a8cd8",
          600: "#1082ce",
          700: "#0678c4",
          800: "#006eba",
          900: "#0064b0"
        },
        secondary: {
          50: "#ffffff",
          100: "#ffffff",
          200: "#f7f7f7",
          300: "#ededed",
          400: "#e3e3e3",
          500: "#d9d9d9",
          600: "#cfcfcf",
          700: "#c5c5c5",
          800: "#bbbbbb",
          900: "#b1b1b1"
        },
        default: {
          50: "#525559",
          100: "#484b4f",
          200: "#3e4145",
          300: "#34373b",
          400: "#2a2d31",
          500: "#202327",
          600: "#16191d",
          700: "#0c0f13",
          800: "#020509",
          900: "#000000"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
