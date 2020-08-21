import React, { useState, useEffect } from 'react';
import getImage from '../../../firebase/GetImages';
import './styles.css';
import { Link } from 'react-router-dom';
import Footer from '../../../layout/footer/footer';

const Section2 = () => {
    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);
    const [img3, setImg3] = useState(null);
    const [img4, setImg4] = useState(null);
    const [img5, setImg5] = useState(null);
    const [img6, setImg6] = useState(null);
    useEffect( () => {
        getImage('1Artist.jpg', setImg1,'Artist Page');
        getImage('Soon.png', setImg2,'6 Photos in Main page');
        getImage('Soon.png', setImg3,'6 Photos in Main page');
        getImage('Soon.png', setImg4,'6 Photos in Main page');
        getImage('Soon.png', setImg5,'6 Photos in Main page');
        getImage('Soon.png', setImg6,'6 Photos in Main page');
    },[]);
        

    return(
        <>
                <title>Artists</title>
                <div className="h-100vh flex flex-col md:flex-row">
                        <div className="h-50vh xss:h-44vh xs:h-40vh  w-10/12 md:w-5/12 mx-auto pt-4 md:pt-24 lg:pt-6 flex flex-wrap justify-center">
                                <div className="pt-4 xss:pt-0 sm:pt-6 md:pt-0 md:w-8/12 leading-tight">
                                        <h1 className="font-Cinzel text-xl xss:text-2xl md:text-2xl">
                                                ABOUT <br/> 
                                                THE <br/>
                                                <span className="mainHeader text-2xl xss:text-3xl md:text-4xl lg:text-5xl">ARTIST</span>
                                        </h1>
                                        <p className="font-Raleway text-xs xss:text-sm sm:text-md md:text-xl xl:text-2xl text-justify mt-4">
                                                Six (6) art students from Asia Pacific College with various skills in art and design, 
                                                collaborating to create a unique visual space that will offer a glimpse of coping mechanism pieces through art. 
                                                Everything that surrounds us is comprised of things that are beyond our first glance, our initial understandings, 
                                                and our generalizations.
                                        </p>
                                </div>
                        </div>
                        <div className="h-50vh xss:h-56vh xs:h-60vh sm:w-11/12 md:w-7/12 sm:mx-auto">
                                <div className="square-container md:pt-40 lg:pt-24">
                                        <div className="flex flex-row justify-evenly pb-12">
                                                <Link  to="/artist?is=MiguelMonasterial" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img1} alt="sample"/>
                                                </Link>
                                                <Link to="/artist?is=PatriciaPangilinan"  className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img2} alt="sample"/>
                                                </Link>
                                                <Link to="/artist?is=EloiIgni"  className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img3} alt="sample"/>
                                                </Link>
                                        </div>
                                        <div className="flex flex-row justify-evenly">
                                                <Link  to="/artist?is=JayLacdao" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img4} alt="sample"/>
                                                </Link>
                                                <Link  to="/artist?is=ClarissaLorenzo" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img5} alt="sample"/>
                                                </Link>
                                                <Link  to="/artist?is=GualbertsanSual" className="square hover:opacity-75 cursor-pointer">
                                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img6} alt="sample"/>
                                                </Link>
                                        </div>
                                </div>
                        </div>
                </div>
                <Footer  marginTop='mt-0 xs:mt-24 sm:mt-40 md:mt-0' />
        </>
        )
}

export default Section2;