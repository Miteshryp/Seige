module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'orbitron': ['Orbitron'],
      'noto-sans': ['Noto sans']
    },
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
  variants: {
    scrollbar: ['rounded'] 
  }
}
