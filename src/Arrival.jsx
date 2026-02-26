import React from "react";
import { Link } from "react-router-dom";


const Arrival = ()=>{
    return(
        <>
        <div className="arrival-main">
            <div className="arrival-image">
            <img src="assets/image/arrival-bg.jpg" alt="" />
            </div>
            <div className="container">
                <div className="arrival-inner">
                    <h3>#New Arrivals</h3>
                    <p>
                        Vitae fugiat laboriosam officia perferendis provident aliquid voluptatibus dolorem, fugit ullam sit earum id eaque nisi hic? Tenetur commodi, nisi rem vel, ea eaque ab ipsa, autem similique ex unde!
                     </p>
                 <Link to="">Shop Now</Link>
                </div>
            </div>
        </div>

        </>
    )
}
export default Arrival