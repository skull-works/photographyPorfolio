import React from 'react';
// import Section1 from './components/section1';
// import Section2 from './components/section2';
// import Section3 from './components/section3';
// import Section4 from './components/section4';
// import Footer from '../../layout/footer/footer';


const Home = () => {
    return(
        <div className='bg-lightgreen'>  
            <title>Gualbertsan Sual</title>
            <header className='h-12vh'>
                <nav className='w-11/12 h-full mx-auto relative'>
                    <ul className='flex flex-row absolute bottom-0'>
                        <li className='ml-2 px-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300'>
                            BIO
                        </li>
                        <li className='ml-2 px-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300'>
                            WORKS
                        </li>
                        <li className='ml-2 px-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300'>
                            EXHIBIT
                        </li>
                        <li className='ml-2 px-4 border-r-2 border-gray-300 font-Raleway font-semibold text-gray-300'>
                            CONTACT
                        </li>
                    </ul>
                </nav>
            </header>
            <main className='content h-70vh border-b-4 border-red-300'>
            </main>
            <footer className='h-18vh border-t-4 border-green-300'> 
            </footer>
        </div>
    )
}

export default Home;