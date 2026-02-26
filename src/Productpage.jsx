import React from "react";
import Footer2 from "./Footer2";
import Product from "./Product";

const Productpage = () =>{
    return(
        <>
         <div className="productmain">
            <div className="container">
                <h2>Product Grid</h2>
            </div>
        </div>
        <Product/>
        <Footer2/>
        </>
    )
}
export default Productpage