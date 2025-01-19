import styles from './NotFoundPage.module.scss';
import pageNotFound from '/img/page-not-found.png';

export const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>Page not found</h1>
      <img className={styles.img} src={pageNotFound} alt="page not found" />
    </div>
  );
};
