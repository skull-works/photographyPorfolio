import React from 'react';
import { Link } from 'react-router-dom';
import PresentationPage from '../../../images/Works/page1/Presentation.png';

const Page1 = () => {
    return ( 
        <div className='w-full h-100vh overflow-y-auto bg-puregray relative'>
            <title>WORKS | SAMBALILO</title>
            
            <Link to='/works'>
                <h1 className='px-4 pt-2 absolute right-0 text-white text-3xl font-Cinzel hover:text-green-300'>Go Back</h1>
            </Link>
            
            {/* temporary */}
            <img src={PresentationPage} alt='sambalilo' />
            {/* <header className='h-16vh xs:h-20vh md:h-36vh lg:h-40vh relative bg-red-800'>
                <h1 className='ml-4 md:ml-16 absolute bottom-0 left-0 text-gray-200 text-4xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-Cinzel font-semibold'>SAMBALILO</h1>
            </header>
            <main className='content flex flex-row bg-yellow-300'>
                <div className='w-11/12 xs:w-6/12 lg:w-4/12 ml-4 md:ml-16 bg-red-200'>
                    <p className='text-xss sm:text-xs lg:text-sm font-Cinzel'>
                        Passion is something that you love doing. It is liking
                        what you do and liking how you do it. It differentiates
                        between work and career. Working hard for something
                        that does not interest you and working for something
                        that you love are two different things.
                    </p>
                </div>
            </main> */}
        </div>
     );
}
 
export default Page1;