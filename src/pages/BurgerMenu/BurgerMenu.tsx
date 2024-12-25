import styles from './BurgerMenu.module.scss';
import { Navigation } from '../../components/Navigation';

import classNames from 'classnames';

type Props = {
  isOpen: boolean;
  onCloseMenu: () => void;
};

export const BurgerMenu: React.FC<Props> = ({ isOpen, onCloseMenu }) => {
  return (
    <div
      className={classNames(styles.menu, {
        [styles.menuOpen]: isOpen,
      })}
    >
      <Navigation isVertical={true} onLinkClick={onCloseMenu} />
      <div className={styles.buttons}>
        <button className={`${styles.icons} ${styles.favourites}`}></button>
        <button className={`${styles.icons} ${styles.shoppingbag}`}></button>
      </div>
    </div>
  );
};
