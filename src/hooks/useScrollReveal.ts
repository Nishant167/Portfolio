"use client";

import { useEffect, useRef } from "react";

import { gsap } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";

interface RevealOptions {
  y?: number;
  /** Stagger direct children matching this selector instead of the element. */
  childSelector?: string;
  start?: string;
}

/**
 * Reveals an element (or a staggered set of its children) as it enters the
 * workspace column. Elements carry `.reveal-init` so nothing flashes first.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: RevealOptions = {},
) {
  const { y = 26, childSelector, start = "top 88%" } = options;
  const ref = useRef<T>(null);
  const { scrollerRef } = useWorkspace();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const targets = childSelector
      ? Array.from(element.querySelectorAll<HTMLElement>(childSelector))
      : [element];

    if (!targets.length) return;

    const context = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: childSelector ? 0.09 : 0,
        scrollTrigger: {
          trigger: element,
          scroller: scrollerRef.current ?? undefined,
          start,
        },
      });
    });

    gsap.set(targets, { y });

    return () => context.revert();
  }, [childSelector, scrollerRef, start, y]);

  return ref;
}
