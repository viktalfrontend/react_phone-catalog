import styles from './Footer.module.scss';
import logo from '../../images/logo/Logo.svg';

export const Footer: React.FC = () => {
  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logo}>
        <a className={styles.footer__link} href="#">
          <img className={styles.logo__img} src={logo} alt="logo" />
        </a>
      </div>

      <div className={styles.footer__menu}>
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a
                href="https://github.com/viktalfrontend"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.nav__link}
              >
                Github
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                Contacts
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#" className={styles.nav__link}>
                rights
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.footer__button}>
        <span className={styles.buttonname}> Back to top</span>
        <a
          href="#top"
          className={styles.buttonarrow}
          onClick={handleScrollToTop}
        ></a>
      </div>
    </footer>
  );
};
