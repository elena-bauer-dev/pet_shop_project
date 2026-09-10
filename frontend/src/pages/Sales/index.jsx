import { useEffect } from 'react';
import Breadcrumbs from '../../components/Breadcrumbs';
import ProductGrid from '../../components/ProductGrid';
import { useFilteredProducts } from '../../hooks/useFilteredProducts';
import Filter from '../../components/Filter';

import styles from './Sales.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';

function Sales() {
  const dispatch = useDispatch();

  const { items: all, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const discounted = all.filter((product) => product.discont_price != null);

  const items = useFilteredProducts(discounted);

  return (
    <div className="container">
      <Breadcrumbs
        items={[{ label: 'Main page', to: '/' }, { label: 'All sales' }]}
      />

      <h1 className={styles.title}>Discounted items</h1>

      <Filter withDiscountedFilter={false} />

      <ProductGrid items={items} />
    </div>
  );
}

export default Sales;
