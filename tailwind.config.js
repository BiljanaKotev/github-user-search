/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* light-mode-colors */
        'primary-light-mode': 'var(--primary-light-mode)',
        'secondary-light-mode': 'var(--secondary-light-mode)',
        'tertiary-light-mode': 'var(--tertiary-light-mode)',
        'accent-light-mode': 'var(--accent-light-mode)',

        /* dark mode colors */
        'primary-dark-mode': 'var(--primary-dark-mode)',
        'secondary-dark-mode': 'var(--secondary-dark-mode)',
        'tertiary-dark-mode': 'var(--tertiary-dark-mode)',
        'accent-dark-mode': 'var(--accent-dark-mode)',

        /* bg colors */
        'primary-bg': 'var(--primary-bg)',
        'secondary-bg': 'var(--secondary-bg)',
      },
    },
  },
  plugins: [],
};

