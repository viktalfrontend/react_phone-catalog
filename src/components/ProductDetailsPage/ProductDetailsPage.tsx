import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductDetails } from '../../types/ProductDatails';
import { Loader } from '../Loader';
import { getDetails } from '../../services/fetch';
import cn from 'classnames';
import styles from './ProductDetailsPage.module.scss';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import { ProductsSlider } from '../ProductsSlider';
import { ProductContext } from '../ProductContext/ProductContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import classNames from 'classnames';
import { getProductsByCategory } from '../../services/getProductsByCategory';
import { getRandomProducts } from '../../services/getSuggestedProducts';

const generateProductId = (
  namespaceId: string,
  capacity: string,
  color: string,
) => {
  const normalized = color.toLowerCase().replace(/\s+/g, '-');

  return `${namespaceId}-${capacity.toLowerCase()}-${normalized}`;
};

export const ProductDetailsPage = () => {
  const [productDetails, setProductDatails] = useState<ProductDetails | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string | null>(null);
  const { phones, tablets, accessories } = useContext(ProductContext);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { productId, category } = useParams<{
    productId: string;
    category: string;
  }>();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleDotClick = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  const updateNavigationState = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
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
        setSelectedColor(details.color.replace(/\s+/g, '-'));
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

  const colors: Record<string, string> = {
    black: '#000000',
    gold: '#FFD700',
    yellow: '#FFFF00',
    green: '#008000',
    midnightgreen: '#004953',
    silver: '#C0C0C0',
    spacegray: '#4A4A4A',
    red: '#FF0000',
    white: '#FFFFFF',
    purple: '#800080',
    coral: '#FF7F50',
    rosegold: '#B76E79',
    midnight: '#003366',
    spaceblack: '#1d1d1f',
    blue: '#0000FF',
    pink: '#FFC0CB',
    sierrablue: '#A1B6D4',
    graphite: '#3C3C3C',
    skyblue: '#87CEEB',
    starlight: '#F2E1C1',
  };

  const handleColorChange = (color: string) => {
    if (!productDetails || !selectedCapacity) {
      return;
    }

    setSelectedColor(color);

    const newId = generateProductId(
      productDetails.namespaceId,
      selectedCapacity,
      color,
    );

    navigate(`/${category}/${newId}`);
  };

  const handleCapacityChange = (capacity: string) => {
    if (!productDetails || !selectedCapacity) {
      return;
    }

    setSelectedCapacity(capacity);

    const newId = generateProductId(
      productDetails.namespaceId,
      capacity,
      selectedColor || '',
    );

    navigate(`/${category}/${newId}`);
  };

  const productCategory = getProductsByCategory(category, {
    phones,
    tablets,
    accessories,
  });

  const suggestedProducts = getRandomProducts(productCategory, 10).filter(
    product => String(product.id) !== productId,
  );

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && productDetails && (
        <div className={styles.container}>
          <Breadcrumbs
            category={category || ''}
            productName={productDetails.name || ''}
          />

          <button className={styles.buttonBack} onClick={handleGoBack}>
            Back
          </button>

          <h2 className={styles.title}>{productDetails.name}</h2>
          <div className={styles.content}>
            <div
              className={`${styles.productDetailsSlider} ${styles.productDetailsSliderWrapper}`}
            >
              <Swiper
                className={styles.swiper}
                onSwiper={swiper => {
                  swiperRef.current = swiper;
                  updateNavigationState(swiper);
                }}
                onSlideChange={swiper => updateNavigationState(swiper)}
              >
                {productDetails.images.map((slider, index) => (
                  <SwiperSlide key={index} className={styles.slide}>
                    <img src={slider} alt={`slide-${index + 1}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className={styles.dots}>
                {productDetails.images.map((dot, index) => (
                  <img
                    key={index}
                    src={dot}
                    alt={`dot-${index + 1}`}
                    className={classNames(styles.dot, {
                      [styles.activeDot]: activeIndex === index,
                    })}
                    onClick={() => handleDotClick(index)}
                  />
                ))}
              </div>
            </div>

            <section className={styles.options}>
              <div className={styles.produtcOption}>
                <h3 className={styles.titleRadioButton}>Available colors</h3>
                <div className={styles.wrapper}>
                  {productDetails.colorsAvailable.map(color => {
                    const normalizedColor = color.replace(/\s+/g, '-');
                    const formattedColor = color.replace(/\s+/g, '');

                    return (
                      // eslint-disable-next-line jsx-a11y/label-has-associated-control
                      <label
                        key={formattedColor}
                        htmlFor={`color-${formattedColor}`}
                        className={cn(styles.colorOptions, {
                          [styles.selected]: selectedColor === normalizedColor,
                        })}
                      >
                        <input
                          id={`color-${formattedColor}`}
                          type="radio"
                          name="color"
                          value={formattedColor}
                          onChange={() => handleColorChange(normalizedColor)}
                          className={styles.radioInput}
                        />
                        <div
                          className={styles.inner}
                          style={{ backgroundColor: colors[formattedColor] }}
                        ></div>
                      </label>
                    );
                  })}
                </div>
              </div>
              <div className={styles.produtcOption}>
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
                        onChange={() => handleCapacityChange(capacity)}
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
              </div>

              <div className={styles.produtcOption}>
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
              </div>
            </section>

            <section className={styles.description}>
              <h3 className={styles.blockTitle}>About</h3>
              {productDetails.description.map(detail => (
                <article key={detail.title}>
                  <h4 className={styles.titleDescription}>{detail.title}</h4>
                  <p className={styles.text}>{detail.text}</p>
                </article>
              ))}
            </section>
            <section className={styles.descriptionTech}>
              <h3 className={styles.blockTitle}>Tech specs</h3>
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
          </div>
          <div className={styles.sliderBlock}>
            <ProductsSlider
              products={suggestedProducts}
              title={'You may also like'}
            />
          </div>
        </div>
      )}
      {!isLoading && !productDetails && <p>Product was not found</p>}
    </div>
  );
};
