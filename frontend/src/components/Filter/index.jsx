import { useSearchParams } from 'react-router-dom';
import styles from './Filter.module.css';

function Filter({ withDiscountedFilter = true }) {
  const [params, setParams] = useSearchParams();

  function update(key, value) {
    const copy = new URLSearchParams(params);
    if (value) {
      copy.set(key, value);
    } else {
      copy.delete(key);
    }
    setParams(copy);
  }

  return (
    <div className={styles.filter}>
      <div className={styles.group}>
        <span className={styles.label}>Price</span>
        <input
          className={styles.input}
          type="number"
          placeholder="from"
          value={params.get('from') ?? ''}
          onChange={(e) => update('from', e.target.value)}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="to"
          value={params.get('to') ?? ''}
          onChange={(e) => update('to', e.target.value)}
        />
      </div>
      {withDiscountedFilter && (
        <label className={styles.group}>
          <span className={styles.label}>Discounted items</span>
          <input
            type="checkbox"
            checked={params.get('discounted') === 'true'}
            onChange={(e) =>
              update('discounted', e.target.checked ? 'true' : '')
            }
          />
        </label>
      )}
      <div className={styles.group}>
        <span className={styles.label}>Sorted</span>
        <select
          className={styles.select}
          value={params.get('sort') ?? 'default'}
          onChange={(e) =>
            update('sort', e.target.value === 'default' ? '' : e.target.value)
          }
        >
          <option value="default">by default</option>
          <option value="newest">newest</option>
          <option value="price-high">price: high-low</option>
          <option value="price-low">price: low-high</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
