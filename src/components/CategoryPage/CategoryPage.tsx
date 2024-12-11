import { useContext } from 'react';
import styles from './CategoryPage.module.scss';
import { ProductCard } from '../ProductCard';
import { Category } from '../../types/Category';
import { Loader } from '../Loader';
import { ProductContext } from '../ProductContext/ProductContext';

type Props = {
  category: Category;
};

export const CategoryPage: React.FC<Props> = ({ category }) => {
  const { products, isLoading } = useContext(ProductContext);

  const getTitle = (categoryName: Category) => {
    if (categoryName === Category.Phones) {
      return 'Mobile phones';
    }

    return categoryName;
  };

  const productCaegory = products.filter(
    product => product.category === category,
  );

  return (
    <div className={styles.category}>
      {isLoading && <Loader />}
      {!isLoading && productCaegory.length > 0 && (
        <>
          <nav className={styles.nav}>
            <a href="#" className={styles.navHome}></a>
            <span className={styles.navCategory}>{category}</span>
          </nav>
          <h1 className={styles.title}>{getTitle(category)}</h1>
          <p className={styles.quantity}>{`${productCaegory.length} models`}</p>
          <div className={styles.selects}>
            <div>
              <p className={styles.sortTitle}>Sort by</p>
              <select className={styles.selectSort}>
                <option value="">Newest</option>
                <option value="">Alphabetically</option>
                <option value="">Cheapest</option>
              </select>
            </div>
            <div>
              <p className={styles.sortTitle}>Items on page</p>
              <select className={styles.selectItems}>
                <option value="">4</option>
                <option value="">8</option>
                <option value="">16</option>
                <option value="">all</option>
              </select>
            </div>
          </div>
          <main className={styles.container}>
            {productCaegory.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </main>
        </>
      )}
    </div>
  );
};
