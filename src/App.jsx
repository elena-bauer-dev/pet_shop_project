import Header from './components/Header';
import Home from './components/Home';
import CategoriesList from './components/CategoriesList';
import Promo from './components/Promo';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <CategoriesList />
        <Promo />
      </main>
    </>
  );
}

export default App;
