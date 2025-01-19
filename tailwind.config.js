/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        times: ['"Times New Roman"', 'Times', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
        opensans: ['"Open Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
