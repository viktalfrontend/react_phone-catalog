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
      {/* <div className={styles.buttons}>
        <button className={`${styles.favourites}`}></button>
        <button className={`${styles.shoppingbag}`}></button>
      </div> */}

      <div className={styles.content}>
        <a href="#">
          <img className={styles.logoImg} src={logo} alt="logo" />
        </a>

        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li>
              <a
                href="https://github.com/viktalfrontend"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Github
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Contacts
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                rights
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.btnTop}>
          <span className={styles.btnName}> Back to top</span>
          <a
            href="#top"
            className={styles.buttonArrow}
            onClick={handleScrollToTop}
          ></a>
        </div>
      </div>
    </footer>
  );
};
