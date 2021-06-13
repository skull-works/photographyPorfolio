import React, { useState, useEffect } from 'react';

// Layouts
import Navbar from '../../layout/navbar/navbar';
// import Footer from '../../layout/footer/footer';

// Images or Logo
import Logo from '../../images/LOGO2.png';


const ContactInputFormDesktop = () => {
    return (
        <div className="w-10/12 md:w-6/12 lg:w-8/12 h-full mx-auto lg:mt-24 lg:flex flex-col customAlbertColor200 customFont-codec-light">
            <h1 className="text-lg md:text-2xl ">Contact form</h1>
            <div className="flex flex-row mt-4 ">
                <div className='w-6/12'>
                    <div>
                        <label>Your Name: <br /> 
                            <input className="w-full lg:w-10/12 rounded-sm border border-blue-500 focus:outline-none customFont-dubai" type="text" name="name" />
                        </label>
                    </div>
                    <div className="mt-4">
                        <label>Your Email: <br /> 
                            <input className="w-full lg:w-10/12 rounded-sm border border-blue-500 focus:outline-none customFont-dubai" type="text" name="email" />
                        </label>  
                    </div> 
                </div>
                <div className='w-6/12'>
                    <label>Message: <br /> 
                        <textarea className="w-full h-24 rounded-sm border border-blue-500 focus:outline-none customFont-dubai" type="text" name="message" />
                    </label> 
                </div>
            </div>
            <button type="submit" className="mt-6 w-full text-white rounded-sm hover:bg-blue-400 bg-blue-500">submit</button>
        </div>
    )
}

const ContactInputFormBelowDesktop = () => {
    return (
        <div className="flex flex-col w-10/12 md:w-6/12 lg:w-8/12 h-full mx-auto customAlbertColor200 customFont-codec-light">
            <h1 className="text-lg md:text-2xl">Contact form</h1>
            <label className="mt-4">Your Name: <br /> 
                <input className="w-full rounded-sm border border-blue-500 focus:outline-none customFont-dubai" type="text" name="name" />
            </label>   
            <label className="mt-4">Your Email: <br /> 
                <input className="w-full rounded-sm border border-blue-500 focus:outline-none customFont-dubai" type="text" name="email" />
            </label>   
            <label className="mt-4">Message: <br /> 
                <textarea className="w-full lg:w-8/12 h-20 rounded-sm border border-blue-500 focus:outline-none customFont-dubai" type="text" name="message" />
            </label>   
            <button type="submit" className="mt-6 md:mt-10 w-full text-white rounded-sm hover:bg-blue-400 bg-blue-500">Send</button>
        </div>
    )
}



const Contact = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const links = "px-2 flex flex-row justify-center text-sm lg:text-md";

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
       window.addEventListener('resize', handleResize)
       return () => {
           window.removeEventListener('resize', handleResize)
       }
    }, [])

    return(
        <div className='customAlbertColor100 fadeIn'>
            <title>Contact</title>
            <header className='h-12vh'>
                <Navbar showGual={true} isRegNav={true} />
            </header>
            
            <main className='content lg:w-10/12 lg:mx-auto lg:h-50vh mt-2 lg:mt-0 lg:flex lg:flex-row'>
                <div className="w-32 pt-10 sm:pt-0 mx-auto lg:hidden">
                    <img className="object-contain" src={Logo} alt="logo" />
                </div>
                <form name="contact" method="POST" className="mt-2 lg:mt-0 lg:w-8/12">
                    <p className="hidden">
                        <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                    </p>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="h-100 lg:h-full">
                        { windowWidth >= 1024 
                          ? <ContactInputFormDesktop />
                          : <ContactInputFormBelowDesktop />
                        }
                    </div>
                </form>
                <div className="mt-8 lg:mt-24 lg:w-4/12 customAlbertColor200 customFont-codec-light">
                    <div className="flex flex-col w-10/12 md:w-5/12 lg:w-10/12 h-full mx-auto lg:m-0">
                        <h1 className="text-lg md:text-xl lg:text-2xl">Contact Information</h1>
                        <div className="text-md md:text-lg lg:text-base mt-2 lg:mt-6 xl:mt-10"><i className="fa fa fa-compass pr-2" aria-hidden="true"></i> Makati Philippines</div>
                        <div className="text-md md:text-lg lg:text-base mt-4"><i className="fa fa fa-envelope  pr-1" aria-hidden="true"></i> mail<span className="customFont-dubai">@</span>gualbertsansual.com</div>
                        <div className="text-md md:text-lg lg:text-base customFont-dubai mt-4"><i className="fa fa-phone-square pr-1" aria-hidden="true"></i> +63(927)075-2827</div>
                    </div>
                </div>
            </main>
            <footer className="lg:h-38vh">
                <div className="w-32 lg:w-18vh pt-10 sm:pt-20 lg:pt-0 mx-auto">
                        <img className="object-contain" src={Logo} alt="logo2" />
                </div>
                <div className="pt-10 pb-10 lg:pt-4 lg:pb-0 flex flex-col">
                    <div className="flex flex-row justify-center font-Raleway">
                        <a href="https://www.facebook.com/gualbertsan/" className={`${links}`}>
                                <svg className="pr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/gualbertsan/?fbclid=IwAR0t5_Z8Y1-sRTicoNYyjvCV4E6OzJ9LMNcx9h3eT9KU0aHVhgGHnUTSwj0" className={`${links}`}>
                            <svg className="pr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>  
                        </a>
                        <a href="https://twitter.com/gualbertsansual?fbclid=IwAR1FPCraWLO00i_mbeZVbvwEpC-6JRZdAZcJSV547ixAfRGkVjNw31IvIks" className={`${links}`}>
                            <svg className="pr-1" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"/></svg>
                        </a>
                    </div>
                    <div className="text-center lg:w-4/12  pt-8 text-xs customAlbertColor200 mx-auto">
                        <span className="customFont-dubai pr-2">2020 - 2021</span> 
                        <span className="text-xs pr-2">©</span> 
                        <span className="customFont-codec-light">Gualbertsan Sual. All rights reserved</span>
                        <p className="customFont-codec-light">
                            Site by Marco Butalid
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Contact;