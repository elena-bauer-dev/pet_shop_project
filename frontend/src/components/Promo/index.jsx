import styles from './Promo.module.css';
import Content from '../../assets/bg/content.png';
import Button from '../../Button/index.jsx';
import { useRef, useState } from 'react';
import Modal from '../Modal/index.jsx';

function Promo() {
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function handleCloseModal() {
    setSubmitted(false);
    formRef.current?.reset();
  }

  return (
    <div className="container">
      <div className={styles.promo}>
        <h2 className={styles.title}>5% off on the first order</h2>
        <div className={styles.content}>
          <img
            className={styles.image}
            src={Content}
            alt="Content"
          />
          <form
            ref={formRef}
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
              fullWidth
            >
              {submitted ? 'Request Submitted' : 'Get a discount'}
            </Button>
          </form>
        </div>
      </div>

      {submitted && (
        <Modal onClose={handleCloseModal}>
          <h2>Congratulations!</h2>

          <p>Your request has been successfully submitted.</p>

          <p>We will contact you shortly.</p>
        </Modal>
      )}
    </div>
  );
}

export default Promo;
