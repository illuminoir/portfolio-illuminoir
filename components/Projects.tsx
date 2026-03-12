// components/Projects.jsx
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Travel Helper',
    image: '/projects/travelhelper.png',
    description: (
        <>
          Travel packing assistant that helps you organize luggage while staying within airline or train weight limits.
          <br /><br />
          • Imports your packing spreadsheet and calculates total luggage weight<br />
          • Highlights overweight combinations across multiple bags<br />
          • Quickly experiment with different packing scenarios
        </>
    ),
    tech: ['React', 'TypeScript', 'Express.js', 'AWS'],
    github: 'https://github.com/illuminoir/travel-helper',
    live: 'TODO',
    featured: true,
    align: 'left',
  },
  {
    title: 'Bird Finder',
    image: '/projects/birdfinder.png',
    description: (
        <>
          Bird detection system running on a Raspberry Pi that identifies nearby species using audio recordings.
          <br /><br />
          • Streams microphone input to classify bird calls in near real-time<br />
          • Detects hundreds of species using the{' '}
          <a href="https://birdnet.cornell.edu/" target="_blank" rel="noreferrer">
            BirdNET API
          </a><br />
          • Designed for continuous outdoor monitoring on low-power hardware
        </>
    ),
    tech: ['Python', 'NumPy', 'BirdNET API', 'python-telegram-bot', 'Raspberry Pi'],
    github: 'https://github.com/illuminoir/bird-finder-pi',
    live: 'TODO',
    featured: true,
    align: 'right',
  },
  {
    title: 'Telegram Reminder Bot',
    image: '/projects/telegrambotreminder.png',
    description: (
        <>
          Telegram bot that allows users to schedule one-time or recurring reminders directly from chat.
          <br /><br />
          • Supports daily reminders and scheduled alerts<br />
          • Simple command-based interface inside Telegram<br />
          • Lightweight personal automation tool for task tracking
        </>
    ),
    tech: ['Python', 'python-telegram-bot'],
    github: 'https://github.com/illuminoir/telegram-reminder-bot',
    live: 'TODO',
    featured: false,
    align: 'left',
  },
  {
    title: '// TO-DO App',
    image: '/projects/travelhelper.png',
    description:
      'TODO',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/illuminoir/todo',
    live: 'https://illuminoir.github.io/todo/',
    featured: true,
    align: 'right',
  },
];

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Some Things I've Built</h2>
        <div className={styles.list}>
          {projects.map((project, i) => (
            <div
              key={i}
              className={`${styles.project} ${project.align === 'right' ? styles.right : ''}`}
            >
              <div className={styles.imgPlaceholder}>
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className={styles.imgOverlay} />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{project.title}</h3>
                <div className={styles.desc}>
                  <p>{project.description}</p>
                </div>
                <ul className={styles.tech}>
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className={styles.links}>
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site">
                    <ExternalIcon />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
