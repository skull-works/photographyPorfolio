import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const Navbar = ({ showGual }) => {
    return (
        <nav className='w-10/12 h-full mx-auto relative text-xss xs:text-xs'>
            <ul className='flex flex-row absolute bottom-0'>
                { showGual ?
                    <Link to='/'>
                        <li className='pr-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300 hover:text-green-300'>
                            GUALBERTSAN SUAL
                        </li>
                    </Link>
                    :
                    null
                }
                <Link to='/bio'>
                    <li className='ml-2 pr-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300 hover:text-green-300'>
                        BIO
                    </li>
                </Link>
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