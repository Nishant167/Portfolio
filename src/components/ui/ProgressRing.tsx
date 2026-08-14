"use client";

import { useDrawOnMount } from "@/hooks/useDrawOnMount";

interface ProgressRingProps {
  progress: number;
  size?: number;
  stroke?: number;
  color?: string;
  delay?: number;
  className?: string;
}

/** The kit's circular progress widget, drawn with a sweeping stroke. */
export function ProgressRing({
  progress,
  size = 44,
  stroke = 5,
  color = "var(--color-forest-accent)",
  delay = 0.5,
  className = "",
}: ProgressRingProps) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const ref = useDrawOnMount(circumference, progress, delay);

  return (
    <svg
      className={`-rotate-90 shrink-0 ${className}`}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="var(--color-track)"
        strokeWidth={stroke}
      />
      <circle
        ref={ref}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
      />
    </svg>
  );
}
