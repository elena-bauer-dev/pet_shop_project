import styles from './CategoriesCard.module.css';

function CategoriesCard({ image, title }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={image}
        alt={title}
      />
      <p className={styles.categoryName}>{title}</p>
    </article>
  );
}

export default CategoriesCard;
