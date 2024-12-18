import styles from './ButtonSliderNext.module.scss';
import React from 'react';
import { Swiper as SwiperType } from 'swiper';
import classNames from 'classnames';

type Props = {
  isEnd: boolean;
  swiperRef: React.RefObject<SwiperType>;
  isLarge?: boolean;
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
    <button
      className={classNames(styles.button, styles.next, {
        [styles.disabled]: isEnd,
        [styles.large]: isLarge,
      })}
      onClick={handleNextClick}
    ></button>
  );
};
