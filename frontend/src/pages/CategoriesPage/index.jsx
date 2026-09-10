import Breadcrumbs from '../../components/Breadcrumbs';
import Categories from '../../components/Categories';
import { categories } from '../../data/categories';

function CategoriesPage() {
  return (
    <div className="container">
      <Breadcrumbs
        items={[
          { label: 'Main page', to: '/' },
          { label: 'Categories' },
        ]}
      />
      <Categories items={categories} />
    </div>
  );
}
export default CategoriesPage;
