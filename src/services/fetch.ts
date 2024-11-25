import { Category } from '../types/Category';
import { Product } from '../types/Product';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BASE_URL = 'http://localhost:5173/api/';

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url + '.json';

  return fetch(fullURL).then(response => {
    if (!response.ok) {
      throw new Error(`Failed to fetch`);
    }

    return response.json();
  });
}

export const getProducts = (category: Category) => get<Product[]>(category);
