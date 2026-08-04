import { Suspense, lazy } from 'react';

const Scene3D = lazy(() => import('./Scene3D.jsx'));

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Senior QA Analyst · AI/ML Researcher</span>
          <h1 className="h-display hero-name">
            Hi, I'm <span className="accent-text">Nishant</span>
          </h1>
          <p className="lede">
            I bridge the gap between raw data and real decisions — validating enterprise data
            pipelines and cloud environments by day, and applying NLP, LLMs, and reinforcement
            learning through my ongoing AI/ML research.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View my work</a>
            <a href="#contact" className="btn btn-outline">Get in touch</a>
          </div>
          <div className="hero-meta">
            <span className="status-pill"><span className="status-dot" aria-hidden="true"></span>Open to opportunities</span>
            <span>M.Tech AI &amp; ML · BITS Pilani (WILP)</span>
            <span>7+ years in QA</span>
          </div>
        </div>
        <div className="hero-canvas-wrap">
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
