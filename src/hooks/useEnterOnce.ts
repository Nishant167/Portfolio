"use client";

import { useEffect, useRef, useState } from "react";

import { ScrollTrigger } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";

/**
 * Flips to true the first time the element scrolls into the workspace column.
 * Used to mount charts only when visible so their draw animation is seen.
 */
export function useEnterOnce<T extends HTMLElement>(start = "top 90%") {
  const ref = useRef<T>(null);
  const [hasEntered, setHasEntered] = useState(false);
  const { scrollerRef } = useWorkspace();

  useEffect(() => {
    const element = ref.current;
    if (!element || hasEntered) return;

    const trigger = ScrollTrigger.create({
      trigger: element,
      scroller: scrollerRef.current ?? undefined,
      start,
      once: true,
      onEnter: () => setHasEntered(true),
    });

    return () => trigger.kill();
  }, [hasEntered, scrollerRef, start]);

  return { ref, hasEntered };
}
