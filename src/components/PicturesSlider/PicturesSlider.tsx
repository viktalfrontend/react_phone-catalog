import styles from './PicturesSlider.module.scss';
import slide1 from '../../images/slider/slide1.jpg';
import slide2 from '../../images/slider/slide2.jpg';
import slide3 from '../../images/slider/slide5.jpg';
import slide4 from '../../images/slider/slide3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { ButtonSliderPrev } from '../ButtonSliderPrev';
import { ButtonSliderNext } from '../ButtonSliderNext/ButtonSliderNext';

const sliderImg = [
  { mobile: slide4, other: slide1 },
  { mobile: slide2, other: slide2 },
  { mobile: slide3, other: slide3 },
];

export const PicturesSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  const updateNavigationState = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <div>
      <div className={styles.pictureSlider}>
        <ButtonSliderPrev
          isBeginning={isBeginning}
          swiperRef={swiperRef}
          isLarge={true}
        />
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={swiper => {
            swiperRef.current = swiper;
            updateNavigationState(swiper);
          }}
          onSlideChange={swiper => updateNavigationState(swiper)}
        >
          {sliderImg.map((slider, index) => (
            <SwiperSlide key={index}>
              <picture>
                <source srcSet={slider.mobile} media="(max-width: 639px)" />
                <source srcSet={slider.other} media="(min-width: 640px)" />
                <img
                  className={styles.sliderImg}
                  src={slider.mobile}
                  alt={`slide-${index + 1}`}
                />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonSliderNext isEnd={isEnd} swiperRef={swiperRef} isLarge={true} />
      </div>
      <div className={styles.content}>
        {sliderImg.map((_, index) => (
          <span
            key={index}
            className={classNames(styles.dot, {
              [styles.activeDot]: activeIndex === index,
            })}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};
