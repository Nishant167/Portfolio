import Reveal from "@/components/Reveal";

const jobs = [
  {
    role: "Data Engineer",
    company: "Publicis Groupe (PGD India)",
    range: "Dec 2021 — Present",
    current: true,
    points: [
      "Build and validate Azure Databricks Lakehouse architecture — PySpark ETL pipelines, Delta Lake tables, and Medallion architecture data flows across ingestion, transformation, and serving layers.",
      "Built a Python-based data comparison and reconciliation utility that automates large-scale dataset validation across multiple sources, significantly cutting manual effort.",
      "Collaborate with the data engineering team on Azure DevOps CI/CD pipelines, contributing automated pipeline gates to deployment workflows.",
      "Support cloud migration projects with end-to-end data integrity validation and KPI reconciliation across environments, improving pipeline efficiency by ~20%.",
    ],
  },
  {
    role: "M.Tech — Artificial Intelligence & Machine Learning",
    company: "BITS Pilani (WILP)",
    range: "Ongoing",
    points: [
      "Advancing expertise in Deep Neural Networks, Deep Reinforcement Learning, NLP, LLMs & GenAI, Conversational AI, and Vector Databases.",
      "Applying academic research to real-world data engineering and agentic AI system design.",
    ],
  },
  {
    role: "Quality Analyst",
    company: "Fluper Ltd",
    range: "Jul 2019 — Feb 2021",
    points: [
      "Executed API, regression, and cross-platform compatibility testing on web and mobile applications across multiple domains.",
      "Used Postman for API testing and JMeter for performance and load testing.",
    ],
  },
  {
    role: "Quality Analyst",
    company: "Sterco Digitex",
    range: "Mar 2021 — Dec 2021",
    points: [
      "Managed QA activities for multiple web projects, coordinating between clients and development teams.",
      "Conducted functional, usability, and application performance testing.",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "Kalaage Creations",
    range: "Apr 2018 — Jun 2019",
    points: [
      "Performed functional, regression, and GUI testing on web applications, including browser compatibility validation.",
      "Tracked defects and managed lifecycle using JIRA — the foundation that led into data engineering.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28">
      <div className="container">
        <Reveal>
          <h2 className="font-display font-bold text-3xl md:text-4xl flex items-center mb-12">
            <span className="section-num">02.</span> Where I've Worked
          </h2>
        </Reveal>

        <div className="relative max-w-3xl">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-border hidden sm:block" />
          <div className="space-y-6">
            {jobs.map((job, i) => (
              <Reveal key={job.company + job.range} delay={i * 80} className="relative sm:pl-12">
                <span
                  className={`hidden sm:block absolute left-0 top-7 w-[9px] h-[9px] rounded-full ${
                    job.current ? "bg-primary shadow-[0_0_12px_hsl(var(--primary))]" : "bg-border"
                  }`}
                />
                <div className="glass-card p-6 md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-display font-semibold text-lg">
                      {job.role} <span className="text-primary font-normal">@ {job.company}</span>
                    </h3>
                  </div>
                  <p className="font-mono text-xs text-foreground/50 mb-4">{job.range}</p>
                  <ul className="space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm text-foreground/70 leading-relaxed">
                        <span className="text-primary shrink-0">▹</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
