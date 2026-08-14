import {
  BarChart3,
  Code2,
  Smartphone,
  Brain,
  CheckCircle,
  Zap,
  Palette,
  Briefcase,
} from "lucide-react";

import type { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    name: "Data Engineering",
    description:
      "ETL pipelines, data warehousing, and lakehouse architecture with Azure Databricks, PySpark, and Delta Lake",
    icon: BarChart3,
    accent: "terracotta",
  },
  {
    name: "Web Development",
    description:
      "Full-stack web applications with modern frameworks, responsive design, and scalable architecture",
    icon: Code2,
    accent: "forest",
  },
  {
    name: "App Development",
    description:
      "Native and cross-platform mobile applications with seamless user experience and robust backend integration",
    icon: Smartphone,
    accent: "terracotta",
  },
  {
    name: "AI Solutions",
    description:
      "LLM engineering, RAG pipelines, agentic AI systems, and machine learning model deployment",
    icon: Brain,
    accent: "terracotta",
  },
  {
    name: "QA & Testing",
    description:
      "Comprehensive testing strategies, automation frameworks, and quality assurance for enterprise systems",
    icon: CheckCircle,
    accent: "forest",
  },
  {
    name: "ETL & Data Testing",
    description:
      "Data validation, reconciliation automation, and integrity testing for large-scale datasets",
    icon: Zap,
    accent: "forest",
  },
  {
    name: "Design & UI/UX",
    description:
      "User-centric design, wireframing, prototyping, and visual design for web and mobile applications",
    icon: Palette,
    accent: "terracotta",
  },
  {
    name: "Portfolio Development",
    description:
      "Custom portfolio websites and personal branding solutions that showcase your professional work",
    icon: Briefcase,
    accent: "forest",
  },
];
