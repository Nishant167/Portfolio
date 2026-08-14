"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Registered once, here, so every hook can import a ready-to-use instance. */
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };
