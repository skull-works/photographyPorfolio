import React, { useState, useEffect } from 'react';
import getImage from '../../../firebase/GetImages';

const Section3 = () => {
    const [img1, setImg1] = useState(null);
    const [img2, setImg2] = useState(null);
    const [img3, setImg3] = useState(null);
    useEffect(() => {
        getImage('1 small.jpg', setImg1,'BehindScenes');
        getImage('2 small.jpg', setImg2,'BehindScenes');
        getImage('3 small.jpg', setImg3,'BehindScenes');
    },[]);
    return(
        <section>
            <div className="py-16 lg:pb-32 text-center">
                <h1 className="font-Cinzel font-semibold text-2xl md:text-4xl lg:text-5xl">BEHIND THE SCENE</h1>
            </div>
            <div className="grid grid-cols-3  gap-4">
                <div className="relative pt-15vh xs:pt-32 sm:py-10vh md:py-15vh lg:py-30vh xl:py-40vh">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img1} alt="sample"/>
                </div>
                <div className="relative bg-gray-500">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img2} alt="sample"/>
                </div>
                <div className="relative bg-gray-500">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img3} alt="sample"/>
                </div>
            </div>
        </section>
    )
}

export default Section3;