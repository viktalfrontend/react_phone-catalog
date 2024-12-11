import { Link } from 'react-router-dom';
import logo from '../../images/logo/Logo.svg';
import styles from './Header.module.scss';
// import classNames from 'classnames';

// import { useRef } from 'react';
import { Navigation } from '../Navigation';

export const Header: React.FC = () => {
  // const buttonMenu = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link to="/">
          <img className={styles.logoImg} src={logo} alt="logo" />
        </Link>
        <Navigation />
      </div>
      <div className={styles.icons}>
        <Link
          to="favourites"
          className={`${styles.icon} ${styles.iconFavourites}`}
        ></Link>
        <Link
          to="shoppingbag"
          className={`${styles.icon} ${styles.iconShoppingbag}`}
        ></Link>
        {/* <button
          className={classNames(styles.buttonsMenu, {
            [styles.burger]: !isMenuOpen,
            [styles.close]: isMenuOpen,
          })}
          onClick={toggleMenu}
          ref={buttonMenu}
        ></button> */}
      </div>
    </header>
  );
};
