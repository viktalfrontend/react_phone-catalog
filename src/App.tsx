import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => (
  <div className="App">
    <h1 className="visually-hidden">Product Catalog</h1>
    <Header />
    <div className="section">
      <Outlet />
    </div>
    <Footer />
  </div>
);
