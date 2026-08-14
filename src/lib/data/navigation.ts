import {
  Briefcase,
  FolderGit2,
  Layers,
  LayoutDashboard,
  Mail,
  UserRound,
} from "lucide-react";

import type { NavItem, SectionId } from "@/lib/types";

export const NAV_ITEMS: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: Briefcase, count: 5 },
  { id: "skills", label: "Skills", icon: Layers, count: 6 },
  { id: "projects", label: "Projects", icon: FolderGit2, count: 8 },
  { id: "contact", label: "Contact", icon: Mail },
];

export const SECTION_IDS: SectionId[] = NAV_ITEMS.map((item) => item.id);

export const SECTION_TITLES: Record<SectionId, string> = {
  overview: "Overview",
  about: "About",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};
