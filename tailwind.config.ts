import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0e27',
        foreground: '#ffffff',
        accent: '#ffd700',
        'card': 'rgba(26, 31, 58, 0.4)',
        'card-foreground': '#ffffff',
        'muted': '#a0a0a0',
        'muted-foreground': '#808080',
        'border': 'rgba(255, 255, 255, 0.1)',
        'cosmic': {
          'deep': '#0a0e27',
          'navy': '#1a1f3a',
          'cyan': '#00d4ff',
          'pink': '#ff69ff',
          'green': '#00ff88',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
      },
      spacing: {
        'xs': '0.25rem',
        'sm': '0.5rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
        '3xl': '3rem',
        '4xl': '4rem',
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1rem',
        'full': '9999px',
      },
    },
  },
  plugins: [],
} satisfies Config;
