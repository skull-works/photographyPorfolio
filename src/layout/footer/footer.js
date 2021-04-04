import React from 'react';

import Logo from '../../images/LOGO2.png';
import Icons from '../../images/icons.png';

const Footer = ({marginTop}) => {
    return (
        <footer className={`w-full ${marginTop}`}>
            <div className='w-18vh pt-20vh relative mx-auto'>
                <img className='absolute top-0 right-0 object-contain sm:object-contain w-full h-full' src={Logo} alt="Logo" />
            </div>
            <div className='w-2/12 pt-6 relative mx-auto'>
                <img className='absolute top-0 right-0 object-contain sm:object-contain w-full h-full' src={Icons} alt="media_icons" />
            </div>
            <div className='w-8/12 pt-4 pb-20 relative mx-auto'>
                <ul className='font-Raleway text-sm customAlbertColor200  text-xss md:text-xs text-center leading-tight'>
                    <li>
                        2020 - 2021 <span className="text-xs">©</span> Gualbertsan Sual. All rights reserved
                    </li>
                    <li>
                        Site by Marco Butalid
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;