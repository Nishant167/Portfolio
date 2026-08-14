import { ArrowRight, MapPin } from "lucide-react";

import {
  CONTACT_INVITATION,
  CONTACT_LINKS,
  PROFILE,
} from "@/lib/data/profile";
import { ICON_TILE_ACCENT } from "@/lib/accents";
import { Panel } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <Reveal
      as="section"
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-4"
    >
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
        <div className="flex flex-col rounded-panel bg-forest p-6 text-canvas lg:col-span-5 lg:p-8">
          <p className="label-mono text-canvas/60">Open to</p>
          <h3
            id="contact-heading"
            className="mt-3 text-[24px] leading-tight font-extrabold text-canvas lg:text-[26px]"
          >
            {CONTACT_INVITATION}
          </h3>

          <div className="mt-auto space-y-2.5 pt-8">
            <p className="flex items-center gap-2.5 text-[13px] text-canvas/80">
              <MapPin size={15} strokeWidth={1.75} aria-hidden="true" />
              {PROFILE.location} · {PROFILE.timezone}
            </p>
            <p className="flex items-center gap-2.5 text-[13px] text-canvas/80">
              <span className="pulse-dot relative size-1.5 rounded-full bg-forest-soft text-forest-soft" />
              Available for conversations
            </p>
          </div>
        </div>

        <ul className="grid gap-4 lg:col-span-7">
          {CONTACT_LINKS.map(
            ({ label, handle, href, icon: Icon, accent, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="tile panel flex items-center gap-4 p-5"
                >
                  <span
                    className={`grid size-11 shrink-0 place-items-center rounded-tile ${ICON_TILE_ACCENT[accent]}`}
                  >
                    <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[15px] font-bold text-ink">
                      {label}
                    </span>
                    <span className="block truncate font-mono text-[12.5px] text-muted">
                      {handle}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="arrow-slide ml-auto shrink-0 text-terracotta"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ),
          )}
        </ul>
      </div>

      <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-hairline pt-5">
        <p className="label-mono text-muted">
          © 2026 {PROFILE.name} · {PROFILE.location} · {PROFILE.timezone}
        </p>
        <p className="label-mono text-muted">Data Engineer workspace</p>
      </footer>
    </Reveal>
  );
}
