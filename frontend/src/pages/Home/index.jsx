import Hero from '../../components/Hero';
import Promo from '../../components/Promo';
import Products from '../../components/Products';
import Categories from '../../components/Categories';
import { useSelector } from 'react-redux';


function Home() {
  const categories = useSelector((state) => state.categories.items);
  return (
    <>
      <Hero />
      <div className="container">
        <Categories items={categories.slice(0, 4)} />
      </div>
      <Promo />
      <Products />
    </>
  );
}
export default Home;
