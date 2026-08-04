export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container" style={{ width: '100%' }}>
        <span className="eyebrow">Senior QA Analyst · AI/ML Researcher</span>
        <h1 className="h-display hero-name">Hi, I'm Nishant.</h1>

        <div className="hero-row">
          <div>
            <p className="lede">
              I test data pipelines for a living — the SQL reconciliation and API validation that
              catch a bad migration before it reaches a dashboard. At PGD India, that's cut our
              testing timelines by about 20%. Lately I've pointed the same scrutiny at AI systems,
              evaluating RAG pipelines with RAGAS, MRR, and nDCG through my M.Tech at BITS Pilani.
            </p>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">View my work</a>
              <a href="#contact" className="link-underline">Get in touch →</a>
            </div>
          </div>
          <div className="hero-meta">
            <span className="status-pill"><span className="status-dot" aria-hidden="true"></span>Open to opportunities</span>
            <span>M.Tech AI &amp; ML · BITS Pilani (WILP)</span>
            <span>7+ years in QA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
