import React from "react";
import Service from "./Service";
import Arrival from "./Arrival";
import Footer2 from "./Footer2";

const Aboutus = ()=>{
    return(
        <>
        <div className="about-main">
            <div className="container">
                <h2>About Us</h2>
            </div>
        </div>
        <Service/>
        <Arrival/>
        <Footer2/>
        </>
    )
}
export default Aboutus