import styles from './HomePage.module.scss';
import phoneCategory from '../../images/categories/phones.png';
import tabletsCategory from '../../images/categories/tablets.png';
import accessoriesCategory from '../../images/categories/accessories.png';

import { PicturesSlider } from '../../components/PicturesSlider';
import { Link } from 'react-router-dom';
import { getHotPrices } from '../../services/getFunction';
import { Product } from '../../types/Product';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/fetch';
import { Category } from '../../types/Category';
import { ProductsSlider } from '../../components/ProductsSlider';

export const HomePage = () => {
  const [phones, setPhones] = useState<Product[]>([]);

  useEffect(() => {
    getProducts(Category.Phones).then(setPhones).catch();
  }, []);

  const hotPrices = getHotPrices(phones);

  return (
    <div className={styles.container}>
      <div className={styles.homePage}>
        <h1 className={styles.homePage__title}>
          Welcome to Nice Gadgets store!
        </h1>
        <section className={styles.homePage__section}>
          <PicturesSlider />
        </section>

        <section className={styles.homePage__section}>
          <h2 className={styles['homePage__section-title']}>
            Brand new models
          </h2>
        </section>

        <section className={styles.homePage__section}>
          <h2 className={styles['homePage__section-title']}>
            Shop by category
          </h2>
          <div className={styles['homePage__section-wrapp']}>
            <Link to="phones" className={styles.category__link}>
              <div className={styles.category}>
                <img
                  className={styles.category__img}
                  src={phoneCategory}
                  alt="category foto"
                />
                <h3 className={styles.category__title}>Mobile phones</h3>
                <p className={styles.category__quantity}>95 models</p>
              </div>
            </Link>
            <Link to="tablets" className={styles.category__link}>
              <div className={styles.category}>
                <img
                  className={styles.category__img}
                  src={tabletsCategory}
                  alt="category foto"
                />
                <h3 className={styles.category__title}>Tablets</h3>
                <p className={styles.category__quantity}>24 models</p>
              </div>
            </Link>
            <Link to="accessories" className={styles.category__link}>
              <div className={styles.category}>
                <img
                  className={styles.category__img}
                  src={accessoriesCategory}
                  alt="category photo"
                />
                <h3 className={styles.category__title}>Accessories</h3>
                <p className={styles.category__quantity}>100 models</p>
              </div>
            </Link>
          </div>
        </section>

        <section className={styles.homePage__section}>
          <h2 className={styles['homePage__section-title']}>Hot prices</h2>
          {<ProductsSlider products={hotPrices} />}
        </section>
      </div>
    </div>
  );
};
