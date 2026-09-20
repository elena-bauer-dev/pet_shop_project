import styles from './Home.module.css';
import BG from '../../assets/bg/img.jpg';
import Button from '../../Button/index.jsx';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <section className={styles.promo}>
      <img
        className={styles.bg}
        src={BG}
        alt="BG"
      />
      <div className={styles.inner}>
        <div className="container">
          <h1 className={styles.text}>
            <span>Amazing</span>
            <span>Discounts</span>
            <span>on</span>
            <span>Pets</span>
            <span>Products!</span>
          </h1>
          <Button
            onClick={() => navigate('/cart')}
            variant={'blue'}
            className={styles.card__btn}
          >
            Check out
          </Button>
        </div>
      </div>
    </section>
  );
}
