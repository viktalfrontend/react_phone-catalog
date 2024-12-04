import { Product } from '../types/Product';

export const getNewestModels = (phones: Product[]) => {
  return [...phones].sort((a, b) => b.year - a.year).slice(0, 10);
};

export const getHotPrices = (phones: Product[]) => {
  return [...phones]
    .sort((a, b) => b.fullPrice - b.price - (a.fullPrice - a.price))
    .slice(0, 10);
};
