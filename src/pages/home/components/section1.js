import React, { useState, useEffect} from 'react';
import getImages from '../../../firebase/GetImages';
import './styles.css';

const Section1 = () => {
        const [comingSoon, setComingSoon] = useState(null);
        const [img1 ,setImg1] = useState(null);
        useEffect(() => {
                getImages('Soon.png', setComingSoon, '6 Photos in Main page');
                getImages('1Artist.jpg', setImg1, 'Artist Page');
        },[]);
    return(
        <section>
                <div className="square-container sm:w-11/12 mx-auto">
                        <div className="flex flex-row justify-evenly pb-12">
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={img1} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={comingSoon} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={comingSoon} alt="sample"/>
                                </div>
                        </div>
                        <div className="flex flex-row justify-evenly">
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={comingSoon} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={comingSoon} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={comingSoon} alt="sample"/>
                                </div>
                        </div>
                </div>
        </section>
    )
}

export default Section1;