import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <nav className="nav">
        <a href="#home" className="brand">
          <span className="brand-mark" aria-hidden="true">N</span>
          Nishant Pahwa
        </a>
        <ul className="nav-links">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-sm)' }}>
          <a href="#contact" className="link-underline nav-cta" style={{ fontSize: 14 }}>Get in touch</a>
          <button
            type="button"
            className="hamburger"
            aria-expanded={open}
            aria-controls="mobileSheet"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hamburger-icon" aria-hidden="true"><span></span><span></span><span></span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-sheet ${open ? 'open' : ''}`} id="mobileSheet">
        <ul>
          {[...LINKS, { href: '#contact', label: 'Contact' }].map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
