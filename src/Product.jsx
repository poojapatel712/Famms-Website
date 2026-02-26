import React from "react";
import { Link } from "react-router-dom";
import Productprops from "./Productprops";


const Product = () => {
 return(
  <>
  <div className="product-main">
    <div className="container">
      <div className="product-inner">
        <div className="product-title">
          <h2>Our <span>Product</span></h2>
        </div>
        <div className="product-images">
          <Productprops img={"assets/image/p1.jpg"} name={'Men Shirt'} price={'$75'}/>
          <Productprops img={"assets/image/p2.jpg"} name={'Men Shirt'} price={'$75'}/>
          <Productprops img={"assets/image/p3.jpg"} name={'Women Dress'} price={'$75'}/>
          <Productprops img={"assets/image/p4.jpg"} name={'Women Dress'} price={'$75'}/>
          <Productprops img={"assets/image/p5.jpg"} name={'Women Dress'} price={'$75'}/>
          <Productprops img={"assets/image/p6.jpg"} name={'Women Dress'} price={'$75'}/>
          <Productprops img={"assets/image/p7.jpg"} name={'Women Dress'} price={'$75'}/>
          <Productprops img={"assets/image/p8.jpg"} name={'Men Shirt'} price={'$75'}/>
          <Productprops img={"assets/image/p9.jpg"} name={'Men Shirt'} price={'$75'}/>
          <Productprops img={"assets/image/p10.jpg"} name={'Men Shirt'} price={'$75'}/>
          <Productprops img={"assets/image/p11.jpg"} name={'Men Shirt'} price={'$75'}/>
          <Productprops img={"assets/image/p12.jpg"} name={'Women Dress'} price={'$75'}/>

          <div className="btn">
             <Link to="">View All Product</Link>
            
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
  </>
 )
};

export default Product;
