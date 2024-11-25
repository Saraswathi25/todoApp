const plugin = require('@iconify/tailwind');

module.exports = {
  content: [
    './src/**/*.{html,ts}', // Make sure Angular files are scanned
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin, // Correctly adding Iconify plugin
  ],
}
