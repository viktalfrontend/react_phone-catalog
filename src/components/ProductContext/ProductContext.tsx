import React, { useEffect, useMemo, useState } from 'react';
import { Product } from '../../types/Product';
import { getProducts } from '../../services/fetch';
import { Category } from '../../types/Category';

interface ProductsContextType {
  phones: Product[];
  tablets: Product[];
  accessories: Product[];
  isLoading: boolean;
}

export const ProductContext = React.createContext<ProductsContextType>({
  phones: [],
  tablets: [],
  accessories: [],
  isLoading: false,
});

type Props = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getProducts()
      .then(setProducts)
      .catch()
      .finally(() => setIsLoading(false));
  }, []);

  const phones = products.filter(
    product => product.category === Category.Phones,
  );
  const tablets = products.filter(
    product => product.category === Category.Tablets,
  );
  const accessories = products.filter(
    product => product.category === Category.Accessories,
  );

  const value = useMemo(
    () => ({
      phones,
      tablets,
      accessories,
      isLoading,
    }),
    [phones, tablets, accessories, isLoading],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
