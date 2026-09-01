import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';

import './App.css';
import Categories from './pages/Categories';

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
          element={<Categories />}
        />
      </Route>
    </Routes>
  );
}

export default App;
