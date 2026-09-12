import { Link } from 'react-router-dom';
import { getImageUrl } from '../../api';
import styles from './Cards.module.css';
import Button from '../../Button';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

function Cards({ product }) {
  const dispatch = useDispatch();
  const { id, title, price, discont_price } = product;

  const finalPrice = discont_price ?? price;
  const discount = discont_price
    ? Math.round((1 - discont_price / price) * 100)
    : null;

  function handleAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addItem({ product }));
  }
  return (
    <Link
      to={`/products/${id}`}
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <img
          src={getImageUrl(`/product_img/${id}.jpeg`)}
          alt={title}
          className={styles.image}
        />

        {discount && <span className={styles.discount}>-{discount}%</span>}

        <Button
          variant="blue"
          className={styles.card__btn}
          size="card"
          onClick={handleAdd}
        >
          Add to cart
        </Button>
      </div>

      <div className={styles.info}>
        <h3>{title}</h3>

        <p className={styles.price}>
          ${finalPrice}
          {discont_price && <del>${price}</del>}
        </p>
      </div>
    </Link>
  );
}

export default Cards;
