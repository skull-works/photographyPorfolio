import React from 'react';
import Footer from '../../layout/footer/footer';



const Contact = () => {
    return(
        <div>
            <title>Contact</title>
            <div className="w-8/12 sm:w-64 xl:w-56 pt-16 sm:pt-0 lg:pt-20 mx-auto">
                            <img className="object-contain" src={require("../../images/LOGO2.png")} alt="logo" />
            </div>
            <form name="contact" method="POST" className="mt-10">
                <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <input type="hidden" name="form-name" value="contact" />
                <div className="h-100">
                    <div className="flex flex-col w-10/12 md:w-3/12 h-full mx-auto">
                        <h1 className="font-Cinzel text-lg md:text-2xl">Contact form</h1>
                        <label className="mt-4 font-Raleway">Your Name: <br /> 
                            <input className="w-full rounded-sm border border-blue-500 focus:outline-none" type="text" name="name" />
                        </label>   
                        <label className="mt-4 font-Raleway">Your Email: <br /> 
                            <input className="w-full rounded-sm border border-blue-500 focus:outline-none" type="text" name="email" />
                        </label>   
                        <label className="mt-4 font-Raleway">Message: <br /> 
                            <textarea className="w-full h-20 rounded-sm border border-blue-500 focus:outline-none" type="text" name="message" />
                        </label>   
                        <button type="submit" className="mt-6 md:mt-10 w-full text-white rounded-sm hover:bg-blue-400 bg-blue-500">Send</button>
                    </div>
                </div>
            </form>
            <div className="mt-8">
                    <div className="flex flex-col w-10/12 md:w-5/12 lg:w-3/12 h-full mx-auto">
                        <h1 className="font-Cinzel text-lg md:text-2xl">Contact Information</h1>
                        <div className="text-md md:text-lg font-Raleway mt-2"><i className="fa fa fa-compass   pr-2" aria-hidden="true"></i> Makati Philippines</div>
                        <div className="text-md md:text-lg font-Raleway mt-4"><i className="fa fa fa-envelope  pr-1" aria-hidden="true"></i> email@gualbertsansual.com</div>
                        <div className="text-md md:text-lg font-Raleway mt-4"><i className="fa fa-phone-square pr-1" aria-hidden="true"></i> +63(927)075-2827</div>
                    </div>
                </div>
            <Footer marginTop='mt-20' />
        </div>
    )
}

export default Contact;