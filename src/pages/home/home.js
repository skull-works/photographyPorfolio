import React from 'react';
import Navbar from '../../layout/navbar/navbar';
import logo from '../../images/LOGO_WHITE.png';
// import Footer from '../../layout/footer/footer';


const Home = () => {
    return(
        <div className='bg-lightgreen'>  
            <title>Gualbertsan Sual</title>
            <header className='h-12vh'>
                <Navbar />
            </header>
            <main className='content h-70vh'>
                <div className='w-10/12 h-full mx-auto relative flex flex-row'>
                    <div className='w-10/12 py-32vh'>
                        <h1 className='text-3xl font-Cinzel font-bold tracking-wide1_25em text-gray-100'>GU<span className='text-red-800'>A</span>LBERTSAN SUAL</h1>
                    </div>
                    <div className='w-4/12 h-full flex flex-wrap justify-center items-center'>
                        <div className='w-3/6'>
                            <img className="object-contain" src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </main>
            <footer className='h-18vh'>
                <div className='w-10/12 h-full mx-auto'>
                    <ul className='font-Raleway text-sm text-gray-100 leading-tight'>
                        <li>
                            2020 - 2021 <span className="text-md">©</span> Gualbertsan Sual. All rights reserved
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