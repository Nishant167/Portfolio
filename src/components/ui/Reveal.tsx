"use client";

import type { ReactNode } from "react";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section";
  /** Stagger matching children instead of the wrapper itself. */
  childSelector?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

/**
 * Wraps a panel or section and fades/lifts it in as the workspace scrolls.
 * Never combine Tailwind transition utilities with these children.
 */
export function Reveal({
  children,
  className = "",
  id,
  as: Tag = "div",
  childSelector,
  ...rest
}: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({ childSelector });

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLElement>}
      id={id}
      className={`${childSelector ? "" : "reveal-init"} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
