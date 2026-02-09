/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        secondary: '#ECF0F1',
        accent: '#3498DB',
        backgroundLight: '#F8F9FA',
        backgroundDark: '#212529',
        textPrimary: '#343A40',
        textSecondary: '#6C757D',
        textMuted: '#CED4DA',
        border: '#000000',
        error: '#E74C3C',
      },
      fontFamily: {
        heading: ['Inter', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};