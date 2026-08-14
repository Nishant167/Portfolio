"use client";

import { useMemo, useState } from "react";

import { SKILL_FILTERS, SKILL_GROUPS } from "@/lib/data/skills";
import type { Category } from "@/lib/types";
import { Chip } from "@/components/ui/Chip";
import { FilterTabs } from "@/components/ui/FilterTabs";
import { IconTile } from "@/components/ui/IconTile";
import { Panel } from "@/components/ui/Panel";
import { ProficiencyBar } from "@/components/ui/ProficiencyBar";
import { Reveal } from "@/components/ui/Reveal";
import { SkillMixDonut } from "@/components/charts/SkillMixDonut";

export function Skills() {
  const [filter, setFilter] = useState<Category | "all">("all");

  const visibleGroups = useMemo(
    () =>
      filter === "all"
        ? SKILL_GROUPS
        : SKILL_GROUPS.filter((group) => group.category === filter),
    [filter],
  );

  return (
    <Reveal
      as="section"
      id="skills"
      aria-labelledby="skills-heading"
      className="scroll-mt-4"
    >
      <div className="mb-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="label-mono text-muted">Skills</p>
          <h3
            id="skills-heading"
            className="mt-1.5 text-[26px] leading-tight font-extrabold lg:text-[28px]"
          >
            Capability stack
          </h3>
        </div>
        <FilterTabs
          options={SKILL_FILTERS}
          value={filter}
          onChange={setFilter}
          label="Filter skills"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8 xl:grid-cols-3"
          aria-live="polite"
        >
          {visibleGroups.map((group) => (
            <Panel as="article" key={group.name} className="p-5">
              <IconTile icon={group.icon} accent={group.accent} />
              <h4 className="mt-3 font-display text-[15px] font-bold">
                {group.name}
              </h4>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.technologies.map((technology) => (
                  <li key={technology}>
                    <Chip>{technology}</Chip>
                  </li>
                ))}
              </ul>
              <ProficiencyBar level={group.level} label={group.name} />
            </Panel>
          ))}
        </div>

        <Panel className="flex flex-col p-5 lg:col-span-4">
          <p className="label-mono text-muted">Skill mix</p>
          <p className="mt-1 font-display text-[15px] font-bold text-ink">
            Share of working time
          </p>

          <SkillMixDonut />

          <p className="mt-6 border-t border-hairline pt-4 text-[12px] leading-relaxed text-muted">
            Thin terracotta bars on each tile reflect depth of hands-on delivery
            across the six capability groups.
          </p>
        </Panel>
      </div>
    </Reveal>
  );
}
