import styles from './NotFoundPage.module.scss';
import pageNotFound from '../../../public/img/page-not-found.png';

export const NotFoundPage = () => (
  <div>
    <h1>Page not found</h1>
    <img className={styles.img} src={pageNotFound} alt="page not found" />
  </div>
);
