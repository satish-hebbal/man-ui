/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'baseSaf': '#FFE6A9',
        'textBoxBG': '#FFFFF4',
        'buttonBG': '#FF9933',
        'BG1': '#FFEEC4',
        'BG2': '#FDF9EE',
      },
    },
  },
  plugins: [],
}