'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/components/ProjectsContact.module.css';

const projects = [
    {
        title: 'Travel Helper',
        image: '/projects/travelhelper.png',
        description: (
            <>
                Travel packing assistant that helps you organize luggage while staying within airline or train weight limits.
                <br /><br />
                • Imports your packing spreadsheet and calculates total weight<br />
                • Highlights overweight combinations across multiple bags<br />
                • Quickly experiment with different packing scenarios
            </>
        ),
        tech: ['React', 'TypeScript', 'Express.js', 'AWS'],
        github: 'https://github.com/illuminoir/travel-helper',
        live: 'TODO',
        align: 'left',
    },
    {
        title: 'Bird Finder',
        image: '/projects/birdnet.png',
        description: (
            <>
                Bird detection system running on a Raspberry Pi that identifies nearby species using audio recordings.
                <br /><br />
                • Streams microphone input to classify bird calls in near real-time<br />
                • Detects hundreds of species using the{' '}
                <a href="https://birdnet.cornell.edu/" target="_blank" rel="noreferrer">BirdNET API</a><br />
                • Designed for continuous outdoor monitoring on low-power hardware
            </>
        ),
        tech: ['Python', 'NumPy', 'BirdNET API', 'python-telegram-bot', 'Raspberry Pi'],
        github: 'https://github.com/illuminoir/bird-finder-pi',
        live: 'TODO',
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
        align: 'left',
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

export default function ProjectsContact() {
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    useEffect(() => {
        const onKey = (e) => { if (e.key === 'Escape') handleClose(); };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            setSubmitted(false);
            setForm({ name: '', email: '', message: '' });
        }, 300);
    };

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
        setSubmitted(true);
    };

    return (
        <section id="projects-contact">
            {/* ── Projects ── */}
            <div id="projects">
                <div className="container">
                    <h2 className="section-title">Some Things I&apos;ve Built</h2>
                    <div className={styles.list}>
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className={`${styles.project} ${styles.right}`}
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
            </div>

            {/* ── Contact ── */}
            <div id="contact">
                <div className="container">
                    <div className={styles.contactWrapper}>
                        <button className={styles.contactBtn} onClick={() => setOpen(true)}>
                            Get In Touch
                        </button>
                        <div className={styles.social}>
                            <a href="https://www.linkedin.com/in/allan-khelifi/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                    <rect x="2" y="9" width="4" height="12" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                            <a href="https://github.com/illuminoir" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                </svg>
                            </a>
                            <a href="mailto:khelifiallan@gmail.com" aria-label="Email">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Backdrop ── */}
            {open && (
                <div className={styles.backdrop} onClick={handleClose} aria-hidden="true" />
            )}

            {/* ── Modal ── */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Contact form"
                className={`${styles.modal} ${open ? styles.modalOpen : ''}`}
            >
                <button className={styles.closeBtn} onClick={handleClose} aria-label="Close">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <h3 className={styles.modalTitle}>Send a Message</h3>
                {submitted ? (
                    <div className={styles.success}>
                        <p>Thanks for reaching out! I&apos;ll get back to you soon. ✓</p>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label htmlFor="name">Name</label>
                                <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} placeholder="Your message..." value={form.message} onChange={handleChange} required />
                        </div>
                        <button type="submit" className={styles.btnSubmit}>Send Message</button>
                    </form>
                )}
            </div>
        </section>
    );
}