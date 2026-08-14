"use client";

import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

/** Registered once so chart components stay lean. */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Tooltip,
);

export const CHART_FONT = {
  family: "var(--font-jetbrains-mono), monospace",
  size: 9,
};

export const CHART_TOOLTIP = {
  backgroundColor: "#221e1a",
  padding: 10,
  cornerRadius: 8,
  displayColors: true,
  bodyFont: { family: "var(--font-inter), sans-serif", size: 11 },
  titleFont: { family: "var(--font-jetbrains-mono), monospace", size: 10 },
};
