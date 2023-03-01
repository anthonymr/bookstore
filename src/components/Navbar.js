import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Header() {
  return (
    <header className={styles['panel-bg']}>
      <span className={styles['Bookstore-CMS']}>
        Bookstore CMS
      </span>
      <nav>
        <NavLink className={`${styles.BOOKS} ${styles['Text-Style-3']}`} to="/">Books</NavLink>
        <NavLink className={`${styles.CATEGORIES} ${styles['Text-Style-3']}`} to="Categories">Categories</NavLink>
      </nav>
    </header>
  );
}

export default Header;
