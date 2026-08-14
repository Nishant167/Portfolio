"use client";

import { useEffect, useRef } from "react";

import { gsap } from "@/lib/gsap";

/** Sweeps an SVG progress ring's stroke to a fraction of its circumference. */
export function useDrawOnMount(circumference: number, progress: number, delay = 0.4) {
  const ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap.to(element, {
        strokeDashoffset: circumference * (1 - progress),
        duration: 1.5,
        delay,
        ease: "power2.inOut",
      });
    });

    return () => context.revert();
  }, [circumference, delay, progress]);

  return ref;
}
