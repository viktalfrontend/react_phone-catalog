import React from 'react';
import styles from './ProductCard.module.scss';
import { Product } from '../../types/Product';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

export const ProductCard: React.FC<Props> = ({
  product: {
    itemId,
    category,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    image,
  },
}) => (
  <div className={styles.productCard}>
    <Link className={styles.link} to={`/${category}/${itemId}`}>
      <img className={styles.photo} src={image} alt={name} />
      <p className={styles.title}>{name}</p>
    </Link>
    <div className={styles.prices}>
      <p>{`$${price}`}</p>
      <p className={styles.pricesFull}>{`$${fullPrice}`}</p>
    </div>

    <div className={styles.info}>
      <div className={styles.infoItem}>
        <p className={styles.infoLable}>Screen</p>
        <p className={styles.infoValue}>{screen}</p>
      </div>

      <div className={styles.infoItem}>
        <p className={styles.infoLable}>Capacity</p>
        <p className={styles.infoValue}>{capacity}</p>
      </div>
      <div className={styles.infoItem}>
        <p className={styles.infoLable}>RAM</p>
        <p className={styles.infoValue}>{ram}</p>
      </div>
    </div>

    <div className={styles.buttons}>
      <button className={styles.buttonAdd}>Add to cart</button>
      <button className={styles.buttonFavorite}></button>
    </div>
  </div>
);
