// components/Hero.jsx
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.greeting}>Hi, my name is</p>
        <h1 className={styles.name}>Allan Khelifi.</h1>
        <h2 className={styles.tagline}>I build software for fun.</h2>
        <p className={styles.description}>
          I'm a software developer with a deep passion for problem solving
          and all things development. I love the unique combination of
          creativity, logic, and technology that comes with building applicationns.
        </p>
        <div className={styles.cta}>
          <a href="#projects" className={styles.btn}>
            View my work →
          </a>
          <a href="#contact" className={styles.btnGhost}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
