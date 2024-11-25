import styles from './PicturesSlider.module.scss';
import prevarrow from '../../images/arrows/arrow-left.png';
import nextarrow from '../../images/arrows/arrow-right.svg';

// // import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import slide1 from '../../images/slider/banner-slide1.png';
import slide2 from '../../images/slider/banner-slide2.png';
import slide3 from '../../images/slider/banner-slide3.png';

export const PicturesSlider = () => {
  const images = [slide1, slide2, slide3];

  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        // renderBullet: (_, className) =>
        //   `<span class="${className} custom-bullet"></span>`,
      }}
      navigation={{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            className={styles.slider__img}
            src={src}
            alt={`Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
      <button className={styles['custom-prev']}>
        <img src={prevarrow} alt="prevarrow" />
      </button>
      <button className={styles['custom-next']}>
        <img src={nextarrow} alt="nextarrow" />
      </button>
    </Swiper>
  );
};
