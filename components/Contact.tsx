'use client';
import { useState, useEffect } from 'react';
import styles from '@/components/Contact.module.css';

export default function Contact() {
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
    // Integrate with your preferred email service (e.g. Formspree, EmailJS, Resend)
    // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form), headers: { 'Content-Type': 'application/json' } })
    setSubmitted(true);
  };

  return (
      <section id="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>

          <div className={styles.wrapper}>
            <p className={styles.intro}>
              Have a question or want to work together? I&apos;d love to hear from you.
            </p>

            <button className={styles.btn} onClick={() => setOpen(true)}>
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

        {/* Backdrop */}
        {open && (
            <div className={styles.backdrop} onClick={handleClose} aria-hidden="true" />
        )}

        {/* Modal */}
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
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label htmlFor="message">Message</label>
                  <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Your message..."
                      value={form.message}
                      onChange={handleChange}
                      required
                  />
                </div>
                <button type="submit" className={styles.btnSubmit}>
                  Send Message
                </button>
              </form>
          )}
        </div>
      </section>
  );
}