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
            <Slider text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quisquam sed totam saepe tenetur '} image={"https://evapo.co.uk/wp/wp-content/uploads/2023/01/Alternatives-to-disposable-vapes-2.jpg"} title={"Unlocking Infinite Possibilities: Welcome to ALTPRODINFO.COM"  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quisquam sed totam saepe tenetur '} image={"https://nestia-food.obs.ap-southeast-3.myhuaweicloud.com/201904/25/d0a22aa14a49bd0e95fc8d735ff30895.jpg"} title={"Unlocking Infinite Possibilities: Welcome to ALTPRODINFO.COM"  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, quisquam sed totam saepe tenetur '}  image={"https://media.licdn.com/dms/image/D4D12AQE1-tFv3t9S5w/article-cover_image-shrink_720_1280/0/1696582528428?e=2147483647&v=beta&t=u_milXxCzIY-xuthe4cP7t4urp2DXUyRI70t2QbD_vg" } title={"Unlocking Infinite Possibilities: Welcome to ALTPRODINFO.COM"} />
        </SwiperSlide>
        
     
      </Swiper>
    </>
  );
}
