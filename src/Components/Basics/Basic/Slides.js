import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./front.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import SlideImg from './SlideImg';

const Slides = () => {
  const Imgs = [
    {
      id: 0,
      url: "SlidesImg/6169319.jpg",
    },
    {
      id: 1,
      url: "SlidesImg/7066943.jpg",
    },
    { id: 2, url: "SlidesImg/7066884.jpg" },
    {
      id: 3,
      url: "SlidesImg/7066844.jpg",
    },
    {
      id: 4,
      url: "SlidesImg/7066826.jpg",
    },
    {
      id: 5,
      url: "SlidesImg/7066812.jpg",
    },
    {
      id: 6,
      url: "SlidesImg/7066809.jpg",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Imgs.map((currElem) => {
          return (
            <>
              <SwiperSlide className>
                <img className="slid-img" src={currElem.url} alt="" />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      )
    </>
  );
};
export default Slides;
