import styles from './PicturesSlider.module.scss';
import slide from '../../images/slider/banner-slide1.png';

export const PicturesSlider = () => {
  return <img className={styles.sliderImg} src={slide} alt="picture slider" />;
};
