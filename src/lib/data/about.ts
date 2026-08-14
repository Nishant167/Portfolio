import { Bot, Layers3, ShieldCheck } from "lucide-react";

import type { FocusArea, QuickStat, SkillMixSlice } from "@/lib/types";

export const ABOUT_HEADING =
  "Seven years of building and validating data at enterprise scale";

export const ABOUT_QUICK_STATS: QuickStat[] = [
  { value: "7+", label: "Years in tech" },
  { value: "20+", label: "Projects delivered" },
  { value: "M.Tech", label: "In progress" },
];

export const FOCUS_AREAS: FocusArea[] = [
  { label: "Medallion architecture flows", icon: Layers3 },
  { label: "Cross-source reconciliation", icon: ShieldCheck },
  { label: "Agentic AI & RAG pipelines", icon: Bot },
];

/** Dual-line area chart — the analogue of the kit's Views & Inquiries chart. */
export const CAPABILITY_GROWTH = {
  title: "Capability growth",
  subtitle: "Data Eng. vs AI/ML",
  badge: "+18.6% YoY",
  labels: ["2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"],
  series: [
    {
      label: "Data Engineering",
      data: [18, 26, 38, 55, 68, 78, 88, 95],
      color: "#c2603c",
      fill: "rgba(194, 96, 60, 0.12)",
    },
    {
      label: "AI/ML",
      data: [4, 8, 14, 24, 38, 54, 72, 86],
      color: "#2f6b4f",
      fill: "rgba(47, 107, 79, 0.10)",
    },
  ],
} as const;

/** Donut chart with right-side legend, matching the kit's Property Type Mix. */
export const SKILL_MIX: SkillMixSlice[] = [
  { label: "Data Engineering", value: 42, color: "#c2603c" },
  { label: "AI & LLM", value: 27, color: "#1e3a2f" },
  { label: "ML & Python", value: 19, color: "#e8d9c3" },
  { label: "DevOps & QA", value: 12, color: "#b9b0a4" },
];
