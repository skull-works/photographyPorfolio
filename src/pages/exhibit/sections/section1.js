import React, { useState, useEffect } from 'react';
import HingaImage from '../../../images/MainPage/slideShow/B.jpg';
import OnlineExhibitImage from '../../../images/MainPage/slideShow/A.jpg';
import BehindTheSceneImage from '../../../images/MainPage/bigPics/4 big.jpg';

import './styles.css';
import './section1.css';

// ------ Tailwind styles -----
    
const textHeaders_Mobile = "text-center font-Cinzel font-bold";
const textHeaders2nd_Mobile = "text-center font-Cinzel";
const textParagraph_Mobile = "text-justify text-xs customFont-dubai mt-2";
const image_Mobile = "customHingaImage mt-4 mx-auto";

const Part1_Md = "md:w-8/12";
const Part2_Md = "md:w-6/12 mt-2 relative";
const textHeaders_Md = "md:text-left";
const textHeaders2nd_Md = "md:text-left";
const textParagraphContainer_Md = "md:w-10/12";

const Part1_Lg = "lg:w-10/12";
const textHeaders_Lg = "lg:text-2xl xl:text-3xl";
const textHeaders2nd_Lg = "lg:text-2xl xl:text-3xl";
const textParagraph_Lg = "lg:text-sm";
const textParagraphContainer_Lg = "lg:w-11/12";

const Grp3textParagraph_Mobile = "text-justify text-xs customFont-dubai mt-2";
const Grp3textParagraphContainer_Md = "md:w-10/12";

const Section1 = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
       window.addEventListener('resize', handleResize)
       return () => {
           window.removeEventListener('resize', handleResize)
       }
    }, [])

    const ImageBelowDesktop = ({src, alt, css}) => {
        if (windowWidth < 1024) {
            return (
                <div className={`${Part2_Md}`}>
                    <img className={`${image_Mobile} ${css}`} src={src} alt={alt} />
                </div>
            )
        }

        return null;
    }

    const ImageForDesktop = () => {
        if (windowWidth >= 1024) { 
            return (
                <div className="flex flex-col w-6/12 section1__image__container">
                    <div className={`w-11/12 pt-12vh slideFromRight1`}>
                        <img className={`customMaxWidth mx-auto fadeIn`} src={HingaImage} alt="HingaImage" />
                    </div>
                    <div className={`w-11/12 pt-6 slideFromRight2`}>
                        <img className={`customMaxWidth mx-auto fadeIn`} src={OnlineExhibitImage} alt="OnlineExhibitImage" />
                    </div>
                    <div className={`w-11/12 pt-6 slideFromRight3`}>
                        <img className={`customMaxWidth mx-auto fadeIn`} src={BehindTheSceneImage} alt="BehindTheSceneImage" />
                    </div>
                </div>
            )
        }

        return null;
    }

    return (
        <div className="Section1Wrapper lg:w-11/12 xl:w-10/12 flex lg:flex-row mx-auto customAlbertColor200">
            <div className="lg:w-6/12 customAlbertColor200">
                <div className="PartHinga w-10/12 lg:w-full mx-auto pt-10 flex flex-col md:flex-row slideFromLeft1">
                    <div className={`${Part1_Md} ${Part1_Lg}`} >
                        <h3 className={`${textHeaders_Mobile} ${textHeaders_Md} ${textHeaders_Lg}`}>HINGA</h3>
                        <h3 className={`${textHeaders2nd_Mobile} ${textHeaders2nd_Md} ${textHeaders2nd_Lg}`}>A Virtual Multimedia Exhibit</h3>
                        <div className={`${textParagraphContainer_Md} ${textParagraphContainer_Lg}`}>
                            <p className={`${textParagraph_Mobile} ${textParagraph_Lg}`}>
                                Gualbertsan Productions is a multimedia production team of six (6) art students from Asia Pacific College with various skills in art and design, 
                                collaborating to create a unique visual space that will offer a glimpse of coping mechanism pieces through art. 
                                Everything that surrounds us is comprised of things that are beyond our first glance, our initial understandings, and our generalizations.
                            </p>
                        </div>
                    </div>
                    <ImageBelowDesktop src={HingaImage} alt="HingaImage"/>
                </div>
                <div className="PartHinga w-10/12 lg:w-full mx-auto pt-10 lg:pt-16 flex flex-col md:flex-row slideFromLeft2">
                    <div className={`${Part1_Md} ${Part1_Lg}`} >
                        <h3 className={`${textHeaders_Mobile} ${textHeaders_Md} ${textHeaders_Lg}`}>Online Exhibit</h3>
                        <div className={`${textParagraphContainer_Md} ${textParagraphContainer_Lg}`}>
                            <p className={`${textParagraph_Mobile} ${textParagraph_Lg}`}>
                                Pioneering the new normal in the art scene at Asia Pacific College, 
                                Gualberstan Production delivers an online exhibit that brings together 6 artists from the School of Multimedia Arts. 
                                This online exhibit—which will unprecedentedly set a brand new standard of showcasing art pieces virtually—will bring forth new ideas 
                                and innovations in progressing the art scene despite the global situation we’re facing.
                            </p>
                        </div>
                    </div>
                    <ImageBelowDesktop css={'lg:mt-10'} src={OnlineExhibitImage} alt="OnlineExhibitImage"/>
                </div>
                <div className="PartHinga w-10/12 lg:w-full mx-auto pt-10 flex flex-col md:flex-row slideFromLeft3">
                    <div className={`${Part1_Md} ${Part1_Lg}`} >
                        <h3 className={`${textHeaders_Mobile} ${textHeaders_Md} ${textHeaders_Lg}`}>BEHIND THE SCENE</h3>
                        <div className={`${Grp3textParagraphContainer_Md} ${textParagraphContainer_Lg}`}>
                            <p className={`${Grp3textParagraph_Mobile} ${textParagraph_Lg}`}>
                                The artists <span className="italic">behind the scene</span> worked day and night for several weeks to put this exhibit together. 
                                Caught in between the struggles brought by the pandemic, the team had to do every work virtually, 
                                from meetings to other discussions vital to the success of ‘Hinga.’
                            </p>
                            <p className={`${Grp3textParagraph_Mobile} ${textParagraph_Lg}`}>
                                As individual artists, each of them had to work tirelessly to meet strict deadlines. 
                                Their methods differentiated them from one another—which made every artwork unique. 
                                But despite their differences, they ensured that they achieve their one goal: 
                                to inspire and to stimulate the minds of the audience through thematic art pieces.
                            </p>
                        </div>
                    </div>
                    <ImageBelowDesktop src={BehindTheSceneImage} alt="BehindTheSceneImage" />
                </div>
            </div>
            <ImageForDesktop />
        </div>
     );
}
 
export default Section1;