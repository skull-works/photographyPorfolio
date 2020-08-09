module.exports = {
  purge: [],
  theme: {
    screens:{
        'xss': '365px',
        // => @media (min-width: 400x) { ... }
        'xs': '520px',
        // => @media (min-width: 400x) { ... }
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    extend: {
      spacing: {
        '76': '20rem',
        '88': '22rem',
        '100': '25rem',
        '101': '28rem',
        '102': '30rem',
        '103': '35rem',
        '1vw': '1vw',
        '1.25vw': '1.25vw',
        '10vh': '10vh',
        '15vh': '15vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '42vh': '42vh',
        '44vh': '44vh',
        '46vh': '46vh',
        '48vh': '48vh',
        '50vh': '50vh',
        '52vh': '52vh',
        '54vh': '54vh',
        '56vh': '56vh',
        '58vh': '58vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh',
        '90vh': '90vh',
        '100vh': '100vh',
        '110vh': '110vh',
        '120vh': '120vh',
        '130vh': '130vh',
      },
      fontFamily: {
        Cinzel: ['Cinzel'],
        Raleway: ['Raleway']
      }
    },
  },
  variants: {
    backgroundColor: ['responsive', 'active', 'hover','focus'],
    borderColor: ['responsive','active', 'hover','focus']
  },
  plugins: [],
}
