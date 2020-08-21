import React from 'react';
import './section1.css';



//not in use
const Section1 = () => {
    return(
        // <div className="h-100vh flex flex-wrap bg-yellow-400">
        //         <div className="w-20vh h-20vh pt-34vh sm:pt-34vh lg:pt-34vh mx-auto relative bg-yellow-600">
        //             <img className="object-contain" src={require("../../../images/LOGO.png")} alt="logo" />
        //         </div>
        // </div> 
        // w-20vh h-20vh pt-16 sm:pt-0 lg:pt-24 mx-auto relative bg-red-300
        <div className="arist-section1-container">
            <div className="artist-logo">
                <img className="object-contain" src={require("../../../images/LOGO.png")} alt="logo" />
            </div>
        </div>
    )
}

export default Section1;