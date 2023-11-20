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
        "orange-gradient": "linear-gradient(180deg, #EA9769 0%, #EA6969 100%)",
      },
      colors: {
        "dark-back": "#252836",
        "dark-2": "#1F1D2B",
        "primary-1": "#EA7C69",
        "primary-2": "#EB966A",
        "gray-brdr": "#393C49",
        "gray-back": "#2D303E",
        "gray-txt": "#ABBBC2",
        "main-pink": "#FF7CA3",
        "": "",
        "": "",
      },
      boxShadow: {
        main: "0px 0px 21px 0px #EA7C694D",
        dark: "0px 0px 21px 7px #181621",
      },
    },
  },
  plugins: [],
};
