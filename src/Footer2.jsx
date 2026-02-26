import React from "react";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaPinterestP,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer2 = () => {
    return (
        <footer className="footermain">
            <div className="container">
                <div className="footerinner">

                    {/* Left Section */}
                    <div className="footer2-box">
                        <h2>Reach at..</h2>

                        <p>
                            <FaMapMarkerAlt /> Location
                        </p>

                        <p>
                            <FaPhoneAlt /> Call +01 1234567890
                        </p>

                        <p>
                            <FaEnvelope /> demo@gmail.com
                        </p>
                    </div>

                    {/* Right Section */}
                    <div className="footer2-box">
                        <h2 className="brand-title">Famms</h2>

                        <p>
                            Necessary, making this the first true generator on the Internet.
                            It uses a dictionary of over 200 Latin words, combined with
                        </p>

                        {/* Social Icons */}
                        <div className="social-icons">
                            <Link to=""><FaFacebookF /></Link>
                            <Link to=""><FaTwitter /></Link>
                            <Link to=""><FaLinkedinIn /></Link>
                            <Link to=""><FaInstagram /></Link>
                            <Link to=""><FaPinterestP /></Link>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="footerbottom">
                    <hr />
                    <p>
                        © 2026 All Rights Reserved By Free Html Templates <br />
                        Distributed By ThemeWagon
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;
