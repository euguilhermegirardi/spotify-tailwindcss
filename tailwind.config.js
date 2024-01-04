/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        white: {
          1: '#fff',
        },
        green: '#1db954',
        black: {
          0: '#000',
          1: '#212121',
          2: '#121212',
        },
        grey: {
          1: '#535353',
          2: '#b3b3b3',
          3: '#282838',
          4: '#2a2a2a',
        },
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      flex: {
        2: '2 2 0%',
        5: '5 5 0%',
      },
    },
  },
  plugins: [],
}
