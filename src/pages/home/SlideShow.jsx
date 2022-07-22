import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../../assets/style/swiper.css"
import { EffectFade, Autoplay, Navigation } from 'swiper';
import SlideContent from './SlideContent';
import slide1 from "../../assets/image/home-banner-2.jpg"
import slide2 from "../../assets/image/home-banner-1.jpg"
import slide3 from "../../assets/image/home-banner-2.jpg"
export default function SlideShow() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[EffectFade, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='' style={{backgroundImage:"url("+slide1+")", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <SlideContent info="Very eatable foods" name="VEGETABLES"/>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:"url("+slide2+")", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <SlideContent info="Regular foods" name="FRUITS"/>
        </SwiperSlide>
        <SwiperSlide style={{backgroundImage:"url("+slide3+")", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
          <SlideContent info="Seasional foods" name="NEW FOODS"  />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
