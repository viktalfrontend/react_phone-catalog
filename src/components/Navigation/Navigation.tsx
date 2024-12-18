import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

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
        <li
          className={classNames(styles.item, {
            [styles.itemVertical]: isVertical,
          })}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              classNames(styles.link, {
                [styles.isActive]: isActive,
                [styles.linkVertical]: isVertical,
              })
            }
          >
            home
          </NavLink>
        </li>
        <li
          className={classNames(styles.item, {
            [styles.itemVertical]: isVertical,
          })}
        >
          <NavLink
            to="phones"
            className={({ isActive }) =>
              classNames(styles.link, {
                [styles.isActive]: isActive,
                [styles.linkVertical]: isVertical,
              })
            }
          >
            phones
          </NavLink>
        </li>
        <li
          className={classNames(styles.item, {
            [styles.itemVertical]: isVertical,
          })}
        >
          <NavLink
            to="tablets"
            className={({ isActive }) =>
              classNames(styles.link, {
                [styles.isActive]: isActive,
                [styles.linkVertical]: isVertical,
              })
            }
          >
            tablets
          </NavLink>
        </li>
        <li
          className={classNames(styles.item, {
            [styles.itemVertical]: isVertical,
          })}
        >
          <NavLink
            to="accessories"
            className={({ isActive }) =>
              classNames(styles.link, {
                [styles.isActive]: isActive,
                [styles.linkVertical]: isVertical,
              })
            }
          >
            accessories
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
