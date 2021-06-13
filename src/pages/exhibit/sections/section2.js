import React from 'react';

import './styles.css';

// Images
import Small1 from '../../../images/MainPage/behindScenes/1 small.jpg'
import Small2 from '../../../images/MainPage/behindScenes/2 small.jpg'
import Small3 from '../../../images/MainPage/behindScenes/3 small.jpg'
import Big5 from '../../../images/MainPage/bigPics/5 big.jpg'
import SlideC from '../../../images/MainPage/slideShow/C.jpg'
import SlideD from '../../../images/MainPage/slideShow/D.jpg'

const Section2 = () => {
    return ( 
        <div className="sm:w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12 sm:mx-auto">
            <div className="square-container md:pt-24 lg:pt-24">
                <div className="flex flex-row justify-evenly pb-12">
                    <div className="customSquareContainerSection2">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Small1} alt="sample"/>
                    </div>
                    <div className="customSquareContainerSection2">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Small2} alt="sample"/>
                    </div>
                    <div className="customSquareContainerSection2">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Small3} alt="sample"/>
                    </div>
                </div>
                <div className="flex flex-row justify-evenly">
                    <div className="customSquareContainerSection2">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={Big5} alt="sample"/>
                    </div>
                    <div className="customSquareContainerSection2">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={SlideC} alt="sample"/>
                    </div>
                    <div className="customSquareContainerSection2">
                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={SlideD} alt="sample"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Section2;