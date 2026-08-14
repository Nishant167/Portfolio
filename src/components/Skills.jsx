import Reveal from './Reveal.jsx';

const GROUPS = [
  {
    title: 'NLP, LLM & AI Systems',
    items: [
      'NLP fundamentals (NER, sentiment analysis, RAG, QA systems)',
      'LLM concepts (prompt engineering, fine-tuning, RLHF)',
      'Conversational AI (intent classification, slot filling, dialogue systems)',
      'API-driven ML pipelines',
    ],
  },
  {
    title: 'Machine Learning & AI',
    items: [
      'Neural Networks (CNN, MLP)',
      'Model Training & Evaluation',
      'SEMMA / CRISP-DM',
      'MLOps basics',
      'Reinforcement Learning (Q-learning, DQN)',
    ],
  },
  {
    title: 'Cloud & API',
    items: [
      'REST API design (OpenAPI/Swagger)',
      'Microservices concepts',
      'Docker/Kubernetes basics',
      'AWS S3',
      'Azure Blob Storage',
      'Cloud-native fundamentals',
    ],
  },
  {
    title: 'Testing & QA',
    items: [
      'API Testing',
      'Functional & Regression Testing',
      'Data Validation & Testing',
      'Performance Testing',
      'Defect Management',
    ],
  },
  {
    title: 'Programming & Tools',
    items: [
      'Python', 'SQL', 'NumPy', 'Pandas', 'Matplotlib', 'scikit-learn',
      'Keras / PyTorch (basic)', 'Postman', 'JMeter', 'JIRA',
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal as="span" className="eyebrow" style={{ display: 'inline-flex' }}>Expertise</Reveal>
        <Reveal as="h2" className="h-xl">Skills &amp; tools.</Reveal>

        <div style={{ marginTop: 'var(--s-xxl)', borderTop: '1px solid var(--rule)' }}>
          {GROUPS.map((g) => (
            <Reveal as="div" className="skill-row" key={g.title}>
              <h3 className="h-md">{g.title}</h3>
              <div className="skill-items">
                {g.items.map((it) => <span className="tag" key={it}>{it}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
