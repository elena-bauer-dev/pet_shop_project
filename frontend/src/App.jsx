import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import CategoryProducts from './pages/CategoryProducts';
import Products from './pages/Products';
import Sales from './pages/Sales';
import Cart from './pages/Cart';
import CardPage from './pages/CardPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainLayout />}
      >
        <Route
          index
          element={<Home />}
        />

        <Route
          path="categories"
          element={<CategoriesPage />}
        />
        <Route
          path="categories/:id"
          element={<CategoryProducts />}
        />
        <Route
          path="products"
          element={<Products />}
        />
        <Route
          path="products/:id"
          element={<CardPage />}
        />
        <Route
          path="sales"
          element={<Sales />}
        />
        <Route
          path="cart"
          element={<Cart />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
