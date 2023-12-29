/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        green: '#1db954',
        black: {
          1: '#212121',
          2: '#121212',
        },
        grey: {
          1: '#535353',
          2: '#b3b3b3',
        },
      },
    },
  },
  plugins: [],
}
