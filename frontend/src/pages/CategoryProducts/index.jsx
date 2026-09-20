import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Breadcrumbs from '../../components/Breadcrumbs';
import Filter from '../../components/Filter';
import ProductGrid from '../../components/ProductGrid';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import { fetchCategoryProducts } from '../../store/categoriesSlice';
import styles from './CategoryProducts.module.css';
import Skeleton from '../../UI/Skeleton';

function CategoryProducts() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { current, currentProducts, currentStatus, error } = useSelector(
    (state) => state.categories,
  );
  const state = useSelector((state) => state);

  console.log(state);
  console.log(state.categories);
  console.log(state.categories.currentProducts);
  useEffect(() => {
    dispatch(fetchCategoryProducts(id));
  }, [id, dispatch]);
  console.log(currentProducts);
  const items = useFilteredProducts(currentProducts ?? []);

  if (currentStatus === 'loading') {
    return (
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Main page', to: '/' },
            { label: 'Categories', to: '/categories' },
            { label: current?.title || 'Category' },
          ]}
        />

        <h1 className={styles.title}>{current?.title || 'Category'}</h1>

        <Filter />

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
    );
  }

  if (currentStatus === 'failed') {
    return (
      <div className="container">
        <p>Ошибка: {error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories', to: '/categories' },
          { label: current?.title },
        ]}
      />

      <h1 className={styles.title}>{current?.title}</h1>

      <Filter />

      <ProductGrid items={items} />
    </div>
  );
}

export default CategoryProducts;
