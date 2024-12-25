import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BurgerMenu } from './pages/BurgerMenu/BurgerMenu';
import { useState } from 'react';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <h1 className={styles.visuallyHidden}>Product Catalog</h1>
      <Header onBurgerClick={toggleMenu} isMenuOpen={isMenuOpen} />

      <BurgerMenu isOpen={isMenuOpen} onCloseMenu={closeMenu} />

      <Outlet />
      <Footer />
    </div>
  );
};
