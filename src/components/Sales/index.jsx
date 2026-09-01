import Products from '../Products';
import styles from './Sales.module.css';

function Sales() {
  return (
    <div className="container">
      <h2>Sale</h2>
      <div className={styles.products}>
        <Products />
        <Products />
        <Products />
        <Products />
      </div>
    </div>
  );
}

export default Sales;
