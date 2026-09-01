import Contacts from '../../components/Contacts';
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
function MainLayout() {
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
