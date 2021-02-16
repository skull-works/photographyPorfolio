module.exports = {
  purge: [],
  theme: {
    letterSpacing: {
      wide1em: '1em',
      wide1_25em: '1.25em',
      wide2em: '2em',
      wide2_25em: '2.25em',
      wide3em: '3em',
      wide3_25em: '3.25em',
    },
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
      fontSize: {
        'atom': '.25rem',
        'xss': '.50rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      colors: {
        darkblue: "#333366",
        mediumred: "#cc6666",
        lightgreen: "#669999",
        darkyellow: "#cc9966",
        puregray: "#999999",
      },
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
        '12vh': '12vh',
        '14vh': '14vh',
        '15vh': '15vh',
        '16vh': '16vh',
        '18vh': '18vh',
        '20vh': '20vh',
        '25vh': '25vh',
        '27vh': '27vh',
        '30vh': '30vh',
        '32vh': '32vh',
        '34vh': '34vh',
        '35vh': '35vh',
        '36vh': '36vh',
        '38vh': '38vh',
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
        '62vh': '62vh',
        '64vh': '64vh',
        '66vh': '66vh',
        '68vh': '68vh',
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
