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
        <Reveal as="h2" className="h-xl">Data QA by day. AI evaluation on the side.</Reveal>

        <div className="grid grid-2" style={{ marginTop: 'var(--s-xxl)', alignItems: 'start' }}>
          <Reveal>
            <p className="body-copy" style={{ marginBottom: 'var(--s-md)' }}>
              Seven years in, the job still comes down to one question: is this data actually
              correct? At PGD India, I design and run test cases across multiple data sources,
              write the SQL that catches discrepancies before they become someone else's incident,
              and support migrations and performance testing end to end.
            </p>
            <p className="body-copy">
              I'm now doing an M.Tech in AI &amp; ML at BITS Pilani — coursework in NLP, LLMs and
              GenAI, conversational AI, and API-driven cloud-native systems. It's the same instinct
              as QA, aimed at newer systems: can this model actually do what it claims, and how do
              you prove it. That question is what pulled me into RAG evaluation — RAGAS, MRR,
              nDCG — instead of just building models and hoping.
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
