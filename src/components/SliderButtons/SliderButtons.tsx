import { useSwiper } from 'swiper/react';
import styles from './SliderButtons.module.scss';

export const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.buttons}>
      <button
        onClick={() => swiper.slidePrev()}
        className={`${styles.button} ${styles.prev}`}
      ></button>
      <button
        onClick={() => swiper.slideNext()}
        className={`${styles.button} ${styles.next}`}
      ></button>
    </div>
  );
};
