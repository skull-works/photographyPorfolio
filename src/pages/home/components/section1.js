import React from 'react';
import './styles.css';

const Section1 = () => {
    return(
        <section>
                <div className="square-container sm:w-11/12 mx-auto">
                        <div className="flex flex-row justify-evenly pb-12">
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require("../../../images/BNWEloiIgni.jpg")} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require("../../../images/BNWJayLacdao.jpg")} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require("../../../images/BNWMiguelMonasterial.jpg")} alt="sample"/>
                                </div>
                        </div>
                        <div className="flex flex-row justify-evenly">
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require("../../../images/BNWPatPangilinan.jpg")} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require("../../../images/BNWGualbertsanSual.jpg")} alt="sample"/>
                                </div>
                                <div className="square">
                                        <img className=" absolute top-0 left-0 object-cover w-full h-full" src={require("../../../images/BNWClarissaLorenzo.jpg")} alt="sample"/>
                                </div>
                        </div>
                        
                </div>
        </section>
    )
}

export default Section1;