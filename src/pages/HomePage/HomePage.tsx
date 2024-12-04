import styles from './HomePage.module.scss';
import phoneCategory from '../../images/categories/phones.png';
import tabletsCategory from '../../images/categories/tablets.png';
import accessoriesCategory from '../../images/categories/accessories.png';

import { PicturesSlider } from '../../components/PicturesSlider';
import { Link } from 'react-router-dom';
import { getHotPrices } from '../../services/getSortFunction';
import { getNewestModels } from '../../services/getSortFunction';
import { Product } from '../../types/Product';
import { useEffect, useState } from 'react';
import { getProducts } from '../../services/fetch';
import { Category } from '../../types/Category';
import { ProductsSlider } from '../../components/ProductsSlider';
import { Loader } from '../../components/Loader';

export const HomePage = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts(Category.Phones)
      .then(setPhones)
      .catch()
      .finally(() => setIsLoading(false));
  }, []);

  const hotPrices = getHotPrices(phones);
  const newModels = getNewestModels(phones);

  return (
    <div className={styles.container}>
      {isLoading && <Loader />}

      {!isLoading && phones.length > 0 && (
        <div className={styles.homePage}>
          <h1 className={styles.homePage__title}>
            Welcome to Nice Gadgets store!
          </h1>
          <div className={styles.homePage__content}>
            <section className={styles.homePage__section}>
              <div className={styles.picture__slider}>
                <button
                  className={`${styles.slider__button} ${styles['slider__button--prev']} ${styles['slider__button--large']}`}
                ></button>
                <PicturesSlider />
                <button
                  className={`${styles.slider__button} ${styles['slider__button--next']} ${styles['slider__button--large']}`}
                ></button>
              </div>
            </section>

            <section className={styles.homePage__section}>
              <div className={styles.product__slider}>
                <h2 className={styles['product__slider-title']}>
                  Brand new models
                </h2>
                <div className={styles.slider__buttons}>
                  <button
                    className={`${styles.slider__button} ${styles['slider__button--prev']}`}
                  ></button>
                  <button
                    className={`${styles.slider__button} ${styles['slider__button--next']}`}
                  ></button>
                </div>
              </div>
              {<ProductsSlider products={newModels} />}
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
              <div className={styles.product__slider}>
                <h2 className={styles['product__slider-title']}>Hot prices</h2>
                <div className={styles.slider__buttons}>
                  <button
                    className={`${styles.slider__button} ${styles['slider__button--prev']}`}
                  ></button>
                  <button
                    className={`${styles.slider__button} ${styles['slider__button--next']}`}
                  ></button>
                </div>
              </div>
              {<ProductsSlider products={hotPrices} />}
            </section>
          </div>
        </div>
      )}
    </div>
  );
};
