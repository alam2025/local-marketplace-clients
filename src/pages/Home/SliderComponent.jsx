

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper';

const sliders = [
    "https://assets-global.website-files.com/5ff1b99d0642837fd77d935d/61a5e5e3d2451b69a4d6f9c1_India%20vegetables.jpg",
    "https://ausveg.com.au/app/uploads/2020/09/iStock_000010669704Large-scaled.jpg",
    "https://cookieandkate.com/images/2015/02/tel-aviv-8.jpg",
    "https://i.ytimg.com/vi/cfEPzU2A2n0/maxresdefault.jpg",
]
export const SliderComponent = () => (
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
        {
            sliders.map((slider, index) =>

            <SwiperSlide key={index} className="relative flex items-center justify-center  ">
            <img className="w-full h-[600px] rounded-md" src={slider} alt="Online Real-Time Village Local Market" />
            <div className="absolute bottom-0 left-0 w-full p-4 font-bold bg-slate-400 bg-opacity-50 text-white text-center">
              <p className="text-2xl font-bold">Online Real-Time Village Local Market</p>
              <p className="text-lg">Discover fresh produce, handmade crafts, and more in our vibrant village market.</p>
            </div>
          </SwiperSlide>
          
            )
        }

    </Swiper>
)

// ReactDOM.render(<SliderComponent/>, document.getElementById('root'))

