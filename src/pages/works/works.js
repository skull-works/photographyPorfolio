import React from 'react';
import Cookies from 'universal-cookie';
import Footer from '../../layout/footer/footer';
import './works.css'

const Works = () => {
    // https://momento360.com/e/u/8ff1d9bc3c0042eb812b2fa212c36b64?utm_campaign=embed&utm_source=other&heading=238.8192224438199&pitch=-6.098248215908773&field-of-view=85
    // https://momento360.com/e/u/ee71980e64bd4c9ca6b31d44f9ad6c53?utm_campaign=embed&utm_source=other&heading=-169.40308060252997&pitch=5.746782519409478&field-of-view=25.000000000000004&fbclid=IwAR22wXJchwCk-LrVNM-yT2MDOMLQRSjZwzErAut6RZdryfcq7KaVshkN9us
    const cookies = new Cookies();
    cookies.set('SameSite', 'Lax', {path: '/'});
    return (
        <>
        <title>Virtual Exhibit</title>
        <div className="flex flex-wrap justify-center">
            <div className="w-full flex flex-col justify-center">
                
                <div className="w-15vh md:w-20vh mx-auto pt-16">
                    <img className="" src={require('../../images/LOGO.png')} alt="sample" />
                </div>

                <div className="w-11/12 mx-auto pt-16 text-center">
                    <h1 className="font-Cinzel italic text-sm sm:text-xl lg:text-2xl">WELCOME TO HINGA: AN ONLINE MULTIMEDIA ART EXHIBIT</h1>
                    <p className="font-Cinzel font-semibold text-xs sm:text-sm text-gray-400">To see the artworks in better quality, we recommend that you use a laptop or computer</p>
                </div>

                <div id='wrapper' className="wrapper2">
                    <div className="spacewrapper">
                        <iframe className="w-11/12 mx-auto h-100vh pb-10" title="sample" width='100%' height='100%' 
                        src='https://roundme.com/embed/BTpRQnAIr8U4EPqA2Gi5'>
                        </iframe>
                    </div>
                </div>
                

                <div id='wrapper' className="wrapper">
                    <div className="videowrapper">
                        {/* "https://www.youtube.com/embed/NHP5ZUZkPU4?" */}
                        <video controls muted autoPlay>
                            <source src={require('../../videos/kevinVid.mp4')} type="video/mp4" />
                        </video>
                    </div>
                </div>
                
                
            </div>
        </div>
        <Footer marginTop='mt-10vh sm:mt-20vh' />
        </>
    )
}

export default Works;