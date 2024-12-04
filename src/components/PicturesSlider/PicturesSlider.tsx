import styles from './PicturesSlider.module.scss';
import slide from '../../images/slider/banner-slide1.png';

export const PicturesSlider = () => {
  return <img className={styles.slider__img} src={slide} alt="" />;
};
