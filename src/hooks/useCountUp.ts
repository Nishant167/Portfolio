"use client";

import { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";

/** Counts a numeral up from zero the first time it scrolls into view. */
export function useCountUp(value: number, decimals = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollerRef } = useWorkspace();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const counter = { current: 0 };

    const trigger = ScrollTrigger.create({
      trigger: element,
      scroller: scrollerRef.current ?? undefined,
      start: "top 92%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          current: value,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            element.textContent = counter.current.toFixed(decimals);
          },
        });
      },
    });

    return () => trigger.kill();
  }, [decimals, scrollerRef, value]);

  return ref;
}
