import { useEffect, useState } from 'react';
import styles from './CategoryPage.module.scss';
import { Product } from '../../types/Product';
import { getProducts } from '../../services/fetch';
import { ProductCard } from '../ProductCard';
import { Category } from '../../types/Category';

type Props = {
  category: Category;
};

export const CategoryPage: React.FC<Props> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const getTitle = (categoryName: Category) => {
    if (categoryName === Category.Phones) {
      return 'Mobile Phones';
    }

    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  };

  useEffect(() => {
    getProducts(category).then(setProducts).catch();
  }, [category]);

  return (
    <div className={styles.category}>
      <nav className={styles.category__navigation}>
        <a href="#" className={`${styles['category__navigation--home']}`}></a>
        <span className={`${styles['category__navigation--category']}`}>
          {category}
        </span>
      </nav>
      <h1 className={styles.category__title}>{getTitle(category)}</h1>
      <p
        className={styles.category__quantity}
      >{`${products.length + 1} models`}</p>
      <div className={styles.category__selects}>
        <div className={styles.sort}>
          <p className={styles.sort__title}>Sort by</p>
          <select className={styles.select__sort}>
            <option value="">Newest</option>
            <option value="">Alphabetically</option>
            <option value="">Cheapest</option>
          </select>
        </div>
        <div className={styles['items-on-page']}>
          <p className={styles['items-on-page__title']}>Items on page</p>
          <select className={styles.select__items}>
            <option value="">4</option>
            <option value="">8</option>
            <option value="">16</option>
            <option value="">all</option>
          </select>
        </div>
      </div>
      <main className={styles.category__content}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
};
