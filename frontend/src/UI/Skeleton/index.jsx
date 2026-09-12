import styles from './Skeleton.module.css';
function Skeleton({ className = '', style }) {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={style}
    ></div>
  );
}
export default Skeleton;
