import { useNavigate } from 'react-router-dom';
import styles from '../Home/Home.module.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Campers of your dreams</h1>
      <p className={styles.description}>
        You can find everything you want in our catalog
      </p>
      <button className={styles.button} onClick={() => navigate('/catalog')}>
        View Now
      </button>
    </div>
  );
};

export default Home;
