// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>AK</a>

        <nav className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link, i) => (
            <a key={link.href} href={link.href} className={styles.link} onClick={() => setMenuOpen(false)}>
              <span className={styles.num}></span> {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className={styles.resumeBtn}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
