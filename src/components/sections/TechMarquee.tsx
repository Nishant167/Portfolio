import {
  MARQUEE_DURATION_S,
  MARQUEE_TECHNOLOGIES,
} from "@/lib/data/technologies";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";

function TechnologySet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      {...(hidden ? { "aria-hidden": "true" } : {})}
    >
      {MARQUEE_TECHNOLOGIES.map((technology) => (
        <span key={technology} className="flex items-center">
          <span className="label-mono px-6 text-body">{technology}</span>
          <span className="label-mono text-muted" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

/** Pure-CSS infinite marquee: duplicated set, masked ends, pause on hover. */
export function TechMarquee() {
  return (
    <Reveal as="section" aria-label="Technologies">
      <Panel className="marquee-viewport marquee-mask overflow-hidden py-5">
        <div
          className="marquee-track"
          style={
            { "--marquee-duration": `${MARQUEE_DURATION_S}s` } as React.CSSProperties
          }
        >
          <TechnologySet />
          <TechnologySet hidden />
        </div>
      </Panel>
    </Reveal>
  );
}
