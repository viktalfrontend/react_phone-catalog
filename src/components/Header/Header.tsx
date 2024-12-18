import { Link } from 'react-router-dom';
import logo from '../../images/logo/Logo.svg';
import styles from './Header.module.scss';
import { Navigation } from '../Navigation';
import classNames from 'classnames';

type Props = {
  isMenuOpen: boolean;
  onBurgerClick: () => void;
};

export const Header: React.FC<Props> = ({ onBurgerClick, isMenuOpen }) => {
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
        <button
          className={classNames(styles.buttonsMenu, {
            [styles.burger]: !isMenuOpen,
            [styles.close]: isMenuOpen,
          })}
          onClick={onBurgerClick}
        ></button>
      </div>
    </header>
  );
};
