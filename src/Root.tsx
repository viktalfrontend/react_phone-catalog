import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductProvider } from './components/ProductContext/ProductContext';
import { CategoryRoutes } from './components/CategoryRoutes/CategoryRoutes';

export const Root = () => (
  <HashRouter>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path=":category/*" element={<CategoryRoutes />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ProductProvider>
  </HashRouter>
);
