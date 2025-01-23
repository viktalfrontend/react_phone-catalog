import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Product } from '../../types/Product';
import { getProducts } from '../../services/fetch';
import { Category } from '../../types/Category';

interface ProductsContextType {
  phones: Product[];
  tablets: Product[];
  accessories: Product[];
  loading: boolean;
  errorMessadge: string;
  reload: () => void;
}

export const ProductContext = React.createContext<ProductsContextType>({
  phones: [],
  tablets: [],
  accessories: [],
  loading: false,
  errorMessadge: '',
  reload: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const ProductProvider: React.FC<Props> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorMessadge, setErrorMessadge] = useState('');
  const [updateAt, setUpdateAt] = useState(new Date());

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      getProducts()
        .then(setProducts)
        .catch(() => setErrorMessadge('Something went wrong'))
        .finally(() => setLoading(false));
    }, 1000);
  }, [updateAt]);

  const reload = useCallback(() => {
    setUpdateAt(new Date());
    setErrorMessadge('');
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
      loading,
      errorMessadge,
      reload,
    }),
    [phones, tablets, accessories, loading, errorMessadge, reload],
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
