export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 80px rgba(96, 165, 250, 0.18)',
      },
      backgroundImage: {
        'hero-light': 'radial-gradient(circle at top, rgba(34,197,94,0.18), transparent 45%)',
        'hero-dark': 'radial-gradient(circle at top, rgba(96,165,250,0.18), transparent 40%)',
      },
    },
  },
  plugins: [],
};
