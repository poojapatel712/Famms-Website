import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="container">
                    <div className="footer-inner">
                        <div className="footer-contain">
                            <div className="footer-item">
                                <div className="footer-iteminner">
                                    <div className="footerlogoimage">
                                        <img src="assets/image/logo.jpg" alt="" />
                                    </div>
                                    <div className="footer-text">
                                        <span>ADDRESS: <p>28 White tower, Street Name New York City, USA</p></span>
                                        <span>TELEPHONE: <p>+91 987 654 3210</p></span>
                                        <span>EMAIL: <p>yourmain@gmail.com</p></span>
                                    </div>
                                </div>
                             </div>
                              <div className="footer-item">
                                <div className="footer-iteminner">
                                    <div className="footer-header">
                                        <h3>Menu</h3>
                                    </div>
                                    <div className="footer-subtext">
                                        <ul>
                                            <li>
                                                <Link to="">Home</Link>
                                            </li>
                                             <li>
                                                <Link to="">About Us</Link>
                                            </li>
                                             <li>
                                                <Link to="">Services</Link>
                                            </li>
                                             <li>
                                                <Link to="">Testimonial</Link>
                                            </li>
                                             <li>
                                                <Link to="">Blog</Link>
                                            </li>
                                             <li>
                                                <Link to="">Contact</Link>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    
                                </div>
                             </div>
                             <div className="footer-item">
                                <div className="footer-iteminner">
                                    <div className="footer-header">
                                        <h3>Account</h3>
                                    </div>
                                    <div className="footer-subtext">
                                        <ul>
                                            <li>
                                                <Link to="">Account</Link>
                                            </li>
                                             <li>
                                                <Link to="">Checkout</Link>
                                            </li>
                                             <li>
                                                <Link to="">Login</Link>
                                            </li>
                                             <li>
                                                <Link to="">Register</Link>
                                            </li>
                                             <li>
                                                <Link to="">Shooping</Link>
                                            </li>
                                             <li>
                                                <Link to="">Widget</Link>
                                            </li>
                                        </ul>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="footer-item">
                                <div className="footer-iteminner">
                                    <div className="footer-header">
                                        <h3>Newsletter</h3>
                                    </div>
                                    <div className="footer-subtext">
                                        <p>Subscribe by our newsletter and get update protidin.</p>
                                    </div>
                                    <div className="footer-box">
                                        <input type="email" name="" id="" placeholder="Enter your Mail" />
                                        <button>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                 <div className="footerbox">
                            <p>
                                © 2021 All Rights Reserved By Free Html Templates
                            </p>
                            <span>Distributed By ThemeWagon</span>
                        </div>
            </div>
        </>
    )
}
export default Footer
