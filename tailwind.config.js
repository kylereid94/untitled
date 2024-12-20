/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Lexend', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#472D30",
          "secondary": "#723D46",
          "accent": "E26D5C",
          "neutral": "C9CBA3",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}