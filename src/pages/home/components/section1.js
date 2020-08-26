import React from 'react';
import './styles.css';

const Section1 = () => {
    return(
        <section>
                <div className="square-container sm:w-11/12 mx-auto">
                        <div className="flex flex-row justify-evenly pb-12">
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1miguel.jpg')} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1pat.jpg')} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Eloi.jpg')} alt="sample"/>
                                </div>
                        </div>
                        <div className="flex flex-row justify-evenly">
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Jay.jpg')} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/ArtistPhotos/1Clars.jpg')} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require('../../../images/Soon.png')} alt="sample"/>
                                </div>
                        </div>
                </div>
        </section>
    )
}

export default Section1;