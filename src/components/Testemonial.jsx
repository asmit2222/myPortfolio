import React from "react";
import data from "/assets/data/TestemonialData";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

function Testemonial() {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="testimonials-cont">
        <h2 className="testimonials-head">Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>
      <div className="container">
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 6000 }}
            // slidesPerView={1}
            pagination={{
              el: ".swiper-pagination",
              type: "bullets",
              clickable: true,
            }}
            breakpoints={{
              760: {
                slidesPerView: 2, // Show 2 slides
              },

              992: {
                slidesPerView: 3, // Show 3 slides
              },
            }}
          >
            <div className="swiper-wrapper">
              {data.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className="swiper-slide">
                  <div className="testimonial-item">
                    <div className="d-flex">
                      <div className="testimonial-text">
                        <p>{testimonial.text}</p>
                      </div>
                      <div className="details">
                        <img src={testimonial.img} alt="" />
                        <h4>{testimonial.name}</h4>
                        <p>{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-pagination">
              <span className="swiper-pagination-bullets"></span>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testemonial;
