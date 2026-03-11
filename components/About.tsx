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
              I'm a software developer with a deep passion for learning and experience with Java,
              React, Node.js and all things application development. Working with the whole stack, including infrastructure,
              is something I've greatly enjoyed. It drives my excitement and passion
              for web development.
            </p>
            <p>
              When I'm not at my computer I like to spend my time playing arcade games, keeping fit,
              and listening to birds.
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
