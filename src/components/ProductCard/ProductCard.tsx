import React from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({
  product: { name, price, fullPrice, screen, capacity, ram, image },
}) => (
  <div className={styles.productCard}>
    <img className={styles.productCard__photo} src={image} alt={name} />
    <p className={styles.productCard__title}>{name}</p>

    <div className={styles.productCard__prices}>
      <p className={styles.productCard__pricesCurrent}>{`$${fullPrice}`}</p>
      <p className={styles.productCard__pricesFull}>{`$${price}`}</p>
    </div>

    <div className={styles.productCard__info}>
      <div className={styles.productCard__infoItem}>
        <p className={styles.productCard__infoLable}>Screen</p>
        <p className={styles.productCard__infoValue}>{screen}</p>
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
