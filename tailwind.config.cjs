/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height:{
        '600': '37.5rem',
      },
      fontFamily:{
        'muli': ['Muli'],
        'panton': ['Panton'],
        'centurySchoolbook': ['"Century Schoolbook"', 'serif'],
      }
    },
    maxWidth: {
      '200': '12.5rem',
    },
    minWidth:{
      '100': '6.25rem',
    },
  },
  plugins: [require("daisyui")],
}
