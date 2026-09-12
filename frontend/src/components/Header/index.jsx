import { useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const count = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className={styles.inner}>
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
          >
            <img
              className={styles.logo}
              src={Logo}
              alt="logo"
            />
          </Link>

          {/* Navigation */}
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.list}>
              {NavItems.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={styles.link}
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className={styles.actions}>
            {/* Mobile menu button */}
            <button
              type="button"
              className={styles.menuButton}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            {/* Cart */}
            <Link
              to="/cart"
              className={styles.cart}
            >
              <img
                key={count}
                className={`${styles.cartIcon} ${
                  count > 0 ? styles.cartBounce : ''
                }`}
                src={Cart}
                alt="cart"
              />

              {count > 0 && <span className={styles.badge}>{count}</span>}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
