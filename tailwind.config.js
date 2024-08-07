/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sana-seriDm': ['"DM Sans", sans-serif'],
          'Kalnia': ['"Kalnia", serif'],
          

      },
      colors: {
        'primary':['#ff0000']
      }
      
    },
    
  },
  plugins: [],
}

