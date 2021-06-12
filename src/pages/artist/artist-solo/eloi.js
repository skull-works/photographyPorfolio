import React from 'react';
import './artist-solo.css';
import BackButton from './components/back-button';


const Eloi = () => {
    return(
    <>  
        <title>Eloi Igni</title>
        {/* <title>Coming soon</title> */}
        <div className="h-100vh flex flex-col md:flex-row relative">
            <BackButton />
            <div className="h-50vh xs:h-54vh sm:h-60vh md:h-100vh md:w-5/12">
                <div className='rectangle-wrapper h-50vh w-7/12  mx-auto pl-0 md:pl-0 pt-8 xss:pt-8 sm:pt-6 md:pt-20'>
                    <div className='rectangle'>
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Eloi.jpg')} alt="sample"/>
                    </div>
                </div>
            </div>
            <div className="h-50vh xs:h-46vh sm:h-40vh md:h-100vh md:w-8/12">
                <div className="w-10/12 xs:w-8/12 md:w-9/12 lg:w-10/12 mx-auto md:mt-20 text-center">
                    <h1 className="leading-tight">
                        <span className="header font-Cinzel">Eloi</span> <br /> 
                        <span className="header2 font-Cinzel pl-10vh xss:pl-15vh md:pl-20vh lg:pl-34vh">Igni</span>
                        {/* <span className="header font-Cinzel">Coming</span> <br /> 
                        <span className="header2 font-Cinzel pl-10vh xss:pl-20vh md:pl-27vh lg:pl-40vh">soon</span> */}
                    </h1>
                    <br />
                    <br />
                     <p className="font-Raleway text-sm xs:text-md md:text-lg lg:text-xl text-justify">
                     Eloi is drawn to both traditional and digital painting. The interest started during her younger years, 
                     which further developed when she decided to take up a Bachelor’s Degree in Multimedia Arts. 
                     As a visual artist, she is fascinated by the relationship of space and serenity, 
                     with the purpose of discussing the beauty in silence, simplicity, and the things taken for granted.
                    </p>
                </div>
                <div className=" md:w-9/12 lg:w-10/12 mx-auto mt-6 sm:mt-8 md:mt-16 lg:mt-20">
                    <div className="w-15vh h-20vh pt-16 sm:pt-0 lg:pt-20 mx-auto relative">
                        <img className="object-cover absolute top-0" src={require("../../../images/LOGO.png")} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default Eloi;