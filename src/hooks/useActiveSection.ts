"use client";

import { useEffect } from "react";

import { SECTION_IDS } from "@/lib/data/navigation";
import type { SectionId } from "@/lib/types";
import { useWorkspace } from "@/context/WorkspaceProvider";

/** Distance from the header below which a section counts as current. */
const ACTIVATION_OFFSET = 140;

/**
 * Highlights the sidebar pill and swaps the header title while scrolling.
 * Position-based rather than intersection-based so short trailing sections
 * (Contact) still activate once the column is scrolled to the end.
 */
export function useActiveSection() {
  const { scrollerRef, setActiveSection } = useWorkspace();

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const sections = SECTION_IDS.map((id) => ({
      id,
      element: document.getElementById(id),
    })).filter(
      (entry): entry is { id: SectionId; element: HTMLElement } =>
        entry.element !== null,
    );

    if (!sections.length) return;

    let frame = 0;

    const compute = () => {
      frame = 0;

      const reachedEnd =
        root.scrollTop + root.clientHeight >= root.scrollHeight - 24;

      if (reachedEnd) {
        setActiveSection(sections[sections.length - 1].id);
        return;
      }

      const rootTop = root.getBoundingClientRect().top;
      let current = sections[0].id;

      sections.forEach(({ id, element }) => {
        if (element.getBoundingClientRect().top - rootTop <= ACTIVATION_OFFSET) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(compute);
    };

    compute();
    root.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      root.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [scrollerRef, setActiveSection]);
}
