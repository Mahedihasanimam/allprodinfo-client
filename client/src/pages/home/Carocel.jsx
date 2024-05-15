import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/Chemical-cleaning_1.jpg"
import img2 from "../../assets/360_F_512313150_SXjoxQrERJnZZeMzLQPjEYCQS67qdJFs.jpg"
import img3 from "../../assets/greentea.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slider from './Slider';

export default function Carocel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
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
        <SwiperSlide>
            <Slider text={'we provide you to get alternative product and you also can recomend other to use any product '} image={img1} title={" Welcome to ALTPRODINFO.COM Unlocking Infinite Possibilities "  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Discover diverse options to suit your needs with our wide selection of alternative products available for you to explore'} image={img2} title={"Find your alternative product here"  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Discover a myriad of alternative products tailored to your preferences and needs on our platform. Explore your options today!'}  image={"https://img.pikbest.com/backgrounds/20200414/2d-mobile-technology-banner-background-poster_1909850.jpg!bw700"} title={"Explore Your Options Find Alternative Products Here!"} />
        </SwiperSlide>
        
     
      </Swiper>
    </>
  );
}
