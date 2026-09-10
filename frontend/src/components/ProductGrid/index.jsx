import Cards from '../Cards';
import styles from './ProductGrid.module.css';
function ProductGrid({items}) {
  if(items.length === 0){
    return(
      <p>Товаров не найдено</p>
    )
  }
  return (
    <ul className={styles.cardsGrid}>
      {items.map((product) => (
        <li key={product.id}>
          <Cards product={product} />
        </li>
      ))}
    </ul>
  );
}
export default ProductGrid;
