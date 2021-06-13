import React from 'react';
import { Link } from 'react-router-dom';


import logo from '../../images/LOGO2.png';



const RegularNavbar = ({ showGual }) => {
    const links = 'ml-2 pr-8 hover:text-green-300 font-bold';

    return (
        <nav className='w-10/12 h-full mx-auto relative text-xss xs:text-xs customAlbertColor200 font-Raleway z-20'>
            <ul className='flex flex-row absolute bottom-0'>
                { showGual ?
                    <Link to='/'>
                        <li className='pr-4 hover:text-green-300 font-bold'>
                            GUALBERTSAN SUAL
                        </li>
                    </Link>
                    :
                    null
                }
                <Link to='/bio'>
                    <li className={links}>
                        BIO
                    </li>
                </Link>
                <Link to='/works'>
                    <li className={links}>
                        WORKS
                    </li>
                </Link>
                <Link to='/exhibit'>
                    <li className={links}>
                        EXHIBIT
                    </li>
                </Link>
                
                <Link to='/contact'>
                    <li className={links}>
                        CONTACT
                    </li>
                </Link>
                
            </ul>
        </nav>
    )
}



const HomeNavbar = () => {

    const links = 'ml-2 sm:pr-4 md:px-4 lg:px-8 xl:px-10vh float-right font-Raleway font-bold customAlbertColor200 hover:text-green-300';
    const lastLink = 'ml-2 md:pl-4 lg:pl-8 xl:pl-12 float-right font-Raleway font-bold customAlbertColor200 hover:text-green-300';

    return (
        <nav className='w-10/12 h-full mx-auto flex flex-row relative text-xss xs:text-xs z-20 customAlbertColor200'>
            <div className='w-7/12 h-35vh xs:h-full flex flex-wrap justify-center items-center sm:hidden'>
                <div className='w-10/12 xs:w-8/12 mt-10vh xs:mt-12 sm:mt-14vh'>
                    <img className="object-contain" src={logo} alt="logo" />
                </div>
            </div>
            <div className='w-5/12 sm:w-auto relative sm:absolute sm:right-0 sm:bottom-0'>
                <ul className='mt-16vh xs:mt-12vh flex flex-col sm:flex-row text-xs xs:text-base sm:text-xs leading-6 xs:leading-7'>
                    <Link to='/bio'>
                        <li className={links}>
                            BIO
                        </li>
                    </Link>
                    <Link to='/works'>
                        <li className={links}>
                            WORKS
                        </li>
                    </Link>
                    <Link to='/exhibit'>
                        <li className={links}>
                            EXHIBIT
                        </li>
                    </Link>
                    <Link to='/contact'>
                        <li className={lastLink}>
                            CONTACT
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

const Navbar = ({ isRegNav, showGual }) => {
    if (isRegNav) return <RegularNavbar showGual={showGual} />;
    else return <HomeNavbar />
}

export default Navbar;