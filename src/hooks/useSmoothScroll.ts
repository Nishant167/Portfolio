"use client";

import { useEffect } from "react";
import Lenis from "lenis";

import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useWorkspace } from "@/context/WorkspaceProvider";

/**
 * Drives the inner workspace column with Lenis and keeps GSAP's
 * ScrollTrigger in sync with it.
 */
export function useSmoothScroll() {
  const { scrollerRef, lenisRef } = useWorkspace();

  useEffect(() => {
    const wrapper = scrollerRef.current;
    const content = wrapper?.firstElementChild as HTMLElement | null;
    if (!wrapper || !content) return;

    const lenis = new Lenis({
      wrapper,
      content,
      duration: 1.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const update = () => ScrollTrigger.update();
    const raf = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(wrapper, {
      scrollTop(value) {
        if (typeof value === "number") {
          lenis.scrollTo(value, { immediate: true });
          return value;
        }
        return wrapper.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    const handleRefresh = () => lenis.resize();
    ScrollTrigger.addEventListener("refresh", handleRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", handleRefresh);
      gsap.ticker.remove(raf);
      lenis.off("scroll", update);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [scrollerRef, lenisRef]);
}
