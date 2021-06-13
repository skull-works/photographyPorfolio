import React from 'react';
import { Link } from 'react-router-dom';

import Miguel2 from '../../../images/ArtistPhotos/2miguel.jpg';
import Pat2 from '../../../images/ArtistPhotos/2pat.jpg';
import Eloi2 from '../../../images/ArtistPhotos/2Eloi.jpg';
import Jay2 from '../../../images/ArtistPhotos/2Jay.jpg';
import Clars2 from '../../../images/ArtistPhotos/2Clars.jpg';
import Albert2 from '../../../images/ArtistPhotos/2Albert.jpg';
import Guest from '../../../images/ArtistPhotos/guest_new.png';

import './section3.css';

const Section3 = () => {
    return (
        <div className="Section3Wrapper customAlbertColor200">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-Cinzel font-bold text-center">About the artist</h1>
            <p className="mt-8 text-xs md:text-sm lg:text-base xl:text-lg customFont-dubai text-center w-11/12 md:w-10/12 xl:w-8/12 mx-auto">
                Six (6) art students from Asia Pacific College with various skills in art and design, collaborating to create a unique
                visual space that will offer a glimpse of coping mechanism pieces through art. Everything that surrounds us
                is comprised of things that are beyond our first glance, our initial understandings, and our generalizations.
            </p>

            <p className="mt-4 text-xs md:text-sm lg:text-base xl:text-lg customFont-dubai text-center text-red-600">CLICK THE PHOTO FOR THEIR ARTIST BACKGROUND</p>

            <div className="sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12 sm:mx-auto">
                <div className="square-container mt-4">
                    <div className="flex flex-row justify-evenly pb-12">
                        <Link  to="/artist?is=MiguelMonasterial" className="customSquareContainerSection3 hover:opacity-75 cursor-pointer">
                            <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Miguel2} alt="sample"/>
                        </Link>
                        <Link to="/artist?is=PatriciaPangilinan"  className="customSquareContainerSection3 hover:opacity-75 cursor-pointer">
                            <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Pat2} alt="sample"/>
                        </Link>
                        <Link to="/artist?is=EloiIgni"  className="customSquareContainerSection3 hover:opacity-75 cursor-pointer">
                            <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Eloi2} alt="sample"/>
                        </Link>
                    </div>
                    <div className="flex flex-row justify-evenly">
                        <Link  to="/artist?is=JayLacdao" className="customSquareContainerSection3 hover:opacity-75 cursor-pointer">
                            <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Jay2} alt="sample"/>
                        </Link>
                        <Link  to="/artist?is=ClarissaLorenzo" className="customSquareContainerSection3 hover:opacity-75 cursor-pointer">
                            <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Clars2} alt="sample"/>
                        </Link>
                        <Link  to="/artist?is=GualbertsanSual" className="customSquareContainerSection3 hover:opacity-75 cursor-pointer">
                            <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Albert2} alt="sample"/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-10/12 lg:w-10/12 custom__guest-performer__container">
                <div className="custom__guest-performer__text">
                    <h1 className="font-Cinzel below__lg">GUEST PERFORMER</h1>
                    <div className="guest__text">
                        <h1 className="font-Cinzel above__lg">GUEST</h1>
                    </div>
                    <div className="performer__text">
                        <h1 className="font-Cinzel above__lg">PERFORMER</h1>
                    </div>
                </div>
                <div className="custom__guest-performer-image__container">
                    <img className="absolute top-0 left-0 object-contain w-full h-full" src={Guest} alt="sample" />
                </div>
            </div>
        </div>
     );
}
 
export default Section3;