import { NavLink } from 'react-router-dom';
import styles from './PageMenu.module.scss';
import classNames from 'classnames';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.nav__link, { [styles['is-active']]: isActive });

type Props = {
  toggleMenu: () => void;
};

export const PageMenu: React.FC<Props> = ({ toggleMenu }) => {
  return (
    <div className={styles.page__menu}>
      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <NavLink to="/" className={getLinkClass} onClick={toggleMenu}>
              home
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="phones" className={getLinkClass} onClick={toggleMenu}>
              phones
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink to="tablets" className={getLinkClass} onClick={toggleMenu}>
              tablets
            </NavLink>
          </li>
          <li className={styles.nav__item}>
            <NavLink
              to="accessories"
              className={getLinkClass}
              onClick={toggleMenu}
            >
              accessories
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
