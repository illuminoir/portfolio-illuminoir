// components/Footer.jsx
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Built by Allan Khelifi</p>
      <p className={styles.year}>ALLAN KHELIFI © {new Date().getFullYear()}</p>
    </footer>
  );
}
