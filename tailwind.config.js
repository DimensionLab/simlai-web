/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
    fontWeight: {
      'thin': 100,
      'black': 900,
    }
  },
  plugins: [],
}

