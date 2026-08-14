"use client";

import { Doughnut } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";

import { SKILL_MIX } from "@/lib/data/about";
import { CHART_TOOLTIP } from "@/lib/chart";
import { useEnterOnce } from "@/hooks/useEnterOnce";

const OPTIONS: ChartOptions<"doughnut"> = {
  cutout: "66%",
  responsive: true,
  maintainAspectRatio: false,
  animation: { animateRotate: true, duration: 1200 },
  plugins: {
    legend: { display: false },
    tooltip: {
      ...CHART_TOOLTIP,
      callbacks: {
        label: (context) => ` ${context.label}: ${context.parsed}%`,
      },
    },
  },
};

/** Segmented donut with a right-side legend, as in the kit's Property Type Mix. */
export function SkillMixDonut() {
  const { ref, hasEntered } = useEnterOnce<HTMLDivElement>();

  const data = {
    labels: SKILL_MIX.map((slice) => slice.label),
    datasets: [
      {
        data: SKILL_MIX.map((slice) => slice.value),
        backgroundColor: SKILL_MIX.map((slice) => slice.color),
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div className="mt-4 flex items-center gap-4">
      <div ref={ref} className="size-[132px] shrink-0">
        {hasEntered ? (
          <Doughnut
            data={data}
            options={OPTIONS}
            aria-label="Share of working time across capability groups"
            role="img"
          />
        ) : null}
      </div>

      <ul className="flex-1 space-y-2.5 text-[12px]">
        {SKILL_MIX.map((slice) => (
          <li key={slice.label} className="flex items-center gap-2">
            <span
              className="size-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: slice.color }}
              aria-hidden="true"
            />
            {slice.label}
            <span className="ml-auto font-mono text-ink">{slice.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
