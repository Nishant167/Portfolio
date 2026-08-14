import { KPIS } from "@/lib/data/kpis";
import { NOTE_PILL_ACCENT } from "@/lib/accents";
import { Counter } from "@/components/ui/Counter";
import { IconTile } from "@/components/ui/IconTile";
import { NotePill } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";

/** The kit's 4-card performance shelf, in engineering terms. */
export function KpiShelf() {
  return (
    <section aria-label="Engineering performance">
      <div className="mb-4 flex items-end justify-between">
        <p className="label-mono text-muted">Engineering performance shelf</p>
        <span className="label-mono hidden text-muted sm:block">
          Updated · 2026
        </span>
      </div>

      <Reveal
        className="grid grid-cols-2 gap-4 lg:gap-5 xl:grid-cols-4"
        childSelector=".kpi-card"
      >
        {KPIS.map((kpi) => (
          <article
            key={kpi.label}
            className="kpi-card reveal-init panel p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="label-mono text-muted">{kpi.label}</p>
              <IconTile icon={kpi.icon} accent={kpi.iconAccent} />
            </div>

            <p className="numeral mt-3 text-[34px] leading-none text-ink lg:text-[38px]">
              <Counter value={kpi.value} decimals={kpi.decimals} />
              {kpi.suffix}
            </p>

            <NotePill className={`mt-3 ${NOTE_PILL_ACCENT[kpi.noteAccent]}`}>
              {kpi.note}
            </NotePill>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
