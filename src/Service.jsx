import React from "react";
import { FaAward } from "react-icons/fa";
import { FaTruckArrowRight } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

const Service = () => {
    return (
        <>
            <div className="service-main">
                <div className="container">
                    <div className="service-inner">
                        <div className="service-title">
                            <h2>Why Shop With Us</h2>
                        </div>
                        <div className="service-contain">
                        <div className="service-item">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                <FaTruckArrowRight />
                                </div>
                                <div className="service-text">
                                    <h5> Fast Delivery </h5>
                                    <p>variations of passages of Lorem Ipsum available </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-item-inner">
                                <div className="service-icon">
                                <FaShippingFast />
                                </div>
                                <div className="service-text">
                                    <h5> Free Shiping </h5>
                                    <p>variations of passages of Lorem Ipsum available </p>
                                </div>
                            </div>
                        </div>
                        <div className="service-item">
                            <div className="service-item-inner">
                                <div className="service-icon">
                               <FaAward />
                                </div>
                                <div className="service-text">
                                    <h5> Best Quality  </h5>
                                    <p>variations of passages of Lorem Ipsum available </p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service

                        