// components/About.jsx
import styles from './About.module.css';

const skills = [
  'Java', 'JavaScript', 'React', 'Python', 'Next.js',
  'Node.js', 'AWS', 'Terraform',
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Software developer experienced in Java, React, and Node.js,
              with a strong interest in building complete applications from frontend to infrastructure.
              I enjoy working across the stack while designing systems, implementing features, and deploying them reliably.
              Learning new technologies and understanding how systems work end-to-end is a big part of what drives my work.
            </p>
            <p>
              Outside of programming, I enjoy arcade games, staying active, and listening to birds.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className={styles.skills}>
              {skills.map((skill) => (
                <li key={skill} className={styles.skill}>
                  <span className={styles.arrow}>▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imgBox}>
              {/* Replace src with your actual photo */}
              <div className={styles.placeholder}>
                <span>Your Photo Here</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
