import { Route, Routes, useParams } from 'react-router-dom';
import { Category } from '../../types/Category';
import { NotFoundPage } from '../../pages/NotFoundPage';
import { CategoryPage } from '../CategoryPage/CategoryPage';
import { ProductDetailsPage } from '../ProductDetailsPage/ProductDetailsPage';

export const CategoryRoutes = () => {
  const { category } = useParams();

  const validCategory = [
    Category.Phones,
    Category.Tablets,
    Category.Accessories,
  ];

  if (!validCategory.includes(category as Category)) {
    return <NotFoundPage />;
  }

  return (
    <Routes>
      <Route index element={<CategoryPage />} />
      <Route path=":productId" element={<ProductDetailsPage />} />
      <Route path=":productId/*" element={<NotFoundPage />} />
    </Routes>
  );
};
