import React from 'react';
import Navbar from '../../layout/navbar/navbar';
import Footer from '../../layout/footer/footer';

import Section1 from './sections/section1';
import Section2 from './sections/section2';
import Section3 from './sections/section3';

const Exhibit = () => {
    return (
        <div className="customAlbertColor100">
            <div>
                <title>Exhibit</title>
                <header className='h-10vh sm:h-12vh'>
                    <Navbar showGual={true} isRegNav={true} />
                </header>
                <main className='content mt-10'>
                    <Section1 />
                    <br />
                    <Section2 />
                    <br />
                    <Section3 />
                    <br /><br />
                </main>
            </div>
            <Footer />
        </div>
     );
}
 
export default Exhibit;