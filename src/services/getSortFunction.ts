import { Product } from '../types/Product';

export const getNewestModels = (phones: Product[]) => {
  return [...phones].sort((a, b) => b.year - a.year).slice(0, 10);
};

export const getHotPrices = (phones: Product[]) => {
  return [...phones]
    .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
    .slice(0, 10);
};

export const sortProducts = (products: Product[], sortBy: string) => {
  const productsCopy = [...products];

  switch (sortBy) {
    case 'age':
      return productsCopy.sort((a, b) => a.year - b.year);
    case 'name':
      return productsCopy.sort((a, b) => a.name.localeCompare(b.name));
    case 'price':
      return productsCopy.sort((a, b) => a.price - b.price);
    default:
      return productsCopy;
  }
};
