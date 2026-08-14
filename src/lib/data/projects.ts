import type { Category, FilterOption, Project, ProjectStat } from "@/lib/types";

export const PROJECT_FILTERS: FilterOption<Exclude<Category, "ops">>[] = [
  { value: "all", label: "All" },
  { value: "de", label: "Data Engineering" },
  { value: "ai", label: "AI & LLM" },
  { value: "ml", label: "ML" },
];

/** Featured light card — personal R&D. */
export const FEATURED_RND = {
  badge: "Personal R&D",
  kicker: "Agentic AI",
  title: "TKI Agent — Agentic AI System",
  description:
    "A personal R&D project exploring MCP (Model Context Protocol) for connecting LLMs to external tools and data sources.",
  note: {
    label: "Protocol",
    text: "MCP standardises how a model discovers and calls tools — so agents can reach real systems instead of guessing.",
  },
  technologies: ["MCP", "LLM tools", "Python"],
  cta: "Explore project",
} as const;

/** Featured dark panel — the analogue of the kit's featured-listing hero card. */
export const FEATURED_WORK = {
  badge: "Featured",
  kicker: "Professional work",
  title: "Azure Databricks Lakehouse & Reconciliation",
  description:
    "PySpark pipelines across a Medallion-architecture Lakehouse, plus a Python reconciliation utility running cross-source dataset validation at enterprise scale.",
  stats: [
    { value: "3", label: "Medallion layers" },
    { value: "40+", label: "PySpark pipelines" },
    { value: "Delta", label: "Lake tables" },
    { value: "Ent.", label: "Scale" },
  ] as ProjectStat[],
  cta: "View details",
  confidential: "Client-confidential",
} as const;

export const PROJECTS: Project[] = [
  {
    title: "Minimal ChatGPT Clone",
    description:
      "Conversational AI from scratch — OpenAI API + Python, streaming responses, multi-turn memory.",
    technologies: ["OpenAI API", "Python"],
    category: "ai",
    thumbnail: "sparkline",
  },
  {
    title: "RAG Pipeline for Document QA",
    description:
      "Retrieval-augmented QA built with LangChain, Hugging Face embeddings and Llama.",
    technologies: ["LangChain", "Hugging Face", "Llama"],
    category: "ai",
    thumbnail: "graph",
  },
  {
    title: "Gulf Food Delivery Platform",
    description:
      "Data pipeline validation for a food delivery app — order pipelines, payment reconciliation, delivery tracking.",
    technologies: ["ETL validation", "Reconciliation"],
    category: "de",
    thumbnail: "bars",
  },
  {
    title: "Healthcare & Digital Marketing Data Engineering",
    description:
      "Patient-data pipelines, campaign analytics, KPI dashboards and ETL across enterprise clients.",
    technologies: ["PySpark", "KPI validation"],
    category: "de",
    thumbnail: "dual-line",
  },
  {
    title: "College Web Platform",
    description:
      "Data pipeline lead and coordinator for a multi-department college website.",
    technologies: ["Coordination", "Pipelines"],
    category: "de",
    thumbnail: "grid",
  },
  {
    title: "AI/ML Research Projects",
    description:
      "CNN image classifiers, reinforcement learning (Q-learning, DQN, DDQN) and end-to-end ML pipelines from M.Tech coursework.",
    technologies: ["PyTorch", "DQN / DDQN"],
    category: "ml",
    thumbnail: "flow",
  },
];
