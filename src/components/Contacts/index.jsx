import styles from './Contacts.module.css';
import { useRef, useEffect } from 'react';

function Contacts() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current) return;
    const shop = [52.51127446478396, 13.404457139628226];
    const map = window.L.map(containerRef.current).setView(shop, 17);

    window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    window.L.marker(shop)
      .addTo(map)
      .bindPopup(
        '<strong>Наш магазин</strong><br>Wallstraße 9-13, 10179 Berlin',
      )
      .openPopup();

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="container">
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.contacts}>
        <div className={styles.contactItem}>
          <span>Phone</span>
          <a href="tel:+493091588492" className={styles.text}>+49 30 915-88492</a>
        </div>

        <div className={styles.contactItem}>
          <span>Socials</span>
          {/* icons */}
        </div>

        <div className={styles.contactItem}>
          <span>Address</span>
          <address className={styles.text}>
            Wallstraße 9-13, 10179 Berlin, Deutschland
          </address>
        </div>

        <div className={styles.contactItem}>
          <span>Working Hours</span>
          <p className={styles.text}>24 hours a day</p>
        </div>
      </div>
      <div
        ref={containerRef}
        className={styles.map}
      ></div>
    </div>
  );
}

export default Contacts;
