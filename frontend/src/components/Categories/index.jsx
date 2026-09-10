import CategoriesList from '../CategoriesList';
import styles from './Categories.module.css';
function Categories({ items }) {
  return (
    <>
      <h2 className={styles.title}>Categories</h2>
      <CategoriesList items={items} />
    </>
  );
}

export default Categories;
