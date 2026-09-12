import { Link, NavLink } from 'react-router-dom';
import Logo from '@/assets/icons/logo.svg';
import Cart from '@/assets/icons/cart.svg';
import styles from './Header.module.css';
import { useSelector } from 'react-redux';

const NavItems = [
  { to: '/', label: 'Main Page' },
  { to: '/categories', label: 'Categories' },
  { to: '/products', label: 'All Products' },
  { to: '/sales', label: 'All sales' },
];

function Header() {
  const count = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  return (
    <header>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/">
            <img
              className={styles.logo}
              src={Logo}
              alt="logo"
            />
          </Link>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              {NavItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={styles.link}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            to="/cart"
            className={styles.cart}
          >
            <img
              className={styles.cartIcon}
              src={Cart}
              alt="cart"
            />
            {count > 0 && <span className={styles.badge}>{count}</span>}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
