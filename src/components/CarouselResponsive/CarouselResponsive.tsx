import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CarouselResponsive.scss';

const dataImgPreset = [
  { id: 1, src: require('../../assets/img/page-room-img-0.jpg'), alt: 'room1' },
  { id: 2, src: require('../../assets/img/page-room-img-1.jpg'), alt: 'room2' },
  { id: 3, src: require('../../assets/img/page-room-img-2.jpg'), alt: 'room3' },
  { id: 4, src: require('../../assets/img/page-room-img-3.jpg'), alt: 'room4' },
];
const dataImgPreset2 = [
  { id: 5, src: require('../../assets/img/page-room-img-4.jpg'), alt: 'room5' },
  { id: 6, src: require('../../assets/img/page-room-img-5.jpg'), alt: 'room6' },
  { id: 7, src: require('../../assets/img/page-room-img-6.jpg'), alt: 'room7' },
  { id: 8, src: require('../../assets/img/page-room-img-7.jpg'), alt: 'room8' },
];

type IImgPreset = {
  id: number;
  src: string;
  alt: string;
};

interface ICarouselResponsive {
  preset: string;
  onChange?: () => void;
  onClickItem?: () => void;
  onClickThumb?: () => void;
}

function CarouselResponsive({
  preset, onChange, onClickItem, onClickThumb,
}: ICarouselResponsive) {
  const dataPreset: IImgPreset[] = preset === 'rooms1' ? dataImgPreset : dataImgPreset2;
  return (
    <Carousel
      showArrows
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
      showThumbs={false}
    >
      {dataPreset.map((item) => (
        <div key={item.id}><img alt={item.alt} src={item.src} /></div>
      ))}
    </Carousel>
  );
}

export default CarouselResponsive;

CarouselResponsive.defaultProps = {
  onChange: null,
  onClickItem: null,
  onClickThumb: null,
};
