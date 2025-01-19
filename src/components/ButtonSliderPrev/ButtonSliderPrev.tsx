import React from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Button } from '../Button/Button';

type Props = {
  isBeginning: boolean;
  swiperRef: React.RefObject<SwiperType>;
  isLarge: boolean;
};

export const ButtonSliderPrev: React.FC<Props> = ({
  isBeginning,
  swiperRef,
  isLarge,
}) => {
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <Button
      onClick={handlePrevClick}
      isDisabled={isBeginning}
      direction="prev"
      isLarge={isLarge}
    />
  );
};
