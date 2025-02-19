import { Category } from '../types/Category';
import { Product } from '../types/Product';

interface ProductsContext {
  phones: Product[];
  tablets: Product[];
  accessories: Product[];
}

export const getProductsByCategory = (
  category: string | undefined,
  productsContext: ProductsContext,
): Product[] => {
  switch (category) {
    case Category.Phones:
      return productsContext.phones;
    case Category.Tablets:
      return productsContext.tablets;
    case Category.Accessories:
      return productsContext.accessories;
    default:
      return [];
  }
};
