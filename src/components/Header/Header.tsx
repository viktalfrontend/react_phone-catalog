import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo/Logo.svg';
import styles from './Header.module.scss';
import classNames from 'classnames';
import '../../vars.scss';
import { useRef } from 'react';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.nav__link, { [styles['is-active']]: isActive });

type Props = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const Header: React.FC<Props> = ({ isMenuOpen, toggleMenu }) => {
  const buttonMenu = useRef<HTMLButtonElement>(null);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>
          <Link className={styles.header__link} to="/">
            <img className={styles.logo__img} src={logo} alt="logo" />
          </Link>
        </div>

        <div className={styles.header__navigation}>
          <nav className={styles.nav}>
            <ul className={styles.nav__list}>
              <li className={styles.nav__item}>
                <NavLink to="/" className={getLinkClass}>
                  home
                </NavLink>
              </li>
              <li className={styles.nav__item}>
                <NavLink to="phones" className={getLinkClass}>
                  phones
                </NavLink>
              </li>
              <li className={styles.nav__item}>
                <NavLink to="tablets" className={getLinkClass}>
                  tablets
                </NavLink>
              </li>
              <li className={styles.nav__item}>
                <NavLink to="accessories" className={getLinkClass}>
                  accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className={styles.header__icons}>
        <Link
          to="favourites"
          className={`${styles.icon} ${styles['icon--favourites']}`}
        ></Link>
        <Link
          to="shoppingbag"
          className={`${styles.icon} ${styles['icon--shoppingbag']}`}
        ></Link>
        <button
          className={classNames(styles.buttons__menu, {
            [styles['buttons__menu--burger']]: !isMenuOpen,
            [styles['buttons__menu--close']]: isMenuOpen,
          })}
          onClick={toggleMenu}
          ref={buttonMenu}
        ></button>
      </div>
    </header>
  );
};
