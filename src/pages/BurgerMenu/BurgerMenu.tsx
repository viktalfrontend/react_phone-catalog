import styles from './BurgerMenu.module.scss';
import { Navigation } from '../../components/Navigation';

import classNames from 'classnames';

type Props = {
  isOpen: boolean;
};

export const BurgerMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    <div
      className={classNames(styles.menu, {
        [styles.menuOpen]: isOpen,
      })}
    >
      <Navigation isVertical={true} />
    </div>
  );
};
