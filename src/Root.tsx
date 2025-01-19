import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductProvider } from './components/ProductContext/ProductContext';
import { CategoryPage } from './components/CategoryPage/CategoryPage';
import { Category } from './types/Category';

export const Root = () => (
  <HashRouter>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route
            path="phones"
            element={<CategoryPage category={Category.Phones} />}
          />
          <Route
            path="tablets"
            element={<CategoryPage category={Category.Tablets} />}
          />
          <Route
            path="accessories"
            element={<CategoryPage category={Category.Accessories} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ProductProvider>
  </HashRouter>
);
