import Breadcrumbs from '../../components/Breadcrumbs';
import Categories from '../../components/Categories';
import { useSelector } from 'react-redux';
import Skeleton from '../../UI/Skeleton';

import styles from './CategoriesPage.module.css';

function CategoriesPage() {
  const { items, status, error } = useSelector((state) => state.categories);

  if (status === 'loading') {
    return (
      <div className="container">
        <Breadcrumbs
          items={[{ label: 'Main page', to: '/' }, { label: 'Categories' }]}
        />

        <div className={styles.skeletonGrid}>
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className={styles.skeletonCard}
            >
              <Skeleton className={styles.skeletonImage} />

              <Skeleton className={styles.skeletonTitle} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (status === 'failed') {
    return (
      <div className="container">
        <Breadcrumbs
          items={[{ label: 'Main page', to: '/' }, { label: 'Categories' }]}
        />

        <p>Ошибка: {error}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Breadcrumbs
        items={[{ label: 'Main page', to: '/' }, { label: 'Categories' }]}
      />

      {status === 'succeeded' && <Categories items={items} />}
    </div>
  );
}

export default CategoriesPage;
