/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colombia: {
          yellow: '#FCDE00',
          blue: '#003087',
          red: '#C8102E',
        },
        civic: {
          primary: '#1E40AF',
          secondary: '#059669',
          accent: '#DC2626',
          neutral: '#6B7280',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}