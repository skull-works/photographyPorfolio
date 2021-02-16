import React from 'react';
import Navbar from '../../layout/navbar/navbar';    
import './style.css';
import { Link } from 'react-router-dom';
// import Footer from '../../layout/footer/footer';

// Logo or images
import Film from '../../images/Works/Film.png';
import Photos from '../../images/Works/Photos.png';
import SambaliloClicker from '../../images/Works/SambaliloClicker.png';
import KwadernoClicker from '../../images/Works/KwadernoClicker.png';
import Pasakit from '../../images/Works/Pasakit.png';

const Works = () => {
    return (
        <div className='w-full h-100vh overflow-y-auto bg-darkblue'>
            <title>WORKS | Gualbertsan Sual</title>
            <header className='h-12vh'>
                <Navbar showGual={true} />
            </header>
            <main className='content flex flex-row'>
                <div className='w-6/12 mt-12 relative flex flex-col md:flex-row border-r-2 border-gray-400'>
                    <div className='w-full md:w-100vh pt-20vh md:py-40vh relative'>
                        <img className='object-contain film h-full w-full transform rotate-90 md:rotate-0' src={Film} alt="SambaliloClicker" />
                    </div>
                    <div className='w-full h-100vh filmContent'>
                        <div className='square filmContent mt-2 mx-auto'>
                            <Link to='/works/sambalilo'>
                                <img className='object-contain w-full h-full' src={SambaliloClicker} alt="SambaliloClicker" />
                            </Link>
                        </div>
                        <div className='square filmContent mt-8 mx-auto'>
                            <img className='object-contain w-full h-full' src={KwadernoClicker} alt="KwadernoClicker" />
                        </div>
                        <div className='square filmContent mt-8 mx-auto'>
                            <img className='object-contain w-full h-full' src={Pasakit} alt="KwadernoClicker" />
                        </div>
                    </div>
                </div>
                <div className='w-6/12 mt-12 relative flex flex-col md:flex-row-reverse'>
                    <div className='photosContainer  relative'>
                        <img className='object-contain photos h-full w-full transform rotate-90 md:rotate-180' src={Photos} alt="SambaliloClicker" />
                    </div>
                    <div className='w-full h-100vh'>
                        {/* <div className='square mt-10 mx-auto'>
                            <Link to='/works/sambalilo'>
                                <img className='object-contain w-full h-full' src={SambaliloClicker} alt="SambaliloClicker" />
                            </Link>
                        </div>
                        <div className='square mt-10 mx-auto'>
                            <img className='object-contain w-full h-full' src={KwadernoClicker} alt="KwadernoClicker" />
                        </div> */}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Works;