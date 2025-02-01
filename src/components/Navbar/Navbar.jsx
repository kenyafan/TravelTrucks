import { NavLink } from 'react-router-dom';
import styles from '../Navbar/Navbar.module.css';
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <div className={'container'}>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.navLinks}>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navLink} ${styles.activeLink}`
                : styles.navLink
            }
            to="/catalog"
          >
            Catalog
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
