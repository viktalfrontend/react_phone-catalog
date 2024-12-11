import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const getLinkClass = ({ isActive }: { isActive: boolean }) =>
  classNames(styles.link, { [styles.isActive]: isActive });

type Props = {
  isVertical?: boolean;
};

export const Navigation: React.FC<Props> = ({ isVertical = false }) => {
  return (
    <nav
      className={classNames(styles.nav, {
        [styles.navVertical]: isVertical,
      })}
    >
      <ul
        className={classNames(styles.list, {
          [styles.listVertical]: isVertical,
        })}
      >
        <li className={styles.item}>
          <NavLink to="/" className={getLinkClass}>
            home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="phones" className={getLinkClass}>
            phones
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="tablets" className={getLinkClass}>
            tablets
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink to="accessories" className={getLinkClass}>
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
