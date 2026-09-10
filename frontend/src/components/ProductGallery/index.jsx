import { useState } from 'react';
import styles from './ProductGallery.module.css';

function ProductGallery({ images }) {
  return (
    <div className={styles.gallery}>
      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((src, index) => (
            <button
              key={index}
              type="button"
            >
              <img
                src={src}
                alt="image"
              />
            </button>
          ))}
        </div>
      )}

      <div className={styles.mainImage}>
        <img
          src={images[0]}
          alt="mainImage"
        />
      </div>
    </div>
  );
}
export default ProductGallery;
