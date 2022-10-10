/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      height:{
        '200px':'12.5rem',
        '400':'25rem',
        '500':'31.25rem',
        '600': '37.5rem',
      },
      minWidth:{
        '100': '6.25rem',
        '200': '12.5rem',
        '208':'13rem',
        '272':'17rem',
      },
      fontFamily:{
        'muli': ['Muli'],
        'panton': ['Panton'],
        'centurySchoolbook': ['"Century Schoolbook"', 'serif'],
      },
      colors:{
        'cor1':'#007ed7',
        'cor1_1': '#009fd0',
        'cor1_2': '#1a4d77',
        'cor1_3':'#376F99',
        'cor1_4':'#083791',
        'cor2':'#ea1a3b',
        'cor2_1':'#ad2038',
        'cor3':'#ff8e32',
        'cor4':'#e1e4e9',
      },
      boxShadow:{
        'card':'-0.7rem 0.7rem 0rem',
        'card--destaque':'-0.7rem 0.7rem 0rem, 0.7rem -0.7rem 0rem',
        'footer':'0 -0.3rem 1rem'
      },
      fontSize: {
        'smaller':'0.625rem'
      },
      maxHeight:{
        '200': '12.5rem',
      },
      minHeight:{
        '100': '6.25rem',
        '200': '12.5rem'
      },
      maxWidth:{
        '200': '12.5rem',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: false,
  },
}