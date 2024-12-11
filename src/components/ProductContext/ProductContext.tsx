import React, { useEffect, useState } from 'react';
import { Product } from '../../types/Product';
import { getProducts } from '../../services/fetch';

interface ProductsContextType {
  products: Product[];
  isLoading: boolean;
}

export const ProductContext = React.createContext<ProductsContextType>({
  products: [],
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

  return (
    <ProductContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
