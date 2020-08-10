import React from 'react';
import SlideShow from './slideshow';


const Section2 = () => {
    

    return(
        <section>
            <div className="pt-10 sm:pt-16 flex flex-col md:flex-row">
                <div className="md:w-6/12">
                    <div className="w-10/12  ml-8 pb-8 md:pb-0 md:py-24 md:w-9/12 md:mx-auto lg:w-7/12 xl:w-4/12 xl:py-24">
                        <div className="border-b-2 border-gray-800">
                            <h1 className="text-2xl md:text-4xl xl:text-3xl font-semibold font-Cinzel">Online Exhibit</h1>
                        </div>
                        <div>
                            <p className="pt-2 text-xs sm:text-sm text-gray-500 font-Raleway">
                                    Pioneering the new normal in the art scene at Asia Pacific College, 
                                    Gualberstan Production delivers an online exhibit that brings together 6 artists from the School of Multimedia Arts. 
                                    This online exhibit—which will unprecedentedly set a brand new standard of showcasing art pieces virtually—will bring forth new ideas 
                                    and innovations in progressing the art scene despite the global situation we’re facing.
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