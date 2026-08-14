import Reveal from './Reveal.jsx';

const ENGAGEMENTS = [
  {
    id: '2.1 · Confidential',
    title: 'Gulf Food Delivery Platform',
    body: 'End-to-end data QA for a large-scale food delivery app serving Gulf-region clients. Validated real-time order pipelines, payment reconciliation, delivery tracking data, and user analytics.',
    tags: ['Data Testing', 'SQL', 'API Testing', 'Reconciliation'],
  },
  {
    id: '2.2 · Confidential',
    title: 'BookSphere — Social Reading App',
    body: 'QA on a social platform for book readers. Tested user graph pipelines, recommendation engine outputs, content moderation datasets, and engagement metrics.',
    tags: ['Data Testing', 'SQL', 'Recommendation QA'],
  },
  {
    id: '2.3 · Internal',
    title: 'College Web Platform',
    body: 'Project coordinator and lead QA engineer for a multi-department college website — test planning, student-data validation, CMS workflows, full release cycles.',
    tags: ['QA Testing', 'SQL', 'CMS Testing'],
  },
  {
    id: '2.4 · Confidential',
    title: 'Healthcare & Digital Marketing Data QA',
    body: 'Led end-to-end data testing across healthcare and marketing platforms — patient-data pipelines, campaign analytics, KPI dashboards, ETL processes.',
    tags: ['ETL Testing', 'KPI Validation', 'Analytics QA'],
  },
];

const ACADEMIC = [
  {
    id: '2.5 · Academic',
    title: 'RAG Pipeline & NLP Applications',
    body: 'Studied Naive, Graph, and Agentic RAG architectures. Applied RAGAS-style evaluation (context precision, faithfulness) and retrieval ranking metrics (MRR, nDCG) to QA systems.',
    tags: ['RAG', 'NLP', 'RAGAS', 'MRR / nDCG'],
    featured: true,
  },
  {
    id: '2.6 · Academic',
    title: 'Conversational AI System Design',
    body: 'Designed intent classification and slot-filling pipelines with BIO tagging. Evaluated dialogue systems using Slot Error Rate (SER) and knowledge graph integration for task-based dialogue.',
    tags: ['Intent Classification', 'Slot Filling', 'BIO Tagging'],
  },
  {
    id: '2.7 · Academic',
    title: 'Image Classification — Deep Learning',
    body: 'Built and compared CNN models with transfer learning using Python and deep learning libraries, evaluated using standard classification metrics.',
    tags: ['CNN', 'Transfer Learning', 'Python'],
  },
  {
    id: '2.8 · Academic',
    title: 'Neural Networks',
    body: 'Implemented classification models using MLP and linear models — covering preprocessing, feature scaling, and performance evaluation.',
    tags: ['MLP', 'Feature Scaling', 'Model Evaluation'],
  },
  {
    id: '2.9 · Academic',
    title: 'Reinforcement Learning',
    body: 'Implemented Multi-Armed Bandit, Q-learning, DQN, and DDQN algorithms, applied to decision optimisation problems.',
    tags: ['Q-Learning', 'DQN', 'DDQN', 'Bandits'],
  },
  {
    id: '2.10 · Academic',
    title: 'Data Pipeline for ML',
    body: 'Built an end-to-end pipeline covering data ingestion, validation, and feature engineering for machine learning workflows.',
    tags: ['Data Ingestion', 'Validation', 'Feature Engineering'],
  },
];

function ProjectCard({ p }) {
  return (
    <Reveal
      as="article"
      className={`card ${p.featured ? 'card-featured' : ''}`}
    >
      <span className="card-eyebrow">{p.id}</span>
      <h4 className="card-title">{p.title}</h4>
      <p className="card-body">{p.body}</p>
      <div className="tags">
        {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
      </div>
    </Reveal>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal as="span" className="eyebrow" style={{ display: 'inline-flex' }}>Selected Work</Reveal>
        <Reveal as="h2" className="h-xl">Things I've built, tested &amp; shipped.</Reveal>
        <Reveal as="p" className="lede" style={{ marginTop: 'var(--s-md)' }}>
          From enterprise data platforms to applied AI/ML research.
        </Reveal>

        <h3 className="small-copy" style={{ margin: 'var(--s-xxl) 0 var(--s-lg)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
          Enterprise QA Engagements
        </h3>
        <div className="grid grid-2">
          {ENGAGEMENTS.map((p) => <ProjectCard p={p} key={p.id} />)}
        </div>

        <h3 className="small-copy" style={{ margin: 'var(--s-xxl) 0 var(--s-lg)', textTransform: 'uppercase', letterSpacing: '.06em' }}>
          AI/ML Academic Projects — BITS Pilani
        </h3>
        <div className="grid grid-3">
          {ACADEMIC.map((p) => <ProjectCard p={p} key={p.id} />)}
        </div>
      </div>
    </section>
  );
}
