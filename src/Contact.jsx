import React from "react";

const Contact = ()=>{
    return(
        <>
         <div className="contact-main">
            <div className="container">
                <h2>Contact Us</h2>
                
            </div>
        </div>
        <form action="" className="contact-form">
                    <input type="text"  placeholder="Enter Your Full Name"/>
                    <input type="email" placeholder="Enter Your Email Address" />
                    <input type="text" placeholder="Enter Your Subject" />
                    <textarea name="" id="" placeholder="Enter your Message"></textarea>
                    <button>Submit</button>

                </form>
        </>
    )
}
export default Contact