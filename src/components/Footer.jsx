export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Navigate</h4>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
        </div>
        <div className="footer-col">
          <h4>More</h4>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:nishant.pahwa@publicisgroupe.com">Email</a>
          <a href="tel:+919518047082">Phone</a>
          <a href="https://www.linkedin.com/in/n-p-90625722a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="footer-col">
          <h4>Focus</h4>
          <a href="#skills">Data Quality &amp; QA</a>
          <a href="#skills">AI / Machine Learning</a>
          <a href="#skills">Cloud &amp; APIs</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {year} Nishant Pahwa</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-xs)' }}>
          <span className="brand-mark" aria-hidden="true" style={{ width: 24, height: 24, fontSize: 11 }}>N</span>
          Nishant Pahwa
        </span>
      </div>
    </footer>
  );
}
