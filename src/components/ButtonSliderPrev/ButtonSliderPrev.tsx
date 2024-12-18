import styles from './ButtonSliderPrev.module.scss';
import React from 'react';

import classNames from 'classnames';
import { Swiper } from 'swiper';

type Props = {
  isBeginning: boolean;
  swiperRef: React.RefObject<Swiper>;
  isLarge?: boolean;
};

export const ButtonSliderPrev: React.FC<Props> = ({
  isBeginning,
  swiperRef,
  isLarge = false,
}) => {
  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <button
      className={classNames(styles.button, styles.prev, {
        [styles.disabled]: isBeginning,
        [styles.large]: isLarge,
      })}
      onClick={handlePrevClick}
    ></button>
  );
};
