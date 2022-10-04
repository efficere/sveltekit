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
        'branco3':'#e1e4e9'
      },
      boxShadow:{
        'card_':'-0.7rem 0.7rem 0rem',
        'card_destaque':'-0.7rem 0.7rem 0rem, 0.7rem -0.7rem 0rem'
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
