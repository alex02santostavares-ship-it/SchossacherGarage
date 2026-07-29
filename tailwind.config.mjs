/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF6E6',
          100: '#F5ECBE',
          200: '#EBD882',
          300: '#E1C446',
          400: '#D4AF37',
          500: '#B89324',
          600: '#8F711A',
          700: '#665012',
          800: '#3E300B',
          900: '#171103',
        },
        dark: {
          bg: '#07080a',
          card: '#0f1115',
          cardHover: '#17191e',
          border: 'rgba(212, 175, 55, 0.15)'
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'serif'],
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #BF953F 0%, #FCF6BA 25%, #B38728 50%, #FBF5B7 75%, #AA771C 100%)',
        'gold-metallic': 'linear-gradient(135deg, #d4af37 0%, #edc967 50%, #997a15 100%)',
      }
    },
  },
  plugins: [],
}
