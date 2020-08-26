import React from 'react';

const Section4 = () => {
    return(
        <section >
            <div className="w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 mx-auto py-16 lg:pb-24 text-center">
                <p className="font-Raleway text-sm lg:text-lg text-center text-gray-500 ">
                    The artists <span className="italic">behind the scene</span> worked day and night for several weeks to put this exhibit together. 
                    Caught in between the struggles brought by the pandemic, the team had to do every work virtually, 
                    from meetings to other discussions vital to the success of ‘Hinga.’ 
                </p>
            </div>
            <div className="relative pt-40vh sm:py-60vh md:pt-70vh lg:w-11/12 lg:mx-auto">
                <img className="absolute top-0 object-cover w-full h-full" 
                     src={require('../../../images/MainPage/bigPics/4 big.jpg')}
                     alt="sample" />
            </div>
            {/* part 2 */}
            <div className="w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 mx-auto py-16 lg:pb-24 text-center">
                <p className="font-Raleway text-sm lg:text-lg text-center text-gray-500 ">
                As individual artists, each of them had to work tirelessly to meet strict deadlines. 
                Their methods differentiated them from one another—which made every artwork unique. 
                But despite their differences, they ensured that they achieve their one goal: 
                to inspire and to stimulate the minds of the audience through thematic art pieces.
                </p>
            </div>
            {/* pt-30vh xs:py-40vh sm:py-60vh md:pt-80vh lg:py-10vh */}
            <div className="relative pt-40vh sm:py-60vh md:pt-70vh lg:w-11/12 lg:mx-auto bg-red-400">
                 <img className="absolute top-0 object-cover w-full h-full" 
                     src={require('../../../images/MainPage/bigPics/5 big.jpg')}
                     alt="sample" />
            </div>
        
        </section>
    )   
}

export default Section4;