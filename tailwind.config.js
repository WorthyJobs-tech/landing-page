/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "b-green": "#008D62",
        "b-black": "#000000",
        "b-gray": "#606060",
      },
    },
  },
  plugins: [],
};

