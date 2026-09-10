import { Link } from 'react-router-dom';
import styles from './CategoriesCard.module.css';
import { getProductImageUrl } from '../../api';

function CategoriesCard({ category }) {
  const { id, image, title } = category;
  return (
    <Link
      to={`/categories/${id}`}
      className={styles.card}
    >
      <img
        className={styles.image}
        src={getProductImageUrl(id)}
        alt={title}
      />
      <p className={styles.categoryName}>{title}</p>
    </Link>
  );
}

export default CategoriesCard;
