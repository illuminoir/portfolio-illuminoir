// components/Projects.jsx
import Image from 'next/image';
import styles from './Projects.module.css';

const projects = [
  {
    title: 'Travel Helper App',
    image: '/projects/travelhelper.png',
    description:
      'Smart travel packing app built with React, TypeScript, and Express.js, hosted on AWS. Easily add items, track total luggage weight in real time, and pack confidently without exceeding limits.',
    tech: ['React', 'TypeScript', 'Express', 'Docker', 'AWS'],
    github: 'https://github.com/illuminoir/travel-helper',
    live: 'TODO',
    featured: true,
    align: 'left',
  },
  {
    title: 'Bird Finder',
    image: '/projects/travelhelper.png',
    description: (
        <>
          Application designed to help me and my partner ground. With a microphone
          connected to a Raspberry PI, it identifies birds near the microphone and notifies
          you about their presence. Built using{' '}
          <a href="https://birdnet.cornell.edu/" target="_blank" rel="noreferrer">BirdNET API</a>.
        </>
    ),
    tech: ['Python', 'Numpy', 'BirdNET API', 'python-telegram-bot'],
    github: 'https://github.com/bscottnz/nextjs-chakra-chatapp',
    live: 'https://nextjs-chakra-chatapp-qnhb6dq42-bscottnz.vercel.app/',
    featured: true,
    align: 'right',
  },
  {
    title: 'Telegram Bot Reminder',
    image: '/projects/telegrambotreminder.png',
    description:
      'Telegram bot that allows you to set both one-time and daily reminders.',
    tech: ['Python', 'python-telegram-bot'],
    github: 'https://github.com/illuminoir/telegram-bot-reminder',
    live: 'https://t.me/RemindAllanBot',
    featured: true,
    align: 'left',
  },
  {
    title: '// TO-DO Productivity App',
    image: '/projects/travelhelper.png',
    description:
      'Keep track of tasks with custom project folders and notes. Built with vanilla JavaScript with local storage persistence.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/bscottnz/todo',
    live: 'https://bscottnz.github.io/todo/',
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
                <p className={styles.featured}>Featured Project</p>
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
