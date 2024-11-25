import { Product } from '../types/Product';

// const getNewestModels = (phones: Product[]) => {
//   return [...phones].sort((a, b) => b.year - a.year).slice(0, 10);
// };

export const getHotPrices = (phones: Product[]) => {
  return [...phones]
    .sort(
      (a, b) =>
        b.priceRegular - b.priceDiscount - (a.priceRegular - a.priceDiscount),
    )
    .slice(0, 10);
};
