import { Github, Linkedin, Mail } from "lucide-react";

import type { ContactLink } from "@/lib/types";

export const PROFILE = {
  name: "Nishant Pahwa",
  initials: "NP",
  role: "Data Engineer",
  location: "Gurgaon, India",
  timezone: "IST",
  /** Rendered as three masked lines that rise into place. */
  headlineLines: [
    { text: "Data Engineer building", accent: false },
    { text: "the pipelines that power", accent: true },
    { text: "decisions", accent: false },
  ],
  subline: ["Azure Databricks", "PySpark", "Delta Lake", "Applied AI/ML"],
  headerSubline:
    "Data Engineer · 7+ yrs · Azure Databricks Lakehouse · PySpark · Delta Lake · Applied AI/ML",
  searchPlaceholder: "Search projects, skills, tools…",
  current: {
    organisation: "One of the world's biggest advertising media companies",
    unit: "(Global presence)",
    period: "Dec 2021 – Present",
  },
  availability:
    "Open to data engineering roles, Azure/Databricks work and AI/ML collaboration",
  ring: {
    value: "7+ Years",
    caption: "20+ projects delivered",
    /** Fraction of the ring stroke that is drawn. */
    progress: 0.72,
  },
  heroImage: {
    src: "https://kombai-assets.b-cdn.net/generated_assets/99f0cbbe-b450-4399-8297-ecd20475b6ff/a7557d57477349939e79019c66dc3ddb.png",
    alt: "Abstract isometric render of a layered data pipeline in terracotta and forest-green tones",
  },
  heroWidgets: {
    uptime: { value: "99.9%", label: "Pipeline uptime" },
    medallion: { label: "Medallion", value: "Bronze / Silver / Gold" },
  },
} as const;

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Email",
    handle: "nishantkpahwa@gmail.com",
    href: "mailto:nishantkpahwa@gmail.com",
    icon: Mail,
    accent: "terracotta",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/n-p-90625722a",
    href: "https://linkedin.com/in/n-p-90625722a",
    icon: Linkedin,
    accent: "forest",
    external: true,
  },
  {
    label: "GitHub",
    handle: "github.com/nishant167",
    href: "https://github.com/nishant167",
    icon: Github,
    accent: "sand",
    external: true,
  },
];

export const CONTACT_INVITATION =
  "Data engineering roles, Azure/Databricks work and AI/ML collaboration.";
