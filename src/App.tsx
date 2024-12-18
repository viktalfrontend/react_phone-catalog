import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BurgerMenu } from './pages/BurgerMenu/BurgerMenu';
import { useState } from 'react';
import classNames from 'classnames';

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <div className="App">
      <h1 className={styles.visuallyHidden}>Product Catalog</h1>
      <Header onBurgerClick={toggleMenu} isMenuOpen={isMenuOpen} />

      <BurgerMenu isOpen={isMenuOpen} />

      <div
        className={classNames(styles.content, {
          [styles.contentHidden]: isMenuOpen,
        })}
      >
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
