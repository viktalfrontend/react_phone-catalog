import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Phones } from './pages/Phones/Phones';
import { Tablets } from './pages/Tablets/Tablets';
import { Accessories } from './pages/Accessories';
import { App } from './App';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductProvider } from './components/ProductContext/ProductContext';

export const Root = () => (
  <HashRouter>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="phones" element={<Phones />} />
          <Route path="tablets" element={<Tablets />} />
          <Route path="accessories" element={<Accessories />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ProductProvider>
  </HashRouter>
);
