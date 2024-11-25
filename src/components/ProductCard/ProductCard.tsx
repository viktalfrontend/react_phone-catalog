import React from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({
  product: { name, priceRegular, priceDiscount, screen, capacity, ram, images },
}) => (
  <div className={styles.productCard}>
    <img className={styles.productCard__photo} src={images[0]} alt={name} />
    <p className={styles.productCard__title}>{name}</p>

    <div className={styles.productCard__prices}>
      <p className={styles.productCard__pricesCurrent}>{`$${priceDiscount}`}</p>
      <p className={styles.productCard__pricesFull}>{`$${priceRegular}`}</p>
    </div>

    <div className={styles.productCard__info}>
      <div className={styles.productCard__infoItem}>
        <p className={styles.productCard__infoLable}>Screen</p>
        <p className={styles.productCard__infoValue}>{screen.slice(0, 4)}</p>
      </div>

      <div className={styles.productCard__infoItem}>
        <p className={styles.productCard__infoLable}>Capacity</p>
        <p className={styles.productCard__infoValue}>{capacity}</p>
      </div>
      <div className={styles.productCard__infoItem}>
        <p className={styles.productCard__infoLable}>RAM</p>
        <p className={styles.productCard__infoValue}>{ram}</p>
      </div>
    </div>

    <div className={styles.productCard__buttons}>
      <button className={styles.productCard__buttonAdd}>Add to cart</button>
      <button className={styles.productCard__buttonFavorite}></button>
    </div>
  </div>
);
