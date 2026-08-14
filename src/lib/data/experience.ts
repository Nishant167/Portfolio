import type { EarlierRole, Role } from "@/lib/types";

/** Full-weight entries — the current data engineering role and the M.Tech. */
export const PRIMARY_ROLES: Role[] = [
  {
    role: "Data Engineer",
    organisation: "One of the world's biggest advertising media companies",
    period: "Dec 2021 – Present",
    focus:
      "Azure Databricks Lakehouse, PySpark ETL, Delta Lake, reconciliation tooling and cloud migration data validation.",
    highlights: [
      "Azure Databricks Lakehouse",
      "PySpark ETL",
      "Delta Lake",
      "Reconciliation tooling",
      "Azure DevOps CI/CD",
      "Cloud migration validation",
    ],
    metric: "~20% efficiency gain",
  },
  {
    role: "M.Tech, AI & Machine Learning",
    organisation: "BITS Pilani (WILP)",
    period: "Ongoing",
    focus:
      "Deep learning, reinforcement learning and LLM engineering coursework layered on the data foundation.",
    highlights: [
      "Deep Neural Networks",
      "Deep RL",
      "NLP",
      "LLMs & GenAI",
      "Vector Databases",
    ],
  },
];

/**
 * Supporting history only — deliberately de-emphasised so the
 * Data Engineer identity stays the headline.
 */
export const EARLIER_ROLES: EarlierRole[] = [
  {
    role: "Quality Analyst",
    organisation: "Web Development Company",
    period: "Jul 2019 – Feb 2021",
  },
  {
    role: "Quality Analyst",
    organisation: "App Development Company",
    period: "Mar 2021 – Dec 2021",
  },
  {
    role: "Software Test Engineer",
    organisation: "Kalaage Creations",
    period: "Apr 2018 – Jun 2019",
  },
];
