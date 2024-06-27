/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['jakarta', 'sans-serif'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "corporate",
      "business",
    ],
  },
}

