/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'du-purple': {
          500: '#6B26FF',
          600: '#783D86',
          700: '#6216F8',
        },
        'du-gray': '#F7FAFC',
        'du-indigo': {
          900: '#151A35',
        },
        'du-lightAqua': '#00FFFF',
        'du-deepPurple': '#1E2445',
        'du-lightPurple': '#C86DFF',
        'du-charcoal-gray':'#4B4B4B',

        'event-tags' : {
          'conference': '#F6BAC5',
          'training': '#A0EFEA',
          'meetup': '#C9DC94',
          'hackathon': '#5FA3C4',
          'other': '#5675C3',
          'webinar': '#E2B1FF',
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
