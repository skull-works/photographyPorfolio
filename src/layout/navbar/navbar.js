import React, { useReducer } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [showNav, toggleShowNav] = useReducer(showNav => !showNav, false);
    return (
        <div>
            <div className="fixed top-0 right-0 pt-5 pr-5 z-30">
                <button className="focus:outline-none" onClick={toggleShowNav}>
                    {showNav? <svg className="fill-current text-gray-600 w-5 h-5 md:w-4 md:h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                            :<svg className="fill-current text-gray-600  w-5 h-5 md:w-5 md:h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/></svg>
                    }
                </button>
            </div>
            <nav className={showNav?"active fixed right-0 z-20 shadow-inner bg-gray-200":"hidden"}>
                <div className="w-full md:px-10 lg:px-12 h-100vh flex flex-wrap content-center leading-10">
                    <ul className="text-xs lg:text-md font-Raleway">
                        <li>
                            <div className="w-6/12 md:w-32 xl:w-48 mt-20 mx-auto">
                                <img className="object-contain" src={require('../../images/LOGO.png')} alt="logo2" />
                            </div>
                        </li>
                        <Link to="/"        id="item1" className={showNav?' block text-center cursor-pointer hover:text-gray-600':'hidden'}      onClick={toggleShowNav}>GUALBERTSAN PRODUCTIONS</Link>
                        <Link to="/artist"  id="item2" className={showNav?' block pt-2 text-center cursor-pointer hover:text-gray-600':'hidden'} onClick={toggleShowNav}>ARTIST</Link>
                        <li id="item3" className={showNav?' block pt-2 text-center cursor-pointer hover:text-gray-600':'hidden'}>WORKS</li>
                        <Link to="/contact" id="item4" className={showNav?' block pt-2 text-center cursor-pointer hover:text-gray-600':'hidden'} onClick={toggleShowNav}>CONTACT</Link>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;