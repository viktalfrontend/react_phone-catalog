import { Product } from '../types/Product';
import { ProductDetails } from '../types/ProductDatails';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const URL = 'api/products.json';

function get<T>(url: string): Promise<T> {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch`);
    }

    return response.json();
  });
}

export const getProducts = (): Promise<Product[]> => {
  return get<Product[]>(URL).then(products => {
    return products;
  });
};

export const getDetails = (productId: string, category: string) => {
  return get<ProductDetails[]>(`/api/${category}.json`).then(
    (details: ProductDetails[]) => {
      return details.find((p: ProductDetails) => p.id === productId) || null;
    },
  );
};
