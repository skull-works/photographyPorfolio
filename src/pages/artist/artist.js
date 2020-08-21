import React from 'react';
import Section2 from './components/section2'
import Miguel from './artist-solo/miguel';
import Pat from './artist-solo/pat';
import Eloi from './artist-solo/eloi';
import Jacob from './artist-solo/jacob';
import Clars from './artist-solo/clars';
import Albert from './artist-solo/albert';

const Artist = ({location}) => {
   const artist = location.search.split("=")[1];
    switch(artist){
        case 'MiguelMonasterial':
            return( <Miguel />);
        case 'PatriciaPangilinan':
            return(<Pat />);
        case 'EloiIgni':
            return(<Eloi />);    
        case 'ClarissaLorenzo':
            return(<Clars />);
        case 'JayLacdao':
            return(<Jacob />);
        case 'GualbertsanSual':
            return(<Albert />);   
        default:
            return(<Section2 />);
    }
}

export default Artist;