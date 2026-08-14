# Nishant Pahwa — Data Engineer portfolio

A single-page portfolio built as a **dashboard workspace**: a persistent sidebar
and workspace header frame an independently scrolling content column. The visual
language is translated from the Nestio property-listing dashboard UI kit — warm
cream canvas, terracotta accent, forest-green contrast panels, 20px radii and
soft diffused shadows — with real-estate semantics replaced by data-engineering
ones (property cards → project/pipeline cards, price/beds/sqft → pipelines
built, data volume, years of experience, uptime).

## Stack

| Concern         | Choice                                  |
| --------------- | --------------------------------------- |
| Framework       | Next.js 16 (App Router) + TypeScript    |
| Styling         | Tailwind CSS v4 (tokens in `globals.css`) |
| Icons           | `lucide-react` (pinned `^0.577` to keep brand icons) |
| Animation       | GSAP + ScrollTrigger                    |
| Smooth scroll   | Lenis (scoped to the inner column)      |
| Charts          | Chart.js via `react-chartjs-2`          |

## Requirements

**Node.js >= 20.9** (Next.js 16 requirement). If the machine still has Node 18,
`npm run dev` will refuse to start.

A portable Node 22 runtime was placed at `../.kombai/tmp/node22` during setup;
you can run the dev server with it directly:

```bash
"../.kombai/tmp/node22/node.exe" node_modules/next/dist/bin/next dev
```

Once Node 20+ is installed system-wide, use the normal scripts and delete that
folder.

## Scripts

```bash
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Structure

```
src/
  app/
    globals.css        design tokens (@theme), base layer, component classes
    layout.tsx         fonts + metadata
    page.tsx           composes the shell and all sections
  components/
    shell/             Sidebar, WorkspaceHeader, MobileTopBar, WorkspaceShell, Clock
    sections/          OverviewHero, KpiShelf, About, Experience, Skills,
                       Projects, ProjectThumbnail, TechMarquee, Contact
    charts/            CapabilityGrowthChart, SkillMixDonut
    ui/                Panel, Chip, IconTile, ActionLink, Counter, FilterTabs,
                       ProficiencyBar, ProgressRing, Reveal, SectionHeading
  context/
    WorkspaceProvider  scroller ref, Lenis instance, active section, scrollTo
  hooks/               useSmoothScroll, useActiveSection, useScrollReveal,
                       useCountUp, useEnterOnce, useDrawOnMount
  lib/
    data/              all copy and content (single source of truth)
    accents.ts         accent → class maps
    chart.ts           Chart.js registration + shared chart styling
    gsap.ts            GSAP plugin registration
    types.ts           shared types
```

### Notes

- All page copy lives in `src/lib/data/*` — edit content there, not in components.
- Every ScrollTrigger is explicitly scoped to the scrolling column via
  `scrollerRef`, since the page scroll happens inside `<main>`, not on `window`.
- Never add Tailwind `transition-*` utilities to elements GSAP animates.
- The hero render is an external CDN asset, so it uses a plain `<img>`;
  `next/image` is reserved for files in `public/`.
- Light mode only — the reference kit ships a light theme only.
