import dog from '../../../public/img/dog.png';
import errorImage from '../../assets/icons/errorImage.svg';
import styles from './NotFoundPage.module.css';
import { useState } from 'react';
import Button from '../../Button';

function NotFoundPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <section className="container">
      <div className={styles.content}>
        <div className={styles.errorImage}>
          <img
            src={errorImage}
            alt="4"
          />

          <img
            className={styles.mainImage}
            src={dog}
            alt="dog"
          />

          <img
            src={errorImage}
            alt="4"
          />
        </div>

        <h4 className={styles.errorTitle}>Page Not Found</h4>

        <p className={styles.errorText}>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>

        <Button
          className={styles.card__btn}
          type="button"
          onClick={handleSubmit}
          variant={submitted ? 'white' : 'blue'}
          fullWidth
        >
          {submitted ? 'Request Submitted' : 'Go Home'}
        </Button>
      </div>
    </section>
  );
}

export default NotFoundPage;
