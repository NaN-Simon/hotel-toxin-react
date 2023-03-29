import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./CarouselResponsive.scss";

const CarouselResponsive = ({onChange, onClickItem, onClickThumb}: any) => {
  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showThumbs={false}
      >
      <div>
          <img src={require("../../assets/img/page-room-img-0.jpg")} />
      </div>
      <div>
          <img src={require("../../assets/img/page-room-img-1.jpg")} />
      </div>
      <div>
          <img src={require("../../assets/img/page-room-img-2.jpg")} />
      </div>
      <div>
          <img src={require("../../assets/img/page-room-img-3.jpg")} />
      </div>
    </Carousel>
  )
}

export default CarouselResponsive