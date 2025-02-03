import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductDetails } from '../../types/ProductDatails';
import { Loader } from '../Loader';
import { getDetails } from '../../services/fetch';
import cn from 'classnames';
import styles from './ProductDetailsPage.module.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ProductsSlider } from '../ProductsSlider';
import { ProductContext } from '../ProductContext/ProductContext';

export const ProductDetailsPage = () => {
  const [productDetails, setProductDatails] = useState<ProductDetails | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);
  const { suggestedProducts } = useContext(ProductContext);

  const { productId, category } = useParams<{
    productId: string;
    category: string;
  }>();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!productId || !category) {
      // Якщо параметри не визначені, нічого не робимо
      return;
    }

    setIsLoading(true);

    getDetails(productId, category)
      .then(details => {
        if (!details) {
          return;
        }

        setProductDatails(details);
        setSelectedColor(details.color);
        setSelectedCapacity(details.capacity);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [category, productId]);

  const specs = {
    screen: productDetails?.screen,
    resolution: productDetails?.resolution,
    processor: productDetails?.processor,
    ram: productDetails?.ram,
    camera: productDetails?.camera,
    zoom: productDetails?.zoom,
    cell: productDetails?.cell.slice(0, 3).join(', '),
  };

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && productDetails && (
        <div className={styles.container}>
          <Breadcrumbs category={category || ''} productId={productId || ''} />

          <button className={styles.buttonBack} onClick={handleGoBack}>
            Back
          </button>

          <h2 className={styles.title}>{productDetails.name}</h2>
          <div className="images"></div>
          <section className={styles.section}>
            <h3 className={styles.titleRadioButton}>Available colors</h3>
            <div className={styles.wrapper}>
              {productDetails.colorsAvailable.map(color => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label
                  key={color}
                  htmlFor={`color-${color}`}
                  className={cn(styles.colorOptions, {
                    [styles.selected]: selectedColor === color,
                  })}
                >
                  <input
                    id={`color-${color}`}
                    type="radio"
                    name="color"
                    value={color}
                    onChange={() => setSelectedColor(color)}
                    className={styles.radioInput}
                  />
                  <div
                    className={styles.inner}
                    style={{ backgroundColor: color }}
                  ></div>
                </label>
              ))}
            </div>
          </section>
          <section className={styles.section}>
            <h3 className={styles.titleRadioButton}>Select capacity</h3>
            <div className={styles.wrapper}>
              {productDetails.capacityAvailable.map(capacity => (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label key={capacity} htmlFor={`capacity-${capacity}`}>
                  <input
                    id={`capacity-${capacity}`}
                    type="radio"
                    name="capacity"
                    value={capacity}
                    onChange={() => setSelectedCapacity(capacity)}
                    className={styles.radioInput}
                  />
                  <div
                    className={cn(styles.capacityButton, {
                      [styles.selected]: selectedCapacity === capacity,
                    })}
                  >
                    {capacity}
                  </div>
                </label>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.prices}>
              <p>{`$${productDetails.priceRegular}`}</p>
              <p
                className={styles.priceDiscount}
              >{`$${productDetails.priceDiscount}`}</p>
            </div>
            <div className={styles.buttons}>
              <button className={styles.buttonAdd}>Add to cart</button>
              <button className={styles.buttonFavorite}></button>
            </div>
            <div className={`${styles.specs} ${styles.specsShort}`}>
              {Object.entries(specs)
                .slice(0, 4)
                .map(
                  ([key, value]) =>
                    value && (
                      <div className={styles.info} key={key}>
                        <p className={styles.itemName}>{key}</p>
                        <p className={styles.itemInfo}>{value}</p>
                      </div>
                    ),
                )}
            </div>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>About</h3>
            {productDetails.description.map(detail => (
              <article key={detail.title}>
                <h4 className={styles.titleDescription}>{detail.title}</h4>
                <p className={styles.text}>{detail.text}</p>
              </article>
            ))}
          </section>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Tech specs</h3>
            <div className={styles.specs}>
              {Object.entries(specs).map(
                ([key, value]) =>
                  value && (
                    <div className={styles.info} key={key}>
                      <p className={styles.itemName}>{key}</p>
                      <p className={styles.itemInfo}>{value}</p>
                    </div>
                  ),
              )}
            </div>
          </section>
          <section className={styles.section}>
            <ProductsSlider
              products={suggestedProducts}
              title={'You may also like'}
            />
          </section>
        </div>
      )}
      {!isLoading && !productDetails && <p>Product was not found</p>}
    </div>
  );
};
