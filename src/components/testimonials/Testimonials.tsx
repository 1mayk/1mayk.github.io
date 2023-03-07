import React from "react";
import "./Testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required components
import { Pagination } from "swiper";

export default function Testimonials() {
  return (
    <section className="testimonial container section">
      <h2 className="section__ti tle">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <div className="testimonials__container">
        {Data.map(({ id, image, description, title }) => {
          return (
            <div className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
