import { TrendingUp } from "lucide-react";

import { EARLIER_ROLES, PRIMARY_ROLES } from "@/lib/data/experience";
import { Chip, NotePill } from "@/components/ui/Chip";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Reveal
      as="section"
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-4"
    >
      <SectionHeading
        id="experience-heading"
        eyebrow="Experience"
        title="Reverse-chronological record"
        meta="5 entries"
      />

      <Panel className="overflow-hidden">
        {/* Dashboard-style column header */}
        <div className="hidden grid-cols-12 gap-4 border-b border-hairline bg-surface-muted px-6 py-3 lg:grid">
          <p className="label-mono col-span-3 text-muted">Role</p>
          <p className="label-mono col-span-3 text-muted">Organisation</p>
          <p className="label-mono col-span-2 text-muted">Period</p>
          <p className="label-mono col-span-4 text-muted">Focus</p>
        </div>

        {PRIMARY_ROLES.map((role) => (
          <article
            key={`${role.role}-${role.organisation}`}
            className="border-b border-hairline p-5 lg:p-6"
          >
            <div className="grid grid-cols-1 items-start gap-3 lg:grid-cols-12 lg:gap-4">
              <h4 className="font-display text-[15px] font-bold lg:col-span-3">
                {role.role}
              </h4>
              <p className="text-[14px] text-ink lg:col-span-3">
                {role.organisation}
              </p>
              <p className="font-mono text-[12px] text-muted lg:col-span-2">
                {role.period}
              </p>
              <p className="text-[13px] lg:col-span-4">{role.focus}</p>
            </div>

            <div className="mt-4 rounded-inner border border-hairline bg-surface-muted p-4">
              <ul className="flex flex-wrap gap-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>
                    <Chip>{highlight}</Chip>
                  </li>
                ))}
              </ul>

              {role.metric ? (
                <NotePill className="mt-3 bg-forest-tint text-forest-accent">
                  <TrendingUp size={12} strokeWidth={2} aria-hidden="true" />
                  {role.metric}
                </NotePill>
              ) : null}
            </div>
          </article>
        ))}

        {/* Supporting history — visually de-emphasised */}
        <div className="p-5 lg:p-6">
          <h4 className="label-mono mb-3 font-normal text-muted">
            Earlier experience
          </h4>
          <ul className="divide-y divide-hairline">
            {EARLIER_ROLES.map((role) => (
              <li
                key={`${role.role}-${role.organisation}`}
                className="grid grid-cols-1 gap-1 py-3 text-[13px] text-muted sm:grid-cols-12 sm:gap-4"
              >
                <span className="text-body sm:col-span-4">{role.role}</span>
                <span className="sm:col-span-4">{role.organisation}</span>
                <span className="font-mono text-[12px] sm:col-span-4 sm:text-right">
                  {role.period}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </Reveal>
  );
}
