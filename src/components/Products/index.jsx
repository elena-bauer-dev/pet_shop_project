import Cards from '../Cards';
import styles from './Products.module.css';

import Dry_Dog from '../../assets/img/Dry_Dog.jpg';
import Ultra_Cat from '../../assets/img/Ultra_Cat.jpg';
import Black_Dog from '../../assets/img/Black_Dog.jpg';
import Cat_Toy from '../../assets/img/Cat_Toy.jpg';

function Products() {
  return (
    <section className="container">
      <h2 className={styles.title}>Sale</h2>

      <div className={styles.products}>
        <Cards
          image={Dry_Dog}
          title="Dry Dog Food for Adult..."
          price="80$"
          oldPrice="100$"
          discount="-50%"
        />

        <Cards
          image={Ultra_Cat}
          title="Ultra Cat Litter Tray Self..."
          price="450$"
          oldPrice="600$"
          discount="-34%"
        />

        <Cards
          image={Black_Dog}
          title="Black Dog Bed, Large..."
          price="50"
          oldPrice="150"
          discount="-25%"
        />

        <Cards
          image={Cat_Toy}
          title="Cat Toy with Real Rand..."
          price="25"
          oldPrice="50"
          discount="-17%"
        />
      </div>
    </section>
  );
}

export default Products;
