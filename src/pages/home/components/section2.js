import React from 'react';
import SlideShow from './slideshow';


const Section2 = () => {
    

    return(
        <section>
            <div className="pt-10 sm:pt-16 flex flex-col md:flex-row">
                <div className="md:w-6/12">
                    <div className="w-10/12  ml-8 pb-8 md:pb-0 md:py-24 md:w-8/12 md:mx-auto lg:w-5/12 xl:w-3/12 xl:py-24">
                        <div className="border-b-2 border-gray-800">
                            <h1 className="text-2xl md:text-4xl xl:text-3xl font-semibold font-Cinzel">FASHION</h1>
                        </div>
                        <div>
                            <p className="pt-2 text-xs sm:text-sm text-gray-500 font-Raleway">
                                In 2014, Copeland was named to the President's Council on Fitness, Sports, and Nutrition[218] 
                                and received an honorary doctorate 
                                from the University of Hartford.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="md:w-6/12">
                        <SlideShow />
                </div>
            </div>
        </section>
    )
}

export default Section2;