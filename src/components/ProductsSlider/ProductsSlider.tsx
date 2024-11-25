import { ProductCard } from '../ProductCard';
import styles from './ProductsSlider.module.scss';
import { Product } from '../../types/Product';

type Props = {
  products: Product[];
};

export const ProductsSlider: React.FC<Props> = ({ products }) => (
  <div className={styles.productSlider}>
    {products.map((product: Product) => (
      <ProductCard product={product as Product} key={product.id} />
    ))}
  </div>
);
