import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import { Icon } from '../../image/Icon';

const Logo = () => {
  return (
    <Link to="/" className={styles.logoLink}>
      <Icon
        id="icon-logo"
        width="136"
        height="16"
        className={styles.logoIcon}
      />
    </Link>
  );
};

export default Logo;
