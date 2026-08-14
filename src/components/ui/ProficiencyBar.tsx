"use client";

import { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";

interface ProficiencyBarProps {
  level: number;
  label: string;
}

/** Thin terracotta bar that grows to its level as the tile enters view. */
export function ProficiencyBar({ level, label }: ProficiencyBarProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollerRef } = useWorkspace();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      scroller: scrollerRef.current ?? undefined,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(element, {
          width: `${level}%`,
          duration: 1.1,
          ease: "power2.out",
        });
      },
    });

    return () => trigger.kill();
  }, [level, scrollerRef]);

  return (
    <div
      className="mt-4 h-1 overflow-hidden rounded-full bg-track"
      role="meter"
      aria-valuenow={level}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`${label} depth of hands-on delivery`}
    >
      <span ref={ref} className="block h-full w-0 rounded-full bg-terracotta" />
    </div>
  );
}
