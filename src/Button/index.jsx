import styles from './Button.module.css';

function Button({
  children,
  variant,
  size,
  fullWidth = false,
  className = '',
  ...props
}) {
  const classes = [
    styles.btn,
    variant && styles[`btn--${variant}`],
    size && styles[`btn--${size}`],
    fullWidth && styles[`btn--full`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
