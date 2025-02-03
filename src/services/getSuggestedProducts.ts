import { Product } from '../types/Product';

export const getRandomProducts = (
  products: Product[],
  count: number,
): Product[] => {
  return products.filter(() => Math.random() < count / products.length);
};
