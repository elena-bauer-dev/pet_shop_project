import { useParams } from 'react-router-dom';
import { useState } from 'react';
import QuantityPicker from '../../components/QuantityPicker/index.jsx';
import Breadcrumbs from '../../components/Breadcrumbs';

import ProductGallery from '../../components/ProductGallery';
import styles from './Card.Page.module.css';
import NotFoundPage from '../NotFoundPage';
import Button from '../../Button/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getImageUrl } from '../../api';
import { addItem } from '../../store/cartSlice.js';

function CardPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [deployed, setDeployed] = useState(false);

  const products = useSelector((state) => state.products.items);
  const categories = useSelector((state) => state.categories.items);

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <NotFoundPage />;
  }

  const { title, price, categoryId, description, discont_price, image } =
    product;

  const category = categories.find((item) => item.id === categoryId);

  const finalPrice = discont_price ?? price;
  const discount = discont_price
    ? Math.round((1 - discont_price / price) * 100)
    : null;

  const gallery = [image, image, image].map(getImageUrl);

  function handleAddToCart() {
    dispatch(addItem({ product, quantity }));
  }

  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories', to: '/categories' },
          { label: category?.title, to: `/categories/${categoryId}` },
          { label: title },
        ]}
      />

      <div className={styles.product}>
        <ProductGallery images={gallery} />
        <div className={styles.info}>
          <h3>{title}</h3>

          <div className={styles.price}>
            <span className={styles.currentPrice}>${finalPrice}</span>

            {discont_price && (
              <span className={styles.oldPrice}>${price}</span>
            )}

            {discount && <span className={styles.discount}>-{discount}%</span>}
          </div>

          <div className={styles.actions}>
            <QuantityPicker
              value={quantity}
              onChange={setQuantity}
            />

            <Button
              variant="blue"
              className={styles.addToCart}
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </div>

          <div className={styles.description}>
            <h4>Description</h4>

            <p className={deployed ? styles.expanded : styles.collapsed}>
              {description}
            </p>

            <button
              className={styles.readMore}
              onClick={() => setDeployed(!deployed)}
            >
              {deployed ? 'Read less' : 'Read more'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPage;
