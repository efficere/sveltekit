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
        'azul1':'#007ed7',
        'azul2': '#009fd0',
        'azul3': '#1a4d77',
        'azul4':'#376F99',
        'azul5':'#083791',
        'vermelho1':'#ea1a3b',
        'vermelho2':'#ad2038',
        'laranja':'#ff8e32',
        'branco3':'#e1e4e9',
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