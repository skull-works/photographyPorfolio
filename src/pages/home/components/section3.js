import React from 'react';

const Section3 = () => {
    return(
        <section>
            <div className="py-16 lg:pb-32 text-center">
                <h1 className="font-Cinzel font-semibold text-2xl md:text-4xl lg:text-5xl">BEHIND THE SCENE</h1>
            </div>
            <div className="grid grid-cols-3  gap-4">
                <div className="relative pt-15vh xs:pt-32 sm:py-10vh md:py-15vh lg:py-30vh xl:py-40vh">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/MainPage/behindScenes/1 small.jpg')} alt="sample"/>
                </div>
                <div className="relative bg-gray-500">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/MainPage/behindScenes/2 small.jpg')} alt="sample"/>
                </div>
                <div className="relative bg-gray-500">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/MainPage/behindScenes/3 small.jpg')} alt="sample"/>
                </div>
            </div>
        </section>
    )
}

export default Section3;