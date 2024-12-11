import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import styles from './ProductsSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/Product';
import { SliderButtons } from '../SliderButtons/SliderButtons';

type Props = {
  products: Product[];
  title: string;
};

export const ProductsSlider: React.FC<Props> = ({ products, title }) => {
  return (
    <Swiper
      spaceBetween={16}
      breakpoints={{
        320: { slidesPerView: 1.4 },
        640: { slidesPerView: 2.5 },
        1200: { slidesPerView: 4 },
      }}
    >
      <span className={styles.slider__buttons} slot="container-start">
        <h2 className={styles.slider__title}>{title}</h2>
        <SliderButtons />
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
