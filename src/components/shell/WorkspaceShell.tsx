"use client";

import type { ReactNode } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useWorkspace } from "@/context/WorkspaceProvider";
import { MobileTopBar } from "@/components/shell/MobileTopBar";
import { Sidebar } from "@/components/shell/Sidebar";
import { WorkspaceHeader } from "@/components/shell/WorkspaceHeader";

/**
 * Dashboard chrome: a persistent sidebar and workspace header framing an
 * independently scrolling content column.
 */
export function WorkspaceShell({ children }: { children: ReactNode }) {
  const { scrollerRef } = useWorkspace();

  useSmoothScroll();
  useActiveSection();

  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <MobileTopBar />
        <WorkspaceHeader />

        <main
          ref={scrollerRef}
          className="scrollbar-slim flex-1 overflow-y-auto"
        >
          <div className="max-w-[1180px] space-y-14 px-5 py-7 lg:space-y-16 lg:px-8 lg:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
