import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";


const Banner = () => {
  return (
    <div className="banner-main">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="banner-swiper"
      >
        <SwiperSlide>
          <img
            src="assets/image/slider-bg.jpg"
            alt="slide"
            className="banner-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="assets/image/slider-bg.jpg"
            alt="slide"
            className="banner-img"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="assets/image/slider-bg.jpg"
            alt="slide"
            className="banner-img"
          />
        </SwiperSlide>
      </Swiper>

      {/* TEXT OVER IMAGE */}
      <div className="container">
        <div className="banner-inner">
          <div className="banner-text">
            <span>Sale 20% Off</span>
            <h2>On Everything</h2>
            <p>
              Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi. 
            </p>
                 <Link to="">Shop Now</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;


