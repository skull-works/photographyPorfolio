import React from 'react';
import './styles.css';
// import { Link } from 'react-router-dom';


const Navbar = () => {
    // const [showNav, toggleShowNav] = useReducer(showNav => !showNav, false);
    return (
        <nav className='w-10/12 h-full mx-auto relative'>
            <ul className='flex flex-row absolute bottom-0'>
                <li className='pr-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300'>
                    BIO
                </li>
                <li className='ml-2 pr-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300'>
                    WORKS
                </li>
                <li className='ml-2 pr-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300'>
                    EXHIBIT
                </li>
                <li className='ml-2 pr-4 font-Raleway font-semibold text-gray-300'>
                    CONTACT
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;