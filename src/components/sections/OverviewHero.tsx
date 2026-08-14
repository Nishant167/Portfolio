"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import { PROFILE } from "@/lib/data/profile";
import { gsap } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";
import { ActionLink } from "@/components/ui/ActionLink";
import { Chip } from "@/components/ui/Chip";
import { Panel } from "@/components/ui/Panel";
import { ProgressRing } from "@/components/ui/ProgressRing";

export function OverviewHero() {
  const { scrollerRef, scrollToSection } = useWorkspace();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const context = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-line", {
          yPercent: 110,
          duration: 0.9,
          stagger: 0.1,
          ease: "power4.out",
        })
        .from(
          ".hero-image",
          { opacity: 0, y: 26, scale: 0.97, duration: 1 },
          0.1,
        )
        .from(
          ".hero-widget",
          { opacity: 0, y: 18, duration: 0.7, stagger: 0.12 },
          0.5,
        );

      // Gentle parallax drift as the hero leaves the viewport.
      const scrollTrigger = {
        trigger: element,
        scroller: scrollerRef.current ?? undefined,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      };

      gsap.to(".hero-widget-top", { y: -26, ease: "none", scrollTrigger });
      gsap.to(".hero-widget-bottom", { y: 22, ease: "none", scrollTrigger });
    }, element);

    return () => context.revert();
  }, [scrollerRef]);

  return (
    <section ref={ref} id="overview" className="scroll-mt-4">
      <Panel className="grid grid-cols-1 items-center gap-7 p-5 lg:grid-cols-12 lg:gap-8 lg:p-6">
        <div className="lg:col-span-6">
          <p className="label-mono text-terracotta">{PROFILE.name}</p>

          <h1 className="mt-3 text-[clamp(30px,2.85vw,40px)] leading-[1.1] font-extrabold tracking-[-0.01em]">
            {PROFILE.headlineLines.map((line) => (
              <span key={line.text} className="block overflow-hidden py-px">
                <span
                  className={`hero-line block sm:whitespace-nowrap ${
                    line.accent ? "text-terracotta" : ""
                  }`}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {PROFILE.subline.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <ActionLink
              href="#projects"
              className="px-5 py-3"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("projects");
              }}
            >
              View my work
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true" />
            </ActionLink>
            <ActionLink
              href="#contact"
              variant="secondary"
              className="px-5 py-3"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
            >
              Get in touch
            </ActionLink>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          {/* External CDN asset — plain img by design, next/image is for /public */}
          <img
            src={PROFILE.heroImage.src}
            alt={PROFILE.heroImage.alt}
            decoding="async"
            loading="lazy"
            className="hero-image h-[250px] w-full rounded-panel bg-terracotta-tint object-cover lg:h-[330px]"
          />
          <span className="image-edge-fade" aria-hidden="true" />

          <Panel className="hero-widget hero-widget-bottom absolute bottom-5 left-0 flex items-center gap-3 px-4 py-3 lg:-left-5">
            <ProgressRing
              progress={0.98}
              size={40}
              stroke={4}
              color="var(--color-terracotta)"
              delay={0.8}
            />
            <span>
              <span className="numeral block text-[16px] text-ink">
                {PROFILE.heroWidgets.uptime.value}
              </span>
              <span className="label-mono mt-0.5 block text-muted">
                {PROFILE.heroWidgets.uptime.label}
              </span>
            </span>
          </Panel>

          <Panel className="hero-widget hero-widget-top absolute top-3 right-3 px-4 py-3">
            <p className="label-mono text-muted">
              {PROFILE.heroWidgets.medallion.label}
            </p>
            <p className="mt-1.5 font-display text-[13px] font-bold text-ink">
              {PROFILE.heroWidgets.medallion.value}
            </p>
            <span className="mt-2 flex gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-6 rounded-full bg-terracotta" />
              <span className="h-1.5 w-6 rounded-full bg-stone" />
              <span className="h-1.5 w-6 rounded-full bg-sand" />
            </span>
          </Panel>
        </div>
      </Panel>
    </section>
  );
}
