import { Database } from "lucide-react";

import {
  ABOUT_HEADING,
  ABOUT_QUICK_STATS,
  CAPABILITY_GROWTH,
  FOCUS_AREAS,
} from "@/lib/data/about";
import { CapabilityGrowthChart } from "@/components/charts/CapabilityGrowthChart";
import { IconTile } from "@/components/ui/IconTile";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <Reveal
      as="section"
      id="about"
      aria-labelledby="about-heading"
      className="grid scroll-mt-4 grid-cols-1 gap-5 lg:grid-cols-12"
    >
      <Panel as="article" className="p-6 lg:col-span-8 lg:p-7">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="label-mono text-muted">About</p>
            <h3
              id="about-heading"
              className="mt-1.5 text-[26px] leading-tight font-extrabold lg:text-[28px]"
            >
              {ABOUT_HEADING}
            </h3>
          </div>
          <IconTile icon={Database} accent="terracotta" size="md" />
        </div>

        <div className="mt-5 max-w-[62ch] space-y-4 text-[14px] leading-relaxed">
          <p>
            7+ years building and validating enterprise-scale data platforms.
            Currently part of the data engineering team at{" "}
            <strong className="font-semibold text-ink">
              one of the world's biggest advertising media companies
            </strong>
            , building Azure Databricks Lakehouse architecture end-to-end:
            PySpark pipelines, Delta Lake tables and Medallion architecture data
            flows.
          </p>
          <p>
            Built a Python-based data reconciliation utility that automates
            large-scale cross-source dataset validation — turning manual
            verification into a repeatable, monitored process.
          </p>
          <p>
            Pursuing an{" "}
            <strong className="font-semibold text-ink">
              M.Tech in AI &amp; ML at BITS Pilani
            </strong>
            , layering agentic AI, RAG pipelines and LLM engineering on top of
            that data foundation.
          </p>
        </div>

        <dl className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ABOUT_QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-tile border border-hairline bg-surface-muted p-4"
            >
              <dd className="numeral text-[20px] text-ink">{stat.value}</dd>
              <dt className="label-mono mt-1 text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Panel>

      <div className="flex flex-col gap-5 lg:col-span-4">
        <Panel className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="label-mono text-muted">
                {CAPABILITY_GROWTH.title}
              </p>
              <p className="mt-1 font-display text-[15px] font-bold text-ink">
                {CAPABILITY_GROWTH.subtitle}
              </p>
            </div>
            <span className="rounded-full bg-forest-tint px-2.5 py-1 font-mono text-[11px] whitespace-nowrap text-forest-accent">
              {CAPABILITY_GROWTH.badge}
            </span>
          </div>

          <CapabilityGrowthChart />

          <ul className="mt-3 flex items-center gap-4">
            {CAPABILITY_GROWTH.series.map((series) => (
              <li
                key={series.label}
                className="label-mono flex items-center gap-2 text-body"
              >
                <span
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: series.color }}
                  aria-hidden="true"
                />
                {series.label}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-5">
          <p className="label-mono text-muted">Focus areas</p>
          <ul className="mt-3 space-y-2.5 text-[13px]">
            {FOCUS_AREAS.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon
                  size={15}
                  strokeWidth={1.75}
                  className="shrink-0 text-terracotta"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </Reveal>
  );
}
