import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-main">
        <div className="container">
          <div className="testimonial-inner">
            <div className="testimonial-title">
              <h1>Customer's Testimonial</h1>
            </div>
            
            <div className="testimonial-contain">
              {/* CSS Slider Logic Inputs */}
              <input type="radio" name="slider" id="s1" defaultChecked />
              <input type="radio" name="slider" id="s2" />

              <div className="slider-wrapper">
                {/* Slide 1 */}
                <div className="testimonial-card slide-1">
                  <div className="img-box">
                    <img src="assets/image/client.jpg" alt="Anna Trevor" />
                  </div>
                  <div className="detail-box">
                    <h5>Anna Trevor</h5>
                    <h6>Customer</h6>
                    <p>Dignissimos reprehenderit repellendus nobis error quibusdam? Atque animi sint unde quis reprehenderit, et, perspiciatis, debitis totam est deserunt eius officiis ipsum ducimus ad labore modi voluptatibus accusantium sapiente nam! Quaerat.</p>
                  </div>
                </div>

                {/* Slide 2 */}
                <div className="testimonial-card slide-2">
                  <div className="img-box">
                    <img src="assets/image/client2.jpg" alt="John Doe" />
                  </div>
                  <div className="detail-box">
                    <h5>John Doe</h5>
                    <h6>Customer</h6>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto provident, rem quas aut obcaecati vel iusto animi hic. Quisquam, veritatis! Nihil, error quibusdam.</p>
                  </div>
                </div>
                

                {/* Navigation Arrows using Labels */}
                <div className="nav-arrows">
                  <label htmlFor="s1" className="prev-btn"><span>&larr;</span></label>
                  <label htmlFor="s2" className="next-btn"><span>&rarr;</span></label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;