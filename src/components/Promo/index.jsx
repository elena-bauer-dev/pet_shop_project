import styles from './Promo.module.css';
import Content from '../../assets/bg/content.png';
import Button from '../../Button/index.jsx';
import { useState } from 'react';

function Promo() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className={styles.promo}>
      <div className="container">
        <h2 className={styles.title}>5% off on the first order</h2>
        <div className={styles.content}>
          <img
            className={styles.image}
            src={Content}
            alt="Content"
          />
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input
              className={styles.input}
              type="text"
              placeholder="Name"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Phone number"
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Email"
            />
            <Button
              type="submit"
              variant={submitted ? 'ghost' : 'white'}
              // disabled={submitted}
              fullWidth
            >
              {submitted ? 'Request Submitted' : 'Get a discount'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Promo;
