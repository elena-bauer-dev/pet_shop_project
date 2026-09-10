import styles from './CategoriesList.module.css';

import CategoriesCard from '../CategoriesCard';

function CategoriesList({ items }) {
  return (
        
        <ul className={styles.categories}>
          {items.map((category) => (
            <li key={category.id}>
              <CategoriesCard
              category={category}
            />
            </li>
          ))}
        </ul>
  );
}

export default CategoriesList;
