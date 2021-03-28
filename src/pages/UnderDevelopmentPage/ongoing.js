import React from 'react';
import { Link } from 'react-router-dom';

const Ongoing = () => {
    return ( 
        <div className="h-100vh w-full customAlbertColor100">
            <div className="w-6/12 mx-auto pt-40vh">
                <h1 className='customAlbertColor200 ml-10 text-4xl font-Raleway'> This page is under development :-) </h1>
                <Link to='/'>
                    <h2 className='ml-12 customAlbertColor200 font-Raleway hover:text-blue-400 '> Back to Home Page </h2>
                </Link>
            </div>
        </div>
     );
}
 
export default Ongoing;