import type { LucideIcon } from "lucide-react";

/** Accent families available across cards, icon tiles and data visuals. */
export type Accent = "terracotta" | "forest" | "sand";

/** Filter buckets shared by the skills and projects tab controls. */
export type Category = "de" | "ai" | "ml" | "ops";

export type SectionId =
  | "overview"
  | "about"
  | "experience"
  | "skills"
  | "projects"
  | "contact";

export interface NavItem {
  id: SectionId;
  label: string;
  icon: LucideIcon;
  count?: number;
}

export interface FilterOption<T extends string> {
  value: T | "all";
  label: string;
}

export interface Kpi {
  label: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  note: string;
  noteAccent: Accent;
  icon: LucideIcon;
  iconAccent: Accent;
}

export interface QuickStat {
  value: string;
  label: string;
}

export interface FocusArea {
  label: string;
  icon: LucideIcon;
}

export interface Role {
  role: string;
  organisation: string;
  period: string;
  focus: string;
  highlights: string[];
  metric?: string;
}

export interface EarlierRole {
  role: string;
  organisation: string;
  period: string;
}

export interface SkillGroup {
  name: string;
  category: Exclude<Category, never>;
  technologies: string[];
  /** Depth of hands-on delivery, rendered as the thin terracotta bar. */
  level: number;
  icon: LucideIcon;
  accent: Accent;
}

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: Exclude<Category, "ops">;
  /** Which abstract CSS/SVG thumbnail band to render. */
  thumbnail: "sparkline" | "graph" | "bars" | "dual-line" | "grid" | "flow";
}

export interface SkillMixSlice {
  label: string;
  value: number;
  color: string;
}

export interface ContactLink {
  label: string;
  handle: string;
  href: string;
  icon: LucideIcon;
  accent: Accent;
  external?: boolean;
}
