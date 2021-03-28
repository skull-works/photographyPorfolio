import React from 'react';
import Navbar from '../../layout/navbar/navbar';
import logo from '../../images/LOGO2.png';
// import Footer from '../../layout/footer/footer';

import './style.css';


const AlbertNameDesktop = () => {

    return (
        <div className='hidden sm:block w-full xs:h-full xs:py-27vh lg:py-32'>
            <p className='albertName customAlbertColor200 customFont-codec-light'>gualbertsan <span className='customAlbertColor300'>sual</span></p>
            <div className='h-full mt-2'>
                <ul className='invisible sm:visible text-xs lg:text-sm customAlbertColor200 leading-6'>
                    <li>
                        <span className="customFont-dubai pr-2">2020 - 2021</span> 
                        <span className="text-xs pr-2">©</span> 
                        <span className="customFont-codec-light">Gualbertsan Sual. All rights reserved</span>
                    </li>
                    <li className="customFont-codec-light">
                        Site by Marco Butalid
                    </li>
                </ul>
            </div>
        </div>
    )
}

const AlbertNameMobile = () => {
    return (
        <div className='sm:hidden w-full h-35vh py-4'>
            <ul className="text-4xl text-bold text-right customAlbertColor200 customFont-codec-light leading-tight">
                <li>gual</li>
                <li>bert</li>
                <li>san</li>
                <li className='customAlbertColor300'>sual</li>
            </ul>
        </div>
    )
}


const Home = () => {
    const FooterUL = {
        'font-size': '0.79rem',
        'line-height': '1.2rem',
    };

    return(
        <div className='customAlbertColor100'>  
            <title>Gualbertsan Sual</title>
            <header className='h-35vh sm:h-20vh'>
                <Navbar showGual={false} isRegNav={false} />
            </header>
            <main className='content h-32vh sm:h-60vh'>
                <div className='w-10/12 h-full mx-auto relative flex flex-col sm:flex-row'>
                    <AlbertNameDesktop />
                    <AlbertNameMobile />
                    <div className='invisible sm:visible sm:w-6/12 xs:h-full flex flex-wrap justify-center items-center'>
                        <div className='w-3/12 xs:w-3/6'>
                            <img className="object-contain" src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </main>
            <footer className='h-18vh'>
                <div className='w-10/12 h-full mx-auto mt-8 sm:hidden'>
                    <ul className='text-xs customAlbertColor200 leading-tight' style={FooterUL}>
                        <li>
                            <span className="customFont-dubai pr-2">2020 - 2021</span> 
                            <span className="text-xs pr-2">©</span> 
                            <span className="customFont-codec-light">Gualbertsan Sual. All rights reserved</span>
                        </li>
                        <li className="customFont-codec-light">
                            Site by Marco Butalid
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Home;