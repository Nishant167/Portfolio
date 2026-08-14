"use client";

import { useEffect, useRef } from "react";
import { Search } from "lucide-react";

import { SECTION_TITLES } from "@/lib/data/navigation";
import { PROFILE } from "@/lib/data/profile";
import { gsap } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";
import { ActionLink } from "@/components/ui/ActionLink";
import { Clock } from "@/components/shell/Clock";

export function WorkspaceHeader() {
  const { activeSection, scrollToSection } = useWorkspace();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap.from(".header-item", {
        opacity: 0,
        y: -14,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.15,
        ease: "power2.out",
      });
    }, element);

    return () => context.revert();
  }, []);

  return (
    <header
      ref={ref}
      className="z-30 flex shrink-0 items-center gap-5 border-b border-hairline bg-surface/85 px-5 py-4 backdrop-blur-md lg:px-8"
    >
      <div className="header-item min-w-0">
        <h2 className="text-[21px] leading-none font-extrabold lg:text-[24px]">
          {SECTION_TITLES[activeSection]}
        </h2>
        <p className="label-mono mt-2 truncate text-muted">
          {PROFILE.headerSubline}
        </p>
      </div>

      <div className="ml-auto flex items-center gap-3">
        <div
          role="search"
          aria-label="Search (display only)"
          className="header-item hidden w-[250px] items-center gap-2 rounded-full border border-hairline bg-surface-muted px-4 py-2.5 text-[13px] text-muted xl:flex"
        >
          <Search size={15} strokeWidth={1.75} aria-hidden="true" />
          {PROFILE.searchPlaceholder}
        </div>

        <span className="header-item label-mono hidden items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-2 text-body sm:inline-flex">
          <span className="size-1.5 rounded-full bg-forest-accent" />
          {PROFILE.timezone}
          <Clock />
        </span>

        <ActionLink
          href="#projects"
          className="header-item whitespace-nowrap"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("projects");
          }}
        >
          View my work
        </ActionLink>
      </div>
    </header>
  );
}
