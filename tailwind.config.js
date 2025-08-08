/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
      extend: {
        colors: {
          brand: 'hsl(var(--brand))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          card: 'hsl(var(--card))',
          border: 'hsl(var(--border))',
          'muted-foreground': 'hsl(var(--muted-foreground))',
          glass: 'hsl(var(--glass))',
        },
        boxShadow: {
          elegant: 'var(--shadow-elegant)',
        },
      },
  },
  darkMode: "class",
  plugins: [
    require('daisyui'),
  ],
}