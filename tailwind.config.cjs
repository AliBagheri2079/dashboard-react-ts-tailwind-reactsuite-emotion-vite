/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  plugins: [require('flowbite/plugin'), require('preline/plugin')],
};
