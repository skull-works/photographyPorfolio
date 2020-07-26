import React from 'react';


const Section4 = () => {
    return(
        <section >
            <div className="w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 mx-auto py-16 lg:pb-24 text-center">
                <p className="font-Raleway text-sm lg:text-lg text-center text-gray-500 ">
                    You have to love dancing to stick to it.
                    It gives you nothing back, no manuscripts to store away, no paintings to show on walls
                    and maybe hang in museums, no poems to be printed and sold,
                    nothing but that single fleeting moment when you feel alive.
                </p>
            </div>
            <div className="relative pt-40vh sm:py-60vh md:pt-70vh lg:w-11/12 lg:mx-auto">
                <img className="absolute top-0 object-cover w-full h-full" 
                     src="https://i.pinimg.com/originals/72/83/4b/72834b025511a0b6d39e0a5f5fa467a1.jpg"
                     alt="sample" />
            </div>
            {/* part 2 */}
            <div className="w-10/12 md:w-8/12 lg:w-5/12 xl:w-4/12 mx-auto py-16 lg:pb-24 text-center">
                <p className="font-Raleway text-sm lg:text-lg text-center text-gray-500 ">
                Audience of angels descend in the ambiance reciting praises in your glory,
                when you wear your dance shoes,
                when you arrive at the stage and with every step you take beneath your feet heaven moves.
                That is the power of dance
                </p>
            </div>
            {/* pt-30vh xs:py-40vh sm:py-60vh md:pt-80vh lg:py-10vh */}
            <div className="relative pt-40vh sm:py-60vh md:pt-70vh lg:w-11/12 lg:mx-auto bg-red-400">
                 <img className="absolute top-0 object-cover w-full h-full" 
                     src="https://images.unsplash.com/photo-1519925610903-381054cc2a1c?ixlib=rb-1.2.1&w=1000&q=80"
                     alt="sample" />
            </div>
        
        </section>
    )   
}

export default Section4;