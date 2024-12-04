import './App.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useState } from 'react';
import { PageMenu } from './pages/PageMenu/PageMenu';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <h1 className="visually-hidden">Product Catalog</h1>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <div className="section">
        {isMenuOpen ? <PageMenu toggleMenu={toggleMenu} /> : <Outlet />}
      </div>
      <Footer isMenuOpen={isMenuOpen} />
    </div>
  );
};
