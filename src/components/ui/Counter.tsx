"use client";

import { useCountUp } from "@/hooks/useCountUp";

interface CounterProps {
  value: number;
  decimals?: number;
}

/** Tabular numeral that counts up on first scroll into view. */
export function Counter({ value, decimals = 0 }: CounterProps) {
  const ref = useCountUp(value, decimals);

  return <span ref={ref}>{(0).toFixed(decimals)}</span>;
}
