import { Category } from '../types/Category';
import { Product } from '../types/Product';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BASE_URL = 'http://localhost:5173/api/products.json';

function get<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch`);
    }

    return response.json();
  });
}

export const getProducts = (category: Category): Promise<Product[]> => {
  return get<Product[]>(BASE_URL).then(products => {
    return products.filter(product => product.category === category);
  });
};
