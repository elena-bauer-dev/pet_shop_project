import CategoriesList from '../../components/CategoriesList';
import Breadcrumbs from '../../components/Breadcrumbs';

function Categories() {
  return (
    <>
      <Breadcrumbs
        items={[{ label: 'Main page', to: '/' }, { label: 'Categories' }]}
      />
      <CategoriesList />
    </>
  );
}

export default Categories;
