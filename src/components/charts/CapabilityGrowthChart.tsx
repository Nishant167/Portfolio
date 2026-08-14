"use client";

import { Line } from "react-chartjs-2";
import type { ChartOptions } from "chart.js";

import { CAPABILITY_GROWTH } from "@/lib/data/about";
import { CHART_FONT, CHART_TOOLTIP } from "@/lib/chart";
import { useEnterOnce } from "@/hooks/useEnterOnce";

const OPTIONS: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  animation: { duration: 1300, easing: "easeOutQuart" },
  interaction: { mode: "index", intersect: false },
  plugins: {
    legend: { display: false },
    tooltip: CHART_TOOLTIP,
  },
  scales: {
    x: {
      grid: { display: false },
      border: { display: false },
      ticks: { color: "#8c8175", font: CHART_FONT },
    },
    y: { display: false, beginAtZero: true, max: 100 },
  },
};

/** Dual-line area chart — the analogue of the kit's Views & Inquiries chart. */
export function CapabilityGrowthChart() {
  const { ref, hasEntered } = useEnterOnce<HTMLDivElement>();

  const data = {
    labels: [...CAPABILITY_GROWTH.labels],
    datasets: CAPABILITY_GROWTH.series.map((series) => ({
      label: series.label,
      data: [...series.data],
      borderColor: series.color,
      backgroundColor: series.fill,
      fill: true,
      tension: 0.4,
      borderWidth: 2,
      pointRadius: 0,
      pointHoverRadius: 4,
      pointHoverBackgroundColor: series.color,
    })),
  };

  return (
    <div ref={ref} className="mt-4 h-[168px]">
      {hasEntered ? (
        <Line
          data={data}
          options={OPTIONS}
          aria-label="Capability growth over time for data engineering and AI/ML"
          role="img"
        />
      ) : null}
    </div>
  );
}
