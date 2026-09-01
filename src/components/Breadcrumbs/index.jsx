import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

function Breadcrumbs({ items }) {
  return (
    <nav className={styles.crumbs}>
      <ul>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.to ?? item.label}>
              {isLast ? (
                <span>{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Breadcrumbs;
