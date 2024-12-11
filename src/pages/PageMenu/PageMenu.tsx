import styles from './PageMenu.module.scss';
import { Navigation } from '../../components/Navigation';

export const PageMenu = () => {
  return (
    <div className={styles.menu}>
      <Navigation isVertical={true} />
    </div>
  );
};
