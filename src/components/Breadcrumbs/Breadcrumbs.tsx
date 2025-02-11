import React from 'react';
import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import cn from 'classnames';

type Props = {
  category: string;
  productName?: string;
};

export const Breadcrumbs: React.FC<Props> = ({ category, productName }) => {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <div className={styles.navHome}></div>
      </Link>
      <div className={styles.arrow}></div>
      <Link className={styles.link} to={`/${category}`}>
        <span
          className={cn(styles.navCategory, {
            [styles.isActive]: productName,
          })}
        >
          {category}
        </span>
      </Link>
      <div className={styles.arrow}></div>
      {productName && (
        <span className={`${styles.navCategory} ${styles.product}`}>
          {productName}
        </span>
      )}
    </nav>
  );
};
