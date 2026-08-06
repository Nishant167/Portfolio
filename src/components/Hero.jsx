const SQL_LINES = [
  { type: 'comment', text: '-- source vs. warehouse row-count reconciliation' },
  { type: 'code', text: 'SELECT source_count, warehouse_count,' },
  { type: 'code', text: '       source_count - warehouse_count AS delta' },
  { type: 'code', text: 'FROM   qa.reconciliation_summary' },
  { type: 'code', text: 'WHERE  run_date = CURRENT_DATE' },
  { type: 'code', text: '  AND  ABS(source_count - warehouse_count) > 0;' },
  { type: 'blank', text: '' },
  { type: 'comment', text: '-- 0 rows returned' },
  { type: 'ok', text: '✓ reconciliation passed' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div>
          <span className="status-tag">
            <span className="dot" aria-hidden="true"></span>
            Senior QA Analyst · AI/ML Researcher
          </span>
          <h1 className="h-display hero-name">Hi, I'm Nishant.</h1>
          <p className="lede">
            I test data pipelines for a living — the SQL reconciliation and API validation that
            catch a bad migration before it reaches a dashboard. At PGD India, that's cut our
            testing timelines by about 20%. Lately I've pointed the same scrutiny at AI systems,
            evaluating RAG pipelines with RAGAS, MRR, and nDCG through my M.Tech at BITS Pilani.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">
              <span className="prompt" aria-hidden="true">$</span> view-work
            </a>
            <a href="#contact" className="link-underline">Get in touch →</a>
          </div>
          <div className="hero-meta">
            <span>Open to opportunities</span>
            <span>M.Tech AI &amp; ML · BITS Pilani (WILP)</span>
            <span>7+ years in QA</span>
          </div>
        </div>

        <div className="terminal" aria-hidden="true">
          <div className="terminal-chrome">
            <span className="terminal-dot r"></span>
            <span className="terminal-dot y"></span>
            <span className="terminal-dot g"></span>
            <span className="terminal-title">reconciliation_check.sql</span>
          </div>
          <div className="terminal-body">
            {SQL_LINES.map((line, i) => (
              <div className={`code-line ${line.type}`} key={i}>{line.text || ' '}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
