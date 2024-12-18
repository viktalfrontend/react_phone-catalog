import 'swiper/scss';
import styles from './ProductsSlider.module.scss';
import { SwiperSlide, Swiper } from 'swiper/react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';
import { useRef, useState } from 'react';
import { Swiper as SwiperCore } from 'swiper';

import { ButtonSliderPrev } from '../ButtonSliderPrev';
import { ButtonSliderNext } from '../ButtonSliderNext/ButtonSliderNext';

type Props = {
  products: Product[];
  title: string;
};

export const ProductsSlider: React.FC<Props> = ({ products, title }) => {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    setIsAtStart(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };

  return (
    <Swiper
      spaceBetween={16}
      breakpoints={{
        320: { slidesPerView: 1.4 },
        640: { slidesPerView: 2.5 },
        1200: { slidesPerView: 4 },
      }}
      onSwiper={(swiper: SwiperCore | null) => {
        swiperRef.current = swiper; // Зберігаємо інстанцію Swiper
      }}
      onSlideChange={handleSlideChange}
    >
      <span className={styles.sliderButtons} slot="container-start">
        <h2 className={styles.sliderTtitle}>{title}</h2>
        <div className={styles.buttons}>
          <ButtonSliderPrev isBeginning={isAtStart} swiperRef={swiperRef} />
          <ButtonSliderNext isEnd={isAtEnd} swiperRef={swiperRef} />
        </div>
      </span>
      {products.map((product: Product) => (
        <SwiperSlide key={product.id}>
          <div className={styles.container}>
            <ProductCard product={product as Product} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
