import Breadcrumbs from '../../components/Breadcrumbs';
import ProductGrid from '../../components/ProductGrid';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import Filter from '../../components/Filter';

import styles from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/productsSlice';
import Skeleton from '../../UI/Skeleton';

function Products() {
  const dispatch = useDispatch();
  const { items: all, status, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);
  const items = useFilteredProducts(all);
  if (status === 'loading') {
    return (
      <div className="container">
        <div className={styles.productsPage}>
          <Breadcrumbs
            items={[{ label: 'Main page', to: '/' }, { label: 'All products' }]}
          />

          <h1 className={styles.title}>All products</h1>

          <Filter withDiscountedFilter={true} />

          <ul className={styles.skeletonGrid}>
            {Array.from({ length: 8 }).map((_, index) => (
              <li
                key={index}
                className={styles.skeletonCard}
              >
                <Skeleton className={styles.skeletonImage} />

                <Skeleton className={styles.skeletonTitle} />

                <Skeleton className={styles.skeletonPrice} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="container">
        <p>Ошибка: {error}</p>
      </div>
    );
  }
  return (
    <div className="container">
      <div className={styles.productsPage}>
        <Breadcrumbs
          items={[{ label: 'Main page', to: '/' }, { label: 'All products' }]}
        />

        <h1 className={styles.title}>All products</h1>

        <Filter withDiscountedFilter={true} />

        <ProductGrid items={items} />
      </div>
    </div>
  );
}

export default Products;
