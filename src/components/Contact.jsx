import { useState } from 'react';
import Reveal from './Reveal.jsx';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      e.target.reset();
    }, 700);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal as="span" className="eyebrow" style={{ display: 'inline-flex' }}>Get in Touch</Reveal>
        <Reveal as="h2" className="h-xl">Let's build something that actually works.</Reveal>
        <Reveal as="p" className="lede" style={{ marginTop: 'var(--s-md)' }}>
          Whether it's a data engineering challenge, an AI/ML project, or a QA engagement — reach out.
        </Reveal>

        <div className="grid grid-2" style={{ marginTop: 'var(--s-xxl)', alignItems: 'start' }}>
          <Reveal>
            <span className="small-copy" style={{ display: 'block', marginBottom: 'var(--s-md)', textTransform: 'uppercase', letterSpacing: '.06em' }}>Direct</span>
            <div className="contact-list lede" style={{ fontSize: 16 }}>
              <a href="mailto:nishant.pahwa@publicisgroupe.com">nishant.pahwa@publicisgroupe.com</a>
              <a href="tel:+919518047082">+91-9518047082</a>
              <a href="https://www.linkedin.com/in/n-p-90625722a" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </Reveal>

          <Reveal>
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="What's this about?" />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  <span className="prompt" aria-hidden="true">$</span> {status === 'sending' ? 'sending...' : 'send-message'}
                </button>
                <span className="form-status" role="status">
                  {status === 'sent' && (
                    <><span className="ok-mark">✓</span> Message sent — I'll reply within 24 hours.</>
                  )}
                </span>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
