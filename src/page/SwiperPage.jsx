import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function SwiperPage() {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="image1.jpeg"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperPage;
