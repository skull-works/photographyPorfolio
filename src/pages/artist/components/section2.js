import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import Footer from '../../../layout/footer/footer';

const Section2 = () => {
    return(
        <>
                <title>Artists</title>
                {/* ARTIST */}
                <div className="h-100vh flex flex-col md:flex-row">
                        <div className="h-50vh xss:h-44vh xs:h-40vh  w-10/12 md:w-5/12 mx-auto pt-4 md:pt-24 lg:pt-24 flex flex-wrap justify-center">
                                <div className="pt-4 xss:pt-0 sm:pt-6 md:pt-0 md:w-8/12 lg:w-7/12 leading-tight">
                                        <h1 className="font-Cinzel text-xl xss:text-2xl md:text-2xl">
                                                ABOUT <br/> 
                                                THE <br/>
                                                <span className="mainHeader text-2xl xss:text-3xl md:text-4xl lg:text-5xl">ARTIST</span>
                                        </h1>
                                        <p className="section2-text font-Raleway  text-xs xss:text-sm sm:text-md md:text-md lg:text-lg xl:text-xl text-gray-700 break-all mt-4">
                                                Six (6) art students from Asia Pacific College with various skills in art and design, 
                                                collaborating to create a unique visual space that will offer a glimpse of coping mechanism pieces through art. 
                                                Everything that surrounds us is comprised of things that are beyond our first glance, our initial understandings, 
                                                and our generalizations.
                                        </p>
                                </div>
                        </div>
                        <div className="h-50vh xss:h-56vh xs:h-60vh sm:w-11/12 md:w-7/12 sm:mx-auto">
                                <div className="square-container md:pt-24 lg:pt-24">
                                        <div className="flex flex-row justify-evenly pb-12">
                                                <Link  to="/artist?is=MiguelMonasterial" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1miguel.jpg')} alt="sample"/>
                                                </Link>
                                                <Link to="/artist?is=PatriciaPangilinan"  className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1pat.jpg')} alt="sample"/>
                                                </Link>
                                                <Link to="/artist?is=EloiIgni"  className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Eloi.jpg')} alt="sample"/>
                                                </Link>
                                        </div>
                                        <div className="flex flex-row justify-evenly">
                                                <Link  to="/artist?is=JayLacdao" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Jay.jpg')} alt="sample"/>
                                                </Link>
                                                <Link  to="/artist?is=ClarissaLorenzo" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Clars.jpg')} alt="sample"/>
                                                </Link>
                                                <Link  to="/artist?is=GualbertsanSual" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Albert.jpg')} alt="sample"/>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>

                {/* GUEST PERFORMER */}
                <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-4/12 pt-20 sm:pt-0 flex flex-wrap justify-center content-center">
                                <h1 className="font-Cinzel text-xl xss:text-2xl md:text-2xl leading-none">
                                        <span className="guestHeader">GUEST</span> <br className="hidden sm:block" />
                                        <span className="text-2xl xss:text-md md:text-xl lg:text-3xl md:pl-4 lg:pl-6">PERFORMER</span>
                                </h1>
                        </div>
                        <div className="w-full sm:w-8/12 pt-40vh xs:pt-60vh relative">
                                <img className="absolute top-0 left-0 object-contain w-full h-full" src={require('../../../images/ArtistPhotos/guest.jpg')} alt="sample" />
                        </div>
                </div>

                {/* Footer */}
                <Footer  marginTop='mt-0 xs:mt-24 sm:mt-40 md:mt-24' />
        </>
        );
}

export default Section2;