"use client";

import { useEffect, useRef } from "react";
import { Send } from "lucide-react";

import { NAV_ITEMS } from "@/lib/data/navigation";
import { PROFILE } from "@/lib/data/profile";
import { gsap } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";
import { ProgressRing } from "@/components/ui/ProgressRing";

export function Sidebar() {
  const { activeSection, scrollToSection } = useWorkspace();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap.from(".sidebar-item", {
        opacity: 0,
        x: -18,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, element);

    return () => context.revert();
  }, []);

  return (
    <aside
      ref={ref}
      aria-label="Workspace navigation"
      className="hidden h-dvh shrink-0 flex-col gap-5 overflow-y-auto border-r border-hairline bg-surface p-4 md:flex md:w-rail lg:w-sidebar lg:p-5"
    >
      <div className="sidebar-item flex items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-tile bg-terracotta-tint font-display text-[15px] font-extrabold text-terracotta">
          {PROFILE.initials}
        </span>
        <span className="hidden min-w-0 lg:block">
          <span className="block font-display text-[15px] leading-tight font-bold text-ink">
            {PROFILE.name}
          </span>
          <span className="label-mono mt-1 block text-muted">
            {PROFILE.role} · Chandigarh
          </span>
        </span>
      </div>

      <div className="sidebar-item">
        <p className="label-mono mb-2 hidden px-1 text-muted lg:block">
          Workspace
        </p>
        <nav aria-label="Portfolio sections">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ id, label, icon: Icon, count }) => {
              const isActive = activeSection === id;

              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}
                    title={label}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(id);
                    }}
                    className={`flex items-center gap-3 rounded-ctl px-3 py-2.5 text-[14px] ${
                      isActive
                        ? "bg-terracotta font-display font-bold text-white"
                        : "text-body hover:bg-canvas hover:text-ink"
                    }`}
                  >
                    <Icon size={16} strokeWidth={1.75} aria-hidden="true" />
                    <span className="hidden lg:inline">{label}</span>
                    {count ? (
                      <span
                        className={`ml-auto hidden font-mono text-[11px] lg:inline ${
                          isActive ? "text-white/80" : "text-muted"
                        }`}
                      >
                        {count}
                      </span>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="sidebar-item panel flex items-center gap-3 p-4">
        <ProgressRing progress={PROFILE.ring.progress} />
        <span className="hidden lg:block">
          <span className="block font-display text-[13px] leading-tight font-bold text-ink">
            {PROFILE.ring.value}
          </span>
          <span className="mt-0.5 block text-[11px] leading-tight text-muted">
            {PROFILE.ring.caption}
          </span>
        </span>
      </div>

      <div className="sidebar-item hidden rounded-inner border border-hairline bg-surface-muted p-4 lg:block">
        <p className="label-mono text-muted">Currently</p>
        <p className="mt-1.5 font-display text-[13px] leading-snug font-bold text-ink">
          {PROFILE.current.organisation}
          <br />
          {PROFILE.current.unit}
        </p>
        <p className="mt-2 flex items-center gap-2 text-[12px]">
          <span className="pulse-dot relative size-1.5 rounded-full bg-forest-accent text-forest-accent" />
          {PROFILE.current.period}
        </p>
      </div>

      <div className="sidebar-item mt-auto rounded-panel bg-forest p-4 text-canvas lg:p-5">
        <p className="label-mono hidden text-canvas/60 lg:block">Availability</p>
        <p className="mt-2 hidden text-[13px] leading-relaxed lg:block">
          {PROFILE.availability}
        </p>
        <a
          href="#contact"
          onClick={(event) => {
            event.preventDefault();
            scrollToSection("contact");
          }}
          className="mt-4 flex items-center justify-center gap-2 rounded-ctl bg-white py-2.5 font-display text-[13px] font-bold text-forest hover:bg-terracotta-tint"
        >
          <Send size={15} strokeWidth={1.75} className="lg:hidden" />
          <span className="hidden lg:inline">Get in touch</span>
          <span className="sr-only lg:hidden">Get in touch</span>
        </a>
      </div>
    </aside>
  );
}
