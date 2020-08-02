import React from 'react';



const Contact = () => {
    return(
        <div>
            <h1>Contact form</h1>
            <form name="contact" method="POST">
                <p class="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                </p>
                <input type="hidden" name="form-name" value="contact" />
                <label>Your Name: <input className="border border-blue-500" type="text" name="name" /></label>   
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;