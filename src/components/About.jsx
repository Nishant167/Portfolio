import Reveal from './Reveal.jsx';

const STATS = [
  { label: 'Experience', num: '7+', sub: 'Years in software testing & data QA' },
  { label: 'Delivered', num: '20+', sub: 'Projects across enterprise domains' },
  { label: 'Research', num: '6', sub: 'AI/ML academic projects' },
];

const TAGS = [
  'Python', 'SQL', 'Data Validation', 'API Testing', 'Functional & Regression Testing',
  'Performance Testing', 'NLP', 'LLMs', 'RAG', 'Conversational AI',
  'Reinforcement Learning', 'Cloud & APIs', 'Docker / Kubernetes', 'JIRA',
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="span" className="eyebrow" style={{ display: 'inline-flex' }}>About</Reveal>
        <Reveal as="h2" className="h-xl">Bridging QA precision with applied AI.</Reveal>

        <div className="grid grid-2" style={{ marginTop: 'var(--s-xxl)', alignItems: 'start' }}>
          <Reveal>
            <p className="body-copy" style={{ marginBottom: 'var(--s-md)' }}>
              I'm <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Nishant</strong> — a QA
              professional with 7+ years of experience in software testing, specialising in data
              validation, API testing, functional and performance testing. Currently at PGD India,
              I handle end-to-end QA across complex data pipelines and cloud environments.
            </p>
            <p className="body-copy">
              I'm pursuing my M.Tech in AI &amp; ML from BITS Pilani (WILP), with hands-on coursework
              in NLP Applications, Large Language Models &amp; GenAI, Conversational AI, and API-Driven
              Cloud Native Solutions — bridging deep QA expertise with growing AI/ML skills to
              contribute to data-quality, testing, and intelligent-system workflows.
            </p>
            <div className="tags">
              {TAGS.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </Reveal>

          <div className="grid" style={{ gap: 'var(--s-md)' }}>
            {STATS.map((s) => (
              <Reveal className="card" key={s.label}>
                <span className="card-eyebrow">{s.label}</span>
                <div className="stat-num">{s.num}</div>
                <p className="stat-lbl">{s.sub}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
