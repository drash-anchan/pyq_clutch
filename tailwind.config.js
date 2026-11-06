/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        sand: {
          50: '#FDFCFB',
          100: '#F9F6F0',
          200: '#F0EAE1',
          300: '#E2D7C8',
          400: '#C8B8A2',
          500: '#A8947C',
          600: '#8A755E',
          700: '#6D5B48',
          800: '#4A3D30',
          900: '#2A221A',
        },
        carbon: {
          950: '#060709',
          900: '#0B0D12',
          850: '#10121A',
          800: '#151822',
          750: '#1B1E2B',
          700: '#232736',
          600: '#32374A',
        }
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'minimal': '0 4px 20px -2px rgba(0, 0, 0, 0.06)',
        'minimal-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
};
