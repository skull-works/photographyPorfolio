import React from 'react';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Footer from '../../layout/footer/footer';


const Home = () => {
    return(
        <>  
        <title>Gualbertsan Sual</title>
        <header>
                <div className="w-hull flex flex-wrap justify-center content-center">
                    <div className="w-8/12 sm:w-64 xl:w-56 h-full flex flex-col justify-center">
                        <div className="pt-16 sm:pt-0 lg:pt-20 mx-auto">
                            <img className="object-contain" src={require("../../images/LOGO2.png")} alt="logo" />
                        </div>
                        <div className="mt-5 mx-auto">
                            <div>
                                <h1 className="font-Cinzel font-bold text-2xl sm:text-lg lg:text-3xl xl:text-4xl ">HINGA :</h1> 
                            </div>
                            <div className="pt-5">
                                <h2 className="font-Cinzel font-semibold text-xs sm:text-sm">A Virtual Multimedia Exhibit</h2>
                            </div>
                            <div className="pt-2 pb-16 lg:pb-64 font-Raleway font-normal text-xs">
                                <p className="text-justify">Gualbertsan Productions is a multimedia production team of six (6) art students from Asia Pacific College with various skills in art and design, 
                                   collaborating to create a unique visual space that will offer a glimpse of coping mechanism pieces through art. 
                                   Everything that surrounds us is comprised of things that are beyond our first glance, our initial understandings, and our generalizations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </main>
            <Footer marginTop='mt-20 sm:mt-56' />
        </>
    )
}

export default Home;