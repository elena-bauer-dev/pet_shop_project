import Logo from '@/assets/icons/logo.svg';
import Cart from '@/assets/icons/cart.svg';
import styles from './Header.module.css';

function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.inner}>
          <a href="#">
            <img
              className={styles.logo}
              src={Logo}
              alt="logo"
            />
          </a>
          <nav className={styles.nav}>
            <ul className={styles.list}>
              <li>
                <a
                  href=""
                  className={styles.link}
                >
                  Main Page
                </a>
              </li>
              <li>
                <a
                  href=""
                  className={styles.link}
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href=""
                  className={styles.link}
                >
                  All products
                </a>
              </li>
              <li>
                <a
                  href=""
                  className={styles.link}
                >
                  All sales
                </a>
              </li>
            </ul>
          </nav>
          <button
            className={styles.cart}
            type="button"
          >
            <img
              className={styles.cartIcon}
              src={Cart}
              alt="cart"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
