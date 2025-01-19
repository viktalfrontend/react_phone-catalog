import React from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Button } from '../Button';

type Props = {
  isEnd: boolean;
  swiperRef: React.RefObject<SwiperType>;
  isLarge: boolean;
};

export const ButtonSliderNext: React.FC<Props> = ({
  isEnd,
  swiperRef,
  isLarge,
}) => {
  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Button
      onClick={handleNextClick}
      isDisabled={isEnd}
      direction="next"
      isLarge={isLarge}
    />
  );
};
