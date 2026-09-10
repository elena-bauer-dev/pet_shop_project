import { useDispatch } from 'react-redux';
import Contacts from '../../components/Contacts';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categoriesSlice';

function MainLayout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Contacts />
    </>
  );
}

export default MainLayout;
