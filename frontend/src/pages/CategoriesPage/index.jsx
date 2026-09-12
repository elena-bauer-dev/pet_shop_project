import Breadcrumbs from '../../components/Breadcrumbs';
import Categories from '../../components/Categories';
import { useSelector } from 'react-redux';

function CategoriesPage() {
  const { items, status, error } = useSelector((state) => state.categories);
  console.log(items);
  return (
    <div className="container">
      <Breadcrumbs
        items={[{ label: 'Main page', to: '/' }, { label: 'Categories' }]}
      />
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && <p>Ошибка: {error}</p>}
      {status === 'succeeded' && <Categories items={items} />}
    </div>
  );
}
export default CategoriesPage;
