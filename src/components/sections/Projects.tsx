"use client";

import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";

import {
  FEATURED_RND,
  FEATURED_WORK,
  PROJECTS,
  PROJECT_FILTERS,
} from "@/lib/data/projects";
import type { Category } from "@/lib/types";
import { useWorkspace } from "@/context/WorkspaceProvider";
import { ActionLink } from "@/components/ui/ActionLink";
import { Chip } from "@/components/ui/Chip";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectThumbnail } from "@/components/sections/ProjectThumbnail";

type ProjectCategory = Exclude<Category, "ops">;

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const { scrollToSection } = useWorkspace();

  const visibleProjects = useMemo(
    () =>
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <Reveal
      as="section"
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-4"
    >
      <SectionHeading
        id="projects-heading"
        eyebrow="Projects"
        title="Featured & selected work"
        meta="8 items"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        {/* Featured — personal R&D (light twin of the dark panel) */}
        <Panel as="article" className="flex flex-col p-6 lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="label-mono rounded-full bg-terracotta-tint px-3 py-1 text-terracotta">
              {FEATURED_RND.badge}
            </span>
            <span className="label-mono text-muted">{FEATURED_RND.kicker}</span>
          </div>

          <h4 className="mt-4 font-display text-[20px] leading-snug font-extrabold">
            {FEATURED_RND.title}
          </h4>
          <p className="mt-2 text-[13.5px] leading-relaxed">
            {FEATURED_RND.description}
          </p>

          <div className="mt-4 rounded-tile border border-hairline bg-surface-muted p-4">
            <p className="label-mono text-muted">{FEATURED_RND.note.label}</p>
            <p className="mt-1.5 text-[12.5px]">{FEATURED_RND.note.text}</p>
          </div>

          <ul className="mt-4 flex flex-wrap gap-1.5">
            {FEATURED_RND.technologies.map((technology) => (
              <li key={technology}>
                <Chip>{technology}</Chip>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              scrollToSection("contact");
            }}
            className="tile mt-5 inline-flex items-center gap-2 self-start font-display text-[13px] font-bold text-terracotta"
          >
            {FEATURED_RND.cta}
            <ArrowRight
              size={15}
              strokeWidth={2}
              className="arrow-slide"
              aria-hidden="true"
            />
          </a>
        </Panel>

        {/* Featured — the kit's dark featured-listing hero card */}
        <article className="flex flex-col rounded-panel bg-forest p-6 text-canvas lg:col-span-7 lg:p-8">
          <div className="flex items-center gap-2">
            <span className="label-mono rounded-full bg-terracotta px-3 py-1 text-white">
              {FEATURED_WORK.badge}
            </span>
            <span className="label-mono text-canvas/60">
              {FEATURED_WORK.kicker}
            </span>
          </div>

          <h4 className="mt-4 max-w-[24ch] font-display text-[24px] leading-tight font-extrabold text-canvas lg:text-[27px]">
            {FEATURED_WORK.title}
          </h4>
          <p className="mt-3 max-w-[52ch] text-[13.5px] leading-relaxed text-canvas/75">
            {FEATURED_WORK.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-5 border-t border-white/15 pt-5 sm:grid-cols-4">
            {FEATURED_WORK.stats.map((stat) => (
              <div key={stat.label}>
                <dd className="numeral text-[19px]">{stat.value}</dd>
                <dt className="label-mono mt-1 text-canvas/60">{stat.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ActionLink
              href="#contact"
              variant="onDark"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
            >
              {FEATURED_WORK.cta}
            </ActionLink>
            <span className="chip-on-dark inline-flex items-center gap-1.5">
              <Lock size={12} strokeWidth={2} aria-hidden="true" />
              {FEATURED_WORK.confidential}
            </span>
          </div>
        </article>
      </div>

      <div className="mt-7 mb-4">
        <FilterTabs
          options={PROJECT_FILTERS}
          value={filter}
          onChange={setFilter}
          label="Filter projects"
        />
      </div>

      <div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5 xl:grid-cols-3"
        aria-live="polite"
      >
        {visibleProjects.map((project) => (
          <Panel
            as="article"
            key={project.title}
            className="tile overflow-hidden"
          >
            <ProjectThumbnail kind={project.thumbnail} />

            <div className="p-5">
              <h4 className="font-display text-[15px] font-bold">
                {project.title}
              </h4>
              <p className="mt-1.5 text-[13px] leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    <Chip>{technology}</Chip>
                  </li>
                ))}
              </ul>

              <span className="mt-4 inline-flex items-center gap-2 font-display text-[12.5px] font-bold text-terracotta">
                Details
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  className="arrow-slide"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Panel>
        ))}
      </div>
    </Reveal>
  );
}
