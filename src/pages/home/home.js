import React from 'react';
import Navbar from '../../layout/navbar/navbar';
import logo from '../../images/LOGO_WHITE.png';
// import Footer from '../../layout/footer/footer';


const Home = () => {
    return(
        <div className='bg-lightgreen'>  
            <title>Gualbertsan Sual</title>
            <header className='h-12vh'>
                <Navbar showGual={false} />
            </header>
            <main className='content h-70vh'>
                <div className='w-10/12 h-full mx-auto relative flex flex-col xs:flex-row'>
                    <div className='w-full xs:w-10/12 h-35vh xs:h-full py-16vh xs:py-32vh'>
                        <h1 className='text-sm sm:text-lg md:text-xl lg:text-2xl font-Cinzel font-bold tracking-wide1_25em text-gray-100'>GU<span className='text-red-800'>A</span>LBERTSAN SUAL</h1>
                    </div>
                    <div className='w-full xs:w-4/12 h-35vh xs:h-full flex flex-wrap justify-center items-center'>
                        <div className='w-3/12 xs:w-3/6'>
                            <img className="object-contain" src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </main>
            <footer className='h-18vh'>
                <div className='w-10/12 h-full mx-auto'>
                    <ul className='font-Raleway text-sm text-gray-100 text-xss md:text-xs leading-tight'>
                        <li>
                            2020 - 2021 <span className="text-xs">©</span> Gualbertsan Sual. All rights reserved
                        </li>
                        <li>
                            Site by Marco Butalid
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Home;