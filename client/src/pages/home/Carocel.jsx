import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
            <Slider text={'we provide you to get alternative product and you also can recomend other to use any product '} image={"https://evapo.co.uk/wp/wp-content/uploads/2023/01/Alternatives-to-disposable-vapes-2.jpg"} title={" Welcome to ALTPRODINFO.COM Unlocking Infinite Possibilities "  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Discover diverse options to suit your needs with our wide selection of alternative products available for you to explore'} image={"https://nestia-food.obs.ap-southeast-3.myhuaweicloud.com/201904/25/d0a22aa14a49bd0e95fc8d735ff30895.jpg"} title={"Find your alternative product here"  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Discover a myriad of alternative products tailored to your preferences and needs on our platform. Explore your options today!'}  image={"https://media.licdn.com/dms/image/D4D12AQE1-tFv3t9S5w/article-cover_image-shrink_720_1280/0/1696582528428?e=2147483647&v=beta&t=u_milXxCzIY-xuthe4cP7t4urp2DXUyRI70t2QbD_vg" } title={"Explore Your Options Find Alternative Products Here!"} />
        </SwiperSlide>
        
     
      </Swiper>
    </>
  );
}
