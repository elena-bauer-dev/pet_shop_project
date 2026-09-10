import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from './Products.module.css';
import ProductGrid from '../ProductGrid';
import { getProducts } from '../../api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        console.log('PRODUCTS FROM BACKEND:', response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error loading products:', error);
      });
  }, []);

  const discounted = products
    .filter((product) => product.discont_price)
    .slice(0, 4);

  console.log('SALE PRODUCTS:', discounted);

  return (
    <section className="container">
      <div className={styles.sales}>
        <h2 className={styles.title}>Sale</h2>

        <Link
          to="/sales"
          className={styles.allLink}
        >
          All sales
        </Link>
      </div>

      <ProductGrid items={discounted} />
    </section>
  );
}

export default Products;
