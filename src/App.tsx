import styles from './App.module.scss';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div className="App">
      <h1 className={styles.visuallyHidden}>Product Catalog</h1>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
