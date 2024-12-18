import styles from './HomePage.module.scss';
import phoneCategory from '../../images/categories/phones.png';
import tabletsCategory from '../../images/categories/tablets.png';
import accessoriesCategory from '../../images/categories/accessories.png';

import { PicturesSlider } from '../../components/PicturesSlider';
import { Link } from 'react-router-dom';
import { getHotPrices } from '../../services/getSortFunction';
import { getNewestModels } from '../../services/getSortFunction';
import { useContext } from 'react';

import { ProductsSlider } from '../../components/ProductsSlider';
import { Loader } from '../../components/Loader';
import { ProductContext } from '../../components/ProductContext/ProductContext';

const sliderTitle = [' Brand new models', ' Hot prices'];

export const HomePage = () => {
  const { phones, tablets, accessories, isLoading } =
    useContext(ProductContext);

  const hotPrices = getHotPrices(phones);
  const newModels = getNewestModels(phones);

  return (
    <>
      {isLoading && <Loader />}

      {!isLoading && phones.length > 0 && (
        <div>
          <h1 className={styles.hpTitle}>Welcome to Nice Gadgets store!</h1>
          <div className={styles.content}>
            <section className={styles.section}>
              <PicturesSlider />
            </section>

            <section className={styles.section}>
              <ProductsSlider products={newModels} title={sliderTitle[0]} />
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Shop by category</h2>
              <div className={styles.wrapp}>
                <Link to="phones" className={styles.link}>
                  <div>
                    <img
                      className={styles.img}
                      src={phoneCategory}
                      alt="category foto"
                    />
                    <h3 className={styles.title}>Mobile phones</h3>
                    <p
                      className={styles.quantity}
                    >{`${phones.length} models`}</p>
                  </div>
                </Link>
                <Link to="tablets" className={styles.link}>
                  <div>
                    <img
                      className={styles.img}
                      src={tabletsCategory}
                      alt="category foto"
                    />
                    <h3 className={styles.title}>Tablets</h3>
                    <p
                      className={styles.quantity}
                    >{`${tablets.length} models`}</p>
                  </div>
                </Link>
                <Link to="accessories" className={styles.link}>
                  <div>
                    <img
                      className={styles.img}
                      src={accessoriesCategory}
                      alt="category photo"
                    />
                    <h3 className={styles.title}>Accessories</h3>
                    <p
                      className={styles.quantity}
                    >{`${accessories.length} models`}</p>
                  </div>
                </Link>
              </div>
            </section>

            <section className={styles.section}>
              <ProductsSlider products={hotPrices} title={sliderTitle[1]} />
            </section>
          </div>
        </div>
      )}
    </>
  );
};
