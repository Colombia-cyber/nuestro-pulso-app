/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colombian flag colors
        'colombia-yellow': '#FDE047',
        'colombia-blue': '#3B82F6',
        'colombia-red': '#EF4444',
        // Additional colors for better design
        'colombia-yellow-light': '#FEF3C7',
        'colombia-blue-light': '#DBEAFE',
        'colombia-red-light': '#FECACA',
        'colombia-yellow-dark': '#F59E0B',
        'colombia-blue-dark': '#1D4ED8',
        'colombia-red-dark': '#DC2626',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}