import styles from './QuantityPicker.module.css';
function QuantityPicker({ value, onChange, min = 1 }) {
  return (
    <div className={styles.quantity}>
      <button
        type="button"
        onClick={() => onChange(value - 1)}
        disabled={value <= min}
      >
        −
      </button>

      <span>{value}</span>

      <button
        type="button"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
export default QuantityPicker;








