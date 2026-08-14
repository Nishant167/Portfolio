import Reveal from './Reveal.jsx';

const ROWS = [
  {
    when: 'Dec 2021 – Present',
    title: 'Senior Associate QA — L1',
    badge: { text: 'Current', variant: 'filled' },
    org: 'PGD India',
    desc: 'Managing end-to-end QA activities including test case design and execution across multiple data sources. Performing data validation and analysis to ensure accuracy, completeness, and consistency — working extensively with SQL for data extraction, comparison, and validation. Supporting migration projects, system validation, and performance testing. Improved QA processes, helping reduce testing timelines by approximately 20%.',
  },
  {
    when: 'Ongoing',
    title: 'M.Tech — Artificial Intelligence & Machine Learning',
    badge: { text: 'Ongoing', variant: 'outline' },
    org: 'BITS Pilani — Work Integrated Learning Programmes (WILP)',
    desc: 'Current modules: NLP Applications · Large Language Models & GenAI · Conversational AI · API-Driven Cloud Native Solutions.',
  },
  {
    when: 'Mar 2021 – Dec 2021',
    title: 'Quality Analyst',
    org: 'Sterco Digitex',
    desc: 'Managed QA activities for multiple web projects and ensured timely delivery. Coordinated between clients and development teams to align on requirements and issue resolution. Conducted usability testing and streamlined bug tracking, reducing defect turnaround time.',
  },
  {
    when: 'Jul 2019 – Feb 2021',
    title: 'Quality Analyst',
    org: 'Fluper Ltd',
    desc: 'Worked on web and mobile applications across multiple domains. Performed regression testing, API testing, and cross-platform compatibility testing using Postman and JMeter.',
  },
  {
    when: 'Apr 2018 – Jun 2019',
    title: 'Software Test Engineer',
    org: 'Kalaage Creations',
    desc: 'Performed functional, regression, and GUI testing on web applications. Conducted browser compatibility testing and tracked defects using JIRA.',
  },
  {
    when: '2017',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'Chandigarh Engineering College',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal as="span" className="eyebrow" style={{ display: 'inline-flex' }}>Journey</Reveal>
        <Reveal as="h2" className="h-xl">Experience &amp; education.</Reveal>

        <div className="rows">
          {ROWS.map((r) => (
            <Reveal as="div" className="row" key={r.when + r.title}>
              <div className="row-when">{r.when}</div>
              <div>
                <h3 className="h-md row-title">
                  {r.title}
                  {r.badge && (
                    <span className={`badge ${r.badge.variant === 'filled' ? 'badge-filled' : 'badge-outline'}`}>
                      {r.badge.text}
                    </span>
                  )}
                </h3>
                <div className="row-org">{r.org}</div>
                {r.desc && <p className="row-desc">{r.desc}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
