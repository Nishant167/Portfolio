// Decorative Airflow-DAG-style divider: nodes connected by a line, with a
// subtle flowing dash animation (paused under prefers-reduced-motion via CSS).
export default function PipelineDivider() {
  const nodes = [40, 220, 400, 620, 840, 1040];
  return (
    <div className="pipeline-divider" aria-hidden="true">
      <svg viewBox="0 0 1180 64" preserveAspectRatio="none">
        <line x1="0" y1="32" x2="1180" y2="32" stroke="var(--rule)" strokeWidth="1" />
        <line className="flow" x1="0" y1="32" x2="1180" y2="32" stroke="var(--accent)" strokeWidth="1.5" opacity="0.55" />
        {nodes.map((x, i) => (
          <circle
            key={x}
            className="node"
            cx={x}
            cy="32"
            r="4.5"
            fill="var(--bg)"
            stroke="var(--accent)"
            strokeWidth="1.5"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
