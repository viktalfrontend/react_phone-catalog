import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDetails } from '../../types/ProductDatails';
import { Loader } from '../Loader';
import { getDetails } from '../../services/fetch';

export const ProductDetailsPage = () => {
  const [productDetails, setProductDatails] = useState<ProductDetails | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);

  const { productId, category } = useParams<{
    productId: string;
    category: string;
  }>();

  useEffect(() => {
    if (!productId || !category) {
      // Якщо параметри не визначені, нічого не робимо
      return;
    }

    setIsLoading(true);

    getDetails(productId, category)
      .then(details => {
        setProductDatails(details);
      })
      .catch(() => {})
      .finally(() => setIsLoading(false));
  }, [category, productId]);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && productDetails && <p>{productDetails.name}</p>}
      {!isLoading && !productDetails && <p>Product was not found</p>}
    </div>
  );
};
