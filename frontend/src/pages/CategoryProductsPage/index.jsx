import Categories from '../../components/Categories';
import { categories } from '../../data/categories';
import Breadcrumbs from '../../components/Breadcrumbs';

function CategoryProductsPage() {
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories', to: '/categories' },
          { label: 'Dry & Wet Food' },
        ]}
      />
      <Categories items={categories} />
    </div>
  );
}
export default CategoryProductsPage;
