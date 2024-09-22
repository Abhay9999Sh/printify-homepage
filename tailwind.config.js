/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html',
    './src/**/*.{js,jsx}',  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#203741',
        'custom-darker': '#17262b',
      },
    },
  },
  plugins: [],
}

