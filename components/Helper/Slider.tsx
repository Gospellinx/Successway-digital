'use client';

import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderCard from './SliderCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slider = () => {
  return (
    <Carousel additionalTransfrom={0} arrows={true} autoPlaySpeed={5000} centerMode={false} containerClass="container-with-dots" dotListClass="" draggable={true} focusOnSelect={false} infinite={true} itemClass="item" keyBoardControl={true} minimumTouchDrag={80} renderButtonGroupOutside={false} renderDotsOutside={false} responsive={responsive} showDots={false} sliderClass="" slidesToSlide={1} swipeable={true}>
      {/* Slider Card */}
      <SliderCard image="/images/r1.jpg" name="Jessica John" role="Ex-Student"/>
      <SliderCard image="/images/r2.jpg" name="Ibrahim Kau" role="Ex-Student"/>
      <SliderCard image="/images/r3.jpg" name="Jerome Ali" role="Ex-Student"/>
    </Carousel>
  );

}

export default Slider
