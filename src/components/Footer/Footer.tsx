import styles from './Footer.module.scss';
import logo from '../../images/logo/Logo.svg';

type Props = {
  isMenuOpen: boolean;
};

export const Footer: React.FC<Props> = ({ isMenuOpen }) => {
  const handleScrollToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      {isMenuOpen ? (
        <div className={styles.buttons}>
          <button
            className={`${styles.button} ${styles['button--favourites']}`}
          ></button>
          <button
            className={`${styles.button} ${styles['button--shoppingbag']}`}
          ></button>
        </div>
      ) : (
        <>
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
        </>
      )}
    </footer>
  );
};
