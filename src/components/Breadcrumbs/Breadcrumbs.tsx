import React from 'react';
import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  category: string;
  productId?: string;
};

export const Breadcrumbs: React.FC<Props> = ({ category, productId }) => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.navHome}></div>
      </Link>
      <div className={styles.arrow}></div>
      <Link className={styles.link} to={`/${category}`}>
        <span
          className={cn(styles.navCategory, {
            [styles.isActive]: productId,
          })}
        >
          {category}
        </span>
      </Link>
      <div className={styles.arrow}></div>
      {productId && (
        <span className={`${styles.navCategory} ${styles.product}`}>
          {productId}
        </span>
      )}
    </nav>
  );
};
