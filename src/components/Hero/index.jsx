import styles from './Home.module.css';
import BG from '../../assets/bg/img.jpg';
import Button from '../../Button/index.jsx';

export default function Home() {
  return (
    <section className={styles.promo}>
      <img
        className={styles.bg}
        src={BG}
        alt="BG"
      />
      <div className={styles.inner}>
        <div className="container">
          <p className={styles.text}>Amazing Discounts on Pets Products!</p>
          {/* <button className={styles.btn}>Check out</button> */}
          <Button
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
