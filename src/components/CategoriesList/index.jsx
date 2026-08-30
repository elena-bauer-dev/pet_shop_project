import styles from './CategoriesList.module.css';
import CategoriesCard from '../CategoriesCard';
import Dry_Wet_Food from '../../assets/img/Dry_Wet_Food.jpg';
import Litter_Boxes from '../../assets/img/Litter_Boxes.jpg';
import Baskets from '../../assets/img/Baskets.jpg';
import Toys from '../../assets/img/Toys.jpg';

function CategoriesList() {
  return (
    <div className="container">
      <div>
        <h2 className={styles.title}>Categories</h2>
        <div className={styles.categories}>
          <CategoriesCard
            image={Dry_Wet_Food}
            title="Dry & Wet Food"
          />

          <CategoriesCard
            image={Litter_Boxes}
            title="Litter Boxes & Litter Trays"
          />

          <CategoriesCard
            image={Baskets}
            title="Baskets & Beds"
          />

          <CategoriesCard
            image={Toys}
            title="Toys"
          />
        </div>
      </div>
    </div>
  );
}

export default CategoriesList;
