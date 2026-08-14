"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import type Lenis from "lenis";

import type { SectionId } from "@/lib/types";

interface WorkspaceContextValue {
  /** The inner scrolling column — every ScrollTrigger is scoped to it. */
  scrollerRef: RefObject<HTMLElement | null>;
  lenisRef: RefObject<Lenis | null>;
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
  scrollToSection: (id: SectionId) => void;
}

const WorkspaceContext = createContext<WorkspaceContextValue | null>(null);

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const scrollerRef = useRef<HTMLElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [activeSection, setActiveSection] = useState<SectionId>("overview");

  const scrollToSection = useCallback((id: SectionId) => {
    const target = document.getElementById(id);
    if (!target) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -16 });
    } else {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const value = useMemo<WorkspaceContextValue>(
    () => ({
      scrollerRef,
      lenisRef,
      activeSection,
      setActiveSection,
      scrollToSection,
    }),
    [activeSection, scrollToSection],
  );

  return (
    <WorkspaceContext.Provider value={value}>
      {children}
    </WorkspaceContext.Provider>
  );
}

export function useWorkspace(): WorkspaceContextValue {
  const context = useContext(WorkspaceContext);

  if (!context) {
    throw new Error("useWorkspace must be used inside a WorkspaceProvider");
  }

  return context;
}
