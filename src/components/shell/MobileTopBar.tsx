"use client";

import { NAV_ITEMS } from "@/lib/data/navigation";
import { PROFILE } from "@/lib/data/profile";
import { useWorkspace } from "@/context/WorkspaceProvider";

/** Below md the sidebar collapses into this bar plus a scrolling nav row. */
export function MobileTopBar() {
  const { activeSection, scrollToSection } = useWorkspace();

  return (
    <div className="border-b border-hairline bg-surface md:hidden">
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="grid size-9 place-items-center rounded-ctl bg-terracotta-tint font-display text-[12px] font-extrabold text-terracotta">
          {PROFILE.initials}
        </span>
        <span>
          <span className="block font-display text-[14px] leading-none font-bold text-ink">
            {PROFILE.name}
          </span>
          <span className="label-mono mt-1 block text-muted">
            {PROFILE.role}
          </span>
        </span>
      </div>

      <nav
        aria-label="Portfolio sections"
        className="scrollbar-slim flex gap-2 overflow-x-auto px-4 pb-3"
      >
        {NAV_ITEMS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeSection === id ? "true" : undefined}
            onClick={(event) => {
              event.preventDefault();
              scrollToSection(id);
            }}
            className={
              activeSection === id
                ? "chip border-ink bg-ink text-canvas"
                : "chip"
            }
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
