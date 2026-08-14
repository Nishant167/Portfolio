import {
  BrainCircuit,
  Cloud,
  Container,
  ScanSearch,
  ScatterChart,
  Terminal,
} from "lucide-react";

import type { Category, FilterOption, SkillGroup } from "@/lib/types";

export const SKILL_FILTERS: FilterOption<Category>[] = [
  { value: "all", label: "All" },
  { value: "de", label: "Data Engineering" },
  { value: "ai", label: "AI & LLM" },
  { value: "ml", label: "ML & Python" },
  { value: "ops", label: "DevOps & Quality" },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Data Engineering & Cloud",
    category: "de",
    technologies: ["Azure Databricks", "PySpark", "Delta Lake", "Medallion"],
    level: 95,
    icon: Cloud,
    accent: "terracotta",
  },
  {
    name: "AI & LLM Engineering",
    category: "ai",
    technologies: [
      "LangChain / RAG",
      "Agentic AI / MCP",
      "OpenAI · Llama · Claude",
      "Hugging Face",
    ],
    level: 85,
    icon: BrainCircuit,
    accent: "forest",
  },
  {
    name: "Machine Learning",
    category: "ml",
    technologies: [
      "CNN / MLP",
      "Reinforcement Learning",
      "NLP",
      "TensorFlow / PyTorch",
    ],
    level: 80,
    icon: ScatterChart,
    accent: "sand",
  },
  {
    name: "Python & Data Tools",
    category: "ml",
    technologies: [
      "Python",
      "SQL (advanced)",
      "NumPy / Pandas",
      "FAISS · Pinecone",
    ],
    level: 92,
    icon: Terminal,
    accent: "terracotta",
  },
  {
    name: "DevOps & Infra",
    category: "ops",
    technologies: [
      "Azure DevOps / GitHub",
      "Docker / AKS",
      "Terraform / Ansible",
    ],
    level: 75,
    icon: Container,
    accent: "forest",
  },
  {
    name: "Data Quality & Reconciliation",
    category: "ops",
    technologies: [
      "ETL validation",
      "Cross-source recon",
      "KPI validation",
      "Agile / JIRA",
    ],
    level: 90,
    icon: ScanSearch,
    accent: "sand",
  },
];
